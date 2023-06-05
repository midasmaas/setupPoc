# setupPoc
Dit POC laat zien hoe door een stepper een JSON-file kan samenstellen. Het dient als ondersteuning van mijn afstudeerproject. In deze documentatie leg ik uit hoe het POC werkt.

## Framework en componenten library
Ik maak gebruik van versie 2 van het JavaScript-framework Vue.JS. Dit omdat ik een stepper wil gebruiken uit componenten library Vuetify 2 en deze enkel ondersteund wordt door deze versie van Vue. De documentatie van Vue 2 vind je [hier](https://v2.vuejs.org/v2/guide/installation.html) en van Vuetify 2 [hier](https://v2.vuetifyjs.com/en/getting-started/installation/). De rest van de componenten die ik gebruik, zijn hier ook uit afkomstig. Dit geldt ook veel van de gebruikte CSS-classes.

## Hoe het werkt
Het component **v-stepper** is de stepper. Dit heeft een v-model waar de data aan wordt doorgegeven die aan iedere stap gekoppeld is. V-model is een functie van Vue die voor [two way binding](https://vuejs.org/guide/components/v-model.html) zorgt, dus oftewel: als de waarde in de HTML wordt aangepast, geeft dat een waarde terug in de HTML. Dit is gekoppeld door de waarde 'e1', dus als deze wordt aangepast, bepaald dat welke stap wordt weergegeven. De HTML per stap tref je in het **v-stepper-content** component. In iedere stap geef ik de data door die de gebruiker invoert, door de functie achter de continue-button. Per stap vangt een functie data af en plaats deze in het dataForJSon-object. In de laatste stap geef ik de data weer door de JavaScript functies 'map', die de array tot losse woorden maakt en de 'join'-functie die deze weer samenvoegt, onderbroken door komma's. Een klik op 'launch environment' roept een functie aan die het dataForJSon-object omzet naar een downloadbaar bestand en deze download vervolgens aanroept.

## Specifieke functies per stap
### Stap 1: client info
In **details** gebruiken de **v-textfield** componenten een v-model waar de waarde uit het object dataStep1, waarin alles komt voor deze stap. Bij de brands en departments voegt de 'add'-knop simpelweg een textfield met een lege string toe. Door deze aan te passen, komt deze in het dataStep1-object. Markets werken anders. Hier wordt een lege array toegevoegd door de 'add'-knop. De items in de dropdown komen uit een data-object. @change voert functie dataForLanguages uit, die op zijn beurt de marketp ppakt en de juiste talen uit het object dataForMarkets pakt en deze toevoegt aan de talen voor de markt in de data voor stap 1. Dat triggert vervolgens een nieuw **v-autocomplete** component, doordat deze de talen bij die markt als items heeft.

### Stap 2: preset
De data voor deze stap wordt toegevoegd door de v-model van het **radio-group** component gelijk te maken aan het object voor stap 2. Bij een click op een radio, wordt de data voor stap 2 vervangen door de data van de preset. Met een @click wordt deze data doorgegeven aan de functie chosenPreset() die gebruikt wordt in de **dialog-modal** component om informatie over de preset weer te geven.

### Stap 3: preset options
Geeft de geselecteerde preset weer door in de HTML de informatie op te halen uit het dataForJson-object. De rest is hard coded, om zoveel mogelijk te lijken op het ontwerp.

### Stap 4: user types
Deze stap werkt vergelijkbaar met stap 2, maar gebruikt checkboxes in plaats van radio-buttons.

## Stap 5: sumary
In deze stap wordt de data uit het dataForJson-object weergegeven. De 'edit'-buttons zetten de waarde e1 gelijk aan de stap, waardoor je terugnavigeert. In 'Hoe werkt het' licht ik de functie toe waarmee het JSON-bestand wordt gemaakt en gedownload.
