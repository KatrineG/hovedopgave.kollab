// src/searchIndex.js
// Comprehensive search index with all content from the site

export const searchIndex = [
  // ===== HOME PAGE - HERO =====
  {
    type: 'hero',
    page: 'home',
    title: 'VI SKABER DIGITALE LØSNINGER SAMMEN',
    content: 'Vores specialister har både hjerne og hjerte på rette sted, og sammen udgør vi dit ultimative A-hold.',
    cta: ['KONTAKT OS', 'CASES'],
  },

  // ===== HOME PAGE - ACCORDION/SERVICES =====
  {
    type: 'service',
    page: 'home',
    title: 'Digital',
    intro: 'Vi hjælper jer med at skabe digitale løsninger, der hænger sammen og kan udvikle sig i takt med jeres forretning.',
    bullets: [
      'Websites og e-commerce',
      'IT-rådgivning',
      'Cloud og drift',
      'Digitalisering og automatisering',
      'IT-arkitektur',
      'IoT og intelligente løsninger',
    ],
    color: '#19247D',
  },
  {
    type: 'service',
    page: 'home',
    title: 'Business Systems',
    intro: 'Data og forretningssystemer bringes sammen, så drift, planlægning og beslutninger giver bedre mening i hverdagen.',
    bullets: [
      'ERP og forretningssystemer',
      'Lager- og produktionsstyring',
      'ESG-data og compliance',
      'HR og tidsregistrering',
      'Data, rapportering og AI',
      'Kunde- og leverandørportaler',
    ],
    color: '#053E2F',
  },
  {
    type: 'service',
    page: 'home',
    title: 'Finance',
    intro: 'Med indsigt og de rette systemer gør vi det nemmere at planlægge, prioritere og tage beslutninger, der holder i hverdagen.',
    bullets: [
      'Økonomisystemer',
      'Lønsystemer',
      'Forecasting',
      'Gap assessment',
      'Disponering (MRP)',
      'Budgettering',
    ],
    color: '#FB823B',
  },
  {
    type: 'service',
    page: 'home',
    title: 'Brand & Strategy',
    intro: 'Vi skaber sammenhæng mellem brand, brugeroplevelse og visuel identitet. Med rådgivning og indsigt hjælper vi jer med at træffe klare valg.',
    bullets: [
      'Branding & positionering',
      'Digital transformation',
      'UI Design',
      'Digitaliseringsrådgivning',
      'Brugeroplevelse (UX)',
      'Salg & marketing (strategi)',
    ],
    color: '#35296B',
  },

  // ===== HOME PAGE - CAROUSEL/CASES =====
  {
    type: 'case',
    page: 'home',
    title: 'Saxo Bank',
    desc: 'Sammen med Saxo Bank har vi skabt et læringssetup, der gør viden mere engagerende.',
  },
  {
    type: 'case',
    page: 'home',
    title: 'OmniGraph',
    desc: 'Da OmniGraph stod klar med vision og teknologi, hjalp Jumpstart med at føre AI-platformen til virkelighed.',
  },
  {
    type: 'case',
    page: 'home',
    title: 'JKS',
    desc: 'Hvordan digitaliserer man et helt vikar-setup? Vi har skabt tre integrerede platforme.',
  },
  {
    type: 'case',
    page: 'home',
    title: 'Scandlines',
    desc: 'Komplekse projekter løst med fokus på drift og brugerrejse.',
  },
  {
    type: 'case',
    page: 'home',
    title: 'PPCD',
    desc: 'Med en kærlig UX-overhaling er brugeroplevelsen nu skarpere og mere effektiv. Projektet med greenStruct sikrede sig også en UX Nordic Award i 2024.',
  },
  {
    type: 'case',
    page: 'home',
    title: 'Fabo',
    desc: 'Med fokus på digital suverænitet og brugerdrevet e-learning omsatte Learning Lab vision til handling gennem Fabo læringsplatformen.',
  },
  {
    type: 'case',
    page: 'home',
    title: 'OptikosPrime',
    desc: 'OptikosPrime flytter synstesten fra klinikken til lommen og bringer samtidig global sundhed inden for rækkevidde på 30 sekunder.',
  },

  // ===== HOME PAGE - MARQUEE/COLLABORATIONS =====
  {
    type: 'collaboration',
    page: 'home',
    title: 'Vestas',
  },
  {
    type: 'collaboration',
    page: 'home',
    title: 'DR',
  },
  {
    type: 'collaboration',
    page: 'home',
    title: "L'Oreal",
  },
  {
    type: 'collaboration',
    page: 'home',
    title: 'GLS',
  },
  {
    type: 'collaboration',
    page: 'home',
    title: 'Saxo',
  },
  {
    type: 'collaboration',
    page: 'home',
    title: 'Salling',
  },

  // ===== HOME PAGE - VALUES =====
  {
    type: 'value',
    page: 'home',
    number: '01',
    short: 'Livet er for kort til kedelige arbejdspladser',
    long: 'Det skal være sjovt og udviklende at gå på arbejde — både i vores samarbejde og i vores opgaveløsning.',
  },
  {
    type: 'value',
    page: 'home',
    number: '02',
    short: 'Livet er for kort til halvtomme glas',
    long: 'Vi vil gerne have de positive briller på og se muligheder i stedet for begrænsninger.',
  },
  {
    type: 'value',
    page: 'home',
    number: '03',
    short: 'Livet er for kort til korte relationer',
    long: 'Vi vil gerne have langvarige relationer til hinanden og vores kunder.',
  },
  {
    type: 'value',
    page: 'home',
    number: '04',
    short: 'Livet er for kort til ligegyldighed',
    long: 'Vi tager ansvar for mennesker, opgaver og resultater – og for det samfund, vi er en del af.',
  },

  // ===== HOME PAGE - SPOTLIGHT/CAREERS =====
  {
    type: 'career',
    page: 'home',
    title: 'LIVET ER FOR KORT TIL KEDELIGE ARBEJDSPLADSER',
    desc: 'Bag stærke løsninger står passionerede mennesker. Vi tror på forskellighed, fællesskab og faglighed. Der er plads til både grin og ambitioner. Og til at dyrke fællesskabet – også uden for arbejdet.',
    cta: 'BLIV EN DEL AF HOLDET',
  },

  // ===== SERVICES PAGE - SERVICES OVERVIEW =====
  {
    type: 'service-overview',
    page: 'services',
    title: 'DIGITAL',
    desc: 'Her finder du løsninger, der spænder fra web til systemer og automatisering.',
    link: '/digital',
  },
  {
    type: 'service-overview',
    page: 'services',
    title: 'FINANCE',
    desc: 'Planlægning og overblik, økonomi, budget og prognoser – skræddersyet til din forretning.',
  },
  {
    type: 'service-overview',
    page: 'services',
    title: 'BRAND & STRATEGY',
    desc: 'Brand, strategi og design, der hjælper med at finde jeres retning.',
  },
  {
    type: 'service-overview',
    page: 'services',
    title: 'BUSINESS SYSTEMS',
    desc: 'Drift, HR, data og forretningssystemer samlet ét sted.',
  },

  // ===== SERVICES PAGE - AWARDS =====
  {
    type: 'award',
    page: 'services',
    title: '+13 PRISER VUNDET',
    desc: 'Fang os hvis du kan, for vi er blandt de hurtigste på den ambitiøse spillebane. Indtil videre har vi vundet mere end 13 Børsen Gazelle-priser, og det taler næsten for sig selv. Vi arbejder målrettet for at udvikle os, springe højt og gøre os fortjent til endnu flere priser.',
  },

  // ===== SERVICES PAGE - VIDEN SECTION =====
  {
    type: 'blog-post',
    page: 'services',
    date: 'd. 5. januar 2026',
    title: 'VIL DU OGSÅ DET DER COMPUTER?',
    readtime: '7 min.',
  },
  {
    type: 'blog-post',
    page: 'services',
    date: 'd. 5. januar 2026',
    title: 'ANNETTES TILGANG ER ENKEL: ORDENTLIGHED BETALER SIG',
    readtime: '9 min.',
  },
  {
    type: 'blog-post',
    page: 'services',
    date: 'd. 6. november 2025',
    title: 'LIVET ER FOR KORT TIL GRÅDIGHED',
    readtime: '4 min.',
  },
  {
    type: 'blog-post',
    page: 'services',
    date: 'd. 10. oktober 2025',
    title: 'EFFEKTIV HÅNDTERING AF PRODUKTANSVAR FOR EMBALLAGE MED NAVITUS: BUSINESS CENTRAL UDVIDELSE',
    readtime: '7 min.',
  },

  // ===== DIGITAL PAGE =====
  {
    type: 'digital-hero',
    page: 'digital',
    title: 'VI LOVER IKKE GULD OG GRØNNE SKÆRME – BARE RIGTIG GODE DIGITALE LØSNINGER',
    desc: 'Vi er et team, der hellere vil stille de rigtige spørgsmål end at komme med hurtige svar. På den måde skaber vi digitale løsninger, der faktisk holder.',
  },
];

export default searchIndex;