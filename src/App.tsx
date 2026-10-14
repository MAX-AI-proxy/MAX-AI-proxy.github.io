import { useEffect, useRef, useState, type ReactNode } from "react";
import { links, skillGroups } from "./content";

type IconName =
  | "arrow"
  | "external"
  | "github"
  | "code"
  | "search"
  | "spark"
  | "check"
  | "document"
  | "mail"
  | "layers"
  | "download"
  | "location";
function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, ReactNode> = {
    arrow: (
      <>
        <path d="M4 12h15M13 6l6 6-6 6" />
      </>
    ),
    external: (
      <>
        <path d="M14 4h6v6M20 4l-9 9M10 4H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-5" />
      </>
    ),
    github: (
      <>
        <path
          d="M9 19c-4.3 1.3-4.3-2.2-6-2.7M15 22v-3.4c0-1 .1-1.4-.5-2 3.3-.4 6.7-1.6 6.7-7.3 0-1.6-.6-3-1.6-4 .2-.4.7-2-.2-4-1.3-.4-4.2 1.6-4.2 1.6a14 14 0 0 0-7.6 0S4.7.9 3.4 1.3c-.9 2-.4 3.6-.2 4-1 1-1.6 2.4-1.6 4 0 5.7 3.4 6.9 6.7 7.3-.6.6-.6 1.2-.6 2V22"
          transform="translate(1 0) scale(.92)"
        />
      </>
    ),
    code: (
      <>
        <path d="m8 7-5 5 5 5m8-10 5 5-5 5M14 4l-4 16" />
      </>
    ),
    search: (
      <>
        <circle cx="10.5" cy="10.5" r="6.5" />
        <path d="m16 16 5 5" />
      </>
    ),
    spark: (
      <>
        <path d="m12 3 2.3 6.7L21 12l-6.7 2.3L12 21l-2.3-6.7L3 12l6.7-2.3L12 3ZM20 2v4m-2-2h4" />
      </>
    ),
    check: (
      <>
        <path d="m5 12 4 4L19 6" />
        <path d="M20 12v7a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h8" />
      </>
    ),
    document: (
      <>
        <path d="M14 3H5v18h14V8l-5-5Zm0 0v5h5M8 12h8m-8 4h6" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="3" />
        <path d="m4 7 8 6 8-6" />
      </>
    ),
    layers: (
      <>
        <path
          d="m12 3 10 6-10 6L2 9l10-6Zm-10 11 10 6 10-6M2 18l10 6 10-6"
          transform="scale(.9)"
        />
      </>
    ),
    download: (
      <>
        <path d="M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5" />
      </>
    ),
    location: (
      <>
        <path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 0 1 14 0Z" />
        <circle cx="12" cy="10" r="2" />
      </>
    ),
  };
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.55"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

function ExternalLink({
  href,
  children,
  className = "",
  icon = "external",
}: {
  href: string;
  children: ReactNode;
  className?: string;
  icon?: IconName;
}) {
  return (
    <a
      href={href}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
      <Icon name={icon} size={17} />
      <span className="sr-only"> (öffnet in neuem Tab)</span>
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape" && open) {
        setOpen(false);
        toggle.current?.focus();
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);
  return (
    <header className="site-header">
      <div className="nav-shell wrap">
        <a
          className="brand"
          href="#start"
          aria-label="Maximilian Gehrke – Startseite"
        >
          <span className="monogram">
            mg<span>.</span>
          </span>
          <span>Maximilian Gehrke</span>
        </a>
        <button
          ref={toggle}
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="navigation"
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
        </button>
        <nav
          id="navigation"
          className={open ? "navigation is-open" : "navigation"}
          aria-label="Hauptnavigation"
        >
          <a href="#projekte" onClick={() => setOpen(false)}>
            Projekte
          </a>
          <a href="#kenntnisse" onClick={() => setOpen(false)}>
            Kenntnisse
          </a>
          <a href="#ueber-mich" onClick={() => setOpen(false)}>
            Über mich
          </a>
          <a
            href="#lebenslauf"
            className="nav-cv"
            onClick={() => setOpen(false)}
          >
            Lebenslauf
            <Icon name="arrow" size={16} />
          </a>
        </nav>
      </div>
    </header>
  );
}

function HeroVisual() {
  return (
    <div
      className="hero-visual"
      aria-label="Zwei eigene Projekte verbinden KI mit praktischen Anwendungen"
    >
      <div className="visual-grid" />
      <div className="visual-orbit orbit-one" />
      <div className="visual-orbit orbit-two" />
      <div className="build-label">
        <span className="little-cross">+</span> IDEEN IN DIE PRAXIS BRINGEN
      </div>
      <div className="logic-card">
        <div className="logic-top">
          <span className="code-symbol">
            <Icon name="code" size={22} />
          </span>
          <span>Neugier. Logik. Umsetzung.</span>
          <span className="logic-dots">···</span>
        </div>
        <div className="code-lines" aria-hidden="true">
          <div>
            <span>01</span>
            <code>
              <b>idee</b> = problem_verstehen()
            </code>
          </div>
          <div>
            <span>02</span>
            <code>
              <b>lösung</b> = mit_ki_entwickeln(idee)
            </code>
          </div>
          <div>
            <span>03</span>
            <code>
              testen(<b>lösung</b>)
            </code>
          </div>
          <div>
            <span>04</span>
            <code className="code-comment">
              # Eigene Projekte, echte Anwendungen.
            </code>
          </div>
        </div>
        <div className="logic-bottom">
          <span className="tiny-dot" /> Python & TypeScript
          <span>Eigenständig entwickelt</span>
        </div>
      </div>
      <div className="visual-connector" />
      <a href="#bewerbungsagent" className="mini-project mini-job">
        <span className="mini-icon">
          <Icon name="layers" />
        </span>
        <span>
          <small>01 / KI-AGENT</small>
          <strong>Bewerbungen vorbereiten</strong>
        </span>
        <Icon name="arrow" size={17} />
      </a>
      <a href="#email-assistant" className="mini-project mini-email">
        <span className="mini-icon">
          <Icon name="mail" />
        </span>
        <span>
          <small>02 / WEBANWENDUNG</small>
          <strong>E-Mails besser einordnen</strong>
        </span>
        <Icon name="arrow" size={17} />
      </a>
      <span className="visual-caption">
        VON DER IDEE ZUR FUNKTIONIERENDEN ANWENDUNG
      </span>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero wrap" id="start">
      <div className="hero-main">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="tiny-dot" /> WIRTSCHAFTSINGENIEURWESEN × KI
          </p>
          <h1>
            Maximilian
            <br />
            Gehrke<span className="blue-dot">.</span>
          </h1>
          <p className="hero-lead">
            Technik verstehen.
            <br />
            <span>Eigene Ideen mit KI umsetzen.</span>
          </p>
          <p className="hero-description">
            Ich studiere Wirtschaftsingenieurwesen an der TU Braunschweig und
            entwickle praktische Anwendungen mit KI. Mich begeistert, wie aus
            einer Idee eine Lösung wird, die im Alltag weiterhilft.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#projekte">
              Projekte ansehen
              <Icon name="arrow" size={18} />
            </a>
            <ExternalLink
              href={links.cv}
              className="button secondary"
              icon="document"
            >
              Lebenslauf öffnen
            </ExternalLink>
          </div>
          <ExternalLink
            href={links.github}
            className="hero-github"
            icon="github"
          >
            GitHub-Profil
          </ExternalLink>
        </div>
        <HeroVisual />
      </div>
      <div className="hero-facts">
        <div>
          <small>STUDIUM</small>
          <p>Wirtschaftsingenieurwesen · Maschinenbau</p>
        </div>
        <div>
          <small>FOKUS</small>
          <p>KI, Automatisierung & digitale Prozesse</p>
        </div>
        <div>
          <small>STANDORT</small>
          <p>
            <Icon name="location" size={15} />
            Braunschweig, Deutschland
          </p>
        </div>
      </div>
    </section>
  );
}

function SectionHeading({
  number,
  eyebrow,
  title,
  children,
}: {
  number: string;
  eyebrow: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">
          <span className="section-number">{number}</span>
          {eyebrow}
        </p>
        <h2>{title}</h2>
      </div>
      {children && <p className="section-intro">{children}</p>}
    </div>
  );
}

const workflow: { icon: IconName; title: string; detail: string }[] = [
  {
    icon: "search",
    title: "Stellen recherchieren",
    detail: "Angebote finden & einordnen",
  },
  {
    icon: "spark",
    title: "Mit KI bewerten",
    detail: "Eignung & Anforderungen prüfen",
  },
  {
    icon: "check",
    title: "Regeln anwenden",
    detail: "Präsenz, Distanz & Dubletten",
  },
  {
    icon: "document",
    title: "Bewerbung vorbereiten",
    detail: "Individueller Entwurf als PDF",
  },
];

function WorkflowVisual() {
  return (
    <figure className="workflow-visual">
      <div className="window-bar">
        <span className="window-dots">
          <i />
          <i />
          <i />
        </span>
        <span>Workflow · Python & SQLite</span>
        <Icon name="code" size={15} />
      </div>
      <div className="workflow-topline">
        <span>VOM STELLENANGEBOT ZUM ENTWURF</span>
        <span>PYTHON</span>
      </div>
      <ol className="workflow-steps">
        {workflow.map((step, index) => (
          <li key={step.title}>
            <span className="workflow-icon">
              <Icon name={step.icon} size={21} />
            </span>
            <div>
              <strong>{step.title}</strong>
              <small>{step.detail}</small>
            </div>
            <span className="step-number">0{index + 1}</span>
          </li>
        ))}
      </ol>
      <div className="workflow-storage">
        <span>
          <Icon name="layers" size={16} />
          SQLite · Bewerbungsstatus verwalten
        </span>
        <span className="human-review">
          <Icon name="check" size={13} />
          Menschliche Freigabe
        </span>
      </div>
      <figcaption>
        Konzeptionelle Darstellung des tatsächlichen Workflows
      </figcaption>
    </figure>
  );
}

function Tags({ items }: { items: string[] }) {
  return (
    <ul className="tags" aria-label="Verwendete Technologien">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function Projects() {
  return (
    <section id="projekte" className="section projects wrap">
      <SectionHeading
        number="01"
        eyebrow="AUSGEWÄHLTE PROJEKTE"
        title="Selbst gebaut. Praktisch gedacht."
      >
        Zwei eigene Anwendungen, mit denen ich KI im Alltag erprobe – von der
        ersten Idee bis zur funktionierenden Lösung.
      </SectionHeading>
      <article className="project job-project" id="bewerbungsagent">
        <div className="project-content">
          <div className="project-kicker">
            <span>01 / PROZESSAUTOMATISIERUNG</span>
            <span className="project-type">
              <Icon name="code" size={13} />
              Python-Agent
            </span>
          </div>
          <h3>
            AI Job
            <br />
            Application Agent
          </h3>
          <p className="project-description">
            Mein Bewerbungsprozess, als durchdachter Workflow: Ein Python-Agent
            recherchiert Stellen, bewertet ihre Eignung und bereitet
            individuelle Bewerbungsentwürfe vor.
          </p>
          <ul className="feature-list">
            <li>
              <Icon name="check" size={15} />
              KI-gestützte Stellensuche und Eignungsbewertung
            </li>
            <li>
              <Icon name="check" size={15} />
              Regelprüfungen inklusive Präsenzanforderungen
            </li>
            <li>
              <Icon name="check" size={15} />
              SQLite-Verwaltung und individuelle PDF-Anschreiben
            </li>
          </ul>
          <Tags
            items={[
              "Python",
              "OpenAI Agents SDK",
              "OpenAI API",
              "SQLite",
              "Git/GitHub",
            ]}
          />
          <div className="project-links">
            <ExternalLink href={links.workflow} className="button primary">
              Workflow ansehen
            </ExternalLink>
            <ExternalLink href={links.job} className="text-link" icon="github">
              GitHub
            </ExternalLink>
          </div>
          <p className="project-note">
            Die öffentliche Beispieldurchführung nutzt vorbereitete, fiktive
            KI-Eingaben und führt echte Python-Funktionen aus. Bedienung über
            das Terminal; kein automatischer Versand.
          </p>
        </div>
        <WorkflowVisual />
      </article>
      <article className="project email-project" id="email-assistant">
        <div className="project-content">
          <div className="project-kicker">
            <span>02 / KI IM ALLTAG</span>
            <span className="project-type demo-badge">
              <span className="tiny-dot" />
              Interaktive Demo
            </span>
          </div>
          <h3>
            AI Email
            <br />
            Assistant
          </h3>
          <p className="project-description">
            Zwei Postfächer, eine Oberfläche. Meine Webanwendung bündelt
            IMAP-E-Mails und macht mit KI sichtbar, was wichtig ist und welcher
            nächste Schritt ansteht.
          </p>
          <ul className="feature-list">
            <li>
              <Icon name="check" size={15} />
              E-Mail-Anzeige für zwei IMAP-Konten
            </li>
            <li>
              <Icon name="check" size={15} />
              Zusammenfassungen, Prioritäten und Handlungsbedarf
            </li>
            <li>
              <Icon name="check" size={15} />
              Fristen, nächste Schritte und lokal gespeicherte Analysen
            </li>
          </ul>
          <Tags
            items={[
              "Next.js",
              "TypeScript",
              "React",
              "OpenAI API",
              "IMAP",
              "Git/GitHub",
            ]}
          />
          <div className="project-links">
            <ExternalLink href={links.demo} className="button primary">
              Live Demo
            </ExternalLink>
            <ExternalLink
              href={links.email}
              className="text-link"
              icon="github"
            >
              GitHub
            </ExternalLink>
          </div>
          <p className="project-note">
            Die Demo zeigt fünf fiktive E-Mails mit zuvor tatsächlich erzeugten
            und gespeicherten KI-Analysen. Beim Ausprobieren entstehen keine
            neuen API-Aufrufe.
          </p>
        </div>
        <figure className="email-visual">
          <div className="window-bar">
            <span className="window-dots">
              <i />
              <i />
              <i />
            </span>
            <span>AI Email Assistant · echte Projektansicht</span>
            <Icon name="mail" size={15} />
          </div>
          <a
            href="/email-analysis.png"
            target="_blank"
            rel="noopener noreferrer"
            className="screenshot-link"
            aria-label="Original-Screenshot des AI Email Assistant in neuem Tab vergrößern"
          >
            <img
              src="/email-analysis.png"
              alt="Echte Oberfläche des AI Email Assistant mit fünf Beispiel-E-Mails und geöffneter aufgezeichneter KI-Analyse"
              width="1600"
              height="1479"
              loading="lazy"
              decoding="async"
            />
            <span className="zoom-label">
              Screenshot vergrößern
              <Icon name="external" size={14} />
            </span>
          </a>
          <figcaption>
            <span className="tiny-dot" />
            Original-Screenshot aus dem öffentlichen Repository
          </figcaption>
        </figure>
      </article>
    </section>
  );
}

function Skills() {
  return (
    <section id="kenntnisse" className="section skills-section">
      <div className="wrap">
        <SectionHeading
          number="02"
          eyebrow="TECHNISCHE KENNTNISSE"
          title="Mein Werkzeugkasten."
        >
          Im Studium gelernt, in eigenen Projekten angewendet und Schritt für
          Schritt erweitert.
        </SectionHeading>
        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <div className="skill-group" key={group.title}>
              <span className="skill-index">0{index + 1}</span>
              <h3>{group.title}</h3>
              <ul>
                {group.skills.map(([name, level]) => (
                  <li key={name}>
                    <strong>{name}</strong>
                    <span>{level}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="ueber-mich" className="section about wrap">
      <div className="about-copy">
        <p className="eyebrow">
          <span className="section-number">03</span>ÜBER MICH
        </p>
        <h2>
          Zwischen Technik,
          <br />
          Prozessen und KI.
        </h2>
        <p>
          Ich studiere Wirtschaftsingenieurwesen – Maschinenbau an der TU
          Braunschweig mit dem Schwerpunkt Fahrzeugtechnik und mobile Systeme.
          Mein Bachelorstudium steht kurz vor dem Abschluss; anschließend möchte
          ich im Master weiterstudieren.
        </p>
        <p>
          In meiner Bachelorarbeit beschäftige ich mich mit der Simulation von
          fahrerlosen Transportsystemen und ihrer Ladeinfrastruktur. Erfahrungen
          aus der Produktions- und Standortplanung bei Porsche und Mercedes-Benz
          ergänzen meinen Blick auf technische Prozesse.
        </p>
        <p>
          Auch privat tüftle ich gerne an KI-Anwendungen. Mich interessiert
          besonders, wie sich Abläufe durch nachvollziehbare Automatisierung
          praktisch verbessern lassen.
        </p>
        <span className="about-focus">
          <Icon name="spark" size={18} />
          Mein Interesse: KI · AI Operations · Digitalisierung
        </span>
      </div>
      <div className="timeline">
        <div className="timeline-item">
          <span className="timeline-dot" />
          <p className="timeline-date">10/2022 – VORAUSS. 03/2027</p>
          <h3>TU Braunschweig</h3>
          <p>B.Sc. Wirtschaftsingenieurwesen – Maschinenbau</p>
          <small>Fahrzeugtechnik & mobile Systeme</small>
        </div>
        <div className="timeline-item">
          <span className="timeline-dot" />
          <p className="timeline-date">10/2024 – 04/2025</p>
          <h3>Porsche AG</h3>
          <p>Praktikum · Standortplanung Lackierte Karosse</p>
          <small>Produktionskennzahlen & Fertigungsabläufe</small>
        </div>
        <div className="timeline-item">
          <span className="timeline-dot" />
          <p className="timeline-date">09/2023 – 11/2023</p>
          <h3>Mercedes-Benz AG</h3>
          <p>Praktikum · Produktionsplanung</p>
          <small>Elektrifizierung & konzeptionelle Linienplanung</small>
        </div>
      </div>
    </section>
  );
}

function Cv() {
  return (
    <section className="cv-section wrap" id="lebenslauf">
      <div className="cv-card">
        <div className="cv-icon">
          <Icon name="document" size={35} />
          <span>PDF</span>
        </div>
        <div className="cv-copy">
          <p className="eyebrow">MEIN WEG AUF EINER SEITE</p>
          <h2>Etwas mehr Hintergrund.</h2>
          <p>
            Ausbildung, Praxiserfahrung und eigene Projekte – kompakt in meinem
            Lebenslauf.
          </p>
        </div>
        <div className="cv-actions">
          <ExternalLink
            href={links.cv}
            className="button primary"
            icon="external"
          >
            Lebenslauf ansehen
          </ExternalLink>
          <a
            href={links.cv}
            className="download-link"
            download="Lebenslauf_Maximilian_Gehrke.pdf"
          >
            <Icon name="download" size={15} />
            PDF herunterladen
          </a>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#inhalt">
        Zum Inhalt springen
      </a>
      <Header />
      <main id="inhalt">
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Cv />
      </main>
      <footer className="footer wrap">
        <div>
          <a className="footer-name" href="#start">
            Maximilian Gehrke<span>.</span>
          </a>
          <p>Wirtschaftsingenieurwesen. KI. Eigene Ideen.</p>
        </div>
        <div className="footer-right">
          <ExternalLink href={links.github} className="text-link" icon="github">
            GitHub
          </ExternalLink>
          <span>
            © {new Date().getFullYear()} · Ohne Tracking und externe
            Schriftarten.
          </span>
        </div>
      </footer>
    </>
  );
}
