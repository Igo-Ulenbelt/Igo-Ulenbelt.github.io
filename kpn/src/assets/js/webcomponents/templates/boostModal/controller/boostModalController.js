export class BoostController {
    constructor(service) {
        this.service = service;
    }

    validateFormData(formData, remainingAmount) {
        const errors = {};

        if(remainingAmount != 0) {
            if (formData.inlay <= 0 || formData.inlay > remainingAmount || isNaN(formData.inlay)) {
                errors.amount = `Bedrag moet tussen 0 en ${remainingAmount} zijn`;
            }
        } else{
            if(formData.inlay <= 0 || isNaN(formData.inlay)) {
                errors.amount = 'Bedrag moet groter dan 0 zijn';
            }
        }

        if (!formData.proof || formData.proof.name === '') {
            errors.proof = 'Bewijs is verplicht';
        }

        if(formData.proof && formData.proof.name && !formData.proof.name.match(/\.(pdf)$/)) {
            errors.proof = 'Bewijs moet een PDF bestand zijn';
        }

        if(formData.description.length > 255) {
            errors.description = 'Beschrijving mag maximaal 255 tekens bevatten';
        }

        return errors;
    }


    handleFormSubmit(view, formData, userId) {
        let errors = this.validateFormData(formData, view.remainingAmount);

        if (Object.keys(errors).length > 0) {
            view.displayErrors(errors);
            return;
        }

        view.clearAllErrors();

        let data = this.service.initializeBoostData(formData, userId);

        this.service.getBoostData().then(boostData => {
            let existingBoostIndex = this.findExistingBoost(boostData, data, userId);

            if (existingBoostIndex !== -1) {
                let confirmUpdate = confirm(
                    'Je hebt al voor deze boosttype aangevraagd en is nog niet goedgekeurd/afgekeurd. Wil je hem aanpassen?'
                );

                if (confirmUpdate) {
                    this.service.updateBoost(boostData, existingBoostIndex, data);
                    alert('Boost is aangepast');
                }
            } else {
                this.service.addBoost(boostData, data);
                alert('Boost aangevraagd');
            }

            view.resetForm();
            view.closeModal();
        }).catch(error => {
            console.error("Fout bij het ophalen van boostgegevens:", error);
        });
    }


    findExistingBoost(boostData, data, userId) {
        return boostData.findIndex(
            (item) =>
                item.boostTypeId === data.boostTypeId &&
                item.userId === userId &&
                !item.accepted &&
                item.acceptedAt === null
        );
    }
}
