import { InformationService } from '../service/InformationService.js';

export class InformationController {
    constructor(type) {
        this.service = InformationService;
        this.type = type;
    }

    async loadData() {
        try {
            const response = await fetch('./src/assets/json/information.json');
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error('Error fetching data:', error);
            return [];
        }
    }

    async loadInfo() {
        const data = await this.loadData();
        const information = data.find((item) => item.id === this.type);
        if (information) {
            return {
                "title": information.title,
                "lastUpdated": information.lastUpdated,
                "items": this.service.initializeSectionData(information.items).sort((a, b) => a.position - b.position)
            }
        }
        console.warn('No data found in response:', information);
        return [];
    }
}
