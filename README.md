# Little treasure

Eine kleine, für Handys gestaltete Seite: Fünf Berührungen öffnen eine Schatztruhe mit einer liebevollen Tagesbotschaft auf einer pinken Karte.

## Starten

```sh
npm install
npm run dev
```

## Prüfen und veröffentlichen

```sh
npm test
npm run build
```

Der Ordner `dist/` kann auf jedem statischen Webhosting veröffentlicht werden.

Die 60 englischen Botschaften mit ihren individuellen Anreden stehen in `src/fortunes.js`. Die Auswahl folgt dem Kalenderdatum in `Europe/Zurich` (inklusive Sommer-/Winterzeit) und beginnt am 14. November 2026 mit Spruch 1. Bis zum 12. Januar 2027 erscheinen alle 60 Sprüche in der vorgegebenen Reihenfolge. Anschließend beginnt die Reihenfolge wieder bei Spruch 1. Das Startdatum kann über `START_DATE` angepasst werden. Nach dem Öffnen bleibt die Karte sichtbar und ein Countdown läuft bis zur nächsten Schweizer Mitternacht. Die Truhe wird dann automatisch wieder freigegeben. Der Öffnungstag wird im Browser in `localStorage` gespeichert, sodass Neuladen und weitere Tabs die Sperre beibehalten. Ohne Backend gilt die Sperre nur für diesen Browser; das Löschen der Browserdaten oder Verstellen der Geräteuhr kann sie umgehen. Es werden keine persönlichen Daten gespeichert. Die Schriften werden von Google Fonts geladen; lokale Ersatzschriften sind hinterlegt.
