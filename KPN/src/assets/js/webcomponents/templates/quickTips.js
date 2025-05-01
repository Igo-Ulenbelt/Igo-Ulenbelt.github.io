import { LitElement, html, css } from 'lit';
import { languageHandler } from '../languageHandler';

export class QuickTips extends LitElement {
    static properties = {
        tips: { type: Array },
        currentTip: { type: Number },
        progress: { type: Number },
    };

    constructor() {
        super();
        this.currentTip = 0;
        this.tips = [];
        this.progress = 0;
        this._handleLanguageChange = this._handleLanguageChange.bind(this);
    }

    connectedCallback() {
        super.connectedCallback();
        languageHandler.subscribe(this._handleLanguageChange);
        this._loadTips();
    }
    
    disconnectedCallback() {
        languageHandler.unsubscribe(this._handleLanguageChange);
        super.disconnectedCallback();
    }

    async _handleLanguageChange() {
        await this._loadTips();
        this.requestUpdate();
    }

    async _loadTips() {
        try {
            const translations = await languageHandler._loadTranslations('quickTips');
            
            let tipsArray = translations;
            if (translations && translations.tips) {
                tipsArray = translations.tips;
            }
    
            if (!tipsArray || !Array.isArray(tipsArray)) {
                throw new Error('Invalid tips data structure');
            }
    
            this.tips = tipsArray.flatMap(category => {
                if (!category.tips || !Array.isArray(category.tips)) {
                    console.warn('Invalid category structure:', category);
                    return [];
                }
                return category.tips.map(tip => ({
                    ...tip,
                    category: category.category
                }));
            });
    
            if (this.tips.length > 0 && !this.initialized) {
                this.shuffleTips();
                this.initialized = true;
                this.setupIntervals();
            }
        } catch (error) {
            console.error('Error loading tips:', error);
            this.tips = [{
                category: 'Default',
                text: 'Tips are currently unavailable'
            }];
            this.requestUpdate();
        }
    }

    shuffleTips() {
        for (let i = this.tips.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.tips[i], this.tips[j]] = [this.tips[j], this.tips[i]];
        }
    }

    setupIntervals() {
        if (this.tipInterval) clearInterval(this.tipInterval);
        if (this.progressInterval) clearInterval(this.progressInterval);

        const TIP_DURATION = 30000; 
        const PROGRESS_UPDATE_INTERVAL = 100; 
        const TOTAL_UPDATES = TIP_DURATION / PROGRESS_UPDATE_INTERVAL;
        const PROGRESS_INCREMENT = 100 / TOTAL_UPDATES;

        this.tipInterval = setInterval(() => {
            this.currentTip = (this.currentTip + 1) % this.tips.length;
            this.progress = 0;
            this.requestUpdate();
        }, TIP_DURATION);

        this.progressInterval = setInterval(() => {
            this.progress = Math.min(this.progress + PROGRESS_INCREMENT, 100);
            this.requestUpdate();
        }, PROGRESS_UPDATE_INTERVAL);
    }

    render() {
        if (this.tips.length === 0) {
            return html`<p>Loading tips...</p>`;
        }

        const currentTip = this.tips[this.currentTip];
        return html`
            <div class="quick-tips-container">
                <h3 class="tip-category">${currentTip.category}</h3>
                <p class="tip-text">${currentTip.text}</p>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${this.progress}%"></div>
                </div>
            </div>
        `;
    }

    updateContent() {
        const container = document.querySelector(this.containerSelector);
        if (!container) {
            console.error('Quick tips container not found');
            return;
        }
    
        if (this.tips.length > 0 && this.currentTip < this.tips.length) {
            const currentTip = this.tips[this.currentTip];
            if (currentTip) {
                const categoryHeader = container.querySelector('.tip-category');
                const tipText = container.querySelector('.tip-text');
                
                if (categoryHeader && tipText) {
                    categoryHeader.textContent = currentTip.category || '';
                    tipText.textContent = currentTip.text || '';
                }
            }
        }
    }

    updateProgress() {
        if (this.progressFill) {
            this.progressFill.style.width = `${(this.progress / 100) * 100}%`;
        }
    }

    destroy() {
        clearInterval(this.tipInterval);
        clearInterval(this.progressInterval);
        const container = document.querySelector(this.containerSelector);
        if (container) {
            container.innerHTML = '';
        }
    }

    static styles = css`
        .quick-tips-container {
        max-width: 600px;
        width: 100%;
        margin: 0 auto;
    }

    .tip-category {
        text-align: center;
        margin: 0 15px;
        color: var(--kpn-green);
        font-size: 1.2rem;
        font-weight: bold;
    }

    .tip-text {
        text-align: center;
        margin: 15px 0;
        color: var(--kpn-black);
        font-size: 1rem;
        line-height: 1.5;
    }

    .progress-bar {
        height: 4px;
        background: #e0e0e0;
        border-radius: 2px;
        margin-top: 15px;
    }

    .progress-fill {
        height: 100%;
        background: var(--kpn-green);
        width: 0;
        transition: width 0.3s ease;
        border-radius: 2px;
    }
    `
}

if (!customElements.get('quick-tips')) {
    customElements.define('quick-tips', QuickTips);
}