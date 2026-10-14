# Prüfbericht · 14. Oktober 2026

## Ergebnis

Das eigenständige Portfolio ist lokal umgesetzt und geprüft. Ziel ist
**https://max-ai-proxy.github.io/** im neuen Repository
**MAX-AI-proxy/MAX-AI-proxy.github.io** auf `main`.
Die vorangestellte Nutzerkorrektur hat Vorrang vor den abweichenden Adressen
im ursprünglichen Auftrag. Das verbundene GitHub-Profil bestätigt MAX-AI-proxy.

**PDF freigegeben:** Die überarbeitete bereinigte PDF mit GitHub-Links direkt
hinter den Projekttiteln wurde am 14.10.2026 ausdrücklich zur öffentlichen
Veröffentlichung freigegeben. Ihr SHA-256 ist im Freigabemanifest hinterlegt.

## Umgesetzt

- Deutsche One-Page-Webseite mit dunkler Gestaltung und blauen Akzenten.
- Hero, zwei ausführliche Projektpräsentationen, Kenntnisstufen, Werdegang und PDF-Bereich.
- React 19, TypeScript und Vite; individuell gestaltetes CSS ohne UI-Bibliothek.
- Vite-Basispfad `/`, Favicon, Canonical URL, Open Graph, lokales Vorschaubild, Sitemap und Robots-Datei.
- Funktionierende Ankernavigation, mobiles Menü, Escape-Bedienung mit Fokusrückgabe, Fokusmarkierungen und Reduced-Motion-Unterstützung.
- Echter Screenshot des Mail-Projekts, lokal gespeichert und vergrößerbar.
- Eigene konzeptionelle Workflow-Grafik für den terminalbasierten Bewerbungsagenten.
- Offizieller GitHub-Pages-Workflow mit Qualitätsprüfungen, PDF-Freigabesperre und Zielrepository-Beschränkung für Deployments.
- Vollständige Veröffentlichungsanleitung einschließlich GitHub Desktop in der README.

## Tatsächlich ausgeführte Prüfungen

| Prüfung | Ergebnis |
| --- | --- |
| Installation mit `npm install`, danach Reproduktion mit `npm ci` | Erfolgreich |
| TypeScript mit `tsc -b` | Erfolgreich |
| ESLint | Erfolgreich |
| Release-Policy-Tests | 5 bestanden; fehlende Freigabe, falsches Ziel, fehlende/veränderte PDF werden abgelehnt |
| Datenschutzprüfung der Projektdateien | Bestanden |
| Produktions-Build | Erfolgreich; JS ca. 75,25 kB und CSS ca. 6,35 kB gzip |
| `npm audit` einschließlich Entwicklungsabhängigkeiten | Keine bekannten Schwachstellen |
| Externe Links | Alle fünf URLs antworten mit HTTP 200 |
| Browserprüfung Entwicklungsserver und Produktions-Build | Erfolgreich; keine beobachteten JavaScript- oder CSP-Fehler |
| Responsive Layout | 320, 390, 768, 1024 und 1440 px geprüft; kein horizontaler Seitenüberlauf |
| Mobile Navigation | Öffnen, Escape, Fokusrückgabe und Schließen nach Abschnittswahl geprüft |
| Anker und Bilder | Alle Anker vorhanden; Projektscreenshot geladen und mit Alternativtext versehen |
| Produktions-Sicherheitsrichtlinie | `connect-src 'none'`; keine externen Skript-, Schrift-, Stylesheet- oder Bildquellen eingebunden |
| Lokaler PDF-Endpunkt | Liefert bytegenau die bereinigte Vorschau; Hash mit geprüfter Datei verglichen |
| Veröffentlichungsprüfung | Nach ausdrücklicher Freigabe bestanden; Hash der eingebundenen PDF stimmt exakt überein |

Browserprüfungen erfolgten im verfügbaren In-App-Browser mit simulierten
Viewportgrößen. Es wurden keine separaten physischen Geräte oder sämtliche
Browservarianten getestet. Die Freigabesperre wurde vor der Freigabe auf Ablehnung und nach der Freigabe
auf Akzeptanz der unveränderten freigegebenen PDF geprüft.

## Projektlinks und bestehende Mail-Demo

Geprüfte Ziele:

- https://github.com/MAX-AI-proxy
- https://github.com/MAX-AI-proxy/AI-Job-Application-Agent
- https://github.com/MAX-AI-proxy/AI-Job-Application-Agent/blob/main/docs/demo/README.md
- https://github.com/MAX-AI-proxy/AI-Email-Assistant
- https://max-ai-proxy.github.io/AI-Email-Assistant/

Beide öffentlichen READMEs wurden gelesen und für die Projekttexte verwendet.
Das Mail-README enthält bereits die korrekte Demo-Adresse. Die Demo zeigt alle
fünf Beispielnachrichten. Alle fünf aufgezeichneten Analysen wurden geöffnet,
auch bei 390 px; in jeder Ansicht entsprach die Dokumentbreite der Viewportbreite.
Es wurden keine neuen Analysen erzeugt, keine Schlüssel verwendet und keine
Dateien, Einstellungen oder Deployments der vorhandenen Projekte geändert.
Eine Demo unter einem umbenannten Konto ist wegen der Nutzerkorrektur nicht Ziel
dieses Auftrags und wurde nicht als funktionierend behauptet.

## Lebenslauf und Datenschutz

Die öffentliche Vorschau wurde als neues PDF-Dokument erstellt; es wurden keine
privaten Inhalte lediglich verdeckt. Einseitiges DIN A4, blaue Überschriften und
tabellarische Struktur bleiben erhalten. Ausbildung, Projekte, Praktika,
Kenntnisse und Sprachen wurden aus der Vorlage übernommen.

Entfernt: Straßenanschrift, Hausnummer, Postleitzahl, Geburtsdatum, private
Telefonnummer, E-Mail-Adresse und Foto. Als Ort bleibt nur Braunschweig,
Deutschland. Keine privaten Original-Metadaten, Bilder oder Dateianhänge wurden
übernommen. Zwei PDF-Linkannotationen zeigen auf die korrekten GitHub-Projekte.
Die Seite wurde gerendert und visuell auf Überlappungen und abgeschnittenen Text geprüft.

Die Originaldatei wurde ausschließlich an ihrem ursprünglichen Ort gelesen.
Die bereinigten Vorschauen liegen außerhalb des Portfolio-Verzeichnisses.
Erst nach ausdrücklicher Freigabe wurde die geprüfte Version unverändert als
`public/lebenslauf.pdf` eingebunden. `docs/cv-review.json` enthält ihren Hash
und `approved: true`. Die private Originaldatei wurde nicht übernommen.

## Veröffentlichung

Die ausdrückliche Freigabe liegt vor und alle lokalen Prüfungen sind erfolgreich.
Das Deployment verwendet das separate Repository
**MAX-AI-proxy/MAX-AI-proxy.github.io**, den Branch `main` und offizielle Pages-Actions.
Zieladresse: **https://max-ai-proxy.github.io/**.

Die bestehenden Projekt-Repositories einschließlich ihrer Workflows und
Pages-Konfigurationen bleiben unverändert. Die öffentliche Nachkontrolle
umfasst Portfolio, PDF, Projektlinks, Desktop- und Smartphone-Ansichten sowie
die weiterhin separat ausgelieferte Mail-Demo.
