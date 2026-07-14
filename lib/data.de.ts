import { projectAssets, serviceStacks, teamAssets } from "./data.assets";
import type { SiteData } from "./data.types";

const serviceCopy = [
  {
    title: "Website-Entwicklung",
    problem: "Die meisten lokalen Unternehmen haben entweder keine Website oder eine, die seit 2016 nicht mehr gepflegt wurde.",
    solution: "Schnelle, moderne, mobile-first Websites, die Besucher in Kunden verwandeln.",
    benefit: "Ein digitales Schaufenster, das rund um die Uhr arbeitet, auch wenn das Geschäft geschlossen ist.",
  },
  {
    title: "Individuelle Softwareentwicklung",
    problem: "Standardtools passen selten zu der Art, wie ein bestimmtes Unternehmen wirklich arbeitet.",
    solution: "Maßgeschneiderte interne Tools und Plattformen, gebaut um echte Abläufe statt generischer Vorlagen.",
    benefit: "Software, die zum Unternehmen passt, statt ein Unternehmen an die Software anzupassen.",
  },
  {
    title: "KI-Automatisierung",
    problem: "Wiederkehrende Verwaltungsarbeit - Planung, Follow-ups, Dateneingabe - kostet jede Woche Stunden.",
    solution: "KI-gesteuerte Automationen, die repetitive operative Aufgaben im Hintergrund erledigen.",
    benefit: "Inhaber gewinnen Zeit zurück, um sich auf Kunden statt Papierarbeit zu konzentrieren.",
  },
  {
    title: "KI-Chatbots",
    problem: "Verpasste Anrufe und langsame Antworten kosten jeden Tag unbemerkt Buchungen.",
    solution: "Trainierte Gesprächsassistenten für Websites, WhatsApp und Instagram-DMs.",
    benefit: "Sofortige, jederzeit verfügbare Antworten, die Anfragen in bestätigte Buchungen verwandeln.",
  },
  {
    title: "CRM-Entwicklung",
    problem: "Kundendaten liegen verteilt in Notizbüchern, Tabellen und im Gedächtnis einzelner Personen.",
    solution: "Ein einfaches CRM, das daran ausgerichtet ist, wie das Team tatsächlich nachfasst.",
    benefit: "Kein Kunde, Lead oder Follow-up fällt wieder durch das Raster.",
  },
  {
    title: "ERP-Systeme",
    problem: "Bestand, Personal, Abrechnung und Bestellungen leben in getrennten Tools.",
    solution: "Vereinheitlichte ERP-Systeme, die alle operativen Teile verbinden.",
    benefit: "Eine einzige verlässliche Quelle für das ganze Unternehmen, in Echtzeit aktualisiert.",
  },
  {
    title: "Geschäftsautomatisierung",
    problem: "Manuelle Prozesse skalieren ab einem Punkt nicht mehr, ohne mehr Menschen einzustellen.",
    solution: "End-to-end Workflow-Automatisierung für Buchung, Abrechnung und Kommunikation.",
    benefit: "Wachstum ohne proportional steigende Gemeinkosten.",
  },
  {
    title: "Google Business Optimierung",
    problem: "Unvollständige oder inaktive Google Business Profile kosten lokale Sichtbarkeit in der Suche.",
    solution: "Vollständige Einrichtung, Optimierung und laufende Pflege der Google Business Präsenz.",
    benefit: "Mehr Sichtbarkeit genau dann, wenn Kunden in der Nähe suchen.",
  },
  {
    title: "SEO",
    problem: "Eine schöne Website, die niemand findet, ist eine Website, die nicht funktioniert.",
    solution: "Technisches und inhaltliches SEO von Anfang an in die Website eingebaut, nicht später angeklebt.",
    benefit: "Stetig wachsender organischer Traffic statt Abhängigkeit von bezahlten Anzeigen.",
  },
  {
    title: "Cloud-Anwendungen",
    problem: "On-premise Systeme fallen aus, skalieren schlecht und sind aus der Ferne schwer erreichbar.",
    solution: "Cloud-native Anwendungen, gebaut für Zuverlässigkeit und Zugriff von überall.",
    benefit: "Geschäftssysteme, die online und zugänglich bleiben, egal wo der Inhaber ist.",
  },
  {
    title: "Datenbanklösungen",
    problem: "Jahre an Geschäftsdaten stecken in Tabellen fest, schwer abfragbar und unsicher.",
    solution: "Strukturierte, sichere Datenbanken, entworfen nach Reporting und Wachstum des Unternehmens.",
    benefit: "Daten, die endlich für echte Entscheidungen nutzbar sind, nicht nur zur Ablage.",
  },
  {
    title: "Mobile Anwendungen",
    problem: "Kunden erwarten ein app-ähnliches Erlebnis, nicht nur einen mobilen Browser-Tab.",
    solution: "Native wirkende Mobile Apps für Buchung, Treueprogramme und Kundenbindung.",
    benefit: "Ein direkter Kanal auf die Homescreens der Kunden.",
  },
  {
    title: "UI/UX Design",
    problem: "Holprige, verwirrende Oberflächen treiben Kunden leise zur Konkurrenz.",
    solution: "Interfaces, gestaltet nach echtem Nutzerverhalten und auf Klarheit getestet, nicht nur auf Optik.",
    benefit: "Jede Interaktion fühlt sich mühelos an und stärkt Vertrauen in die Marke.",
  },
  {
    title: "API-Entwicklung",
    problem: "Tools, die nicht miteinander sprechen, erzeugen doppelte Arbeit und Fehler.",
    solution: "Saubere, dokumentierte APIs, die interne Systeme und Drittanbieter-Tools verbinden.",
    benefit: "Ein verbundenes Ökosystem statt eines Flickwerks getrennter Apps.",
  },
  {
    title: "Dashboards & Analytik",
    problem: "Inhaber entscheiden aus dem Bauch heraus, weil Daten nirgends sichtbar sind.",
    solution: "Echtzeit-Dashboards, die die wirklich wichtigen Zahlen sichtbar machen.",
    benefit: "Klare, sichere Entscheidungen auf Basis aktueller Geschäftsdaten.",
  },
] as const;

export const services = serviceCopy.map((service, index) => ({
  ...service,
  stack: serviceStacks[index],
})) satisfies SiteData["services"];

export const whyChoose = [
  { title: "Schnelle Lieferung", desc: "Funktionierende Software in Wochen, nicht in Quartalen." },
  { title: "Skalierbare Architektur", desc: "Von Anfang an für Wachstum gebaut, nicht später neu aufgebaut." },
  { title: "KI-first Denkweise", desc: "Automatisierung wird eingeplant, nicht nachträglich ergänzt." },
  { title: "Geschäftsorientierter Ansatz", desc: "Jeder Build beginnt mit dem Geschäftsproblem, nicht mit der Technik." },
  { title: "Cloud-ready", desc: "Bereitgestellt auf Infrastruktur, die online bleibt und bei Bedarf skaliert." },
  { title: "SEO-optimiert", desc: "Sichtbarkeit ist in das Fundament der Website eingebaut." },
  { title: "Standardmäßig sicher", desc: "Moderne Sicherheitspraktiken gelten für jedes System, das wir ausliefern." },
  { title: "Voll responsive", desc: "Ein Erlebnis, optimiert für Telefon, Tablet und Desktop." },
  { title: "Langfristiger Support", desc: "Wir bleiben nach dem Launch dabei - Systeme werden gepflegt, nicht verlassen." },
  { title: "Individuelle Lösungen", desc: "Keine Vorlagen, die Plattformen spielen. Speziell für Sie gebaut." },
] as const satisfies SiteData["whyChoose"];

export const industries = [
  {
    name: "Restaurants",
    problems: "Manuelle Reservierungen, keine Online-Bestellung, uneinheitliche Google-Präsenz.",
    solution: "Online-Bestellung, Tischbuchung und ein Google-Profil, das wirklich konvertiert.",
  },
  {
    name: "Cafes",
    problems: "Abhängig von Laufkundschaft, mit kaum einem digitalen Kanal für Stammkunden.",
    solution: "Loyalty-freundliche Websites und social-ready Menüs, die Kunden zurückbringen.",
  },
  {
    name: "Gesundheitskliniken",
    problems: "Nur telefonische Buchung verursacht verpasste Termine und lange Wartezeiten.",
    solution: "Online-Terminbuchung mit automatischen Erinnerungen und Patientenakten.",
  },
  {
    name: "Beauty-Salons",
    problems: "Doppelbuchungen und No-shows durch manuelle Terminplanung im Notizbuch.",
    solution: "Digitale Buchungskalender mit automatischen Bestätigungen und Erinnerungen.",
  },
  {
    name: "Fitnessstudios",
    problems: "Manuelle Mitgliederverwaltung und keine Möglichkeit, Kurskapazitäten zu steuern.",
    solution: "Mitglieder-CRMs, Kursplanung und automatische Erinnerungen zur Verlängerung.",
  },
  {
    name: "Einzelhandel",
    problems: "Ohne Online-Schaufenster stoppen alle Verkäufe, sobald die Türen schließen.",
    solution: "E-Commerce-Shops, verbunden mit echtem Bestand und lokaler Abholung.",
  },
  {
    name: "Bildungsinstitute",
    problems: "Aufnahmen und Elternkommunikation laufen vollständig auf Papier.",
    solution: "Aufnahmeportale, Gebührenverfolgung und automatisierte Elternkommunikation.",
  },
  {
    name: "Hersteller",
    problems: "Bestand und Aufträge werden in getrennten Tabellen verfolgt.",
    solution: "ERP-Dashboards, die Bestand, Aufträge und Produktionsstatus vereinen.",
  },
  {
    name: "Immobilienagenturen",
    problems: "Inserate sind über Plattformen verstreut, ohne zentrale Lead-Pipeline.",
    solution: "Listing-Websites mit integriertem CRM, um jeden Käufer-Lead zu verfolgen.",
  },
  {
    name: "Logistikunternehmen",
    problems: "Manuelle Disposition und Nachverfolgung führen zu Verzögerungen und unzufriedenen Kunden.",
    solution: "Dispatch-Dashboards und automatische Statusupdates für jede Sendung.",
  },
  {
    name: "Reiseagenturen",
    problems: "Reisepläne und Zahlungen werden manuell über Chats und Anrufe verwaltet.",
    solution: "Buchungsplattformen mit Reiseplan-Erstellung und integrierten Zahlungen.",
  },
  {
    name: "Professionelle Dienstleistungen",
    problems: "Kundenaufnahme und Rechnungsstellung verbrauchen Stunden, die abrechenbar sein sollten.",
    solution: "Kundenportale, die Aufnahme, Terminplanung und Rechnungen automatisieren.",
  },
] as const satisfies SiteData["industries"];

export const journey = [
  { step: "Offline-Geschäft", detail: "Läuft gut, ist aber online unsichtbar und in manueller Arbeit vergraben." },
  { step: "Kostenlose Beratung", detail: "Wir kartieren das Geschäft, die Engpässe und die Chance." },
  { step: "Strategie", detail: "Ein klarer Plan: was zuerst gebaut wird und warum es zählt." },
  { step: "Design", detail: "Oberflächen, geformt um echte Kunden und echte Mitarbeitende." },
  { step: "Entwicklung", detail: "Produktionsreife Software, sauber gebaut und getestet." },
  { step: "Automatisierung", detail: "Wiederholbare Arbeit geht an Systeme, nicht an Personal." },
  { step: "Launch", detail: "Live, überwacht und unterstützt - nicht ausgeliefert und vergessen." },
  { step: "Wachstum", detail: "Ein digitales Fundament, auf dem das Unternehmen weiter aufbauen kann." },
] as const satisfies SiteData["journey"];

const projectCopy = [
  {
    description: "Film- und Portfolio-Plattform für die Präsentation hochwertiger Produktionen.",
    problem: "Ein Premium-Fotostudio hatte keine Plattform, die zur Qualität der eigenen Arbeit passte.",
  },
  {
    description: "Produktivitätsworkspace für Entwickler mit KI-Tools und Dashboards.",
    problem: "Engineering-Abläufe waren über mehrere getrennte Tools fragmentiert.",
  },
  {
    description: "Lead-Generierungsplattform zur Entdeckung lokaler Unternehmen.",
    problem: "Agenturen brauchten einen skalierbaren Weg, Unternehmen ohne digitale Präsenz zu identifizieren.",
  },
  {
    description: "eSports-Plattform mit Turnieren, Brackets, Teams und Gaming-Events.",
    problem: "Organisatoren brauchten eine zentrale Plattform für Turnier- und Eventmanagement.",
  },
  {
    description: "Fitnessplanungs-App mit personalisierten Trainingsroutinen.",
    problem: "Generische Pläne passten sich individuellen Fitnesszielen nicht an.",
  },
  {
    description: "Responsiver E-Commerce-Shop mit modernem Einkaufserlebnis.",
    problem: "Kleine Händler brauchten eine ansprechende Online-Shopping-Plattform.",
  },
] as const;

export const projects = projectAssets.map((project, index) => ({
  ...project,
  ...projectCopy[index],
})) satisfies SiteData["projects"];

const teamCopy = [
  {
    role: "Software Engineer, Wipro",
    focus: ["Backend", "KI", "Cloud", "Automatisierung", ".NET", "Python"],
  },
  {
    role: "Software Engineer, Wipro",
    focus: ["Frontend", "React", "UI Engineering", "Moderne Webanwendungen"],
  },
  {
    role: "Data Engineer, Wipro",
    focus: ["Data Engineering", "ETL", "Cloud-Datenplattformen", "Analytik"],
  },
] as const;

export const team = teamAssets.map((member, index) => ({
  ...member,
  ...teamCopy[index],
})) satisfies SiteData["team"];

export const faqs = [
  {
    q: "Wie lange dauert ein typisches Projekt?",
    a: "Eine normale Business-Website dauert 2-3 Wochen. Individuelle Software, CRMs oder Automatisierungssysteme dauern je nach Umfang meist 4-10 Wochen. Nach der kostenlosen Beratung geben wir eine konkrete Timeline, keine generische Spanne.",
  },
  {
    q: "Wie funktioniert die Preisgestaltung?",
    a: "Jedes Unternehmen ist anders, deshalb definieren und kalkulieren wir pro Projekt, nachdem wir verstanden haben, was wirklich gebraucht wird. Es gibt kein fixes Paket - Sie zahlen nur für das, was Ihr Geschäft voranbringt.",
  },
  {
    q: "Was passiert nach dem Launch der Website oder des Systems?",
    a: "Wir bleiben dabei. Langfristiger Support bedeutet, dass Monitoring, Updates und Fehlerbehebungen Teil der Beziehung sind, nicht nur eine einmalige Übergabe.",
  },
  {
    q: "Mit welchen Technologien entwickeln Sie?",
    a: "Je nach Projekt: Next.js, React und TypeScript fürs Web; Python und .NET für Backend-Systeme; PostgreSQL, SQL Server und MongoDB für Daten; sowie AWS, Azure oder Google Cloud fürs Hosting.",
  },
  {
    q: "Gehört mir die fertige Website oder Software?",
    a: "Ja. Sobald ein Projekt geliefert und bezahlt ist, gehören Code, Design und Infrastruktur-Setup Ihnen. Wir können auch vollständige Dokumentation und Zugänge übergeben.",
  },
  {
    q: "Kann KI wirklich in ein kleines Unternehmen integriert werden?",
    a: "Ja - meist als Chatbot für Anfragen oder als Automatisierung, die Planung, Erinnerungen und Follow-ups im Hintergrund erledigt. Es muss nicht kompliziert sein, um nützlich zu sein.",
  },
  {
    q: "Was ist, wenn mein Unternehmen bereits eine Website hat?",
    a: "Wir prüfen zuerst, was vorhanden ist. Manchmal braucht es einen Neubau, manchmal nur gezielte Korrekturen an Geschwindigkeit, SEO oder Buchungsfluss. Das kostenlose Digital-Audit zeigt ehrlich, was sinnvoll ist.",
  },
] as const satisfies SiteData["faqs"];
