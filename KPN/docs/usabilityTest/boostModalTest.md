# Testscenario's# Usability Test Plan voor BoostModal

## Doel van de test
Het testen van de bruikbaarheid en functionaliteit van de BoostModal-component. Dit omvat:
1. Controle van de juiste werking van gebruikersinteracties, zoals het openen, sluiten en invullen van het formulier.
2. Validatie van invoervelden en foutafhandeling.
3. Indienen van een aanvraag en opslaan van gegevens.
4. Responsiviteit en toegankelijkheid van de BoostModal op verschillende apparaten en schermformaten.

## Beschrijving
De BoostModal is een pop-upvenster dat wordt geopend wanneer een gebruiker op de knop "Boost aanvragen" klikt. Het bevat een formulier waarmee de gebruiker een aanvraag kan indienen voor een financiële boost. De modal bevat velden voor het type boost, het bedrag, een bewijsbestand en een opmerking. De gebruiker kan het formulier invullen en indienen, waarna de aanvraag wordt opgeslagen en verwerkt.

## Waarom
De BoostModal is een essentieel onderdeel van de gebruikerservaring, omdat het de belangrijkste manier is waarop gebruikers een boost-aanvraag kunnen indienen. Het is belangrijk dat de modal goed werkt en er aantrekkelijk uitziet, zodat gebruikers gemakkelijk en efficiënt hun aanvraag kunnen indienen.

## Versie component
Laatste versie van BoostModal zoals gedeeld

## Testscenario's

### 1. Openen van de modal
- **Actie**: Klik op de knop "Boost aanvragen" voor het type Fysieke en mentale welzijn.
- **Verwachting**:
    - De modal verschijnt op het scherm.
    - Het veld "Type" is standaard ingesteld op "Fysieke en mentale welzijn" en het maximale bedrag is ingesteld op wat er nog beschikbaar is.

### 2. Validatie van het bedrag
- **Actie**: Test het veld "Bedrag" door:
    - Een bedrag kleiner dan 0 in te voeren.
    - Een bedrag groter dan het beschikbaar bedrag in te voeren.
    - Geen bedrag in te voeren.
- **Verwachting**:
    - Voor elk onjuist bedrag verschijnt een foutmelding die aangeeft wat er mis is.
    - Het foutbericht wordt leeggemaakt als je de input aanpast.

### 3. Validatie van bewijsbestand
- **Actie**: Test het uploaden van bestanden door:
    - Geen bestand te uploaden.
    - Een bestand te uploaden dat niet voldoet aan de vereisten (bijv. een .txt-bestand).
- **Verwachting**:
    - Bij geen bestand verschijnt een foutmelding "Bewijs is verplicht."
    - Bij een ongeldig bestandstype verschijnt een foutmelding "Ongeldig bestandstype."

### 4. Indienen van het formulier
- **Actie**: Vul alle velden correct in en klik op "Aanvragen".
- **Verwachting**:
    - Bij correcte invoer:
        - De aanvraag wordt opgeslagen in een localStorage.
        - De modal sluit en het formulier wordt gereset.
    - Bij incorrecte invoer
        - Er verschijnen foutmeldingen voor de onjuiste velden.
        - De aanvraag wordt niet opgeslagen.
        - De modal blijft open met de ingevulde gegevens.

### 5. Indienen van het formulier terwijl je al een aanvraag hebt openstaan
- **Actie**: Open de modal en vul de velden in zoals in scenario 2.
- **Verwachting**:
    - Je krijgt een alert dat je al een aanvraag hebt openstaan en krijgt een alert met de vraag of je de aanvraag wilt overschrijven.


### 6. Responsiviteit en toegankelijkheid
- **Actie**: Test de BoostModal op verschillende apparaten en schermformaten, zoals desktop, tablet en mobiel.
- **Verwachting**:
    - De modal past zich aan aan de schermgrootte en is goed leesbaar en bruikbaar op alle apparaten.
    - Alle interactie-elementen zijn toegankelijk en goed zichtbaar, ook op kleinere schermen.

