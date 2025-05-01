# Codeconventies

Dit document bevat de richtlijnen voor de stijl van de code en de afspraken rondom versiebeheer die gevolgd moeten worden tijdens de ontwikkeling van dit project.

## Inhoudsopgave

1. [Programmeertaal en Technologieën](#1-programmeertaal-en-technologieën)
2. [Naamgevingsconventies](#2-naamgevingsconventies)
3. [Commentaar en Documentatie](#3-commentaar-en-documentatie)
4. [Codeformattering](#4-codeformattering)
   1. [Indentation (Inspringen)](#41-indentation-inspringen)
   2. [Spaties](#42-spaties)
   3. [Lijnlengte](#43-lijnlengte)
   4. [Gebruik van puntkomma's](#44-gebruik-van-puntkommas)
   5. [Blanke regels](#45-blanke-regels)
   6. [Gebruik van aanhalingstekens](#46-gebruik-van-aanhalingstekens)
   7. [Gebruik van const en let](#47-gebruik-van-const-en-let)
   8. [Functies met één taak](#48-functies-één-taak)
   9. [HTML 5 elementen](#49-html-5-elementen)
   10. [CSS](#410-css)
   11. [CSS Flexbox](#411-css-flexbox)
5. [Bestands- en mappenstructuur](#5-bestands--en-mappenstructuur)
6. [Testen](#6-testen)
7. [Error Handling](#7-error-handling)
8. [OOP](#8-oop)
9. [Git afspraken](#9-git-afspraken)


## 1. Programmeertaal en Technologieën


De gebruikte programmeertalen en technologieën voor dit project zijn:

- **Programmeer taal (opmaaktaal):** JavaScript, HTML en CSS
- **Database:** JSON
- **Frameworks:** Lit en Vite

## 2. Naamgevingsconventies

We gebruiken de volgende naamgevingsconventies:

- **Variabelen:** `camelCase` (bijv. `userAge`, `orderCount`)
- **Functies:** `camelCase` (bijv. `getUserData()`, `updateUser()`)
- **Constanten:** `UPPER_SNAKE_CASE` (bijv. `MAX_LIMIT`, `API_KEY`)
- **Bestanden en mappen:** `camelCase` (bijv. `userProfile.js`).
- **CSS classes:** `kebab-case` (bijv. `.user-profile`, `.order-list`)

## 3. Commentaar en Documentatie

We hanteren de volgende richtlijnen voor commentaar en documentatie:

- **Code:** We gaan weinig commentaar gebruiken, aangezien we met goede benamingen al laten ziet wat te code doet. We gaan alleen commentaar gebruiken als de functienaam niet duidelijk genoeg is of als de functie heel erg lang of complex is.

- **Documentatie:** We gaan documentatie schrijven in de vorm van een README.md bestand. Hierin staat een korte uitleg over het project en hoe je het project kan draaien. Ook gaan we in de README.md bestand de gebruikte technologieën en frameworks benoemen.

## 4. Codeformattering

De volgende regels moeten worden gevolgd voor de codeformattering:

### 4.1 Indentation (Inspringen)

Gebruik **4 spaties per inspringniveau**.\
Zorg ervoor dat de code consistent is ingesprongen volgens deze richtlijn.

 **Correct:**
 ```javascript
  function voorbeeld() {
      if (true) {
          console.log("Dit is correct ingesprongen.");
      }
  }
  ```
 **Foutief:**
 ```javascript
  function voorbeeld() {
    if (true) {
      console.log("Dit is foutief ingesprongen.");
    }
  }
  ```

### 4.2 Spaties
Voeg één spatie toe rondom operatoren (bijv. =, +, -, *, ==, etc.), behalve voor de komma (,), bij de komma alleen een spatie na de komma.

 **Correct:**
 ```javascript
  let x = [1, 2, 3];
```

 **Foutief:**
 ```javascript
  let x=[1,2,3];
 ```

Zorg ervoor dat er een regelovergang (lege lijn) wordt toegevoegd na de laatste regel. Bij puntkomma ook geen spatie, en aan het einde een enter.

 **Correct:**
 ```javascript
  function voorbeeld() {
      if (true) {
          console.log("Dit is correct ingesprongen.");
      }
  }
  ```

 **Foutief:**
 ```javascript
  function voorbeeld() {if (true) {
          console.log("Dit is foutief ingesprongen.");}
  }
 ```

### 4.3 Lijnlengte
Beperk de lengte van een regel tot **maximaal 100 tekens**.\
Als een regel te lang is, splits deze dan op in meerdere regels.

 **Correct:**
 ```javascript
  const userDetails = getUserDetailsFromApi(
    apiUrl, userId, includeAddress, includeEmail
  );
 ```

 **Foutief:**
 ```javascript
  const userDetails = getUserDetailsFromApi(apiUrl, userId, includeAddress, includeEmail);
 ```

### 4.4 Gebruik van puntkomma's
Gebruik puntkomma's aan het einde van elke regel.

 **Correct:**
 ```javascript
  let x = 10;
  ```

 **Foutief:**
 ```javascript
  let x = 10
 ```

### 4.5 Blanke regels
Voeg een lege regel toe tussen logische blokken code, bijvoorbeeld tussen twee fucties of in html tussen html 5 elementen.

 **Correct:**
 ```javascript
  function functie1() {
      // Code hier
  }
  
  function functie2() {
      // Code hier
  }
 ```

 **Foutief:**
 ```javascript
  function functie1() {
  } function functie2() {
  }
  ```

### 4.6 Gebruik van aanhalingstekens
Gebruik dubbele quotes voor strings. Als je de variable in een string wilt gebruiken, gebruik dan backticks.

 **Correct:**
 ```javascript
  const name = "John";
  const message = `Hello, ${name}`;
  ```

 **Foutief:**
 ```javascript
  const name = 'John';
  const message = "Hello, " + name;
 ```

### 4.7 Gebruik van const en let
Gebruik `const` voor variabelen die niet opnieuw worden toegewezen.\
Gebruik `let` voor variabelen die opnieuw worden toegewezen.\
Gebruik geen `var`.

### 4.8 functies één taak
Een functie heeft één taak en doet die taak goed, als een functie meerdere taken heeft, dan gaan we de functie opsplitsen in meerdere functies.

### 4.9 HTML 5 elementen
We gebruik HTML 5 elementen en we houden een lege regel tussen html 5 elementen.

 **Correct:**
 ```html
  <header>
      <h1>Titel</h1>
  </header>
  
  <main>
      <p>Paragraaf</p>
  </main>
  ```
 **Foutief:**
 ```html
  <header>
      <h1>Titel</h1>
  </header>
  <div id="main">
      <div class="p">Paragraaf</div>
  </div>
 ```

### 4.10 CSS
We gebruiken CSS classes (geen id) en we houden een lege regel tussen css classes.

 **Correct:**
 ```css
  .header {
      background-color: #333;
  }
  
  .main {
      color: #333;
  }
  ```
 **Foutief:**
 ```css
  #header {
      background-color: #333;
  }
  #main {
      color: #333;
  }
  ```

### 4.11 CSS Flexbox
We gebruiken CSS Flexbox voor het positioneren van elementen.

 **Correct:**
 ```css
  .container {
      display: flex;
      justify-content: center;
      align-items: center;
  }
  ```
 **Foutief:**
 ```css
  .container {
      float: left;
      margin: 0 auto;
  }
  ```
  
## 5. Bestands- en mappenstructuur
We gaan de bestands- en mappenstructuur van het project als volgt organiseren:
  ```
  project
  ├── docs
  │   └── devGuidelines.md
  ├── src
  │   └── assets
  │       ├── css
  │       ├── js
  │       │   ├── scripts
  │       │   └── webcomponents
  │       ├── images
  │       └── json
  ├── .gitignore
  ├── index.html
  ├── package.json
  └── README.md
  ```
De bestanden en mappen moeten worden benoemd volgens de naamgevingsconventies.\
Als we teveel bestanden krijgen, gaan we de bestanden in mappen organiseren op basis van functionaliteit.

## 6. Testen
Als we genoeg tijd hebben gaan we unit tests schrijven voor de code, als dat niet zo is gaan we onze code handmatig testen door minimaal 2 personen.

## 7. Error Handling
We gaan error handling toepassen in onze code. Dit betekent dat we proberen om fouten te voorkomen en als er toch fouten optreden, dan gaan we deze fouten afvangen en een duidelijke foutmelding tonen aan de gebruiker. Dit gaan we doen door middel van try-catch blokken.

 Voorbeeld:
  ```javascript
  try {
      // Code die mogelijk een fout kan veroorzaken
  } catch (error) {
      console.error("Er is een fout opgetreden: ", error);
  }
  ```

## 8. OOP
We gaan Object Oriented Programming (OOP) toepassen in onze code. Dit betekent dat we onze code gaan structureren in objecten en klassen. We gaan proberen om zoveel mogelijk gebruik te maken van classes en objecten om de code overzichtelijk en herbruikbaar te maken.

## 9. Git afspraken
Voor elke taak die we hebben, maken we een draft aan waarin we de taak beschrijven volgens de issue template. Daarna convert je de taak naar een issue, waarna de developers de taak aan zichzelf kunnen toewijzen. Vervolgens maak je een nieuwe branch aan binnen in de taak. Zodra de taak is voltooid, commit je je wijzigingen met een duidelijke commit message in het Engels, waarin je uitlegt wat je hebt gedaan. Vervolgens maak je een pull request aan en laat je de code door minimaal twee reviewers controleren. Als er mergeconflicten zijn, lost de persoon die de code gepusht heeft deze op. Wanneer de pull request is goedgekeurd door minimaal twee personen en er geen conflicten zijn, wordt de code gemerged naar de main branch.


