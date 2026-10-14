# Maximilian Gehrke · Portfolio

Eigenständige, statische One-Page-Webseite für **MAX-AI-proxy**.
Ziel: **https://max-ai-proxy.github.io/**. Das Repository muss
**MAX-AI-proxy/MAX-AI-proxy.github.io** heißen; Branch: **main**.

Die vorangestellte Klarstellung im Projektauftrag hat Vorrang: Es findet keine
Benutzerumbenennung statt. Die beiden bestehenden Projekt-Repositories, ihre
Anwendungslogik und ihre Deployments werden nicht verändert.

## Lokal starten

Voraussetzung: Node.js 24 und npm.

```bash
npm ci
npm run dev
```

Für die lokale Prüfung der noch nicht freigegebenen öffentlichen PDF:

```bash
PORTFOLIO_REVIEW_CV="/absoluter/pfad/zur/bereinigten-vorschau.pdf" npm run dev
```

Diese Variable wird ausschließlich vom lokalen Vite-Server ausgewertet.
Die PDF wird dadurch weder kopiert noch Teil von `dist` oder Git. Die vollständige
Originaldatei darf niemals in dieses Projekt kopiert werden.

## Technik und Aufbau

React, TypeScript, Vite und individuell gestaltetes CSS ohne UI-Bibliothek.
Systemschriftarten, keine Remote-Fonts, kein Tracking, kein Backend, keine
Datenbank, keine API-Aufrufe und keine Schlüssel. `base: '/'` ist explizit gesetzt.
Die produktive Content Security Policy blockiert Datenverbindungen.

- `src/App.tsx`: Navigation, Hero, Projektpräsentationen, Kenntnisse, Werdegang und PDF-Bereich.
- `src/content.ts`: zentrale Projekt-URLs und Kenntnisstufen.
- `src/styles.css`: Gestaltung, responsive Breakpoints und reduzierte Bewegung.
- `public/email-analysis.png`: echter, ausdrücklich freigegebener Screenshot aus dem öffentlichen Mail-Repository.
- `public/social-card.png`: lokal erstelltes Vorschaubild für geteilte Links.
- `docs/cv-review.json`: Freigabestatus und SHA-256 der geprüften PDF.
- `.github/workflows/pages.yml`: Qualitätsprüfungen und GitHub-Pages-Deployment.

Die Workflow-Grafik ist als konzeptionelle Darstellung beschriftet. Sie stellt
keine vorhandene grafische Oberfläche des Bewerbungsagenten dar. Die Mail-Demo
enthält fünf fiktive E-Mails und zuvor aufgezeichnete echte KI-Analysen.

## Prüfungen

```bash
npm run typecheck
npm run lint
npm test
npm run check:privacy
npm run check:links
npm run build
npm audit
```

`check:links` benötigt Netzwerkzugang. Die Datenschutzprüfung kontrolliert die
Textdateien; Bildinhalte und die PDF werden zusätzlich visuell und strukturell
geprüft. Sie ersetzt keine inhaltliche Prüfung neuer Dateien.

```bash
npm run check:release
```

Dieser Befehl **muss vor der ausdrücklichen PDF-Freigabe fehlschlagen**. Er wird im
Deployment-Workflow vor Build und Upload ausgeführt und verhindert die erste
Veröffentlichung ohne bestätigte, unveränderte PDF.

## Erste Veröffentlichung – erst nach PDF-Freigabe

1. Maximilian prüft die bereinigte PDF und gibt genau diese Version ausdrücklich frei.
2. Ausschließlich diese PDF wird nach `public/lebenslauf.pdf` kopiert. Ihr SHA-256 muss
   mit `docs/cv-review.json` übereinstimmen. Erst dann wird `approved` auf `true` gesetzt.
   Änderungen der PDF erfordern eine erneute Prüfung und Freigabe.
3. Sämtliche obigen Prüfungen sowie `npm run check:release` ausführen.
4. Ein neues öffentliches Repository `MAX-AI-proxy/MAX-AI-proxy.github.io` anlegen
   und ausschließlich dieses Projekt auf `main` pushen. Kein Force-Push.
5. Im **neuen Portfolio-Repository** unter **Settings → Pages → Build and deployment →
   Source** die Option **GitHub Actions** auswählen. Die Pages-Einstellungen des
   Mail-Repositories bleiben unverändert.
6. Unter **Actions → Portfolio prüfen und veröffentlichen → Run workflow → main**
   den ersten Lauf starten, falls der erste Push bereits vor der Pages-Aktivierung erfolgte.
7. Nach erfolgreichem Deployment `https://max-ai-proxy.github.io/` prüfen und die
   bestehende Mail-Demo unter `/AI-Email-Assistant/` erneut öffnen.

Der Workflow nutzt offizielle Actions: Checkout v6, Setup Node v7, Configure Pages
v5, Upload Pages Artifact v4 und Deploy Pages v4. Veröffentlicht wird ausschließlich
`dist`. Jeder erfolgreiche Push auf `main` aktualisiert danach das Portfolio.
Projekt-Pages werden weiterhin aus dem jeweiligen Projekt-Repository ausgeliefert.

Quellen: [GitHub Pages mit eigenen Workflows](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages),
[Setup Node](https://github.com/actions/setup-node).

## Veröffentlichung über GitHub Desktop

Falls kein direkter GitHub-Schreibzugriff verfügbar ist, nach der Freigabe:

1. In GitHub Desktop **File → New Repository** wählen. Name:
   `MAX-AI-proxy.github.io`. Einen neuen leeren Ordner als Speicherort verwenden.
2. Die freigegebenen Projektdateien einschließlich `.github`, `.gitignore`,
   `package-lock.json` und `public/lebenslauf.pdf` in diesen Ordner übernehmen.
   `node_modules`, `dist`, temporäre Dateien und die Original-PDF nicht kopieren.
   Keine vorhandene `.git`-Historie eines anderen Projekts übernehmen.
3. In der Dateiliste kontrollieren, dass ausschließlich Portfolio-Dateien enthalten
   sind. Branch über **Branch → Rename** bei Bedarf auf `main` setzen.
4. **Commit to main**, dann **Publish repository**. Konto: **MAX-AI-proxy**;
   **Keep this code private** deaktivieren. Repository-Name exakt prüfen.
5. Die Pages-Aktivierung und den ersten Workflow-Lauf wie oben ausführen.

## Bildquelle

`public/email-analysis.png` stammt unverändert aus
[docs/screenshots/analysis.png](https://github.com/MAX-AI-proxy/AI-Email-Assistant/blob/main/docs/screenshots/analysis.png).
Die Übernahme für dieses persönliche Portfolio wurde ausdrücklich gestattet.

## Aktueller Veröffentlichungsstatus

Die überarbeitete öffentliche PDF mit den GitHub-Links direkt hinter den
Projekttiteln wurde am 14.10.2026 ausdrücklich zur Veröffentlichung freigegeben.
`public/lebenslauf.pdf` enthält genau diese geprüfte Version; der Hash ist in
`docs/cv-review.json` hinterlegt und die Freigabe steht auf `true`.

Das Portfolio wird ausschließlich im eigenen Repository
`MAX-AI-proxy/MAX-AI-proxy.github.io` veröffentlicht. Die beiden bestehenden
Projekt-Repositories und ihre Deployment-Einstellungen werden nicht verändert.
Der Workflow prüft jeden Push auf `main` und veröffentlicht das Build über Pages.
