import { projectAssets, serviceStacks, teamAssets } from "./data.assets";
import type { SiteData } from "./data.types";

const serviceCopy = [
  {
    title: "Développement de sites web",
    problem: "La plupart des entreprises locales n'ont pas de site web, ou en ont un qui n'a pas été touché depuis 2016.",
    solution: "Des sites rapides, modernes et mobile-first, conçus pour transformer les visiteurs en clients.",
    benefit: "Une vitrine numérique qui travaille 24/7, même lorsque la boutique est fermée.",
  },
  {
    title: "Développement logiciel sur mesure",
    problem: "Les outils prêts à l'emploi correspondent rarement au fonctionnement réel d'une entreprise précise.",
    solution: "Des outils internes et plateformes sur mesure, construits autour de vrais flux de travail, pas de modèles génériques.",
    benefit: "Un logiciel qui s'adapte à l'entreprise, au lieu de forcer l'entreprise à s'adapter au logiciel.",
  },
  {
    title: "Automatisation IA",
    problem: "Les tâches administratives répétitives - planning, relances, saisie de données - consomment des heures chaque semaine.",
    solution: "Des automatisations pilotées par l'IA qui prennent en charge le travail opérationnel répétitif en arrière-plan.",
    benefit: "Les dirigeants récupèrent du temps pour se concentrer sur les clients, pas sur la paperasse.",
  },
  {
    title: "Chatbots IA",
    problem: "Les appels manqués et les réponses lentes font perdre des réservations tous les jours.",
    solution: "Des assistants conversationnels entraînés pour sites web, WhatsApp et Instagram DMs.",
    benefit: "Des réponses instantanées et toujours disponibles qui transforment les demandes en réservations confirmées.",
  },
  {
    title: "Développement CRM",
    problem: "Les informations clients sont dispersées entre carnets, tableurs et mémoire d'une personne.",
    solution: "Un CRM simple et unique, conçu autour de la manière dont l'équipe effectue réellement ses relances.",
    benefit: "Aucun client, prospect ou suivi ne passe plus entre les mailles du filet.",
  },
  {
    title: "Systèmes ERP",
    problem: "Stock, personnel, facturation et commandes vivent tous dans des outils déconnectés.",
    solution: "Des systèmes ERP unifiés qui relient chaque élément opérationnel.",
    benefit: "Une seule source de vérité pour toute l'entreprise, mise à jour en temps réel.",
  },
  {
    title: "Automatisation métier",
    problem: "Les processus manuels ne passent pas un certain cap sans embaucher plus de personnes.",
    solution: "Automatisation de bout en bout des flux de réservation, facturation et communication.",
    benefit: "De la croissance sans hausse proportionnelle des frais généraux.",
  },
  {
    title: "Optimisation Google Business",
    problem: "Les profils Google Business incomplets ou inactifs coûtent de la visibilité en recherche locale.",
    solution: "Configuration complète, optimisation et gestion continue de la présence Google Business.",
    benefit: "Plus de visibilité exactement lorsque les clients proches recherchent.",
  },
  {
    title: "SEO",
    problem: "Un beau site que personne ne trouve est un site qui ne fonctionne pas.",
    solution: "SEO technique et éditorial intégré dès le premier jour, pas ajouté après coup.",
    benefit: "Un trafic organique régulier et cumulatif au lieu d'une dépendance aux annonces payantes.",
  },
  {
    title: "Applications cloud",
    problem: "Les systèmes sur site tombent en panne, ne scalent pas et sont difficiles d'accès à distance.",
    solution: "Applications cloud-native conçues pour la fiabilité et l'accès à distance depuis partout.",
    benefit: "Des systèmes métier qui restent en ligne et accessibles, où que soit le dirigeant.",
  },
  {
    title: "Solutions de base de données",
    problem: "Des années de données métier restent bloquées dans des tableurs, difficiles à interroger et peu sûres.",
    solution: "Des bases structurées et sécurisées, conçues autour du reporting et de la croissance du business.",
    benefit: "Des données enfin utiles pour de vraies décisions, pas seulement pour le stockage.",
  },
  {
    title: "Applications mobiles",
    problem: "Les clients attendent une expérience proche d'une app, pas seulement un onglet mobile.",
    solution: "Des apps mobiles au ressenti natif pour réservation, fidélité et engagement client.",
    benefit: "Un canal direct vers l'écran d'accueil des clients.",
  },
  {
    title: "Design UI/UX",
    problem: "Des interfaces lourdes et confuses poussent discrètement les clients vers les concurrents.",
    solution: "Des interfaces conçues autour du comportement réel des utilisateurs et testées pour la clarté, pas seulement l'apparence.",
    benefit: "Chaque interaction paraît fluide, ce qui renforce la confiance dans la marque.",
  },
  {
    title: "Développement d'API",
    problem: "Des outils qui ne se parlent pas créent du travail en double et des erreurs.",
    solution: "Des API propres et documentées qui connectent systèmes internes et outils tiers.",
    benefit: "Un écosystème connecté au lieu d'un patchwork d'applications isolées.",
  },
  {
    title: "Tableaux de bord & analytique",
    problem: "Les dirigeants décident à l'instinct parce que les données ne sont visibles nulle part.",
    solution: "Des tableaux de bord temps réel qui font ressortir les chiffres qui comptent vraiment.",
    benefit: "Des décisions claires et confiantes, appuyées par des données métier en direct.",
  },
] as const;

export const services = serviceCopy.map((service, index) => ({
  ...service,
  stack: serviceStacks[index],
})) satisfies SiteData["services"];

export const whyChoose = [
  { title: "Livraison rapide", desc: "Un logiciel fonctionnel en semaines, pas en trimestres." },
  { title: "Architecture scalable", desc: "Construite pour absorber la croissance dès le premier jour, pas reconstruite plus tard." },
  { title: "Mentalité IA-first", desc: "L'automatisation est prévue dès la conception, pas ajoutée après coup." },
  { title: "Approche centrée business", desc: "Chaque build commence par le problème métier, pas par la technologie." },
  { title: "Prêt pour le cloud", desc: "Déployé sur une infrastructure qui reste en ligne et scale à la demande." },
  { title: "Optimisé SEO", desc: "La visibilité est intégrée dans les fondations du site." },
  { title: "Sécurisé par défaut", desc: "Des pratiques de sécurité modernes appliquées à chaque système livré." },
  { title: "Entièrement responsive", desc: "Une expérience unique, perfectionnée sur mobile, tablette et desktop." },
  { title: "Support long terme", desc: "Nous restons après le lancement - les systèmes sont maintenus, pas abandonnés." },
  { title: "Solutions sur mesure", desc: "Pas de modèles qui prétendent être des plateformes. Construit spécifiquement pour vous." },
] as const satisfies SiteData["whyChoose"];

export const industries = [
  {
    name: "Restaurants",
    problems: "Réservations manuelles, pas de commande en ligne, présence Google irrégulière.",
    solution: "Commande en ligne, réservation de tables et profil Google qui convertit réellement.",
  },
  {
    name: "Cafés",
    problems: "Dépendance au passage avec peu ou pas de canal digital pour clients récurrents.",
    solution: "Sites orientés fidélité et menus prêts pour les réseaux sociaux qui font revenir les clients.",
  },
  {
    name: "Cliniques de santé",
    problems: "La réservation uniquement par téléphone provoque rendez-vous manqués et longues attentes.",
    solution: "Systèmes de rendez-vous en ligne avec rappels automatisés et dossiers patients.",
  },
  {
    name: "Salons de beauté",
    problems: "Doubles réservations et absences dues à une planification manuelle sur carnet.",
    solution: "Calendriers de réservation numériques avec confirmations et rappels automatiques.",
  },
  {
    name: "Salles de sport & studios fitness",
    problems: "Suivi manuel des abonnements et aucune gestion simple de la capacité des cours.",
    solution: "CRM d'abonnements, planification de cours et rappels automatiques de renouvellement.",
  },
  {
    name: "Magasins de détail",
    problems: "Sans vitrine en ligne, toutes les ventes s'arrêtent quand les portes ferment.",
    solution: "Boutiques e-commerce connectées au stock réel et au retrait local.",
  },
  {
    name: "Instituts éducatifs",
    problems: "Admissions et communication parents entièrement gérées sur papier.",
    solution: "Portails d'admission, suivi des frais et communication parentale automatisée.",
  },
  {
    name: "Fabricants",
    problems: "Stock et commandes suivis dans des tableurs déconnectés.",
    solution: "Tableaux de bord ERP qui unifient stock, commandes et statut de production.",
  },
  {
    name: "Agences immobilières",
    problems: "Annonces dispersées sur plusieurs plateformes sans pipeline central de leads.",
    solution: "Sites d'annonces avec CRM intégré pour suivre chaque lead acheteur.",
  },
  {
    name: "Entreprises logistiques",
    problems: "Dispatch et suivi manuels causent retards et clients mécontents.",
    solution: "Dashboards de dispatch et mises à jour de statut automatiques pour chaque expédition.",
  },
  {
    name: "Agences de voyage",
    problems: "Itinéraires et paiements gérés manuellement entre chats et appels.",
    solution: "Plateformes de réservation avec créateurs d'itinéraires et paiements intégrés.",
  },
  {
    name: "Services professionnels",
    problems: "Intake client et facturation consomment des heures qui devraient être facturables.",
    solution: "Portails clients qui automatisent intake, planification et facturation.",
  },
] as const satisfies SiteData["industries"];

export const journey = [
  { step: "Entreprise offline", detail: "Elle fonctionne bien, mais reste invisible en ligne et enfouie dans le travail manuel." },
  { step: "Consultation gratuite", detail: "Nous cartographions l'entreprise, les blocages et l'opportunité." },
  { step: "Stratégie", detail: "Un plan clair : quoi construire d'abord, et pourquoi cela compte." },
  { step: "Design", detail: "Des interfaces pensées autour de vrais clients et de vraies équipes." },
  { step: "Développement", detail: "Un logiciel de production, construit et testé correctement." },
  { step: "Automatisation", detail: "Le travail répétitif est confié aux systèmes, pas au personnel." },
  { step: "Lancement", detail: "En ligne, surveillé et accompagné - pas livré puis oublié." },
  { step: "Croissance", detail: "Une fondation digitale sur laquelle l'entreprise peut continuer à bâtir." },
] as const satisfies SiteData["journey"];

const projectCopy = [
  {
    description: "Plateforme de films et portfolio cinématographique mettant en valeur des productions premium.",
    problem: "Un studio photo premium n'avait pas de plateforme à la hauteur de son propre travail.",
  },
  {
    description: "Workspace de productivité développeur avec outils et dashboards alimentés par IA.",
    problem: "Les workflows d'ingénierie étaient fragmentés entre plusieurs outils déconnectés.",
  },
  {
    description: "Plateforme de génération de leads pour découvrir des entreprises locales.",
    problem: "Les agences avaient besoin d'un moyen scalable d'identifier les entreprises sans présence digitale.",
  },
  {
    description: "Plateforme eSports avec tournois, brackets, équipes et événements gaming.",
    problem: "Les organisateurs avaient besoin d'une plateforme centralisée pour gérer tournois et événements.",
  },
  {
    description: "Application de planification fitness avec routines d'entraînement personnalisées.",
    problem: "Les plans génériques ne s'adaptaient pas aux objectifs fitness individuels.",
  },
  {
    description: "Vitrine eCommerce responsive avec une expérience d'achat moderne.",
    problem: "Les petits détaillants avaient besoin d'une plateforme d'achat en ligne engageante.",
  },
] as const;

export const projects = projectAssets.map((project, index) => ({
  ...project,
  ...projectCopy[index],
})) satisfies SiteData["projects"];

const teamCopy = [
  {
    role: "Ingénieur logiciel, Wipro",
    focus: ["Backend", "IA", "Cloud", "Automatisation", ".NET", "Python"],
  },
  {
    role: "Ingénieur logiciel, Wipro",
    focus: ["Frontend", "React", "Ingénierie UI", "Applications web modernes"],
  },
  {
    role: "Ingénieur data, Wipro",
    focus: ["Data Engineering", "ETL", "Plateformes cloud data", "Analytique"],
  },
] as const;

export const team = teamAssets.map((member, index) => ({
  ...member,
  ...teamCopy[index],
})) satisfies SiteData["team"];

export const faqs = [
  {
    q: "Combien de temps prend un projet typique ?",
    a: "Un site business standard prend 2-3 semaines. Les logiciels sur mesure, CRM ou systèmes d'automatisation prennent généralement 4-10 semaines selon le périmètre. Après la consultation gratuite, nous donnons une timeline précise, pas une fourchette générique.",
  },
  {
    q: "Comment fonctionne la tarification ?",
    a: "Chaque entreprise est différente, donc nous définissons le périmètre et le prix par projet après avoir compris ce qui est réellement nécessaire. Il n'y a pas de forfait fixe - vous payez uniquement pour ce qui fait avancer votre business.",
  },
  {
    q: "Que se passe-t-il après le lancement du site ou du système ?",
    a: "Nous restons présents. Le support long terme signifie que monitoring, mises à jour et corrections font partie de la relation, pas d'une simple remise ponctuelle.",
  },
  {
    q: "Avec quelles technologies construisez-vous ?",
    a: "Selon le projet : Next.js, React et TypeScript pour le web ; Python et .NET pour les backends ; PostgreSQL, SQL Server et MongoDB pour les données ; AWS, Azure ou Google Cloud pour l'hébergement.",
  },
  {
    q: "Est-ce que je possède le site ou le logiciel final ?",
    a: "Oui. Une fois le projet livré et payé, le code, le design et la configuration d'infrastructure vous appartiennent. Nous pouvons aussi transmettre documentation complète et accès.",
  },
  {
    q: "L'IA peut-elle vraiment être intégrée dans une petite entreprise ?",
    a: "Oui - souvent sous forme de chatbot qui gère les demandes, ou d'automatisation qui prend en charge planning, rappels et relances en arrière-plan. Elle n'a pas besoin d'être compliquée pour être utile.",
  },
  {
    q: "Et si mon entreprise a déjà un site web ?",
    a: "Nous auditons d'abord l'existant. Parfois il faut reconstruire, parfois quelques corrections ciblées de vitesse, SEO ou parcours de réservation suffisent. L'audit digital gratuit vous dit lequel, honnêtement.",
  },
] as const satisfies SiteData["faqs"];
