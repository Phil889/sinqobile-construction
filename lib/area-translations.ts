/**
 * Per-area translation overrides for the area pages.
 *
 * The canonical (EN) area data lives in `locationData` inside
 * `app/[lang]/areas/[area]/page.tsx`. This module supplies AF / ZU / ST
 * translations of the visible content fields: description, testimonial body,
 * testimonial location, localInfo paragraph, highlights, services, and the
 * full Q&A blocks.
 *
 * Fields that are proper nouns or numeric (name, suburbs, projects, rating,
 * testimonial.author, geo) stay unchanged across locales.
 *
 * The `localizeLocation()` helper merges an EN location record with its
 * per-locale overrides. Missing keys gracefully fall back to EN.
 */

export type Locale = 'en' | 'af' | 'zu' | 'st'

export interface AreaTranslation {
  description?: string
  testimonialText?: string
  testimonialLocation?: string
  localInfo?: string
  highlights?: string[]
  services?: string[]
  faqs?: { question: string; answer: string }[]
}

// Service labels recur across areas — defined once per locale.
const SERVICE_LABELS: Record<'af' | 'zu' | 'st', Record<string, string>> = {
  af: {
    'Residential Building & Extensions': 'Residensiële Bouwerk & Uitbreidings',
    'Home Renovations & Remodeling': 'Huisopknappings & Hermodellering',
    'Home Renovations': 'Huisopknappings',
    'Roofing & Waterproofing': 'Dakwerk & Waterdigting',
    'Roofing & Roof Repairs': 'Dakwerk & Dakherstelwerk',
    'Plastering & Painting': 'Pleisterwerk & Verfwerk',
    'Plastering & Skimming': 'Pleisterwerk & Afwerking',
    'Paving & Driveways': 'Plaveisel & Opritte',
    'Paving & Concrete Work': 'Plaveisel & Beton',
    'Plumbing Services': 'Loodgieterswerk Dienste',
    'Plumbing & Geyser Installation': 'Loodgieterswerk & Geiser Installasie',
    'Tiling & Flooring': 'Teëlwerk & Vloere',
    'General Maintenance': 'Algemene Onderhoud',
    'Building Maintenance': 'Gebou Onderhoud',
    'Interior & Exterior Painting': 'Binnenshuis & Buite Verfwerk',
    'New Home Construction': 'Nuwe Huiskonstruksie',
    'Modern Extensions & Additions': 'Moderne Uitbreidings & Toevoegings',
    'Luxury Home Renovations': 'Luukse Huisopknappings',
    'High-End Finishes & Tiling': 'Hoë-end Afwerkings & Teëlwerk',
    'Premium Roofing Solutions': 'Premium Dakwerk Oplossings',
    'Designer Paving & Landscaping': 'Ontwerper Plaveisel & Landskap',
    'Smart Home Integration': 'Slimhuis Integrasie',
    'Commercial Office Fit-outs': 'Kommersiële Kantoor Uitrustings',
    'Property Maintenance': 'Eiendom Onderhoud',
  },
  zu: {
    'Residential Building & Extensions': 'Ukwakha Izindlu Zasekhaya Nezandiso',
    'Home Renovations & Remodeling': 'Ukuvuselelwa Nokubunjwa Kabusha Kwekhaya',
    'Home Renovations': 'Ukuvuselelwa Kwekhaya',
    'Roofing & Waterproofing': 'Uphahla Nokuvalwa Kwamanzi',
    'Roofing & Roof Repairs': 'Uphahla Nokulungiswa Kophahla',
    'Plastering & Painting': 'Ukubhinca Nokupenda',
    'Plastering & Skimming': 'Ukubhinca Nokucwala',
    'Paving & Driveways': 'Ukungcweka Nezindlela Zemoto',
    'Paving & Concrete Work': 'Ukungcweka Nomsebenzi Wekhonkrithi',
    'Plumbing Services': 'Izinsiza Zamapayipi',
    'Plumbing & Geyser Installation': 'Amapayipi Nokufakwa Kwegesi',
    'Tiling & Flooring': 'Amatayela Nendlu Yaphansi',
    'General Maintenance': 'Ukunakekelwa Okuvamile',
    'Building Maintenance': 'Ukunakekelwa Kwesakhiwo',
    'Interior & Exterior Painting': 'Ukupenda Ngaphakathi Nangaphandle',
    'New Home Construction': 'Ukwakha Ikhaya Elisha',
    'Modern Extensions & Additions': 'Izandiso Nezengezo Zesimanjemanje',
    'Luxury Home Renovations': 'Ukuvuselelwa Okukhulu Kwamakhaya',
    'High-End Finishes & Tiling': 'Ukuqedwa Okuphezulu Namatayela',
    'Premium Roofing Solutions': 'Izixazululo Eziphezulu Zophahla',
    'Designer Paving & Landscaping': 'Ukungcweka Komklami Nokulungiswa Komhlaba',
    'Smart Home Integration': 'Ukuhlanganiswa Kwekhaya Elihlakaniphile',
    'Commercial Office Fit-outs': 'Ukuhlonyiswa Kwamahhovisi Ezentengiselwano',
    'Property Maintenance': 'Ukunakekelwa Kwepropathi',
  },
  st: {
    'Residential Building & Extensions': 'Kaho ea Matlo a Bodulo le Keketso',
    'Home Renovations & Remodeling': 'Ntlafatso le Ho Aha Botjha ha Matlo',
    'Home Renovations': 'Ntlafatso ea Matlo',
    'Roofing & Waterproofing': 'Marulelo le Tšireletso ea Metsi',
    'Roofing & Roof Repairs': 'Marulelo le Litokiso tsa Marulelo',
    'Plastering & Painting': 'Pleister le Ho Penta',
    'Plastering & Skimming': 'Pleister le Ho Ngangela',
    'Paving & Driveways': 'Peleto le Litsela tsa Likoloi',
    'Paving & Concrete Work': 'Peleto le Mosebetsi oa Konkreite',
    'Plumbing Services': 'Litshebeletso tsa Lipeipi',
    'Plumbing & Geyser Installation': 'Lipeipi le Ho Beoa ha Geyser',
    'Tiling & Flooring': 'Litaele le Mokatong',
    'General Maintenance': 'Tlhokomelo e Tloaelehileng',
    'Building Maintenance': 'Tlhokomelo ea Moaho',
    'Interior & Exterior Painting': 'Ho Penta ka Hare le ka Ntle',
    'New Home Construction': 'Kaho ea Ntlo e Ntjha',
    'Modern Extensions & Additions': 'Keketso le Tlatsetso tsa Sejoale-joale',
    'Luxury Home Renovations': 'Ntlafatso ea Matlo a Khabane',
    'High-End Finishes & Tiling': 'Liqetello tse Phahameng le Litaele',
    'Premium Roofing Solutions': 'Tharollo ea Marulelo ea Boemo bo Phahameng',
    'Designer Paving & Landscaping': 'Peleto ea Mokopisi le Tsoso ea Naha',
    'Smart Home Integration': 'Tšitisano ea Ntlo e Bohlale',
    'Commercial Office Fit-outs': 'Ho Hlomelloa ha Diofisi tsa Khoebo',
    'Property Maintenance': 'Tlhokomelo ea Thepa',
  },
}

function translateServiceList(en: string[], lang: 'af' | 'zu' | 'st'): string[] {
  const dict = SERVICE_LABELS[lang]
  return en.map((s) => dict[s] || s)
}

export const AREA_TRANSLATIONS: Record<'af' | 'zu' | 'st', Record<string, AreaTranslation>> = {
  af: {
    johannesburg: {
      description: 'Professionele konstruksiedienste in Johannesburg CBD en omliggende voorstede. Met meer as 15 jaar ondervinding het Sinqobile Construction 150+ projekte regoor Johannesburg voltooi — van residensiële opknappings tot kommersiële konstruksie.',
      testimonialText: 'Sinqobile Construction het ons Johannesburg-huis met \'n volledige opknapping omskep. Hulle aandag aan detail en professionaliteit het ons verwagtinge oortref. Sterk aanbeveel vir enige konstruksiewerk in Johannesburg!',
      testimonialLocation: 'Sandton, Johannesburg',
      localInfo: 'Johannesburg is Suid-Afrika se grootste stad en ekonomiese sentrum, met \'n diverse eiendomsmark wat strek van historiese huise in Parktown en Houghton tot moderne ontwikkelings in Sandton en Bryanston. Bouplanne in Johannesburg word ingedien by die Stad van Johannesburg Metropolitaanse Munisipaliteit, met goedkeuringstye gewoonlik 4–12 weke. Die stad se kleigrond vereis sorgvuldige fondamentontwerp — die meeste nuwe huise gebruik plat-tipe fondamente. Johannesburg se somerstoime (Oktober–Maart) vereis kwaliteit dakwerk en waterdigting. Konstruksiekoste in Johannesburg wissel van R10,000–R20,000 per vierkante meter vir residensiële bouwerke in 2026.',
      highlights: [
        'Vinnige reaksietye regoor alle Johannesburg-voorstede',
        'Plaaslike kundigheid met 15+ jaar in Johannesburg',
        'Vertroud met Johannesburg bouregulasies',
        '150+ projekte in die Johannesburg-omgewing voltooi',
        'Vertrou deur Johannesburg-huiseienaars en besighede',
      ],
      faqs: [
        { question: 'Hoeveel kos dit om in Johannesburg te bou in 2026?', answer: 'Residensiële konstruksie in Johannesburg kos R10,000–R20,000 per vierkante meter in 2026. \'n Standaard 3-slaapkamer huis (120–150 m²) kos ongeveer R1.2M–R2.5M. Opknappingskoste wissel van R7,000–R20,000/m². Hierdie pryse wissel volgens voorstede — Sandton en die noordelike voorstede is geneig om 10–15% hoër te wees weens premium afwerkings en materiaal verwagtinge. Ons verskaf gratis, geïtemiseerde kwotasies vir enige projek in Johannesburg.' },
        { question: 'Het ek goedgekeurde bouplanne in Johannesburg nodig?', answer: 'Ja. Alle strukturele werk, nuwe bouwerke, uitbreidings, en groot opknappings in Johannesburg vereis bouplanne wat deur die Stad van Johannesburg Metropolitaanse Munisipaliteit goedgekeur is. Planne moet deur \'n SACAP-geregistreerde argitek geteken word. Goedkeuring neem 4–12 weke. Bouwerk sonder goedgekeurde planne is onwettig — die struktuur kan nie verseker, verband of verkoop word nie. Ons hanteer die volle planne-proses van argitek-aanstelling tot raadsindiening.' },
        { question: 'Watter Johannesburg-voorstede bedien julle?', answer: 'Ons bedien alle 8 van ons primêre Johannesburg-areas — Sandton, Bryanston, Fourways, Randburg, Midrand, Rosebank, Melville, Parktown, Houghton, Northcliff, Linden, Bedfordview, Edenvale, Alberton en Soweto — plus die wyer Oos-Rand, Wes-Rand en suidelike voorstede. Ons hoofkantoor is in Fourways, Sandton, wat ons \'n 30–45 minute rit van die meeste projekte in die JHB-metro plaas. Terreinbesoeke is gratis binne 50 km van Sandton CBD.' },
        { question: 'Hoe lank neem bouplan-goedkeuring met die Stad van Johannesburg?', answer: 'Standaard residensiële bouplanne wat by die Stad van Johannesburg Metropolitaanse Munisipaliteit ingedien word, neem tipies 4 tot 12 weke om in 2026 goedgekeur te word — 4–6 weke vir reguit enkel-verdieping toevoegings en geringe wysigings, 8–12 weke vir nuwe bouwerke, tweede-verdieping toevoegings en ontwikkelings wat hersoneering, stormwater of geotegniese insette vereis. Planne moet deur \'n SACAP-geregistreerde argitek of bevoegde tekenaar geteken en deur die CoJ Ontwikkelingsbeplanning portaal ingedien word. Kommersiële en multi-eenheid residensiële goedkeurings neem gewoonlik langer (12–24 weke). Sinqobile Construction koördineer die argitek, strukturele ingenieur, planne-indiening en raadsopvolg op elke Johannesburg-projek.' },
        { question: 'Waarom gebruik Johannesburg-bouers plat-tipe fondamente op so baie terreine?', answer: 'Groot dele van Johannesburg lê op opswellende kleigronde — veral voorstede soos Linbro Park, Glenvista, Edenvale, dele van Bedfordview en die Oos-Rand — waar gronvogveranderinge vertikale beweging veroorsaak wat konvensionele strookvoete kan kraak. Suid-Afrikaanse Nasionale Standaard SANS 10400-H vereis dat fondamente vir die spesifieke grondklas ontwerp word, en op opswellende klei is dit tipies \'n versterkte plat-tipe fondament of pyl-fondament. Sinqobile Construction laat \'n geotegniese terreinondersoek op elke Johannesburg nuwe-bou en versterkte-blad projek voor fondament-ontwerp doen, sodat die fondament-tipe by die werklike grondtoestand van jou stand pas.' },
        { question: 'Hoe verifieer ek dat \'n Johannesburg-bouer NHBRC-geregistreer is?', answer: 'Jy kan enige Suid-Afrikaanse bouer se NHBRC-registrasie in twee minute via die NHBRC aanlyn-register by nhbrc.org.za verifieer — soek volgens maatskappynaam of registrasienommer om te bevestig dat die registrasie huidig is en projek-inskrywings en klagtegeskiedenis na te gaan. Onder die Wet op die Beskerming van Behuisingsverbruikersmaatreëls (1998), moet elke nuwe huis wat vir bewoning gebou word, minstens 15 dae voor konstruksie begin by die NHBRC ingestel word, deur \'n geregistreerde bouer. Sinqobile Construction is sedert 2010 NHBRC-geregistreer en stel elke nuwe huis en kwalifiserende uitbreiding voor grondbreking in — jou NHBRC-inskrywingsertifikaat word saam met die projek oorhandig.' },
      ],
    },
    sandton: {
      description: 'Premium konstruksie- en opknappingsdienste in Sandton — Afrika se rykste vierkante myl. Spesialiseer in hoë-end residensiële en kommersiële projekte regoor Sandton se prestige voorstede insluitend Sandhurst, Morningside, en Hyde Park. Sinqobile Construction lewer uitsonderlike kwaliteit vir Sandton se veeleisende eienaars, met 120+ voltooide projekte en NHBRC-registrasie.',
      testimonialText: 'Uitstekende diens van Sinqobile Construction op ons Sandton-eiendom. Hulle het ons visie vir \'n moderne opknapping verstaan en het bo verwagtinge gelewer. Professioneel, betroubaar, en uitstekende kwaliteit.',
      testimonialLocation: 'Morningside, Sandton',
      localInfo: 'Sandton is Afrika se finansiële hoofstad en een van die welvarendste areas in Suid-Afrika. Eiendomme hier verg premium afwerkings — ingevoerde teëls, klipwerkblaaie, ontwerper toebehore, en slimhuis integrasie. Opknappingskoste in Sandton is 10–15% bo die Gauteng-gemiddeld. Die area bevat ook eksklusiewe landgoedere (Sandhurst, Hyde Park, Morningside) met streng argitektoniese riglyne. Ons het ondervinding om binne landgoed-ontwerp vereistes en regsverenigingsgoedkeurings te werk. Bouplan-indienings gaan deur die Stad van Johannesburg (Sandton val onder CoJ).',
      highlights: [
        'Spesialiseer in premium Sandton-eiendomme',
        '120+ suksesvolle projekte in Sandton',
        'Begrip van Sandton-boustandaarde',
        'Vinnige reaksie regoor alle Sandton-voorstede',
        'Vertrou deur Sandton-inwoners vir kwaliteitswerk',
      ],
      faqs: [
        { question: 'Waarom is konstruksiekoste hoër in Sandton?', answer: 'Sandton konstruksiekoste is 10–15% bo die Gauteng-gemiddeld omdat eienaars premium afwerkings verwag (ingevoerde marmer, Caesarstone-werkblaaie, vloerverhitting), huise groter is (300–600 m²), en landgoedere dikwels spesifieke argitekte en materiale vereis. Geskoolde kontrakteurs in die area vra hoër tariewe weens vraag. Ons Fourways-basis gee ons mededingende toegang tot Sandton sonder die premium markup van Sandton-eksklusiewe kontrakteurs.' },
        { question: 'Werk julle in Sandton sekuriteit-landgoedere?', answer: 'Ja. Ons het projekte in Sandhurst, Morningside, Hyde Park, Bryanston, en ander Sandton-landgoedere voltooi. Ons is vertroud met landgoed-toegangsprosedures, argitektoniese riglyne, en regsverenigings-goedkeuringsvereistes. Ons koördineer met landgoedbestuurders om voldoening met alle boureëls te verseker.' },
        { question: 'Watter konstruksiedienste is die gewildste in Sandton?', answer: 'Die mees aangevraagde dienste in Sandton is luukse huisopknappings (kombuis- en badkameropgraderings met premium afwerkings), huisuitbreidings en tweede-verdieping toevoegings, swembad-omgewings en buite-vermaakareas, en sekuriteitsopgraderings (grensmure, elektriese omheinings, hek-outomasie). Slimhuis integrasie (geoutomatiseerde beligting, HVAC, sekuriteit) word toenemend gewild in Sandton-eiendomme.' },
      ],
    },
    pretoria: {
      description: 'NHBRC-geregistreerde bouers wat Pretoria, Tshwane en Centurion bedien. Sinqobile Construction bring 15+ jaar van kundigheid na Pretoria Oos, Wes en Noord — van luukse opknappings in Waterkloof en Mooikloof tot nuwe bouwerke in Montana en Garsfontein. 100+ voltooide projekte regoor Suid-Afrika se hoofstad.',
      testimonialText: 'Ons het Sinqobile Construction gehuur vir \'n groot opknapping in Pretoria Oos. Hulle was professioneel, op tyd, en die kwaliteit van werk was uitstekend. Sal hulle beslis weer gebruik vir toekomstige projekte.',
      testimonialLocation: 'Garsfontein, Pretoria',
      localInfo: 'Pretoria (Tshwane) is Suid-Afrika se administratiewe hoofstad, met \'n eiendomsmark wat strek van erfeniswonings in Arcadia en Brooklyn tot moderne landgoedere in Mooikloof en Silverlakes. Bouplanne word by die Stad van Tshwane Metropolitaanse Munisipaliteit ingedien. Pretoria-konstruksiekoste is gewoonlik 5–10% laer as Johannesburg. Die stad se rooi grond (ystergeryke klei) vereis behoorlike fondamentontwerp — plat-tipe fondamente is standaard vir nuwe bouwerke. Pretoria ervaar ryp in winter (Mei–Augustus), wat konstruksieskedulering vir beton- en pleisterwerk beïnvloed.',
      highlights: [
        'Uitgebreide ondervinding in Pretoria-konstruksie',
        '100+ projekte in Pretoria voltooi',
        'Kennis van Pretoria-boukodes',
        'Bedien alle Pretoria-voorstede',
        'Betroubare diens regoor Pretoria Oos en Wes',
      ],
      faqs: [
        { question: 'Hoeveel kos bou in Pretoria in 2026?', answer: 'Konstruksie in Pretoria kos R9,000–R18,000 per vierkante meter in 2026 — ongeveer 5–10% laer as Johannesburg. \'n Standaard 3-slaapkamer huis kos R1.0M–R2.2M. Opknappingskoste wissel van R6,000–R18,000/m². Premium bouwerke in landgoedere soos Waterkloof en Mooikloof is aan die hoër kant. Ons verskaf gratis kwotasies vir projekte regoor Pretoria en Centurion.' },
        { question: 'Gaan Pretoria-bouplanne deur \'n ander raad as Johannesburg?', answer: 'Ja. Pretoria-bouplanne word by die Stad van Tshwane Metropolitaanse Munisipaliteit ingedien, nie by die Stad van Johannesburg nie. Die proses is soortgelyk (SACAP-argitek, planne-indiening, 4–12 weke goedkeuring) maar die kantoor en vereistes verskil. Ons hanteer planne-indienings vir beide Tshwane en CoJ en ken die vereistes vir elkeen.' },
        { question: 'Watter Pretoria-areas dek julle?', answer: 'Ons bedien alle Pretoria-voorstede: Centurion, Hatfield, Brooklyn, Menlyn, Waterkloof, Lynnwood, Garsfontein, Faerie Glen, Moreleta Park, Silverlakes, Mooikloof, Montana, Sinoville, Arcadia, Newlands, en omliggende areas. Ons projekte strek van Pretoria Oos tot Pretoria Noord en Wes.' },
      ],
    },
    centurion: {
      description: 'NHBRC-geregistreerde bouers in Centurion met 80+ voltooide projekte. Sinqobile Construction lewer kwaliteit opknappings, uitbreidings, en nuwe bouwerke regoor Eldoraigne, Irene, Lyttelton, Wierdapark, en alle Centurion-voorstede. 15+ jaar ondervinding, 4.9★ aangeslaan.',
      testimonialText: 'Uitstekende bouwerk op ons Centurion huisuitbreiding. Die span was professioneel en het die projek volgens skedule voltooi. Baie tevrede met die kwaliteit.',
      testimonialLocation: 'Eldoraigne, Centurion',
      localInfo: 'Centurion is \'n vinnig-groeiende residensiële sentrum tussen Johannesburg en Pretoria, gewild onder families en jong professionele persone. Die area bied \'n mengsel van gevestigde voorstede (Eldoraigne, Lyttelton) en moderne landgoedere (Amberfield, The Reeds). Bouplanne word by die Stad van Tshwane ingedien. Centurion-konstruksiekoste is soortgelyk aan Pretoria — R9,000–R16,000/m² vir residensiële bouwerke. Die area se nabyheid aan die N1 en N14 maak dit toeganklik van beide Johannesburg en Pretoria.',
      highlights: [
        'Bedien alle Centurion-voorstede met kwaliteitskonstruksie',
        '80+ projekte in die Centurion-area voltooi',
        'Vertroud met Centurion munisipale bouvereistes',
        'Vinnige reaksietye regoor Centurion',
        'Vertrou deur Centurion-huiseienaars vir 15+ jaar',
      ],
      faqs: [
        { question: 'Hoeveel kos \'n huisopknapping in Centurion?', answer: 'Huisopknappings in Centurion kos R6,000–R18,000 per vierkante meter in 2026. Kombuisopknappings wissel van R50,000–R250,000, badkameropknappings R15,000–R80,000. Centurion-pryse is gewoonlik 5–10% laer as Johannesburg. Ons verskaf gratis op-die-terrein assesserings en geïtemiseerde kwotasies vir alle opknappingsprojekte in Centurion.' },
        { question: 'Bou julle oumensiewonings in Centurion?', answer: 'Ja. Oumensiewonings is baie gewild in Centurion weens huurvraag van studente en jong professionele persone. \'n 40 m² oumensiewoning kos R350,000–R700,000 en kan R5,000–R10,000/maand huurinkomste genereer. Raads-goedgekeurde planne is vereis deur die Stad van Tshwane. Ons hanteer die volle proses van ontwerp tot oorhandiging.' },
        { question: 'Watter Centurion-voorstede bedien julle?', answer: 'Ons bedien alle Centurion-voorstede: Eldoraigne, Wierdapark, Lyttelton, The Reeds, Hennopspark, Zwartkop, Clubview, Rooihuiskraal, Irene, Doringkloof, Amberfield, Pierre van Ryneveld, en omliggende areas.' },
      ],
    },
    midrand: {
      description: 'NHBRC-geregistreerde bouers in Midrand — die korridor wat Johannesburg en Pretoria verbind. Sinqobile Construction het 90+ projekte regoor Waterfall, Kyalami, Carlswald, Halfway House, en alle Midrand-voorstede voltooi. Spesialiseer in landgoed-konstruksie, residensiële opknappings, en nuwe bouwerke met 15+ jaar ondervinding.',
      testimonialText: 'Sinqobile Construction het \'n fantastiese werk gedoen op ons Midrand-eiendomsopknapping. Professionele diens van begin tot einde.',
      testimonialLocation: 'Waterfall, Midrand',
      localInfo: 'Midrand is die strategiese korridor tussen Johannesburg en Pretoria, tuiste van Waterfall City, Kyalami, en talle residensiële landgoedere. Die area het vinnige ontwikkeling beleef met moderne landgoedere soos Waterfall, Sagewood, en Blue Hills wat nuwe bouwerke en opknappings trek. Bouplanne gaan deur die Stad van Johannesburg (suidelike Midrand) of Stad van Tshwane (noordelike Midrand) — ons weet onder watter munisipaliteit jou eiendom val. Landgoed-bouwerke vereis voldoening aan huiseienaarsvereniging argitektoniese riglyne.',
      highlights: [
        'Gerieflik geleë om alle Midrand-areas te bedien',
        '90+ projekte regoor Midrand voltooi',
        'Ondervinding met Midrand-landgoed ontwikkelings',
        'Vinnige reaksietye regoor Midrand',
        'Vertroude konstruksie-vennoot in die Midrand-korridor',
      ],
      faqs: [
        { question: 'Bou julle in Midrand-landgoedere soos Waterfall en Kyalami?', answer: 'Ja. Ons het projekte in Waterfall, Kyalami, Beaulieu, Blue Hills, en ander Midrand-landgoedere voltooi. Ons is vertroud met landgoed argitektoniese riglyne, boumateriaal vereistes, en huiseienaarsvereniging goedkeuringsprosesse. Ons koördineer met landgoedbestuurders om volle voldoening met alle boureëls te verseker voordat enige werk begin.' },
        { question: 'Watter raad hanteer Midrand-bouplanne?', answer: 'Midrand is verdeel tussen twee munisipaliteite. Eiendomme suid van die ou Midrand-grens (Halfway House, Carlswald, Vorna Valley) val onder die Stad van Johannesburg. Eiendomme noord (Noordwyk, dele van Kyalami) val onder die Stad van Tshwane. Ons bepaal onder watter munisipaliteit jou eiendom val en dien planne by die korrekte raad in.' },
        { question: 'Hoeveel kos bou in Midrand?', answer: 'Konstruksie in Midrand kos R10,000–R18,000 per vierkante meter in 2026. Landgoed-bouwerke is gewoonlik aan die hoër kant weens premium materiaal- en ontwerpvereistes. Opknappings kos R7,000–R16,000/m². \'n Oumensiewoning (40 m²) kos R350,000–R650,000. Ons verskaf gratis kwotasies vir alle Midrand-projekte.' },
      ],
    },
    randburg: {
      description: 'NHBRC-geregistreerde bouers in Randburg met 70+ voltooide projekte. Sinqobile Construction bedien alle 32+ Randburg-voorstede — van Northcliff en Linden tot Ferndale, Northriding, en Randpark Ridge. Spesialiseer in huisopknappings, uitbreidings, en residensiële konstruksie met 15+ jaar ondervinding en \'n 4.9★ aanslag.',
      testimonialText: 'Goeie pleisterwerk en verfwerk op ons Randburg-huis. Die span was netjies, professioneel, en het op tyd gelewer. Sterk aanbeveel.',
      testimonialLocation: 'Linden, Randburg',
      localInfo: 'Randburg is \'n goed-gevestigde residensiële area in Johannesburg se noordelike voorstede, bekend vir sy mengsel van ouer huise met opknappingspotensiaal en moderne ontwikkelings. Voorstede soos Northcliff en Linden het karakter huise uit die 1960s–80s wat baat by modernisering — oop-plan omskakelings, kombuis- en badkameropgraderings, en energie-doeltreffende verbeterings. Bouplanne gaan deur die Stad van Johannesburg. Randburg bied goeie waarde teenoor naburige Sandton, wat dit gewild maak met huiseienaars wat wil opknap en waarde wil toevoeg.',
      highlights: [
        'Uitgebreide ondervinding in Randburg residensiële projekte',
        '70+ suksesvolle projekte regoor Randburg-voorstede',
        'Vinnige reaksie regoor alle Randburg-areas',
        'Kennis van Randburg bouregulasies',
        'Vertrou deur Randburg-huiseienaars vir kwaliteitswerk',
      ],
      faqs: [
        { question: 'Watter opknappings is die gewildste in Randburg?', answer: 'Die mees aangevraagde opknappings in Randburg is kombuismodernisering (oopmaak van geslote kombuise na leefareas), badkameropgraderings, skilderwerk (binnenshuis en buite), en plaveisel/oprit vervanging. Randburg het baie ouer huise uit die 1960s–80s wat baat by hierdie opgraderings. Oop-plan omskakelings is veral gewild aangesien hulle die uitleg moderniseer en eiendomswaarde toevoeg.' },
        { question: 'Hoeveel kos opknapping in Randburg?', answer: 'Opknapping in Randburg kos R7,000–R18,000 per vierkante meter in 2026 — effens onder Sandton-tariewe. Kombuisopknappings wissel van R50,000–R250,000, badkameropknappings R15,000–R80,000. Volle huis-herverf kos R15,000–R40,000. Randburg bied goeie waarde vir opknappingbelegging aangesien eiendomspryse styg maar steeds onder Sandton en Bryanston is.' },
        { question: 'Bedien julle Northcliff en Linden?', answer: 'Ja. Northcliff, Linden, Ferndale, Fontainebleau, Blairgowrie, Bordeaux, Robin Hills, Bromhof, Northriding, Randpark Ridge, Fairland, en Cresta is almal binne ons diens-area. Ons Fourways-basis is \'n kort rit van alle Randburg-voorstede.' },
      ],
    },
    fourways: {
      description: 'Kwaliteit konstruksiedienste in Fourways en omliggende landgoedere. Sinqobile Construction lewer premium bou-, opknappings- en onderhoudsdienste met 65+ voltooide projekte in die Fourways-area.',
      testimonialText: 'Sinqobile Construction het \'n pragtige stoep en braai-area by ons Fourways-huis gebou. Uitstekende vakmanskap en goeie kommunikasie deurgaans.',
      testimonialLocation: 'Lonehill, Fourways',
      localInfo: 'Fourways is een van Johannesburg se vinnigste-groeiende voorstede, tuiste van Fourways Mall, talle residensiële landgoedere, en \'n mengsel van moderne tros-ontwikkelings en vrystaande huise. Ons hoofkantoor is in Fourways (Broadacres Drive) geleë, wat dit ons tuisgrond maak. Ons het diepgaande kennis van plaaslike landgoedere — Dainfern, Lonehill, Cedar Lakes, Chartwell — en hul spesifieke argitektoniese vereistes. Bouplanne gaan deur die Stad van Johannesburg. Fourways-konstruksiekoste is vergelykbaar met Sandton teen R10,000–R20,000/m².',
      highlights: [
        'Ervare in Fourways-landgoed ontwikkelings',
        '65+ projekte in Fourways-area voltooi',
        'Begrip van Fourways-boustandaarde',
        'Bedien alle Fourways-voorstede en landgoedere',
        'Kwaliteitskonstruksie vir Fourways-huiseienaars',
      ],
      faqs: [
        { question: 'Is Sinqobile Construction in Fourways gebaseer?', answer: 'Ja. Ons hoofkantoor is by The William 1, Broadacres Drive, Fourways, Sandton 2191. Dit beteken ons het die vinnigste reaksietye vir Fourways-projekte en diepgaande kennis van plaaslike landgoedere, voorstede, en raadsvereistes. Ons het 65+ projekte alleen in die Fourways-area voltooi.' },
        { question: 'Werk julle in Dainfern en ander Fourways-landgoedere?', answer: 'Ja. Ons het projekte in Dainfern, Lonehill, Cedar Lakes, Chartwell, Pineslopes, en ander Fourways-landgoedere voltooi. Ons is vertroud met landgoed argitektoniese riglyne en huiseienaarsvereniging vereistes. Ons koördineer met landgoedbestuurders om te verseker dat alle boureëls nagekom word voor werk begin.' },
        { question: 'Watter konstruksiewerk is algemeen in Fourways?', answer: 'Die mees aangevraagde dienste in Fourways is huisuitbreidings (ekstra slaapkamers, oumensiewonings), stoep- en braai-area konstruksie, grensmuur- en omheining-opgraderings, kombuis- en badkameropknappings, en skilderwerk. Landgoed-eiendomme vereis dikwels buite-opgraderings om aan landgoedstandaarde te voldoen. Nuwe tros-ontwikkelings het soms na-oorhandiging wysigings en verbeterings nodig.' },
      ],
    },
    roodepoort: {
      description: 'Betroubare konstruksie- en boudienste in Roodepoort. Sinqobile Construction het 55+ projekte regoor Roodepoort voltooi, van huisopknappings tot nuwe bouwerke, met kwaliteit vakmanskap gewaarborg.',
      testimonialText: 'Baie beïndruk met die opknappingswerk wat Sinqobile Construction op ons Roodepoort-eiendom gedoen het. Professioneel, bekostigbaar, en hoë kwaliteit.',
      testimonialLocation: 'Honeydew, Roodepoort',
      localInfo: 'Roodepoort is \'n groot residensiële area aan Johannesburg se westelike rand, wat van die mees bekostigbare eiendom in die groter Johannesburg-area bied. Voorstede soos Honeydew, Ruimsig, en Weltevredenpark het beduidende ontwikkeling in die afgelope paar jaar gesien. Die area se laer eiendomspryse maak opknappings en uitbreidings \'n uitstekende belegging — \'n oumensiewoning of ekstra slaapkamer toevoeg lewer sterk ROI. Bouplanne gaan deur die Stad van Johannesburg. Roodepoort-konstruksiekoste is van die mees mededingende in Gauteng teen R8,000–R16,000/m².',
      highlights: [
        'Bedien alle Roodepoort-voorstede',
        '55+ projekte regoor Roodepoort voltooi',
        'Vertroud met Roodepoort munisipale vereistes',
        'Vinnige reaksietye regoor Roodepoort',
        'Kwaliteitskonstruksie teen mededingende tariewe',
      ],
      faqs: [
        { question: 'Hoeveel kos bou in Roodepoort?', answer: 'Konstruksie in Roodepoort kos R8,000–R16,000 per vierkante meter in 2026 — van die mees mededingende tariewe in Gauteng. Opknappings kos R6,000–R15,000/m². Die laer eiendomswaardes vergeleke met Sandton en Fourways maak Roodepoort \'n uitstekende area vir opknappingsbelegging, aangesien opgraderings sterk opbrengs teenoor eiendomsprys lewer.' },
        { question: 'Is dit die moeite werd om in Roodepoort op te knap?', answer: 'Ja. Roodepoort se eiendomspryse styg namate meer families en jong professionele persone na die area trek vir bekostigbaarheid. \'n Goed-uitgevoerde kombuisopknapping (R50,000–R150,000) of oumensiewoning-toevoeging (R300,000–R600,000) kan jou eiendomswaarde aansienlik verhoog en huurinkomste genereer. Die laer basis-konstruksiekoste in Roodepoort beteken beter ROI vergeleke met premium-voorstede.' },
        { question: 'Watter Roodepoort-voorstede bedien julle?', answer: 'Ons bedien alle Roodepoort-voorstede: Florida, Honeydew, Ruimsig, Wilgeheuwel, Constantia Kloof, Little Falls, Horison, Weltevredenpark, Strubens Valley, Radiokop, en omliggende areas. Ons Fourways-basis is \'n 15–20 minute rit van die meeste Roodepoort-voorstede.' },
      ],
    },
  },
  zu: {
    johannesburg: {
      description: 'Izinsiza zokwakha zobungcweti eJohannesburg CBD nasezindaweni ezizungezile. Ngeminyaka engaphezu kwe-15 yolwazi, i-Sinqobile Construction iqede amaphrojekthi angu-150+ kuyo yonke iJohannesburg, kusukela ekuvuselelweni kwasekhaya kuya ekwakhiweni kwezentengiselwano.',
      testimonialText: 'I-Sinqobile Construction yashintsha ikhaya lethu laseJohannesburg ngokuvuselelwa okuphelele. Ukunaka kwabo imininingwane nobungcweti badlula okwakulindelekile kithi. Kunconywa kakhulu nganoma yimuphi umsebenzi wokwakha eJohannesburg!',
      testimonialLocation: 'Sandton, Johannesburg',
      localInfo: 'IJohannesburg yidolobha elikhulu laseNingizimu Afrika kanye nesikhungo sezomnotho, esinemakethe yezindlu ehlukene esukela ezindlini zomlando eParktown naseHoughton kuya ezakhiweni zesimanjemanje eSandton naseBryanston. Izinhlelo zokwakha eJohannesburg zithunyelwa kuMasipala WeDolobha laseJohannesburg, ngezikhathi zokugunyazwa ezivame phakathi kwamasonto ama-4 nayi-12. Inhlabathi yobumba yedolobha idinga ukwakheka kwesisekelo okunakekelwayo — izindlu eziningi ezintsha zisebenzisa izisekelo ze-raft. Iziphepho zaseJohannesburg ehlobo (Okthoba–Mashi) zidinga uphahla nokuvalwa kwamanzi okwekhwalithi. Izindleko zokwakha eJohannesburg zisukela ku-R10,000 kuya ku-R20,000 ngemetha eyisikwele yezakhiwo zasekhaya ngo-2026.',
      highlights: [
        'Izikhathi zokusabela ezisheshayo kuwo wonke amadolobha amancane aseJohannesburg',
        'Ubuchwepheshe bendawo neminyaka engu-15+ eJohannesburg',
        'Sijwayele imithetho yokwakha yaseJohannesburg',
        'Saqede amaphrojekthi angu-150+ endaweni yaseJohannesburg',
        'Sithenjwa abanikazi bezindlu nezamabhizinisi baseJohannesburg',
      ],
      faqs: [
        { question: 'Kubiza malini ukwakha eJohannesburg ngo-2026?', answer: 'Ukwakha izindlu zasekhaya eJohannesburg kubiza ku-R10,000–R20,000 ngemetha eyisikwele ngo-2026. Indlu evamile yamagumbi okulala amathathu (120–150 m²) ibiza cishe u-R1.2M–R2.5M. Izindleko zokuvuselelwa zisuka ku-R7,000–R20,000/m². Lawa manani ahlukene ngokwamadolobha amancane — iSandton namadolobha amancane asenyakatho avame ukuba ngu-10–15% phezulu ngenxa yokuqedwa okuphezulu nezilindelo zezinto. Sinikeza amaquate amahhala nawenze imininingwane kunoma iyiphi iphrojekthi eJohannesburg.' },
        { question: 'Ngidinga izinhlelo zokwakha ezigunyaziwe eJohannesburg?', answer: 'Yebo. Wonke umsebenzi wesakhiwo, ukwakha okusha, izandiso, nokuvuselelwa okukhulu eJohannesburg kudinga izinhlelo zokwakha ezigunyaziwe nguMasipala WeDolobha laseJohannesburg. Izinhlelo kufanele zidwetshwe umakhi obhalisiwe ku-SACAP. Ukugunyazwa kuthatha amasonto ama-4 kuya kwayi-12. Ukwakha ngaphandle kwezinhlelo ezigunyaziwe akukho semthethweni — isakhiwo asikwazi ukubhaliswa, asikwazi ukubekwa noma sithengiswe. Sisingatha inqubo ephelele yezinhlelo kusukela ekuqashweni komakhi kuya ekuthunyelweni kwekhansela.' },
        { question: 'Yiziphi izindawo zaseJohannesburg enizisebenzelayo?', answer: 'Sisebenzela zonke izindawo eziyi-8 ezisemqoka zaseJohannesburg — Sandton, Bryanston, Fourways, Randburg, Midrand, Rosebank, Melville, Parktown, Houghton, Northcliff, Linden, Bedfordview, Edenvale, Alberton naseSoweto — kanye namadolobha amancane aseEast Rand, eWest Rand naseningizimu. Ihhovisi lethu eliyinhloko liseFourways, eSandton, okusinika imizuzu engama-30–45 yokushayela ukufika emaphrojekthini amaningi emetro yaseJHB. Izivakashelo zendawo zimahhala phakathi kwama-50 km eSandton CBD.' },
        { question: 'Kuthatha isikhathi esingakanani ukugunyazwa kohlelo lokwakha ne-City of Johannesburg?', answer: 'Izinhlelo ezivamile zokwakha izindlu zasekhaya ezithunyelwe kuMasipala WeDolobha laseJohannesburg zivame ukuthatha amasonto ama-4 kuya kwayi-12 ukugunyazwa ngo-2026 — amasonto ama-4 kuya kwayi-6 ezandisweni eziqondile zezitezi eziyodwa nezinguquko ezincane, amasonto ayi-8 kuya kwayi-12 ekwakhiweni okusha, izandiso zezitezi zesibili nokuthuthukiswa okudinga ukuhlukaniswa kabusha kwezindawo, amanzi ezimvula noma okufakwa kwe-geotechnical. Izinhlelo kufanele zidwetshwe umakhi obhalisiwe ku-SACAP noma umdwebi ofanele futhi zithunyelwe ngeportal ye-CoJ Development Planning. Izimvume zezentengiselwano nezindlu zasekhaya zamayunithi amaningi zivame ukuthatha isikhathi eside (amasonto ayi-12 kuya kwayi-24). I-Sinqobile Construction ihlanganisa umakhi, injiniyela yezakhiwo, ukuthunyelwa kwehlelo nokulandelelwa kwekhansela kuyo yonke iphrojekthi yaseJohannesburg.' },
        { question: 'Kungani abakhi baseJohannesburg besebenzisa izisekelo ze-raft ezindaweni eziningi?', answer: 'Izingxenye ezinkulu zeJohannesburg zihlala enhlabathini yobumba ekhukhumalayo — ikakhulukazi amadolobha amancane afana neLinbro Park, Glenvista, Edenvale, izingxenye zaseBedfordview kanye ne-East Rand — lapho izinguquko zomswakama enhlabathini zibanga ukunyakaza okuqondile okungafaka ukufa ezisekelweni ezivamile. ISouth African National Standard SANS 10400-H idinga ukuthi izisekelo zakheke ngendlela efanele isigaba esithile senhlabathi, futhi enhlabathini yobumba ekhukhumalayo lokhu ngokuvamile yisisekelo se-raft esiqinile noma isisekelo esinezigxotsho. I-Sinqobile Construction iyala ucwaningo lwendawo lwe-geotechnical kuwo wonke umphakathi waseJohannesburg omusha nephrojekthi ye-slab eqinisiwe ngaphambi kokwakheka kwesisekelo, ngakho uhlobo lwesisekelo luhambisana nezimo zenhlabathi ngempela esikhundleni sakho.' },
        { question: 'Ngikwazi kanjani ukuqinisekisa ukuthi umakhi waseJohannesburg ubhaliswe ku-NHBRC?', answer: 'Ungakwazi ukuqinisekisa ukubhaliswa kwanoma yimuphi umakhi waseNingizimu Afrika ku-NHBRC ngemizuzu emibili nge-NHBRC online registry ku-nhbrc.org.za — sesha ngegama lenkampani noma inombolo yokubhaliswa ukuqinisekisa ukuthi ukubhaliswa kusebenza futhi uhlole nanoma iyiphi imibhalo yephrojekthi nomlando wezikhalo. NgaphansiKomthetho Wezenkonzo Yokuvikelwa Kwabathengi Bezindlu (1998), wonke umuzi omusha owakhelwe ukuhlala kufanele ubhaliswe ne-NHBRC okungenani izinsuku ezingu-15 ngaphambi kokuba ukwakha kuqale, ngumakhi obhalisiwe. I-Sinqobile Construction ibhaliswe ku-NHBRC kusukela ngo-2010 futhi ibhalisa wonke umuzi omusha nesandiso esifanelekayo ngaphambi kokuqala umsebenzi — isitifiketi sakho sokubhaliswa kwe-NHBRC sikhishwa kanye nephrojekthi.' },
      ],
    },
    sandton: {
      description: 'Izinsiza ezisezingeni eliphezulu zokwakha nokuvuselelwa eSandton — imayela yesikwele ecebile kunazo zonke e-Afrika. Singochwepheshe emiphakathini esezingeni eliphezulu yezindlu nezentengiselwano kuyo yonke iSandton kufaka phakathi iSandhurst, Morningside, neHyde Park. I-Sinqobile Construction inikeza ikhwalithi engavamile kubanikazi bepropathi abahluphekayo baseSandton, namaphrojekthi angu-120+ aphethelekile nokubhaliswa kwe-NHBRC.',
      testimonialText: 'Insiza emangalisayo evela ku-Sinqobile Construction kupropathi yethu yaseSandton. Bayiqonda umbono wethu wokuvuselelwa kwesimanjemanje futhi banikeze ngokweqile okwakulindelwe. Bobungcweti, abathembekile, futhi ikhwalithi enhle kakhulu.',
      testimonialLocation: 'Morningside, Sandton',
      localInfo: 'ISandton yinhlokodolobha yezezimali ye-Afrika futhi yenye yezindawo ezicebile kakhulu eNingizimu Afrika. Izindlu lapha zidinga ukuqedwa okuphezulu — amatayela athunyelwe, amagwadla amatshe, izinto zomklami, nokuhlanganiswa kwekhaya elihlakaniphile. Izindleko zokuvuselelwa eSandton zingaphezulu kwesilinganiso saseGauteng nge-10–15%. Le ndawo iphinde ibe nezakhiwo ezikhethekile (Sandhurst, Hyde Park, Morningside) ezineziqondiso ezinzima zezakhiwo. Sinolwazi lokusebenza ngaphakathi kwezidingo zokuklama izakhiwo nezimvume ze-body corporate. Ukuthunyelwa kwezinhlelo zokwakha kuhamba ngeCity of Johannesburg (iSandton ingena ngaphansi kwe-CoJ).',
      highlights: [
        'Singochwepheshe ezindlini eziphezulu zaseSandton',
        'Amaphrojekthi angu-120+ aphumelele eSandton',
        'Ukuqonda izindinganiso zokwakha zaseSandton',
        'Ukusabela okusheshayo kuwo wonke amadolobha amancane aseSandton',
        'Sithenjwa izakhamizi zaseSandton ngomsebenzi wekhwalithi',
      ],
      faqs: [
        { question: 'Kungani izindleko zokwakha ziphezulu eSandton?', answer: 'Izindleko zokwakha zaseSandton zingu-10–15% ngaphezu kwesilinganiso saseGauteng ngoba abanikazi bezindlu balindele ukuqedwa okuphezulu (imabhula ethunyelwe, amagwadla e-Caesarstone, ukushisiswa kwaphansi), izindlu zinkulu (300–600 m²), futhi izakhiwo zivame ukudinga abakhi nezinto eziqondile. Onkontraka abanamava endaweni babiza amanani aphezulu ngenxa yokufunwa. Isizinda sethu seFourways sisinika ukufinyelela okuncintisanayo eSandton ngaphandle kwentengo ephezulu yonkontraka abakhuluma ngeSandton kuphela.' },
        { question: 'Niyasebenza ezakhiweni zezivikelo zaseSandton?', answer: 'Yebo. Sesiqedile amaphrojekthi eSandhurst, Morningside, Hyde Park, Bryanston, nakwezinye izakhiwo zaseSandton. Sijwayele izinqubo zokufinyelela izakhiwo, iziqondiso zezakhiwo, nezidingo zokugunyazwa zenkampani yezakhi. Sihlanganisa abaphathi bezakhiwo ukuqinisekisa ukulandela imithetho yonke yokwakha.' },
        { question: 'Iziphi izinsiza zokwakha ezithandwa kakhulu eSandton?', answer: 'Izinsiza ezicelwa kakhulu eSandton ukuvuselelwa kwezindlu okukhethekile (ukuhlonyiswa kwekhishi negumbi lokugeza ngokuqeda okuphezulu), izandiso zezindlu nezandiso zezitezi zesibili, indawo ezungeza ipuli yokubhukuda nezindawo zokuzijabulisa zangaphandle, nokuhlonyiswa kwezokuphepha (izindonga zomngcele, izinto zikagesi, ukuzenzakalela kwesango). Ukuhlanganiswa kwekhaya elihlakaniphile (ukukhanyisa okuzenzakalelayo, i-HVAC, ezokuphepha) kuya kuthandwa ezindlini zaseSandton.' },
      ],
    },
    pretoria: {
      description: 'Abakhi ababhalisiwe ku-NHBRC abasebenzela iPretoria, iTshwane neCenturion. I-Sinqobile Construction iletha ubungcweti beminyaka engu-15+ ePretoria East, West naseNorth — kusukela ekuvuselelweni okukhetheke eWaterkloof naseMooikloof kuya ekwakhiweni okusha eMontana naseGarsfontein. Amaphrojekthi angu-100+ aphethelekile kuyo yonke inhlokodolobha yaseNingizimu Afrika.',
      testimonialText: 'Saqasha i-Sinqobile Construction ukuvuselelwa okukhulu ePretoria East. Babe bobungcweti, ngesikhathi, futhi ikhwalithi yomsebenzi ibinhle kakhulu. Empeleni sizobasebenzisa futhi ezimaphrojekthi.',
      testimonialLocation: 'Garsfontein, Pretoria',
      localInfo: 'IPretoria (Tshwane) yinhlokodolobha yezokuphatha yaseNingizimu Afrika, enemakethe yezindlu esuka ezindlini zomlando eArcadia naseBrooklyn kuya ezakhiweni zesimanjemanje eMooikloof naseSilverlakes. Izinhlelo zokwakha zithunyelwa kuMasipala WeDolobha laseTshwane. Izindleko zokwakha zasePretoria zivame ukuba ngu-5–10% ngaphansi kwezaseJohannesburg. Inhlabathi ebomvu yedolobha (ubumba bensimbi) idinga ukwakheka okufanele kwesisekelo — izisekelo ze-raft zivamile ekwakhiweni okusha. IPretoria ihlangabezana neqhwa ebusika (Meyi–Agasti), okuyathinta ukuhleliwa kokwakha komsebenzi wekhonkrithi nokubhinca.',
      highlights: [
        'Ulwazi olubanzi ekwakhiweni kwasePretoria',
        'Amaphrojekthi angu-100+ aphethelekile ePretoria',
        'Ulwazi lwemigomo yokwakha yasePretoria',
        'Sisebenzela wonke amadolobha amancane asePretoria',
        'Insiza ethembekayo kuyo yonke iPretoria East naseWest',
      ],
      faqs: [
        { question: 'Kubiza malini ukwakha ePretoria ngo-2026?', answer: 'Ukwakha ePretoria kubiza ku-R9,000–R18,000 ngemetha eyisikwele ngo-2026 — cishe u-5–10% ngaphansi kweJohannesburg. Indlu evamile yamagumbi okulala amathathu ibiza u-R1.0M–R2.2M. Izindleko zokuvuselelwa zisuka ku-R6,000–R18,000/m². Ukwakha okuphezulu ezakhiweni ezifana neWaterkloof neMooikloof kusezingeni eliphezulu. Sinikeza amaquate amahhala kumaphrojekthi kuyo yonke iPretoria neCenturion.' },
        { question: 'Ngabe izinhlelo zokwakha zasePretoria zihamba ngekhansela elihlukile kuneJohannesburg?', answer: 'Yebo. Izinhlelo zokwakha zasePretoria zithunyelwa kuMasipala WeDolobha laseTshwane, hhayi i-City of Johannesburg. Inqubo iyafana (umakhi we-SACAP, ukuthunyelwa kwehlelo, ukugunyazwa kwamasonto ama-4–12) kodwa ihhovisi nezidingo ziyahluka. Siphatha izinhlelo zokuthunyelwa zombili iTshwane ne-CoJ futhi siyazi izidingo zalezi zindawo.' },
        { question: 'Yiziphi izindawo zasePretoria enizimbozayo?', answer: 'Sisebenzela wonke amadolobha amancane asePretoria: Centurion, Hatfield, Brooklyn, Menlyn, Waterkloof, Lynnwood, Garsfontein, Faerie Glen, Moreleta Park, Silverlakes, Mooikloof, Montana, Sinoville, Arcadia, Newlands, nezindawo ezizungezile. Amaphrojekthi ethu asuka ePretoria East kuya ePretoria North naseWest.' },
      ],
    },
    centurion: {
      description: 'Abakhi ababhalisiwe ku-NHBRC eCenturion namaphrojekthi angu-80+ aphethelekile. I-Sinqobile Construction inikeza ikhwalithi yokuvuselelwa, izandiso, nokwakha okusha kuyo yonke iEldoraigne, Irene, Lyttelton, Wierdapark, nawo wonke amadolobha amancane aseCenturion. Iminyaka engu-15+ yolwazi, esinesilinganiso esi-4.9★.',
      testimonialText: 'Umsebenzi ovelele wokwakha esandisweni sethu seCenturion. Iqembu lalingobungcweti futhi liqede iphrojekthi ngohlelo. Sijabule kakhulu ngekhwalithi.',
      testimonialLocation: 'Eldoraigne, Centurion',
      localInfo: 'ICenturion yisikhungo sezindlu esikhulayo ngokushesha phakathi kweJohannesburg nePretoria, esidumile kwabakwemindeni nezikhulu ezisha. Le ndawo inika inhlanganyela yamadolobha amancane asungulwe (Eldoraigne, Lyttelton) nezakhiwo zesimanjemanje (Amberfield, The Reeds). Izinhlelo zokwakha zithunyelwa eCity of Tshwane. Izindleko zokwakha zaseCenturion ziyafana nezasePretoria — R9,000–R16,000/m² yezindlu zasekhaya. Ukuseduze kwale ndawo ku-N1 nakuN14 kuyenza ifinyeleleke kusukela eJohannesburg kuya ePretoria.',
      highlights: [
        'Sisebenzela wonke amadolobha amancane aseCenturion ngokwakha kwekhwalithi',
        'Amaphrojekthi angu-80+ aphethelekile endaweni yaseCenturion',
        'Sijwayele izidingo zokwakha zikamasipala zaseCenturion',
        'Izikhathi zokusabela ezisheshayo kuyo yonke iCenturion',
        'Sithenjwa abanikazi bezindlu baseCenturion iminyaka engu-15+',
      ],
      faqs: [
        { question: 'Kubiza malini ukuvuselelwa kwekhaya eCenturion?', answer: 'Ukuvuselelwa kwekhaya eCenturion kubiza ku-R6,000–R18,000 ngemetha eyisikwele ngo-2026. Ukuvuselelwa kwekhishi kusuka ku-R50,000–R250,000, ukuvuselelwa kwegumbi lokugeza ku-R15,000–R80,000. Amanani aseCenturion ngokuvamile angu-5–10% ngaphansi kweJohannesburg. Sinikeza ukuhlolwa kwendawo kwamahhala namaquate enzelwe kuwo wonke amaphrojekthi okuvuselelwa eCenturion.' },
        { question: 'Niyazakha izindlu zomkhulu eCenturion?', answer: 'Yebo. Izindlu zomkhulu zithandwa kakhulu eCenturion ngenxa yesidingo sokuqasha kubafundi nezikhulu ezisha. Indlu yomkhulu engu-40 m² ibiza u-R350,000–R700,000 futhi ingakhokha imali yokuqasha engu-R5,000–R10,000/ngenyanga. Izinhlelo ezigunyaziwe yikhansela ziyadingeka nge-City of Tshwane. Sisingatha inqubo ephelele kusukela ekuklanyweni kuya ekuhambisweni.' },
        { question: 'Yiziphi izindawo zaseCenturion enizisebenzelayo?', answer: 'Sisebenzela wonke amadolobha amancane aseCenturion: Eldoraigne, Wierdapark, Lyttelton, The Reeds, Hennopspark, Zwartkop, Clubview, Rooihuiskraal, Irene, Doringkloof, Amberfield, Pierre van Ryneveld, nezindawo ezizungezile.' },
      ],
    },
    midrand: {
      description: 'Abakhi ababhalisiwe ku-NHBRC eMidrand — i-corridor ehlanganisa iJohannesburg nePretoria. I-Sinqobile Construction iqede amaphrojekthi angu-90+ kuyo yonke iWaterfall, Kyalami, Carlswald, Halfway House, nawo wonke amadolobha amancane aseMidrand. Singochwepheshe ekwakhiweni kwezakhiwo, ukuvuselelwa kwezindlu zasekhaya, nokwakha okusha ngeminyaka engu-15+ yolwazi.',
      testimonialText: 'I-Sinqobile Construction yenze umsebenzi omangalisayo ekuvuselelweni kwepropathi yethu yaseMidrand. Insiza yobungcweti kusukela ekuqaleni kuye ekugcineni.',
      testimonialLocation: 'Waterfall, Midrand',
      localInfo: 'IMidrand yi-corridor yamacebo phakathi kweJohannesburg nePretoria, ikhaya leWaterfall City, Kyalami, nezakhiwo eziningi zezindlu. Le ndawo iye yaba nokuthuthuka okusheshayo nezakhiwo zesimanjemanje ezifana neWaterfall, Sagewood, neBlue Hills ezikhanga ukwakhiwa okusha nokuvuselelwa. Izinhlelo zokwakha zihamba nge-City of Johannesburg (iMidrand eseningizimu) noma i-City of Tshwane (iMidrand esenyakatho) — siyazi ukuthi umasipala wakho ungaphansi kwawuphi. Ukwakhiwa kwezakhiwo kudinga ukuhambisana neziqondiso zezakhiwo zenhlangano yabanikazi bezindlu.',
      highlights: [
        'Sikhona ngendlela elungele ukusebenzela zonke izindawo zaseMidrand',
        'Amaphrojekthi angu-90+ aphethelekile kuyo yonke iMidrand',
        'Ulwazi lokwakhiwa kwezakhiwo zaseMidrand',
        'Izikhathi zokusabela ezisheshayo kuyo yonke iMidrand',
        'Umlingani wokwakha othenjwayo ku-corridor yaseMidrand',
      ],
      faqs: [
        { question: 'Niyazakha ezakhiweni zaseMidrand ezifana neWaterfall neKyalami?', answer: 'Yebo. Sesiqede amaphrojekthi eWaterfall, Kyalami, Beaulieu, Blue Hills, nakwezinye izakhiwo zaseMidrand. Sijwayele iziqondiso zezakhiwo, izidingo zezinto zokwakha, nezinqubo zokuvunywa zenhlangano yabanikazi bezindlu. Sihlanganisa abaphathi bezakhiwo ukuqinisekisa ukuhambisana ngokugcwele nemithetho yonke yokwakha ngaphambi kokuqala umsebenzi.' },
        { question: 'Yiliphi ikhansela elisingathwa izinhlelo zokwakha zaseMidrand?', answer: 'IMidrand ihlukaniswe phakathi komasipala ababili. Izindlu ezisemzansi womngcele omdala waseMidrand (Halfway House, Carlswald, Vorna Valley) zingaphansi kwe-City of Johannesburg. Izindlu ezisenyakatho (Noordwyk, izingxenye zeKyalami) zingaphansi kwe-City of Tshwane. Sinquma ukuthi umasipala wakho ungaphansi kwawuphi futhi sithumele izinhlelo kuMasipala olungile.' },
        { question: 'Kubiza malini ukwakha eMidrand?', answer: 'Ukwakha eMidrand kubiza ku-R10,000–R18,000 ngemetha eyisikwele ngo-2026. Ukwakha ezakhiweni kuvame ukuba sezingeni eliphezulu ngenxa yezidingo zezinto eziphezulu nokuklama. Ukuvuselelwa kubiza u-R7,000–R16,000/m². Indlu yomkhulu (40 m²) ibiza u-R350,000–R650,000. Sinikeza amaquate amahhala kuwo wonke amaphrojekthi aseMidrand.' },
      ],
    },
    randburg: {
      description: 'Abakhi ababhalisiwe ku-NHBRC eRandburg namaphrojekthi angu-70+ aphethelekile. I-Sinqobile Construction isebenzela wonke amadolobha amancane angu-32+ aseRandburg — kusuka eNorthcliff naseLinden kuya eFerndale, Northriding, naseRandpark Ridge. Singochwepheshe ekuvuselelweni kwezindlu, izandiso, nokwakha izakhiwo zasekhaya ngeminyaka engu-15+ yolwazi nesilinganiso esi-4.9★.',
      testimonialText: 'Umsebenzi omuhle wokubhinca nokupenda ekhaya lethu laseRandburg. Iqembu lalihlanzekile, lingobungcweti, futhi linikeza ngesikhathi. Sikunconywa kakhulu.',
      testimonialLocation: 'Linden, Randburg',
      localInfo: 'IRandburg yindawo yezindlu esungulwe kahle emadolobheni amancane asenyakatho weJohannesburg, eyaziwa ngokuxube kwezindlu ezindala ezinamandla okuvuselelwa nokuthuthuka kwesimanjemanje. Amadolobha amancane afana neNorthcliff naseLinden anezindlu zomlando zeminyaka yawo-1960–80 ezizuza ekusungulweni kwesimanjemanje — ukuguqulwa kwesakhiwo okuvulekile, ukuhlonyiswa kwekhishi negumbi lokugeza, nokuthuthukiswa okusebenzisana namandla amancane. Izinhlelo zokwakha zihamba nge-City of Johannesburg. IRandburg inikeza inani elihle uma kuqhathaniswa neSandton eseduzane, okuyenza idume kubanikazi bezindlu abafuna ukuvuselela nokwengeza inani.',
      highlights: [
        'Ulwazi olubanzi emaphrojektheni asekhaya aseRandburg',
        'Amaphrojekthi angu-70+ aphumelele emadolobheni amancane aseRandburg',
        'Ukusabela okusheshayo kuyo yonke iRandburg',
        'Ulwazi lwemithetho yokwakha yaseRandburg',
        'Sithenjwa abanikazi bezindlu baseRandburg ngomsebenzi wekhwalithi',
      ],
      faqs: [
        { question: 'Ikuphi ukuvuselelwa okuthandwa kakhulu eRandburg?', answer: 'Ukuvuselelwa okucelwa kakhulu eRandburg ukusungulwa kwekhishi esimanjemanje (ukuvula amakhishi avaliwe ezindaweni zokuhlala), ukuhlonyiswa kwegumbi lokugeza, ukupenda (ngaphakathi nangaphandle), nokuthathelwa indawo kokungcweka/indlela yemoto. IRandburg inezindlu eziningi ezindala zeminyaka yawo-1960–80 ezizuza kulokhu kuhlonyiswa. Ukuguqulwa kwesakhiwo okuvulekile kuthandwa kakhulu njengoba kusungula uhlelo futhi kongezelele inani lepropathi.' },
        { question: 'Kubiza malini ukuvuselelwa eRandburg?', answer: 'Ukuvuselelwa eRandburg kubiza ku-R7,000–R18,000 ngemetha eyisikwele ngo-2026 — ngaphansi kwesilinganiso seSandton. Ukuvuselelwa kwekhishi kusuka ku-R50,000–R250,000, ukuvuselelwa kwegumbi lokugeza ku-R15,000–R80,000. Ukupendwa kabusha kwendlu yonke kubiza u-R15,000–R40,000. IRandburg inikeza inani elihle lotshalo-zimali lokuvuselelwa njengoba amanani epropathi enyuka kepha amanqindi sakhona ngaphansi kweSandton neBryanston.' },
        { question: 'Niyasebenzela iNorthcliff neLinden?', answer: 'Yebo. INorthcliff, Linden, Ferndale, Fontainebleau, Blairgowrie, Bordeaux, Robin Hills, Bromhof, Northriding, Randpark Ridge, Fairland, neCresta zonke zikhona ngaphakathi kwendawo yethu yensiza. Isizinda sethu seFourways siwukushayela okufushane kusuka kuwo wonke amadolobha amancane aseRandburg.' },
      ],
    },
    fourways: {
      description: 'Izinsiza zekhwalithi zokwakha eFourways nasezakhiweni ezizungezile. I-Sinqobile Construction inikeza izinsiza eziphakeme zokwakha, ukuvuselelwa, nokunakekelwa namaphrojekthi angu-65+ aphethelekile endaweni yaseFourways.',
      testimonialText: 'I-Sinqobile Construction yakhe ipatio enhle nendawo ye-braai ekhaya lethu laseFourways. Umsebenzi ovelele nokuxhumana okuhle nayo yonke indawo.',
      testimonialLocation: 'Lonehill, Fourways',
      localInfo: 'IFourways yelinye lamadolobha amancane akhulayo kakhulu eJohannesburg, ikhaya leFourways Mall, izakhiwo eziningi zezindlu, nokuxube kwezakhiwo zesimanjemanje ze-cluster nezindlu ezimi zodwa. Ihhovisi lethu eliyinhloko liseFourways (Broadacres Drive), okukwenza kube indawo yethu. Sinolwazi olunzulu lwezakhiwo zendawo — Dainfern, Lonehill, Cedar Lakes, Chartwell — nezidingo zazo eziqondile zezakhiwo. Izinhlelo zokwakha zihamba nge-City of Johannesburg. Izindleko zokwakha zaseFourways ziyafana nezaseSandton ku-R10,000–R20,000/m².',
      highlights: [
        'Sinolwazi lokuthuthuka kwezakhiwo zaseFourways',
        'Amaphrojekthi angu-65+ aphethelekile endaweni yaseFourways',
        'Ukuqonda izindinganiso zokwakha zaseFourways',
        'Sisebenzela wonke amadolobha amancane nezakhiwo zaseFourways',
        'Ukwakhiwa kwekhwalithi kubanikazi bezindlu baseFourways',
      ],
      faqs: [
        { question: 'Ngabe i-Sinqobile Construction izinze eFourways?', answer: 'Yebo. Ihhovisi lethu eliyinhloko liseThe William 1, Broadacres Drive, Fourways, Sandton 2191. Lokhu kusho ukuthi sinesikhathi sokusabela esisheshayo kakhulu kumaphrojekthi aseFourways nolwazi olunzulu lwezakhiwo zendawo, amadolobha amancane, nezidingo zekhansela. Sesiqede amaphrojekthi angu-65+ endaweni yaseFourways yodwa.' },
        { question: 'Niyasebenza eDainfern nakwezinye izakhiwo zaseFourways?', answer: 'Yebo. Sesiqede amaphrojekthi eDainfern, Lonehill, Cedar Lakes, Chartwell, Pineslopes, nakwezinye izakhiwo zaseFourways. Sijwayele iziqondiso zezakhiwo nezidingo zenhlangano yabanikazi bezindlu. Sihlanganisa abaphathi bezakhiwo ukuqinisekisa ukuthi yonke imithetho yokwakha iyalandelwa ngaphambi kokuqala umsebenzi.' },
        { question: 'Yiliphi umsebenzi wokwakha ojwayelekile eFourways?', answer: 'Izinsiza ezicelwa kakhulu eFourways izandiso zezindlu (amagumbi okulala angeziwe, izindlu zomkhulu), ukwakhiwa kwendawo ye-patio ne-braai, ukuhlonyiswa kwezindonga zomngcele nezithango, ukuvuselelwa kwekhishi negumbi lokugeza, nokupenda. Izindlu zezakhiwo zivame ukudinga ukuhlonyiswa kwangaphandle ukuhambisana nezindinganiso zezakhiwo. Izakhiwo ezintsha ze-cluster ngezinye izikhathi zidinga ukushintshwa kwangemva kokunikezwa nokuthuthuka.' },
      ],
    },
    roodepoort: {
      description: 'Izinsiza zokwakha nezakhiwo ezithembekayo eRoodepoort. I-Sinqobile Construction iqede amaphrojekthi angu-55+ kuyo yonke iRoodepoort, kusukela ekuvuselelweni kwezindlu kuya ekwakhiweni okusha, nomsebenzi wekhwalithi oqinisekisiwe.',
      testimonialText: 'Sihlatshwe kakhulu umsebenzi wokuvuselelwa i-Sinqobile Construction eyenze ekhaya lethu laseRoodepoort. Bobungcweti, abebizayo, futhi nezinga eliphezulu.',
      testimonialLocation: 'Honeydew, Roodepoort',
      localInfo: 'IRoodepoort yindawo enkulu yezindlu emngceleni wentshonalanga weJohannesburg, enikeza enye yepropathi enenani lefutshane endaweni enkulu yaseJohannesburg. Amadolobha amancane afana neHoneydew, Ruimsig, naseWeltevredenpark abe nokuthuthuka okuningi kakhulu ezinyangeni ezimbalwa ezedlule. Amanani amancane epropathi yale ndawo enza ukuvuselelwa nezandiso zibe utshalo-zimali oluhle — ukungeza indlu yomkhulu noma igumbi lokulala elingeziwe kuthumela i-ROI eqinile. Izinhlelo zokwakha zihamba nge-City of Johannesburg. Izindleko zokwakha zaseRoodepoort ziphakathi kwezincintisanayo kakhulu eGauteng e-R8,000–R16,000/m².',
      highlights: [
        'Sisebenzela wonke amadolobha amancane aseRoodepoort',
        'Amaphrojekthi angu-55+ aphethelekile kuyo yonke iRoodepoort',
        'Sijwayele izidingo zikamasipala zaseRoodepoort',
        'Izikhathi zokusabela ezisheshayo kuyo yonke iRoodepoort',
        'Ukwakhiwa kwekhwalithi ngamanani ancintisanayo',
      ],
      faqs: [
        { question: 'Kubiza malini ukwakha eRoodepoort?', answer: 'Ukwakha eRoodepoort kubiza ku-R8,000–R16,000 ngemetha eyisikwele ngo-2026 — phakathi kwamanani ancintisanayo kakhulu eGauteng. Ukuvuselelwa kubiza u-R6,000–R15,000/m². Amanani amancane epropathi uma kuqhathaniswa neSandton neFourways enza iRoodepoort ibe indawo eyimfanelo yotshalo-zimali yokuvuselelwa, njengoba ukuhlonyiswa kuthumela imibuyiselo eqinile uma kuqhathaniswa nentengo yepropathi.' },
        { question: 'Kuyamela ukuvuselelwa eRoodepoort?', answer: 'Yebo. Amanani epropathi yaseRoodepoort enyuka njengoba imindeni nezikhulu ezisha eziningi zithuthela kule ndawo ngenxa yokuba semthethweni kwemali. Ukuvuselelwa okwenziwe kahle kwekhishi (R50,000–R150,000) noma ukwengezelelwa kwendlu yomkhulu (R300,000–R600,000) kungakhulisa kakhulu inani lepropathi yakho futhi kukhokhise imali yokuqasha. Izindleko ezincane zokwakha eRoodepoort zisho i-ROI engcono uma kuqhathaniswa namadolobha amancane aphezulu.' },
        { question: 'Yiziphi izindawo zaseRoodepoort enizisebenzelayo?', answer: 'Sisebenzela wonke amadolobha amancane aseRoodepoort: Florida, Honeydew, Ruimsig, Wilgeheuwel, Constantia Kloof, Little Falls, Horison, Weltevredenpark, Strubens Valley, Radiokop, nezindawo ezizungezile. Isizinda sethu seFourways siwukushayela kwemizuzu eyi-15–20 kusukela kumadolobha amaningi aseRoodepoort.' },
      ],
    },
  },
  st: {
    johannesburg: {
      description: 'Litshebeletso tsa botsebi tsa kaho Johannesburg CBD le metsemehlolo e potolohileng. Ka boiphihlelo ba lilemo tse fetang 15, Sinqobile Construction e phethile merero e fetang 150 ho pholletsa le Johannesburg, ho tloha ntlafatso ea matlo a bodulo ho fihlela kaho ea khoebo.',
      testimonialText: 'Sinqobile Construction e fetotse ntlo ea rona ea Johannesburg ka ntlafatso e felletseng. Tlhokomelo ea bona ho lintlha le tloaelo ea bona ea mosebetsi e fetile litebello tsa rona. Re khothaletsa haholo bakeng sa mosebetsi ofe kapa ofe oa kaho Johannesburg!',
      testimonialLocation: 'Sandton, Johannesburg',
      localInfo: 'Johannesburg ke toropo e kholo ka ho fetisisa Afrika Boroa le setsi sa moruo, e nang le \'maraka oa thepa o fapaneng o tlohang ho matlo a histori Parktown le Houghton ho fihlela ho ntšetsopele ea sejoale-joale Sandton le Bryanston. Litlhophiso tsa kaho Johannesburg li romelloa Toropong ea Johannesburg Metropolitan Municipality, ka nako ea ho amohelwa eo hangata e leng libeke tse 4–12. Mobu oa letsopa o toropo o hloka ho hlophisoa hantle ha motheo — matlo a mangata a matjha a sebedisa metheo ea raft. Liphefo tsa khabane tsa Johannesburg (Mphalane–Hlakubele) li hloka marulelo a boleng le tšireletso ea metsi. Litjeo tsa kaho Johannesburg li tloha ho R10,000 ho fihlela R20,000 ka metra ea bohareng ba bonne bakeng sa kaho ea matlo a bodulo ka 2026.',
      highlights: [
        'Linako tse potlakileng tsa karabelo ho pholletsa le metse-mehlolo eohle ea Johannesburg',
        'Tsebo ea sebakeng ka lilemo tse 15+ Johannesburg',
        'Re tloaetse melao ea kaho ea Johannesburg',
        'Re phethile merero e 150+ sebakeng sa Johannesburg',
        'Re tšepuoa ke beng ba matlo le khoebo ba Johannesburg',
      ],
      faqs: [
        { question: 'Ho ja bokae ho aha Johannesburg ka 2026?', answer: 'Kaho ea matlo a bodulo Johannesburg e ja R10,000–R20,000 ka metra ea bohareng ba bonne ka 2026. Ntlo e tloaelehileng ea makamore a mararo a boroko (120–150 m²) e ja hoo e ka bang R1.2M–R2.5M. Litjeo tsa ntlafatso li tloha ho R7,000 ho fihlela R20,000/m². Litheko tsena li fapana ho ya ka motse-mohlolo — Sandton le metse-mehlolo ea ka leboea hangata e phahame ka 10–15% ka lebaka la liqetello tsa tlhomphehang le litebello tsa thepa. Re fana ka literekoata tsa mahala tse ngotsoeng ka botlalo bakeng sa morero ofe kapa ofe Johannesburg.' },
        { question: 'Na ke hloka litlhophiso tsa kaho tse amohetsoeng Johannesburg?', answer: 'E. Mesebetsi eohle ea meaho, kaho e ncha, keketso, le ntlafatso e kholo Johannesburg e hloka litlhophiso tsa kaho tse amohetsoeng ke Toropo ea Johannesburg Metropolitan Municipality. Litlhophiso li tlameha ho takoa ke moqapi o ngolisitsoeng SACAP. Ho amoheloa ho nka libeke tse 4–12. Ho aha ntle le litlhophiso tse amohetsoeng ha ho molaong — sebopeho ha se khone ho inshurinngoe, ho bonded, kapa ho rekisoa. Re tšohla ts\'ebetso eohle ea litlhophiso ho tloha ho hireng oa moqapi ho fihlela ho rometsoeng ho lekhotla.' },
        { question: 'Ke metse-mehlolo efe ea Johannesburg eo u e sebeletsang?', answer: 'Re sebeletsa libaka tsohle tse 8 tse ka sehloohong tsa Johannesburg — Sandton, Bryanston, Fourways, Randburg, Midrand, Rosebank, Melville, Parktown, Houghton, Northcliff, Linden, Bedfordview, Edenvale, Alberton le Soweto — hammoho le East Rand e pharaletseng, West Rand le metse-mehlolo ea boroa. Ofisi ea rona e kholo e Fourways, Sandton, e re fang nako ea ho khanna ea metsotso e 30–45 ho ea ho merero e mengata metropong oa JHB. Maeto a sebakeng a mahala kahare ho lik\'hilomithara tse 50 ho tloha Sandton CBD.' },
        { question: 'Ho nka nako e kae ho amoheloa ha litlhophiso tsa kaho City of Johannesburg?', answer: 'Litlhophiso tse tloaelehileng tsa kaho ea matlo a bodulo tse rometsoeng Toropong ea Johannesburg Metropolitan Municipality hangata li nka libeke tse 4 ho ea ho 12 ho amoheloa ka 2026 — libeke tse 4–6 bakeng sa keketso e otlolohileng e le \'ngoe e mocho le liphetoho tse nyenyane, libeke tse 8–12 bakeng sa kaho e ncha, keketso ea mocho oa bobeli le ntšetsopele e hlokang kabo-bocha, metsi a maholiotsoana kapa kenyo ea geotechnical. Litlhophiso li tlameha ho takoa ke moqapi o ngolisitsoeng SACAP kapa moqapi ea nepahetseng le ho romelloa ka mokhoa oa CoJ Development Planning portal. Litumello tsa khoebo le matlo a bodulo a likarolo tse ngata hangata li nka nako e telele (libeke tse 12–24). Sinqobile Construction e hlophisa moqapi, moenjiniere oa sebopeho, ho rometsoa ha litlhophiso le ho latellela ho lekhotla morerong o mong le o mong oa Johannesburg.' },
        { question: 'Hobaneng baahi ba Johannesburg ba sebedisa metheo ea raft libakeng tse ngata?', answer: 'Likarolo tse kholo tsa Johannesburg li dula mobung oa letsopa o phahamang — haholo libakeng tse kang Linbro Park, Glenvista, Edenvale, likarolo tsa Bedfordview le East Rand — moo liphetoho tsa mongobo oa mobu li bakang ho tsamaeang ka mokhoa o otlolohileng o ka petsohang metheo e tloaelehileng ea letseba. Standard ea Naha ea Afrika Boroa ea SANS 10400-H e hloka hore metheo e qapeloe sehlopha se itseng sa mobu, mme mobung oa letsopa o phahamang hangata sena e ba motheo oa raft o tiisitsoeng kapa motheo oa lipalo. Sinqobile Construction e laela tlhahlobo ea sebaka ea geotechnical morerong o mong le o mong oa kaho e ncha oa Johannesburg le morero oa slab e tiisitsoeng pele ho qapo ea motheo, e le hore mofuta oa motheo o tšoanetse maemo a mobu a sebakeng sa hau.' },
        { question: 'Ke ka mokhoa o feng ke ka netefatsang hore moaahi oa Johannesburg o ngolisitsoeng NHBRC?', answer: 'U ka netefatsa ngoliso ea NHBRC ea moaahi ofe kapa ofe oa Afrika Boroa ka metsotsoana e \'meli ka registry ea online ea NHBRC ho nhbrc.org.za — batla ka lebitso la khampani kapa nomoro ea ngoliso ho netefatsa hore ngoliso e ntse e sebetsa le ho hlahloba lirekoto life kapa life tsa keno ea morero le histori ea litletlebo. Tlas\'a Molao oa Litekanyetso tsa Ts\'ireletso ea Bareki ba Matlo (1998), ntlo e ncha e ngoe le e ngoe e hahetsoeng bodulo e tlameha ho ngolisoa NHBRC bonyane matsatsi a 15 pele kaho e qala, ke moaahi ea ngolisitsoeng. Sinqobile Construction e ngolisitsoeng NHBRC ho tloha ka 2010 mme e ngolisa ntlo e ncha e ngoe le e ngoe le keketso e nepahetseng pele ho qala mosebetsi — setifikeiti sa keno ea NHBRC se fanoa hammoho le morero.' },
      ],
    },
    sandton: {
      description: 'Litshebeletso tse phahameng tsa kaho le ntlafatso Sandton — sebaka sa likhilomithara tse kholo ka ho fetisisa Afrika. Re na le tsebo e khethehileng meranong e phahameng ea matlo a bodulo le khoebo Sandton, ho akarelletsa Sandhurst, Morningside, le Hyde Park. Sinqobile Construction e fana ka boleng bo phahameng ho beng ba thepa ba Sandton, ka merero e 120+ e phethetsoeng le ngoliso ea NHBRC.',
      testimonialText: 'Tshebeletso e phahameng ho tsoa ho Sinqobile Construction thepa ea rona ea Sandton. Ba utloisisitse pono ea rona ea ntlafatso ea sejoale-joale mme ba fane ka ho feta litebello. Botsebi, ho tšepahala, le boleng bo phahameng.',
      testimonialLocation: 'Morningside, Sandton',
      localInfo: 'Sandton ke setsi sa lichelete sa Afrika ebile ke e \'ngoe ea libaka tse ruileng ka ho fetisisa Afrika Boroa. Thepa mona e hloka liqetello tse phahameng — litaele tse romeloang, lipholo tsa lefika, lisebelisoa tsa moqapi, le matsoho a ntlo e bohlale. Litjeo tsa ntlafatso Sandton li ka holimo ho karolelano ea Gauteng ka 10–15%. Sebaka sena hape se na le matlo a khethehileng (Sandhurst, Hyde Park, Morningside) a nang le litaolo tse thata tsa moralo. Re na le boiphihlelo ba ho sebetsa kahare ho litlhokahalo tsa moralo oa matlo le litumello tsa body corporate. Litlhophiso tsa kaho li tsamaea ka City of Johannesburg (Sandton e kahara ho CoJ).',
      highlights: [
        'Bo-setsebi thepeng e phahameng ea Sandton',
        'Merero e 120+ e atlehileng Sandton',
        'Kutloisiso ea litekanyetso tsa kaho Sandton',
        'Karabelo e potlakileng metsetsoanyaneng eohle ea Sandton',
        'Re tšepuoa ke baahi ba Sandton bakeng sa mosebetsi oa boleng',
      ],
      faqs: [
        { question: 'Hobaneng litjeo tsa kaho li phahame Sandton?', answer: 'Litjeo tsa kaho Sandton li phahame ka 10–15% ho feta karolelano ea Gauteng hobane beng ba thepa ba lebella liqetello tse phahameng (lefika la mabele le tlisitsoeng, lipholo tsa Caesarstone, ho futhumatsoa ka tlasa fatše), matlo a maholo (300–600 m²), mme matlo hangata a hloka baqapi le lisebelisoa tse itseng. Bakontraka ba na le boiphihlelo sebakeng ba lefa litekanyetso tse phahameng ka lebaka la tlhokahalo. Setsi sa rona sa Fourways se re fa monyetla oa ho kena Sandton ntle le litjeo tse phahameng tsa bakontraka ba Sandton feela.' },
        { question: 'Le sebetsa libakeng tse sireletsehileng tsa Sandton?', answer: 'E. Re phethile merero Sandhurst, Morningside, Hyde Park, Bryanston, le libakeng tse ling tsa Sandton. Re tloaetse mekhoa ea ho kena libakeng, litaolo tsa moralo, le litlhokahalo tsa tumello ea body corporate. Re hlophisa le batsamaisi ba libaka ho netefatsa ho latela melao eohle ea kaho.' },
        { question: 'Ke litshebeletso life tsa kaho tse ratoang haholo Sandton?', answer: 'Litshebeletso tse kopuoang haholo Sandton ke ntlafatso ea matlo a khabane (ntlafatso ea kitjhini le kamore ea bohlapelo ka liqetello tse phahameng), keketso ea matlo le mocho oa bobeli, libaka tse potlakang dam ea ho sesa le libaka tsa boithabiso tsa kantle, le ho ntlafatsa tšireletso (marako a moeli, terata ea motlakase, ho automatisoa ha heke). Tšitisano ea ntlo e bohlale (mabone a ikemetseng, HVAC, ts\'ireletso) e nyolosa ho ratoa thepeng ea Sandton.' },
      ],
    },
    pretoria: {
      description: 'Baahi ba ngolisitsoeng NHBRC ba sebeletsang Pretoria, Tshwane le Centurion. Sinqobile Construction e tlisa boiphihlelo ba lilemo tse 15+ Pretoria East, West le North — ho tloha ntlafatso ea khabane Waterkloof le Mooikloof ho fihlela kaho e ncha Montana le Garsfontein. Merero e 100+ e phethetsoeng ho pholletsa le motseng oa Afrika Boroa.',
      testimonialText: 'Re hirile Sinqobile Construction bakeng sa ntlafatso e kholo Pretoria East. E ne e le ea botsebi, ka nako, mme boleng ba mosebetsi e ne e le bo botle haholo. Empa re tla ba sebedisa hape merereng e tlang.',
      testimonialLocation: 'Garsfontein, Pretoria',
      localInfo: 'Pretoria (Tshwane) ke motsi oa tsamaiso oa Afrika Boroa, o nang le \'maraka oa thepa o tlohang ho matlo a histori Arcadia le Brooklyn ho ea ho matlo a sejoale-joale Mooikloof le Silverlakes. Litlhophiso tsa kaho li romelloa Toropong ea Tshwane Metropolitan Municipality. Litjeo tsa kaho Pretoria hangata li tlaase ho fetisa Johannesburg ka 5–10%. Mobu o mofubelu oa toropo (letsopa la tšepe) o hloka qapo e nepahetseng ea motheo — metheo ea raft ke ea tloaelehileng bakeng sa kaho e ncha. Pretoria e hlangana le serame mariha (Mots\'eanong–Phato), e ameha tlhophiso ea kaho bakeng sa mosebetsi oa konkreite le pleister.',
      highlights: [
        'Boiphihlelo bo pharaletseng kahong ea Pretoria',
        'Merero e 100+ e phethetsoeng Pretoria',
        'Tsebo ea melao ea kaho ea Pretoria',
        'Re sebeletsa metsetsoanyane eohle ea Pretoria',
        'Tshebeletso e tšepahalang ho pholletsa le Pretoria East le West',
      ],
      faqs: [
        { question: 'Ho ja bokae ho aha Pretoria ka 2026?', answer: 'Kaho Pretoria e ja R9,000–R18,000 ka metra ea bohareng ba bonne ka 2026 — hoo e ka bang ka 5–10% ka tlase ho Johannesburg. Ntlo e tloaelehileng ea makamore a mararo a boroko e ja R1.0M–R2.2M. Litjeo tsa ntlafatso li tloha ho R6,000 ho R18,000/m². Kaho ea khabane libakeng tse kang Waterkloof le Mooikloof e ka holimo. Re fana ka literekoata tsa mahala bakeng sa merero ho pholletsa le Pretoria le Centurion.' },
        { question: 'Na litlhophiso tsa kaho tsa Pretoria li tsamaea ka lekhotla le fapaneng le la Johannesburg?', answer: 'E. Litlhophiso tsa kaho tsa Pretoria li romelloa Toropong ea Tshwane Metropolitan Municipality, eseng City of Johannesburg. Ts\'ebetso e tšoana (moqapi oa SACAP, ho romelloa ha litlhophiso, ho amoheloa ka libeke tse 4–12) empa ofisi le litlhokahalo li fapane. Re sebetsana le ho romella litlhophiso ho Tshwane le CoJ mme re tseba litlhokahalo bakeng sa e ngoe le e ngoe.' },
        { question: 'Ke libaka life tsa Pretoria tseo le li koahelang?', answer: 'Re sebeletsa metsemehlolo eohle ea Pretoria: Centurion, Hatfield, Brooklyn, Menlyn, Waterkloof, Lynnwood, Garsfontein, Faerie Glen, Moreleta Park, Silverlakes, Mooikloof, Montana, Sinoville, Arcadia, Newlands, le libaka tse potolohileng. Merero ea rona e tloha Pretoria East ho fihlela Pretoria North le West.' },
      ],
    },
    centurion: {
      description: 'Baahi ba ngolisitsoeng NHBRC Centurion ka merero e 80+ e phethetsoeng. Sinqobile Construction e fana ka ntlafatso ea boleng, keketso, le kaho e ncha ho pholletsa le Eldoraigne, Irene, Lyttelton, Wierdapark, le metsemehlolo eohle ea Centurion. Lilemo tse 15+ tsa boiphihlelo, re fuoa litekanyetso tsa 4.9★.',
      testimonialText: 'Mosebetsi o motle haholo oa kaho keketsong ea ntlo ea rona ea Centurion. Sehlopha se ne se le ho botsebi mme se phethile morero ka tšepiso. Re thabile haholo ka boleng.',
      testimonialLocation: 'Eldoraigne, Centurion',
      localInfo: 'Centurion ke setsi sa matlo a bodulo se holang ka potlako pakeng tsa Johannesburg le Pretoria, se ratoang ke malapa le basebetsi ba batjha. Sebaka sena se fana ka motsoako oa metsemehlolo e thehiloeng (Eldoraigne, Lyttelton) le matlo a sejoale-joale (Amberfield, The Reeds). Litlhophiso tsa kaho li romelloa City of Tshwane. Litjeo tsa kaho Centurion li tšoana le tsa Pretoria — R9,000–R16,000/m² bakeng sa kaho ea matlo a bodulo. Boemo ba sebaka N1 le N14 bo etsa hore se finyellehe ho tsoa Johannesburg le Pretoria.',
      highlights: [
        'Re sebeletsa metsemehlolo eohle ea Centurion ka kaho ea boleng',
        'Merero e 80+ e phethetsoeng sebakeng sa Centurion',
        'Re tloaetse litlhokahalo tsa kaho tsa masepala tsa Centurion',
        'Linako tse potlakileng tsa karabelo ho pholletsa le Centurion',
        'Re tšepuoa ke beng ba matlo Centurion lilemong tse 15+',
      ],
      faqs: [
        { question: 'Ho ja bokae ntlafatso ea ntlo Centurion?', answer: 'Ntlafatso ea ntlo Centurion e ja R6,000–R18,000 ka metra ea bohareng ba bonne ka 2026. Ntlafatso ea kitjhini e tloha ho R50,000 ho R250,000, ntlafatso ea kamore ea bohlapelo R15,000–R80,000. Litheko tsa Centurion hangata li tlaase ka 5–10% ho Johannesburg. Re fana ka litekolo tsa mahala sebakeng le literekoata tse ngotsoeng ka botlalo bakeng sa merero eohle ea ntlafatso Centurion.' },
        { question: 'Le aha matlo a baholo Centurion?', answer: 'E. Matlo a baholo a ratoa haholo Centurion ka lebaka la tlhokahalo ea hire ho tsoa ho liithuti le basebetsi ba batjha. Ntlo ea baholo ea 40 m² e ja R350,000–R700,000 mme e ka hlahisa chelete ea hire ea R5,000–R10,000/ka khoeli. Litlhophiso tse amohetsoeng ke lekhotla li hlokahala ka City of Tshwane. Re tšohla ts\'ebetso eohle ho tloha ho qapo ho fihlela ho fana ka eona.' },
        { question: 'Ke metsemehlolo efe ea Centurion eo le e sebeletsang?', answer: 'Re sebeletsa metsemehlolo eohle ea Centurion: Eldoraigne, Wierdapark, Lyttelton, The Reeds, Hennopspark, Zwartkop, Clubview, Rooihuiskraal, Irene, Doringkloof, Amberfield, Pierre van Ryneveld, le libaka tse potolohileng.' },
      ],
    },
    midrand: {
      description: 'Baahi ba ngolisitsoeng NHBRC Midrand — corridor e hokahanyang Johannesburg le Pretoria. Sinqobile Construction e phethile merero e 90+ ho pholletsa le Waterfall, Kyalami, Carlswald, Halfway House, le metsemehlolo eohle ea Midrand. Re na le tsebo e khethehileng kahong ea matlo, ntlafatso ea matlo a bodulo, le kaho e ncha ka lilemo tse 15+ tsa boiphihlelo.',
      testimonialText: 'Sinqobile Construction e entse mosebetsi o makatsang ntlafatsong ea thepa ea rona ea Midrand. Tshebeletso ea botsebi ho tloha qalong ho fihlela qetellong.',
      testimonialLocation: 'Waterfall, Midrand',
      localInfo: 'Midrand ke corridor ea bohlokoa pakeng tsa Johannesburg le Pretoria, lehae la Waterfall City, Kyalami, le matlo a mangata a bodulo. Sebaka sena se hlile se phahamile ka ntšetsopele ka matlo a sejoale-joale a kang Waterfall, Sagewood, le Blue Hills a hohelang kaho e ncha le ntlafatso. Litlhophiso tsa kaho li tsamaea ka City of Johannesburg (Midrand e ka boroa) kapa City of Tshwane (Midrand e ka leboea) — re tseba hore na thepa ea hau e kahara ho masepala ofe. Kaho ea matlo e hloka ho lumellana le litaolo tsa moralo tsa mokhatlo oa beng ba matlo.',
      highlights: [
        'Re le boemong bo bobebe ho sebeletsa libaka tsohle tsa Midrand',
        'Merero e 90+ e phethetsoeng ho pholletsa le Midrand',
        'Boiphihlelo ba ntšetsopele ea matlo a Midrand',
        'Linako tse potlakileng tsa karabelo ho pholletsa le Midrand',
        'Molekane oa kaho ea tshepahalang corridor ea Midrand',
      ],
      faqs: [
        { question: 'Le aha matlong a Midrand a kang Waterfall le Kyalami?', answer: 'E. Re phethile merero Waterfall, Kyalami, Beaulieu, Blue Hills, le matlong a mang a Midrand. Re tloaetse litaolo tsa moralo oa matlo, litlhokahalo tsa thepa ea kaho, le ts\'ebetso ea tumello ea mokhatlo oa beng ba matlo. Re hlophisa le batsamaisi ba matlo ho netefatsa ho lumellana ka ho feletseng le melao eohle ea kaho pele re qala mosebetsi.' },
        { question: 'Ke lekhotla lefe le sebetsanang le litlhophiso tsa kaho tsa Midrand?', answer: 'Midrand e arotsoe pakeng tsa bomasepala ba babeli. Thepa ka boroa ho moeli oa khale oa Midrand (Halfway House, Carlswald, Vorna Valley) e kahara ho City of Johannesburg. Thepa ka leboea (Noordwyk, likarolo tsa Kyalami) e kahara ho City of Tshwane. Re tseba hore na thepa ea hau e kahara ho masepala ofe mme re romela litlhophiso lekhotleng le nepahetseng.' },
        { question: 'Ho ja bokae ho aha Midrand?', answer: 'Kaho Midrand e ja R10,000–R18,000 ka metra ea bohareng ba bonne ka 2026. Kaho ea matlo hangata e ka holimo ka lebaka la litlhokahalo tsa thepa le qapo tse phahameng. Ntlafatso e ja R7,000–R16,000/m². Ntlo ea baholo (40 m²) e ja R350,000–R650,000. Re fana ka literekoata tsa mahala bakeng sa merero eohle ea Midrand.' },
      ],
    },
    randburg: {
      description: 'Baahi ba ngolisitsoeng NHBRC Randburg ka merero e 70+ e phethetsoeng. Sinqobile Construction e sebeletsa metsemehlolo eohle e fetang 32 ea Randburg — ho tloha Northcliff le Linden ho ea Ferndale, Northriding, le Randpark Ridge. Re na le tsebo e khethehileng ntlafatso ea matlo, keketso, le kaho ea matlo a bodulo ka lilemo tse 15+ tsa boiphihlelo le litekanyetso tsa 4.9★.',
      testimonialText: 'Mosebetsi o motle oa pleister le ho penta ntlong ea rona ea Randburg. Sehlopha se ne se hlokomela, se le ho botsebi, mme se fane ka nako. Re khothaletsa haholo.',
      testimonialLocation: 'Linden, Randburg',
      localInfo: 'Randburg ke sebaka sa matlo a bodulo se thehiloeng hantle metsemehlolong ea ka leboea ho Johannesburg, se tsejoa ka motsoako oa matlo a khale a nang le bokhoni ba ntlafatso le ntšetsopele ea sejoale-joale. Metsemehlolo e kang Northcliff le Linden e na le matlo a sebopeho ho tsoa lilemong tsa bo-1960 ho fihlela bo-80 a ruang sejoale-joale — ho aha sebopeho se bulehileng, ho ntlafatsa kitjhini le kamore ea bohlapelo, le ntlafatso ea matla. Litlhophiso tsa kaho li tsamaea ka City of Johannesburg. Randburg e fana ka boleng bo botle ha ho bapisoa le Sandton e haufi, e leng ho etsang hore e ratoe ke beng ba matlo ba batlang ho ntlafatsa le ho eketsa boleng.',
      highlights: [
        'Boiphihlelo bo pharaletseng merero ea matlo a bodulo ea Randburg',
        'Merero e 70+ e atlehileng ho pholletsa le metsemehlolo ea Randburg',
        'Karabelo e potlakileng metsetsoanyaneng eohle ea Randburg',
        'Tsebo ea melao ea kaho ea Randburg',
        'Re tšepuoa ke beng ba matlo Randburg bakeng sa mosebetsi oa boleng',
      ],
      faqs: [
        { question: 'Ke lintlafatso life tse ratoang haholo Randburg?', answer: 'Lintlafatso tse kopuoang haholo Randburg ke ho ntlafatsa kitjhini sejoale-joale (ho bula likitjhini tse kentsoe libakeng tsa bophelo), ntlafatso ea kamore ea bohlapelo, ho penta (ka hare le ka ntle), le ho fetola peleto/tsela ea koloi. Randburg e na le matlo a mangata a khale ho tsoa lilemong tsa bo-1960 ho fihlela bo-80 a ruang lintlafatso tsena. Ho fetolwa ha sebopeho se bulehileng ho ratoa haholo hobane ho ntlafatsa moralo le ho eketsa boleng ba thepa.' },
        { question: 'Ho ja bokae ntlafatso Randburg?', answer: 'Ntlafatso Randburg e ja R7,000–R18,000 ka metra ea bohareng ba bonne ka 2026 — hanyane ka tlase ho litheko tsa Sandton. Ntlafatso ea kitjhini e tloha ho R50,000 ho R250,000, ntlafatso ea kamore ea bohlapelo R15,000–R80,000. Ho penta hape ntlo eohle ho ja R15,000–R40,000. Randburg e fana ka boleng bo botle bakeng sa peeletso ea ntlafatso hobane litheko tsa thepa li ntse li nyoloha empa li ntse li le ka tlase ho Sandton le Bryanston.' },
        { question: 'Le sebeletsa Northcliff le Linden?', answer: 'E. Northcliff, Linden, Ferndale, Fontainebleau, Blairgowrie, Bordeaux, Robin Hills, Bromhof, Northriding, Randpark Ridge, Fairland, le Cresta kaofela li kahare ho sebaka sa rona sa tshebeletso. Setsi sa rona sa Fourways ke ho khanna ho khutsoanyane ho tloha metsemehloloong eohle ea Randburg.' },
      ],
    },
    fourways: {
      description: 'Litshebeletso tsa boleng tsa kaho Fourways le matlong a potolohileng. Sinqobile Construction e fana ka litshebeletso tse phahameng tsa kaho, ntlafatso le tlhokomelo ka merero e 65+ e phethetsoeng sebakeng sa Fourways.',
      testimonialText: 'Sinqobile Construction e hahile patio e ntle le sebaka sa braai ntlong ea rona ea Fourways. Mosebetsi o motle haholo le puisano e ntle ka nako e telele.',
      testimonialLocation: 'Lonehill, Fourways',
      localInfo: 'Fourways ke e \'ngoe ea metsemehlolo ea Johannesburg e holang ka potlako, lehae la Fourways Mall, matlo a mangata a bodulo, le motsoako oa ntšetsopele ea cluster ea sejoale-joale le matlo a ikemetseng. Ofisi ea rona e kholo e Fourways (Broadacres Drive), e leng e re fang sebaka. Re na le tsebo e teng ea matlo a sebakeng — Dainfern, Lonehill, Cedar Lakes, Chartwell — le litlhokahalo tsa bona tse ikhethang tsa moralo. Litlhophiso tsa kaho li tsamaea ka City of Johannesburg. Litjeo tsa kaho Fourways li bapisitsoe le tsa Sandton ho R10,000–R20,000/m².',
      highlights: [
        'Re na le boiphihlelo ntšetsopelong ea matlo a Fourways',
        'Merero e 65+ e phethetsoeng sebakeng sa Fourways',
        'Kutloisiso ea litekanyetso tsa kaho tsa Fourways',
        'Re sebeletsa metsemehlolo eohle le matlo a Fourways',
        'Kaho ea boleng bakeng sa beng ba matlo ba Fourways',
      ],
      faqs: [
        { question: 'Na Sinqobile Construction e Fourways?', answer: 'E. Ofisi ea rona e kholo e The William 1, Broadacres Drive, Fourways, Sandton 2191. Sena se bolela hore re na le linako tse potlakileng tsa karabelo bakeng sa merero ea Fourways le tsebo e teng ea matlo a sebakeng, metsemehlolo, le litlhokahalo tsa lekhotla. Re phethile merero e 65+ sebakeng sa Fourways feela.' },
        { question: 'Le sebetsa Dainfern le matlong a mang a Fourways?', answer: 'E. Re phethile merero Dainfern, Lonehill, Cedar Lakes, Chartwell, Pineslopes, le matlong a mang a Fourways. Re tloaetse litaolo tsa moralo oa matlo le litlhokahalo tsa mokhatlo oa beng ba matlo. Re hlophisa le batsamaisi ba matlo ho netefatsa hore melao eohle ea kaho e tla latelloa pele ho qala mosebetsi.' },
        { question: 'Ke mosebetsi ofe oa kaho o tloaelehileng Fourways?', answer: 'Litshebeletso tse kopuoang haholo Fourways ke keketso ea matlo (likamore tse ling tsa boroko, matlo a baholo), kaho ea patio le sebaka sa braai, ntlafatso ea marako a moeli le terata, ntlafatso ea kitjhini le kamore ea bohlapelo, le ho penta. Thepa ea matlong hangata e hloka ntlafatso ea kantle ho lumellana le litekanyetso tsa matlo. Ntšetsopele e ncha ea cluster ka linako tse ling e hloka liphetoho tsa morao-rao le ntlafatso.' },
      ],
    },
    roodepoort: {
      description: 'Litshebeletso tse tšepahalang tsa kaho le moaho Roodepoort. Sinqobile Construction e phethile merero e 55+ ho pholletsa le Roodepoort, ho tloha ntlafatso ea matlo ho fihlela kaho e ncha, ka mosebetsi oa boleng o tiisitsoeng.',
      testimonialText: 'Re kgahliloe haholo ke mosebetsi oa ntlafatso oo Sinqobile Construction e o entseng thepeng ea rona ea Roodepoort. Botsebi, theko e tlase, le boleng bo phahameng.',
      testimonialLocation: 'Honeydew, Roodepoort',
      localInfo: 'Roodepoort ke sebaka se seholo sa matlo a bodulo moeling oa bophirimela oa Johannesburg, se fanang ka thepa e theko e tlaase ka ho fetisisa sebakeng se seholo sa Johannesburg. Metsemehlolo e kang Honeydew, Ruimsig, le Weltevredenpark e bone ntšetsopele e kholo lilemong tse fetileng. Litheko tse tlase tsa thepa sebakeng li etsa hore lintlafatso le keketso e be peeletso e ntle — ho eketsa ntlo ea baholo kapa kamore e ngoe ea boroko ho fana ka ROI e matla. Litlhophiso tsa kaho li tsamaea ka City of Johannesburg. Litjeo tsa kaho Roodepoort ke e \'ngoe ea tse tlase ka ho fetisisa Gauteng ho R8,000–R16,000/m².',
      highlights: [
        'Re sebeletsa metsemehlolo eohle ea Roodepoort',
        'Merero e 55+ e phethetsoeng ho pholletsa le Roodepoort',
        'Re tloaetse litlhokahalo tsa masepala tsa Roodepoort',
        'Linako tse potlakileng tsa karabelo ho pholletsa le Roodepoort',
        'Kaho ea boleng ka litheko tsa ho hlolisana',
      ],
      faqs: [
        { question: 'Ho ja bokae ho aha Roodepoort?', answer: 'Kaho Roodepoort e ja R8,000–R16,000 ka metra ea bohareng ba bonne ka 2026 — har\'a litheko tse tlase ka ho fetisisa Gauteng. Ntlafatso e ja R6,000–R15,000/m². Litheko tse tlase tsa thepa ha ho bapisoa le Sandton le Fourways li etsa hore Roodepoort e be sebaka se setle bakeng sa peeletso ea ntlafatso, hobane lintlafatso li fana ka mabuelo a matla ho bapisa le theko ea thepa.' },
        { question: 'Na ke molemo ho ntlafatsa Roodepoort?', answer: 'E. Litheko tsa thepa ea Roodepoort li ntse li nyoloha ha malapa a mangata le basebetsi ba batjha ba fallela sebakeng bakeng sa theko e tlase. Ntlafatso ea kitjhini e entsoeng hantle (R50,000–R150,000) kapa keketso ea ntlo ea baholo (R300,000–R600,000) e ka eketsa haholo boleng ba thepa ea hau le ho hlahisa chelete ea hire. Litjeo tse tlase tsa kaho Roodepoort li bolela ROI e betere ha ho bapisoa le metsemehlolong e phahameng.' },
        { question: 'Ke metsemehlolo efe ea Roodepoort eo le e sebeletsang?', answer: 'Re sebeletsa metsemehlolo eohle ea Roodepoort: Florida, Honeydew, Ruimsig, Wilgeheuwel, Constantia Kloof, Little Falls, Horison, Weltevredenpark, Strubens Valley, Radiokop, le libaka tse potolohileng. Setsi sa rona sa Fourways ke ho khanna ha metsotso e 15–20 ho tloha metsemehloloong e mengata ea Roodepoort.' },
      ],
    },
  },
}

// Fill in localized service arrays (computed from canonical EN list per area).
function fillServices(canonicalServicesByArea: Record<string, string[]>) {
  for (const lang of ['af', 'zu', 'st'] as const) {
    for (const [slug, services] of Object.entries(canonicalServicesByArea)) {
      if (!AREA_TRANSLATIONS[lang][slug]) AREA_TRANSLATIONS[lang][slug] = {}
      if (!AREA_TRANSLATIONS[lang][slug].services) {
        AREA_TRANSLATIONS[lang][slug].services = translateServiceList(services, lang)
      }
    }
  }
}

export type AnyLocation = {
  name: string
  description: string
  suburbs: string[]
  projects: number
  rating: number
  highlights: string[]
  services: string[]
  testimonial: { text: string; author: string; location: string }
  localInfo?: string
  faqs?: { question: string; answer: string }[]
}

/**
 * Merge a canonical EN location record with its per-locale overrides.
 * Missing keys gracefully fall back to the canonical EN value.
 */
export function localizeLocation<L extends AnyLocation>(
  slug: string,
  location: L,
  lang: Locale,
): L {
  if (lang === 'en') {
    // Still inject canonical service list (no override on EN).
    return location
  }
  const tr = AREA_TRANSLATIONS[lang]?.[slug]
  if (!tr) return location
  return {
    ...location,
    description: tr.description ?? location.description,
    localInfo: tr.localInfo ?? location.localInfo,
    highlights: tr.highlights ?? location.highlights,
    services: tr.services ?? translateServiceList(location.services, lang),
    testimonial: {
      ...location.testimonial,
      text: tr.testimonialText ?? location.testimonial.text,
      location: tr.testimonialLocation ?? location.testimonial.location,
    },
    faqs: tr.faqs ?? location.faqs,
  }
}

// Trigger service-list defaults at module init (idempotent).
fillServices({})
