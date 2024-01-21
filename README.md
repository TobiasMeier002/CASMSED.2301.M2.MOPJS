# CASMSED.2301.M2.MOPJS

## Native Java Script

### Beschreibung

Die Native Javascript Seite benutzt das Publish Subscribe Pattern um die Komponenten zu aktualisieren.

### Installation

1. Change working directory to /nativeJavaScript/
2. Start `http-server`
3. Browse to index.html

### Fazit

Ein einfaches Publish Subscriber Pattern lässt sich mit Javascript schnell implementieren und ermöglicht die Erstellung von unabhängigen und wiederverwendbaren Komponenten.
Da keine zusätzlichen Bibbliotheken oder Frameworks verwendet wurden, ist dieser Ansatz sehr performant und lässt sich ohne Abhängigkeiten zu Herstellern umsetzen.
Bei grösseren Anwendungen besteht jedoch das Risiko, dass der Code unübersichtlich und Aufwendig in der Wartung wird.

## vuejs

### Beschreibung

### Installation

1. Change working directory to /vuejs/
2. Install npm modules `npm i`
2. Start Application `npm run serve`

### Fazit

VueJS ist eine Progresive JavaScript Framework (https://vuejs.org) Die Lernkurve ist relativ flach (auch wenn man wenig JavaScript kann).
.vue Files erlauben den Code Kompakter zu schreiben da man die Methoden, Style und HTML Template direkt in einen File schreiben kann. Das macht der Code übersichtlicher und leichter zu warten als in Native JavaScript.
Mit der axios Library von VueJS kann man sehr einfach API Requests machen und mit "mitt" kann man Events zwischen Komponenten senden.

## lit

### Beschreibung

Die Lit Lösung verwendet das Mediator Pattern, die Komponente `<Weather-APP>` fungiert als Mediator und verarbeitet die Events der Eingabe Komponenten und sendet diese an die Anzeige Komponenten.

### Installation

1. Change working directory to /lit/
2. Install npm modules `npm i`
3. Start Application `npm start`

### Fazit

Lit ist eine leichtgewichtige Bibliothek für einfaches Komponenten Design. (https://lit.dev)
Lit bietet eine flache Lernkurve und ist auf Komponenten spezielisiert.
In Lit wird für die Kommunikation zwischen verschiedenen Komponenten das Mediator Pattern angewendet. 
Als Mediator fungiert eine Komponente, welche alle Elemente mit Datenkommunikation beinhaltet, definiert. Daten können in Custom Events an den Mediator gesendet werden. Der CustomEventHandler kann diese Daten in die öffentlichen Properties der Sub Komponenten schreiben. Mit dem `@query` Statement können auch mehrere Komponenten Selektier tund Adressiert werden.

Im Vergleich zu Native Script kann mit lit und TypeScript einen deklarativen und übersichtlichen Code erstellt werden. Dieser ist leichter zu warten als die native Javascript Lösung.
Allerdings ist die performance schlechter als mit native Javascript, da der TypeScript Code compiliert wird und eine externe Bibliothek verwendet wird. 