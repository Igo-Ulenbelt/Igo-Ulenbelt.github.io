export class InformationService {
    static initializeSectionData(data) {
        if (!data || !Array.isArray(data)) {
            console.warn('Invalid data provided to InformationService.');
            return [];
        }
        return data.map((item) => ({
            position: parseInt(item.position, 10) || 0,
            title: item.title || 'Geen titel',
            text: item.text || '',
            action: item.action || '',
        }));
    }
}
