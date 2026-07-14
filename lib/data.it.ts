import { projectAssets, serviceStacks, teamAssets } from "./data.assets";
import type { SiteData } from "./data.types";

const serviceCopy = [
  {
    title: "Sviluppo siti web",
    problem: "La maggior parte delle attività locali non ha un sito web, oppure ne ha uno che non viene aggiornato dal 2016.",
    solution: "Siti veloci, moderni e mobile-first, progettati per trasformare visitatori in clienti.",
    benefit: "Una vetrina digitale che lavora 24/7, anche quando il negozio è chiuso.",
  },
  {
    title: "Sviluppo software su misura",
    problem: "Gli strumenti standard raramente si adattano al modo in cui una specifica attività opera davvero.",
    solution: "Strumenti interni e piattaforme su misura, costruiti attorno a flussi reali e non a template generici.",
    benefit: "Software che si adatta al business, invece di costringere il business ad adattarsi al software.",
  },
  {
    title: "Automazione AI",
    problem: "Il lavoro amministrativo ripetitivo - pianificazione, follow-up, inserimento dati - consuma ore ogni settimana.",
    solution: "Automazioni guidate dall'AI che gestiscono in background il lavoro operativo ripetitivo.",
    benefit: "I titolari recuperano tempo per concentrarsi sui clienti, non sulla burocrazia.",
  },
  {
    title: "Chatbot AI",
    problem: "Chiamate perse e risposte lente fanno perdere prenotazioni ogni giorno, in silenzio.",
    solution: "Assistenti conversazionali addestrati per siti web, WhatsApp e Instagram DMs.",
    benefit: "Risposte immediate e sempre attive che trasformano richieste in prenotazioni confermate.",
  },
  {
    title: "Sviluppo CRM",
    problem: "I dettagli dei clienti sono sparsi tra quaderni, fogli di calcolo e memoria di qualcuno.",
    solution: "Un CRM unico e semplice, costruito attorno al modo in cui il team segue davvero le persone.",
    benefit: "Nessun cliente, lead o follow-up cade più nel vuoto.",
  },
  {
    title: "Sistemi ERP",
    problem: "Inventario, staff, fatturazione e ordini vivono tutti in strumenti scollegati.",
    solution: "Sistemi ERP unificati che collegano ogni parte operativa.",
    benefit: "Un'unica fonte di verità per tutta l'attività, aggiornata in tempo reale.",
  },
  {
    title: "Automazione aziendale",
    problem: "I processi manuali non scalano oltre un certo punto senza assumere più persone.",
    solution: "Automazione end-to-end dei flussi di prenotazione, fatturazione e comunicazione.",
    benefit: "Crescita senza un aumento proporzionale dei costi operativi.",
  },
  {
    title: "Ottimizzazione Google Business",
    problem: "Profili Google Business incompleti o inattivi riducono la visibilità nella ricerca locale.",
    solution: "Configurazione completa, ottimizzazione e gestione continua della presenza Google Business.",
    benefit: "Maggiore visibilità proprio quando i clienti vicini stanno cercando.",
  },
  {
    title: "SEO",
    problem: "Un sito bello che nessuno trova è un sito che non funziona.",
    solution: "SEO tecnica e contenutistica integrata nel sito dal primo giorno, non aggiunta dopo.",
    benefit: "Traffico organico costante e cumulativo invece di dipendenza dagli annunci a pagamento.",
  },
  {
    title: "Applicazioni cloud",
    problem: "I sistemi on-premise si rompono, non scalano e sono difficili da raggiungere da remoto.",
    solution: "Applicazioni cloud-native create per affidabilità e accesso remoto da qualsiasi luogo.",
    benefit: "Sistemi aziendali che restano online e accessibili, ovunque sia il titolare.",
  },
  {
    title: "Soluzioni database",
    problem: "Anni di dati aziendali restano intrappolati in fogli di calcolo, poco interrogabili e insicuri.",
    solution: "Database strutturati e sicuri, progettati attorno a reportistica e crescita del business.",
    benefit: "Dati finalmente utili per decisioni reali, non solo per archiviazione.",
  },
  {
    title: "Applicazioni mobile",
    problem: "I clienti si aspettano un'esperienza simile a un'app, non solo una scheda mobile del browser.",
    solution: "App mobile dal feeling nativo per prenotazioni, loyalty e coinvolgimento clienti.",
    benefit: "Un canale diretto verso le schermate home dei clienti.",
  },
  {
    title: "Design UI/UX",
    problem: "Interfacce macchinose e confuse spingono silenziosamente i clienti verso i concorrenti.",
    solution: "Interfacce progettate sul comportamento reale degli utenti e testate per chiarezza, non solo per estetica.",
    benefit: "Ogni interazione sembra semplice, costruendo fiducia nel brand.",
  },
  {
    title: "Sviluppo API",
    problem: "Strumenti che non comunicano tra loro creano lavoro duplicato ed errori.",
    solution: "API pulite e documentate che collegano sistemi interni e strumenti di terze parti.",
    benefit: "Un ecosistema connesso invece di un insieme di app scollegate.",
  },
  {
    title: "Dashboard e analytics",
    problem: "I titolari decidono a intuito perché i dati non sono visibili da nessuna parte.",
    solution: "Dashboard in tempo reale che mostrano i numeri che contano davvero.",
    benefit: "Decisioni chiare e sicure, supportate da dati aziendali live.",
  },
] as const;

export const services = serviceCopy.map((service, index) => ({
  ...service,
  stack: serviceStacks[index],
})) satisfies SiteData["services"];

export const whyChoose = [
  { title: "Consegna rapida", desc: "Software funzionante in settimane, non in trimestri." },
  { title: "Architettura scalabile", desc: "Costruita per gestire la crescita dal primo giorno, non da rifare più tardi." },
  { title: "Mentalità AI-first", desc: "L'automazione viene progettata dentro, non aggiunta come ripensamento." },
  { title: "Approccio business-focused", desc: "Ogni build parte dal problema di business, non dalla tecnologia." },
  { title: "Cloud ready", desc: "Distribuito su infrastruttura che resta online e scala su richiesta." },
  { title: "Ottimizzato SEO", desc: "La visibilità è integrata nelle fondamenta del sito." },
  { title: "Sicuro di default", desc: "Pratiche moderne di sicurezza applicate a ogni sistema che consegniamo." },
  { title: "Completamente responsive", desc: "Un'esperienza unica, perfezionata su telefono, tablet e desktop." },
  { title: "Supporto a lungo termine", desc: "Restiamo dopo il lancio - i sistemi vengono mantenuti, non abbandonati." },
  { title: "Soluzioni custom", desc: "Niente template che fingono di essere piattaforme. Costruito specificamente per te." },
] as const satisfies SiteData["whyChoose"];

export const industries = [
  {
    name: "Ristoranti",
    problems: "Prenotazioni manuali, nessun ordine online, presenza Google incoerente.",
    solution: "Ordini online, prenotazione tavoli e un profilo Google che converte davvero.",
  },
  {
    name: "Caffè",
    problems: "Dipendenza dal passaggio pedonale con poco o nessun canale digitale per clienti ricorrenti.",
    solution: "Siti orientati alla loyalty e menu pronti per i social che riportano i clienti.",
  },
  {
    name: "Cliniche sanitarie",
    problems: "La prenotazione solo telefonica causa appuntamenti persi e lunghi tempi di attesa.",
    solution: "Sistemi di appuntamenti online con promemoria automatici e cartelle pazienti.",
  },
  {
    name: "Saloni di bellezza",
    problems: "Doppie prenotazioni e no-show da pianificazione manuale su quaderno.",
    solution: "Calendari digitali di prenotazione con conferme e promemoria automatici.",
  },
  {
    name: "Palestre e studi fitness",
    problems: "Tracciamento manuale degli abbonamenti e nessun modo per gestire la capienza delle lezioni.",
    solution: "CRM per abbonamenti, scheduling lezioni e promemoria automatici di rinnovo.",
  },
  {
    name: "Negozi retail",
    problems: "Senza vetrina online, tutte le vendite si fermano quando le porte chiudono.",
    solution: "Store e-commerce collegati a inventario reale e ritiro locale.",
  },
  {
    name: "Istituti educativi",
    problems: "Ammissioni e comunicazione con i genitori gestite interamente su carta.",
    solution: "Portali di ammissione, tracciamento tasse e comunicazione automatizzata con i genitori.",
  },
  {
    name: "Produttori",
    problems: "Inventario e ordini distribuiti tra fogli di calcolo scollegati.",
    solution: "Dashboard ERP che unificano inventario, ordini e stato produzione.",
  },
  {
    name: "Agenzie immobiliari",
    problems: "Annunci sparsi su piattaforme senza una pipeline centrale di lead.",
    solution: "Siti di annunci con CRM integrato per tracciare ogni lead acquirente.",
  },
  {
    name: "Aziende logistiche",
    problems: "Dispatch e tracciamento manuali portano a ritardi e clienti scontenti.",
    solution: "Dashboard di dispatch e aggiornamenti automatici di stato per ogni spedizione.",
  },
  {
    name: "Agenzie di viaggio",
    problems: "Itinerari e pagamenti gestiti manualmente tra chat e chiamate.",
    solution: "Piattaforme di booking con builder di itinerari e pagamenti integrati.",
  },
  {
    name: "Servizi professionali",
    problems: "Intake clienti e fatturazione consumano ore che dovrebbero essere fatturate ai clienti.",
    solution: "Portali clienti che automatizzano intake, scheduling e fatturazione.",
  },
] as const satisfies SiteData["industries"];

export const journey = [
  { step: "Business offline", detail: "Funziona bene, ma è invisibile online e sommerso dal lavoro manuale." },
  { step: "Consulenza gratuita", detail: "Mappiamo il business, i colli di bottiglia e l'opportunità." },
  { step: "Strategia", detail: "Un piano chiaro: cosa costruire prima e perché conta." },
  { step: "Design", detail: "Interfacce modellate su clienti reali e staff reale." },
  { step: "Sviluppo", detail: "Software production-grade, costruito e testato correttamente." },
  { step: "Automazione", detail: "Il lavoro ripetitivo passa ai sistemi, non allo staff." },
  { step: "Lancio", detail: "Live, monitorato e supportato - non spedito e dimenticato." },
  { step: "Crescita", detail: "Una base digitale su cui il business può continuare a costruire." },
] as const satisfies SiteData["journey"];

const projectCopy = [
  {
    description: "Piattaforma per film e portfolio cinematografico che mostra produzioni premium.",
    problem: "Uno studio fotografico premium non aveva una piattaforma all'altezza del proprio lavoro.",
  },
  {
    description: "Workspace di produttività per developer con tool e dashboard alimentati da AI.",
    problem: "I workflow di engineering erano frammentati tra più strumenti scollegati.",
  },
  {
    description: "Piattaforma di lead generation per scoprire attività locali.",
    problem: "Le agenzie avevano bisogno di un modo scalabile per identificare business senza presenza digitale.",
  },
  {
    description: "Piattaforma eSports con tornei, bracket, team ed eventi gaming.",
    problem: "Gli organizzatori avevano bisogno di una piattaforma centrale per tornei e gestione eventi.",
  },
  {
    description: "Applicazione di pianificazione fitness con routine di allenamento personalizzate.",
    problem: "I piani generici non si adattavano agli obiettivi fitness individuali.",
  },
  {
    description: "Vetrina eCommerce responsive con esperienza di shopping moderna.",
    problem: "I piccoli retailer avevano bisogno di una piattaforma di shopping online coinvolgente.",
  },
] as const;

export const projects = projectAssets.map((project, index) => ({
  ...project,
  ...projectCopy[index],
})) satisfies SiteData["projects"];

const teamCopy = [
  {
    role: "Software Engineer, Wipro",
    focus: ["Backend", "AI", "Cloud", "Automazione", ".NET", "Python"],
  },
  {
    role: "Software Engineer, Wipro",
    focus: ["Frontend", "React", "UI Engineering", "Applicazioni web moderne"],
  },
  {
    role: "Data Engineer, Wipro",
    focus: ["Data Engineering", "ETL", "Piattaforme cloud data", "Analytics"],
  },
] as const;

export const team = teamAssets.map((member, index) => ({
  ...member,
  ...teamCopy[index],
})) satisfies SiteData["team"];

export const faqs = [
  {
    q: "Quanto dura un progetto tipico?",
    a: "Un sito business standard richiede 2-3 settimane. Software custom, CRM o sistemi di automazione di solito richiedono 4-10 settimane in base allo scope. Dopo la consulenza gratuita diamo una timeline specifica, non una fascia generica.",
  },
  {
    q: "Come funziona il pricing?",
    a: "Ogni business è diverso, quindi definiamo scope e preventivo per progetto dopo aver capito cosa serve davvero. Non esiste un pacchetto fisso - paghi solo ciò che porta avanti il tuo business.",
  },
  {
    q: "Cosa succede dopo il lancio del sito o del sistema?",
    a: "Restiamo presenti. Il supporto a lungo termine significa che monitoring, aggiornamenti e fix fanno parte della relazione, non di un passaggio una tantum.",
  },
  {
    q: "Con quali tecnologie costruite?",
    a: "Dipende dal progetto: Next.js, React e TypeScript per il web; Python e .NET per backend; PostgreSQL, SQL Server e MongoDB per i dati; AWS, Azure o Google Cloud per l'hosting.",
  },
  {
    q: "Il sito o software finale sarà mio?",
    a: "Sì. Una volta consegnato e pagato il progetto, codice, design e configurazione infrastrutturale appartengono a te. Possiamo anche consegnare documentazione completa e accessi.",
  },
  {
    q: "L'AI può davvero essere integrata in una piccola attività?",
    a: "Sì - di solito come chatbot che gestisce richieste o come automazione che segue scheduling, promemoria e follow-up in background. Non deve essere complicata per essere utile.",
  },
  {
    q: "E se la mia attività ha già un sito web?",
    a: "Prima auditiamo ciò che esiste. A volte serve un rebuild, altre volte bastano correzioni mirate a velocità, SEO o flusso di prenotazione. Il free digital audit ti dice quale, con onestà.",
  },
] as const satisfies SiteData["faqs"];
