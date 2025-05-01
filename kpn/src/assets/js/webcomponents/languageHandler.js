class LanguageHandler {
    constructor() {
        this.language = localStorage.getItem('language') || 'nl';
        this.translations = {};
        this.subscribers = [];
    }

    async setLanguage(language) {
        this.language = language;
        localStorage.setItem('language', this.language);
        this.translations = {};
        this.notifySubscribers();
    }

    async _loadTranslations(page) {
        try {
            const baseUrl = import.meta.env.BASE_URL || '/';
            const path = `${baseUrl}assets/json/translations/${this.language}/${page}.json`;
            
            const response = await fetch(path);
            
            if (!response.ok) {
                const text = await response.text();
                console.error('Translation load error:', {
                    status: response.status,
                    statusText: response.statusText,
                    path: path,
                    responseText: text
                });
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const text = await response.text();
            
            if (!text || text.trim() === '') {
                console.error('Empty response received for:', path);
                return {};
            }
            
            try {
                return JSON.parse(text);
            } catch (parseError) {
                console.error('JSON parse error:', parseError);
                console.error('Received text:', text);
                return {};
            }
        } catch (error) {
            console.error(`Failed to load translations for ${page}:`, error);
            return {};
        }
    }

    subscribe(callback) {
        this.subscribers.push(callback);
    }

    unsubscribe(callback) {
        this.subscribers = this.subscribers.filter(sub => sub !== callback);
    }

    notifySubscribers() {
        this.subscribers.forEach(callback => callback());
    }

    createTranslationMixin() {
        return (superClass) => class extends superClass {
            static properties = {
                translations: { type: Object }
            };

            constructor() {
                super();
                this.translations = {};
                this._languageChangeBound = this._handleLanguageChange.bind(this);
                languageHandler.subscribe(this._handleLanguageChange.bind(this));
            }

            async connectedCallback() {
                if (super.connectedCallback) {
                    super.connectedCallback();
                }
                await this._loadTranslations();
            }

            disconnectedCallback() {
                if (super.disconnectedCallback) {
                    super.disconnectedCallback();
                }

                languageHandler.unsubscribe(this._languageChangeBound);
            }

            async _loadTranslations() {
                try {
                    this.translations = await languageHandler._loadTranslations(this.translationPage);
                    this.requestUpdate();
                } catch (error) {
                    console.error(`Failed to load ${this.translationPage} translations:`, error);
                    this.translations = {};
                }
            }

            async _handleLanguageChange() {
                await this._loadTranslations();
            }
        };
    }
}

export const languageHandler = new LanguageHandler();
export const TranslationMixin = languageHandler.createTranslationMixin();