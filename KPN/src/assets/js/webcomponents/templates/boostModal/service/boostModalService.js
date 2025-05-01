export class BoostService {
    initializeBoostData(data, userId) {
        return {
            boostTypeId: parseInt(data.boostTypeId),
            inlay: parseInt(data.inlay),
            description: data.description,
            proof: data.proof.name,
            userId: userId,
            accepted: false,
            createdAt: new Date().toLocaleString(),
            acceptedAt: null,
            updatedAt: '',
            deletedAt: null,
        };
    }

    async saveBoostData(boostData) {
        return new Promise((resolve, reject) => {
            try {
                localStorage.setItem('boost', JSON.stringify(boostData));
                resolve(true);
            } catch (error) {
                reject('Fout bij het opslaan van boostgegevens in localStorage');
            }
        });
    }

    async getBoostData() {
        return new Promise((resolve, reject) => {
            try {
                const boostData = JSON.parse(localStorage.getItem('boost')) || [];
                resolve(Array.isArray(boostData) ? boostData : []);
            } catch (error) {
                reject('Fout bij het ophalen van boostgegevens uit localStorage');
            }
        });
    }

    async updateBoost(boostData, index, newData) {
        return new Promise((resolve, reject) => {
            try {
                boostData[index] = newData;
                this.saveBoostData(boostData);
                resolve(true);
            } catch (error) {
                reject('Fout bij het bijwerken van boostgegevens');
            }
        });
    }

    async addBoost(boostData, newData) {
        return new Promise((resolve, reject) => {
            try {
                boostData.push(newData);
                this.saveBoostData(boostData);
                resolve(true);
            } catch (error) {
                reject('Fout bij het toevoegen van boostgegevens');
            }
        });
    }
}