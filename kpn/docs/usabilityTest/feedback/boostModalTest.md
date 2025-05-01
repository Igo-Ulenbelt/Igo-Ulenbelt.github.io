# Usability Test Uitvoering en Resultaten: BoostModal

## Testomgeving
- **Browser**: Google Chrome (Versie 112.0.0)
- **Apparaten**:
    - Laptop (1440x900 px), Beeldscherm (1920x1080 px)
    - Smartphone (375x812 px, via browser simulatie), Tablet (768x1024 px)
- **Versie component**: Laatste versie van BoostModal zoals gedeeld
- **Testdatum**: 15 januari 2025
- **Aantal testers**: 3

---

## Testscenario 1: Openen van de modal
**Actie**: Klik op de knop "Boost aanvragen".  
**Verwachting**: De modal verschijnt, het "Type"-veld is correct ingesteld, en het maximale bedrag wordt weergegeven.

### Resultaten
- Modal opent correct, en animatie werkt vloeiend.
- "Type"-veld is standaard ingesteld op "Fysiek en mentaal welzijn".
- Maximale bedrag verschijnt correct op basis van beschikbare budget.

### Verbeterpunten
- Button heeft de verkeerde text, staat aanpassen maar moet aanvragen zijn, voor de rest werkt alles zoals verwacht.

---

## Testscenario 2: Validatie van het bedrag
**Acties**:
1. Voer een bedrag kleiner dan 0 in.
2. Voer een bedrag groter dan het maximaal toegestane bedrag in.
3. Laat het bedrag leeg.

**Verwachting**: Voor elk scenario verschijnt een specifieke foutmelding.

### Resultaten
- **Negatief bedrag**: Foutmelding _"Bedrag moet tussen 0 en [maximaal bedrag] zijn"_ verschijnt correct.
- **Te hoog bedrag**: Zelfde foutmelding verschijnt correct.
- **Leeg bedrag**: Foutmelding _"Bedrag is verplicht"_ verschijnt correct.
- Bij correct bedrag worden foutmeldingen direct verwijderd.

### Verbeterpunten
- Alle validatiefouten worden correct weergegeven en gewist bij correctie.

---

## Testscenario 3: Validatie van bewijsbestand
**Acties**:
1. Geen bestand uploaden.
2. Ongeldig bestandstype uploaden (bijvoorbeeld een `.txt-bestand`).

**Verwachting**: Foutmeldingen worden weergegeven bij beide scenario's.

### Resultaten
- **Geen bestand**: Foutmelding _"Bewijs is verplicht"_ verschijnt correct.
- **Ongeldig bestandstype**: Je kan alle bestandstypen uploaden, ongeacht het type.

### Verbeterpunten
- Validatie van bestandstypen moet worden toegevoegd om alleen specifieke bestandstypen toe te staan.
- Foutmelding voor ongeldige bestandstypen moet worden toegevoegd.

---

## Testscenario 4: Indienen van het formulier
**Actie**: Vul alle velden correct in en klik op "Aanvragen".

**Verwachting**: Bij correcte invoer wordt krijg je een succesmelding en wordt de aanvraag opgeslagen. Bij incorrecte invoer verschijnen foutmeldingen.

### Resultaten
- **Correcte invoer**:
- Aanvraag wordt succesvol opgeslagen in `localStorage`.
- Modal sluit en formulier wordt gereset bij correcte invoer.
- **Incorrecte invoer**:
- Foutmeldingen verschijnen voor onjuiste velden, maar de aanvraag wordt niet opgeslagen.
- Modal blijft open met ingevulde gegevens bij incorrecte invoer.

### Verbeterpunten
- Alle functionaliteiten werken zoals verwacht, geen verbeteringen nodig.

---

## Testscenario 5: Aanvraag overschrijven
**Actie**: Vul een formulier in met een type dat al is aangevraagd en klik op "Aanvragen".  
**Verwachting**: Een waarschuwing wordt weergegeven met de optie om te overschrijven.

### Resultaten
- Waarschuwing verschijnt correct met de melding:  
  _"Je hebt al een aanvraag openstaan. Wil je deze overschrijven?"_
- Bij bevestiging wordt de bestaande aanvraag succesvol overschreven.
- Bij bevestiging wordt de bestaande aanvraag succesvol overschreven.
- Bij annuleren sluit de modal zonder actie.

### Verbeterpunten
- Een overzicht tonen van bestaande gegevens om de impact van het overschrijven te verduidelijken.

## Conclusie

De usability test voor BoostModal heeft geleid tot een aantal waardevolle inzichten en verbeterpunten. Het formulier werkt goed in de meeste gevallen, maar enkele verbeteringen kunnen de gebruikservaring aanzienlijk verbeteren, zoals:
- Validatie van bestandstypen toevoegen bij het uploaden van bewijsbestanden.
- Een overzicht tonen van bestaande gegevens bij het overschrijven van een aanvraag.

Door deze punten aan te pakken, kan de interface intuïtiever en gebruiksvriendelijker worden voor eindgebruikers.
