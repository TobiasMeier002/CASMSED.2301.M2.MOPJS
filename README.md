# CASMSED.2301.M2.MOPJS

Dieses Projekt beinhaltet 3 Implementierungen von gleichem Skript. 
Das Skript generiert eine simple web GUI wo man Koordinaten wie z.B. Latitude = 5.5, Longitude = 6.6 als Input geben kann.
Sobald richtige Koordinaten (Latitude darf zwischen -90.0 und 90.0 sein, Longitude zwischen -180.0 und 180.0) eingegeben sind, wird das jetzige Wetter abgefragt. 
Wenn auch ein Datum eingegeben wird, wird das Wetter für das gewählte Datum angezeigt.

## Native Java Script

### Beschreibung

Die Native Javascript Seite benutzt das Publish Subscribe Pattern um die Komponenten zu aktualisieren.

### Installation

1. Change working directory to /nativeJavaScript/
2. Browse to index.html mit einem Web Browser

### Fazit

Ein einfaches Publish Subscriber Pattern lässt sich mit Javascript schnell implementieren und ermöglicht die Erstellung von unabhängigen und wiederverwendbaren Komponenten. Die Implementierung wurde analog zur Code in https://github.com/jueren/hslu-cas-msed-message-oriented-programming-javascript gemacht.
Da keine zusätzlichen Bibbliotheken oder Frameworks verwendet wurden, ist dieser Ansatz sehr performant und lässt sich ohne Abhängigkeiten zu Herstellern umsetzen.
Bei grösseren Anwendungen besteht jedoch das Risiko, dass der Code unübersichtlich und Aufwendig in der Wartung wird.

Die Implementierung von Wetter Komponenten hat Verbesserungs Potenzial da viel Code mehrfach geschrieben wurde.

## vuejs

### Beschreibung

Vue ist ein JavaScript-Framework zur Erstellung von Benutzeroberflächen. Es baut auf Standard-HTML, -CSS und -JavaScript auf und bietet ein deklaratives und komponentenbasiertes Programmiermodell, das Ihnen hilft, einfache oder komplexe Benutzeroberflächen effizient zu entwickeln.

### Installation

1. Change working directory to /vuejs/
2. Install npm modules `npm i`
2. Start Application `npm run serve`

### Fazit

VueJS ist ein Progresives JavaScript Framework (https://vuejs.org) Die Lernkurve ist relativ flach (auch wenn man wenig JavaScript kann).
.vue Files erlauben es den Code kompakter zu schreiben, da man die Methoden, Style und HTML Template direkt in ein File schreiben kann. Das macht der Code übersichtlicher und leichter zu warten als in Native JavaScript.
Mit der axios Library von VueJS kann man sehr einfach API Requests machen.

## lit

### Beschreibung

Die Lit Lösung verwendet das Mediator Pattern, die Komponente `<Weather-APP>` fungiert als Mediator und verarbeitet die Events der Eingabe Komponenten und sendet diese an die Anzeige Komponenten.

### Installation

1. Change working directory to /lit/
2. Install npm modules `npm i`
3. Start Application `npm start`

### Fazit

Lit ist eine leichtgewichtige Bibliothek für einfaches Komponenten Design. (https://lit.dev)
Lit bietet eine flache Lernkurve und ist auf Komponenten spezialisiert.
In Lit wird für die Kommunikation zwischen verschiedenen Komponenten das Mediator Pattern angewendet. 
Als Mediator fungiert eine Komponente, welche alle Elemente mit Datenkommunikation beinhaltet, definiert. Daten können in Custom Events an den Mediator gesendet werden. Der CustomEventHandler kann diese Daten in die öffentlichen Properties der Sub Komponenten schreiben. Mit dem `@query` Statement können auch mehrere Komponenten Selektier tund Adressiert werden.

Im Vergleich zu Native Script kann mit lit und TypeScript einen deklarativen und übersichtlichen Code erstellt werden. Dieser ist leichter zu warten als die native Javascript Lösung.
Allerdings ist die performance schlechter als mit native Javascript, da der TypeScript Code compiliert wird und eine externe Bibliothek verwendet wird. 

## Persönliches Fazit

### Uxia Rivero

Ich habe in diesem Projekt mit JavaScript und Vue.js gearbeitet. Native JavaScript braucht viel mehr Zeilen Code und explizites Logik als Vue.js. In dem Sinn ist Vue.js als Framework gut überlegt. Man kann so eine kleine GUI in Vue.js in weniger Stunden kodieren und lernen (auch ohne vorherige Erfahrung). Es gibt eine grosse Community mit vielen nützlichen Tutorials wie z.B. https://www.youtube.com/playlist?list=PL4cUxeGkcC9hYYGbV60Vq3IXYNfDk8At1

Ausserdem war es für mich das erste Mal, wo ich eine RestAPI benutzt habe und mich mit HTML und CSS auseinandergesetzt habe. Ich finde diese erste Erfahrung sehr wertvoll.

Bzgl. Message-Orientiertes Programmieren habe es interessant gefunden. Vor allem, dass das Programm nicht mehr ein einziges rotes Fade hat, sondern man generiert Events in einer Komponente und diese Events werden irgendwo anders konsumiert. Wann genau das passiert, weiss man nicht. Alle anderen Skripten, wo ich corher geschrieben habe, haben eine viel statischer Struktur, wo eine "main" Funktion alle anderen Funktionen sequenziell ruft.