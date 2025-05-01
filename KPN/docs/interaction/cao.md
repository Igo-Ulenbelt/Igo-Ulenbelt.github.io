# Interactie realiseren van de CAO-pagina

## De user story

[User story van de CAO-pagina](https://github.com/HU-SD-V2FE-studenten-2425/frontend-project-v2b_letsgo/issues/84)

## Belangrijkste functionaliteiten

- De pagina heeft een sidebar die elke pagina van de website bevat.
- De cao pagina zit in de sidebar en als je er op klikt, kom je op de cao pagina.
- Er staat een titel 'cao' bovenaan de pagina met daarnaast een datum van de laatste update.
- Er zijn verschillende kopjes met tekst en knopje er onder. Op het knopje staat 'lees meer'.
- Als je op 'lees meer' klikt, klapt de tekst uit en zie je meer informatie. Ook veranderd de tekst van 'lees meer'
  naar 'lees minder'.
- Als je op 'lees minder' klikt, klapt de tekst weer in en verandert de tekst van 'lees minder' naar 'lees meer'.
- De tekst die uitklapt, is een tekst die de medewerkers van KPN kunnen lezen.

## Technische uitwerking

### Sidebar

De sidebar die op de pagina staat wordt gebruikt in elke pagina. Dit komt door de router.
Dus er moet een component worden gemaakt voor deze hele pagina en dan moet het in de router worden gezet met een path
waar de pagina gevonden kan worden in de browser.

### Header

In de header staat de titel 'cao' en de datum van de laatste update.
Voor accessibility redenen moet de titel een h1 zijn. De datum kan gewoon een p zijn.
Deze zetten we in een div en zetten we naast elkaar door een flexbox te gebruiken.

### Secties

De secties die op de pagina staan, zijn de kopjes met tekst en een knopje er onder. De tekst is nog wel een beetje
zichtbaar als het ingeklapt is, dit zorgt ervoor dat je een beetje kan zien wat het inhoudt. Als je op het knopje klikt,
klapt de tekst uit.
Al deze secties zien er hetzelfde uit, dus we kunnen een component maken die we meerdere keren kunnen gebruiken.
Deze component kan je dan gebruiken in de pagina en dan geef je de tekst en de titel mee. Ook moet er een manier worden
gemaakt dat de individuele secties kunnen worden in- en uitgeklapt.
