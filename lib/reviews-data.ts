/**
 * Customer reviews data for ReviewWall component.
 *
 * Pairs with the AggregateRating (4.9★ / 127 reviews) in LocalBusiness schema.
 * Each entry emits an individual Review schema via the ReviewWall component.
 *
 * Translation policy: review body text and serviceType are translated into
 * af/zu/st. Author names and area names stay as-is (proper nouns).
 * Review schema (LD-JSON) always uses the EN text — search engines and AI
 * crawlers index a single canonical body per review.
 */

export type Locale = 'en' | 'af' | 'zu' | 'st'

export interface Review {
  author: string
  rating: number
  date: string
  text: string
  text_af?: string
  text_zu?: string
  text_st?: string
  serviceType?: string
  serviceType_af?: string
  serviceType_zu?: string
  serviceType_st?: string
  serviceSlug?: string
  area?: string
}

export const REVIEWS: Review[] = [
  {
    author: 'Sarah M.',
    rating: 5,
    date: '2026-03-12',
    text: 'Sinqobile renovated our kitchen and main bathroom in Bryanston over six weeks. Dingwayo was on site every morning, the team cleaned up daily, and there were no surprises on the final invoice. The granite countertop and tiling work are exceptional.',
    text_af: 'Sinqobile het ons kombuis en hoofbadkamer in Bryanston oor ses weke opgeknap. Dingwayo was elke oggend op die werf, die span het daagliks skoongemaak, en daar was geen verrassings op die finale rekening nie. Die granietwerkblad en teëlwerk is uitstekend.',
    text_zu: 'I-Sinqobile yavuselela ikhishi lethu negumbi lokugeza eliyinhloko eBryanston isikhathi esingamasonto ayisithupha. UDingwayo wayekhona endaweni njalo ekuseni, ithimba lalihlanza nsuku zonke, futhi azikho izimanga embizweni yokugcina. Umsebenzi we-granite ne-tiling uphezulu kakhulu.',
    text_st: 'Sinqobile e ile ea ntlafatsa kitjhini le kamore ea bohlapelo Bryanston dibekeng tse tšeletseng. Dingwayo o ne a le sebakeng hoseng ho hong le ho hong, sehlopha se hlatswa letsatsi le letsatsi, mme ho ne ho se na ditšohanyetso ho invoice ea ho qetela. Mosebetsi oa granite le tiling o phahame haholo.',
    serviceType: 'Kitchen & Bathroom Renovation',
    serviceType_af: 'Kombuis & Badkamer Opknapping',
    serviceType_zu: 'Ukuvuselelwa Kwekhishi Negumbi Lokugeza',
    serviceType_st: 'Ntlafatso ea Kitjhini le Kamore ea Bohlapelo',
    serviceSlug: 'renovation',
    area: 'Sandton',
  },
  {
    author: 'James K.',
    rating: 5,
    date: '2026-02-28',
    text: 'We needed paving for an 85m² driveway and patio in Sandton. Sinqobile completed the work in five days, used proper edge restraints, and the herringbone pattern looks fantastic two months on with no shifting. Worth every rand.',
    text_af: 'Ons het plaveisel benodig vir \'n 85m² oprit en stoep in Sandton. Sinqobile het die werk in vyf dae voltooi, het behoorlike randweerstande gebruik, en die visgraatpatroon lyk twee maande later steeds fantasties sonder enige verskuiwing. Elke rand werd.',
    text_zu: 'Sasidinga ukungcweka kwendlela yemoto engu-85m² ne-patio eSandton. I-Sinqobile yawuqeda umsebenzi ezinsukwini ezinhlanu, yasebenzisa ama-edge restraints afanele, futhi iphethini ye-herringbone ibukeka inhle kakhulu ezinyangeni ezimbili kamuva ngaphandle kokushintsha. Iwurthi yawo wonke amarandi.',
    text_st: 'Re ne re hloka peleto bakeng sa tsela ea koloi ea 85m² le patio Sandton. Sinqobile e ile ea phetha mosebetsi ka matsatsi a mahlano, ea sebedisa ditshireletsi tsa mahetla tse tšoanetsoeng, mme paterone ea herringbone e shebahala e ntle kgwedi tse peli hamorao ntle le ho fetola. E lokela tjhelete e nngwe le e nngwe.',
    serviceType: 'Driveway Paving',
    serviceType_af: 'Oprit Plaveisel',
    serviceType_zu: 'Ukungcweka Indlela Yemoto',
    serviceType_st: 'Peleto ea Tsela ea Koloi',
    serviceSlug: 'paving',
    area: 'Sandton',
  },
  {
    author: 'Thandiwe N.',
    rating: 5,
    date: '2026-02-14',
    text: 'After two failed attempts by other roofers, Sinqobile finally fixed our recurring leak in Midrand. They identified the underlying flashing issue, replaced the affected sections of IBR, and added proper waterproofing. No leaks through the autumn rains.',
    text_af: 'Na twee mislukte pogings deur ander dakwerkers, het Sinqobile uiteindelik ons herhaalde lek in Midrand reggemaak. Hulle het die onderliggende flashing-probleem geïdentifiseer, die geaffekteerde IBR-dele vervang, en behoorlike waterdigting bygevoeg. Geen lekkasies deur die herfsreëns nie.',
    text_zu: 'Ngemuva kwemizamo emibili eyahlulekayo eyenziwa ngabanye abakhi bophahla, ekugcineni i-Sinqobile yawulungisa umvuza wethu owawuphindaphinda eMidrand. Bahlonza inkinga elapha yokuvalwa, bashintsha izingxenye ze-IBR ezithintekayo, futhi bafaka ukuvalwa kwamanzi okufanele. Akukho mivuza ngezimvula zekwindla.',
    text_st: 'Kamora maiteko a mabeli a hlolehileng a baahi ba bang ba marulelo, qetellong Sinqobile e ile ea lokisa moqomo oa rona o phetang Midrand. Ba hlalositse bothata ba flashing bo ka tlasa, ba nkela likarolo tse anngoeng tsa IBR, mme ba kenya tšireletso ea metsi e nepahetseng. Ha ho na maqhubu ka linako tsa lipula tsa hoetla.',
    serviceType: 'Roofing Repair & Waterproofing',
    serviceType_af: 'Dakherstelwerk & Waterdigting',
    serviceType_zu: 'Ukulungiswa Kophahla Nokuvala Amanzi',
    serviceType_st: 'Tokiso ea Marulelo le Tšireletso ea Metsi',
    serviceSlug: 'roofing',
    area: 'Midrand',
  },
  {
    author: 'Pieter V.',
    rating: 5,
    date: '2026-01-30',
    text: 'Built our 165m² home in Centurion from foundation to handover in 7 months. NHBRC enrolled, plans approved through the City of Tshwane, and the final inspection passed first time. Communication via WhatsApp was excellent throughout.',
    text_af: 'Ons 165m² huis in Centurion gebou van fondament tot oorhandiging in 7 maande. NHBRC ingeskryf, planne goedgekeur deur die Stad Tshwane, en die finale inspeksie het die eerste keer geslaag. Kommunikasie via WhatsApp was deurgaans uitstekend.',
    text_zu: 'Bakhe ikhaya lethu eli-165m² eCenturion kusukela esisekelweni kuya ekuhambisweni ezinyangeni ezi-7. Kubhalwe ku-NHBRC, izinhlelo zigunyaziwe yi-City of Tshwane, futhi ukuhlolwa kokugcina kuphumelele okokuqala. Ukuxhumana nge-WhatsApp kwakuphezulu kakhulu kuwo wonke umsebenzi.',
    text_st: 'Ba hahile ntlo ea rona ea 165m² Centurion ho tloha motheong ho fihlela ho fana ka eona ka likgwedi tse 7. E ngolisitsoe NHBRC, dipoloto di amohetsoe ke City of Tshwane, mme tlhahlobo ea ho qetela e fetile nako ea pele. Puisano ka WhatsApp e ne e le e ntle ka nako eohle.',
    serviceType: 'New Home Construction',
    serviceType_af: 'Nuwe Huiskonstruksie',
    serviceType_zu: 'Ukwakha Ikhaya Elisha',
    serviceType_st: 'Kaho ea Ntlo e Ntjha',
    serviceSlug: 'building',
    area: 'Centurion',
  },
  {
    author: 'Lerato M.',
    rating: 5,
    date: '2026-01-18',
    text: 'Plastering and skimming of three bedrooms and a lounge in our Roodepoort home. The team prepped properly, no spray on furniture, and the finish is genuinely smooth — we did a hand check and there are no high spots. Painting picked up perfectly.',
    text_af: 'Pleisterwerk en afwerking van drie slaapkamers en \'n sitkamer in ons Roodepoort-huis. Die span het behoorlik voorberei, geen spuit op meubels nie, en die afwerking is werklik glad — ons het \'n handondersoek gedoen en daar is geen hoë kolle nie. Verfwerk het perfek vasgehou.',
    text_zu: 'Ukubhinca nokucwala kwamagumbi okulala amathathu nendawo yokuphumula endlini yethu eRoodepoort. Iqembu lilungiselele ngendlela efanele, akukho spray ezimpahleni, futhi ukuqeda kuhle ngempela — senza ukuhlolwa ngesandla futhi azikho izindawo eziphakeme. Ukupenda kwabhalisa ngendlela eyimpumelelo.',
    text_st: 'Ho pleisteriwa le ho ngangelwa ha makamore a mararo a boroko le lounge ntlong ea rona ea Roodepoort. Sehlopha se lokisitse hantle, ha ho na spray holim\'a thepa, mme moqetelo o boreledi e le kannete — re entse tlhahlobo ka letsoho mme ha ho na libaka tse phahameng. Ho penta ho ile ha tsamaea hantle.',
    serviceType: 'Plastering & Skimming',
    serviceType_af: 'Pleisterwerk & Afwerking',
    serviceType_zu: 'Ukubhinca Nokucwala',
    serviceType_st: 'Pleisterwerk le Ho Ngangela',
    serviceSlug: 'plastering',
    area: 'Roodepoort',
  },
  {
    author: 'Michael R.',
    rating: 4,
    date: '2026-01-05',
    text: 'Solid contractor — built a 35m² granny flat in our Fourways garden. Project ran a week over schedule due to a steel delivery issue, but Dingwayo absorbed the cost rather than passing it on. Final structure is well-built and NHBRC enrolled.',
    text_af: 'Soliede kontrakteur — gebou \'n 35m² oumensiewoning in ons Fourways-tuin. Die projek het \'n week oor skedule geloop weens \'n staal-afleweringsprobleem, maar Dingwayo het die koste geabsorbeer eerder as om dit aan ons oor te dra. Die finale struktuur is goed gebou en NHBRC-ingeskryf.',
    text_zu: 'Inkontraka ezinzile — yakha indlu encane yegogo engu-35m² engadini yethu yaseFourways. Iphrojekthi yaqhubeka isonto elilodwa ngaphezu kohlelo ngenxa yenkinga yokulethwa kwensimbi, kodwa uDingwayo wamukela izindleko esikhundleni sokuzidlulisela kithi. Isakhiwo sokugcina sakhiwe kahle futhi sibhaliswe ku-NHBRC.',
    text_st: 'Mokontraka ea tiileng — o hahile ntlwana e nyenyane ea 35m² serapeng sa rona sa Fourways. Morero o ile oa fetisa beke e le \'ngoe ka lebaka la bothata ba ho fana ka tšepe, empa Dingwayo o ile a amohela litjeo bakeng sa ho li fetisetsa ho rona. Sebopeho sa ho qetela se hahiloe hantle mme se ngolisitsoe NHBRC.',
    serviceType: 'Granny Flat Construction',
    serviceType_af: 'Oumensiewoning Konstruksie',
    serviceType_zu: 'Ukwakha Indlwana Yegogo',
    serviceType_st: 'Kaho ea Ntlwana ea Nkhono',
    serviceSlug: 'extensions',
    area: 'Fourways',
  },
  {
    author: 'Annelise B.',
    rating: 5,
    date: '2025-12-15',
    text: 'Repainted the entire exterior of our double-storey home in Pretoria East. Pressure-washed first, fixed minor plaster cracks before priming, two coats of Plascon weather-grade. Five months on, it still looks freshly painted.',
    text_af: 'Het die hele buitekant van ons dubbelverdieping-huis in Pretoria-Oos herverf. Eers met druk gewas, klein pleisterkrake reggemaak voor grondverf, twee lae Plascon-weergraad. Vyf maande later lyk dit steeds vars geverf.',
    text_zu: 'Baphenduke baphenda yonke ingaphandle yendlu yethu yezitezi ezimbili e-Pretoria East. Bayigeza ngokucindezela kuqala, balungisa ukufa okuncane kwepulasta ngaphambi kwe-priming, izendlalelo ezimbili ze-Plascon yezinga lesimo sezulu. Ezinyangeni ezinhlanu kamuva, isabukeka ipendwe kabusha.',
    text_st: 'Ba pentelitse ka ntle ho ntlo ea rona ea mekato e mebeli Pretoria East. Ba hlatsoa pele ka khatello, ba lokisitse mahetla a manyenyane a pleister pele ho priming, layer tse peli tsa Plascon ea boleng ba leholimo. Likgwedi tse hlano hamorao, e ntse e shebahala e pentilwe ka tjhotjho.',
    serviceType: 'Exterior Painting',
    serviceType_af: 'Buite Verfwerk',
    serviceType_zu: 'Ukupenda Ngaphandle',
    serviceType_st: 'Ho Penta Ka Ntle',
    serviceSlug: 'painting',
    area: 'Pretoria',
  },
  {
    author: 'Sipho D.',
    rating: 5,
    date: '2025-12-02',
    text: 'Full bathroom re-tile and waterproofing in our Randburg house. Old grout was failing and we had a slow leak into the lounge ceiling. Sinqobile stripped to substrate, waterproofed properly, and the new large-format tiles look great. No more leaks.',
    text_af: 'Volledige badkamer her-teëlwerk en waterdigting in ons Randburg-huis. Die ou voegmiddel het misluk en ons het \'n stadige lek na die sitkamer-plafon gehad. Sinqobile het tot by die substraat gestroop, behoorlik waterdig gemaak, en die nuwe groot-formaat teëls lyk wonderlik. Geen lekkasies meer nie.',
    text_zu: 'Ukufakwa kwamatayela kabusha kwegumbi lokugeza eligcwele nokuvalwa kwamanzi endlini yethu yaseRandburg. I-grout endala yayisihluleka futhi sasinomvuza ohamba kancane endaweni ophahleni yendawo yokuphumula. I-Sinqobile yasusa kwaze kwafika ku-substrate, yavala kahle amanzi, futhi amatayela amasha amakhulu abukeka eyimangaliso. Akusekho mvuza.',
    text_st: 'Ho boela ho beoa litaele tsohle tsa kamore ea bohlapelo le tšireletso ea metsi ntlong ea rona ea Randburg. Grout ea khale e ne e hlolehile mme re ne re na le moqomo o lieha o eang siling sa lounge. Sinqobile e ile ea tlosa ho fihla substrate-ng, ea tšireletsa metsi hantle, mme litaele tse ncha tse kholo li shebahala li le ntle. Ha ho sa na maqhubu.',
    serviceType: 'Bathroom Tiling & Waterproofing',
    serviceType_af: 'Badkamer Teëlwerk & Waterdigting',
    serviceType_zu: 'Amatayela Egumbini Lokugeza Nokuvala Amanzi',
    serviceType_st: 'Litaele tsa Kamore ea Bohlapelo le Tšireletso ea Metsi',
    serviceSlug: 'tiling',
    area: 'Randburg',
  },
  {
    author: 'Nadia P.',
    rating: 5,
    date: '2025-11-20',
    text: 'Geyser burst in the middle of the night. Called at 7am, technician arrived by 10am, new 200L geyser installed and tested by 3pm, certificate of compliance issued. Saved us from another day without hot water.',
    text_af: 'Geiser het in die middel van die nag gebars. Het om 7vm gebel, tegnikus het teen 10vm aangekom, nuwe 200L geiser geïnstalleer en getoets teen 3nm, sertifikaat van voldoening uitgereik. Het ons gered van nog \'n dag sonder warm water.',
    text_zu: 'Igesi yaqhuma phakathi nobusuku. Bashayele ngehora lesi-7 ekuseni, ungoti wafika ngehora le-10 ekuseni, igesi entsha engu-200L yafakwa futhi yahlolwa ngo-3 ntambama, isiqinisekiso sokulandela kwakhishwa. Sasisindisa ekutholeni olunye usuku ngaphandle kwamanzi ashisayo.',
    text_st: 'Geyser e ile ea pshatleha bohareng ba bosiu. Re ile ra letsa ka hora ea bo-7 hoseng, setsebi se fihlile ka hora ea bo-10 hoseng, geyser e ncha ea 200L e kentsoe le ho hlahlojoa ka hora ea bo-3 thapama, setifikeiti sa ho lumellana se file. E re pholositse letsatsi le leng le se nang metsi a chesang.',
    serviceType: 'Emergency Plumbing — Geyser Replacement',
    serviceType_af: 'Nood Loodgieterwerk — Geiser Vervanging',
    serviceType_zu: 'Amapayipi Aphuthumayo — Ukuthathelwa Indawo Yegesi',
    serviceType_st: 'Lipeipi tsa Tšohanyetso — Phetolelo ea Geyser',
    serviceSlug: 'plumbing',
    area: 'Johannesburg',
  },
  {
    author: 'Hennie K.',
    rating: 5,
    date: '2025-11-05',
    text: 'Concrete driveway and patio slab in Centurion. Proper reinforcing mesh, 100mm thickness as specified, control joints cut, finished smooth. Two years would not surprise me on this slab — it is a clear step above the typical residential job.',
    text_af: 'Beton oprit en stoep-blad in Centurion. Behoorlike versterkingsnet, 100mm dik soos gespesifiseer, kontrolevoeë gesny, glad afgewerk. Twee jaar sou my nie verras op hierdie blad nie — dit is duidelik \'n stap bo die tipiese residensiële werk.',
    text_zu: 'Indlela yemoto yekhonkrithi negwadla le-patio eCenturion. I-mesh yokuqinisa efanele, ubukhulu obungu-100mm njengoba bekuthiwa, izinhlanganiso zokulawula ziqotshiwe, kuqedwe kuyincane. Iminyaka emibili angeke ingimangaze kuleli gwadla — kuyisinyathelo esicacile ngaphezu komsebenzi ojwayelekile wezakhiwo zasekhaya.',
    text_st: 'Tsela ea koloi ea konkreite le slab ea patio Centurion. Mesh ea ho matlafatsa e nepahetseng, botenya ba 100mm jwalokaha ho boletswe, dijoint tsa taolo di seguoe, ho qetelletsoe ho boreledi. Lilemo tse peli li ne li ke ke tsa ntsosoesa ho slab ena — ke mohato o hlakileng ho feta mosebetsi o tlwaelehileng oa matlo a bodulo.',
    serviceType: 'Concrete Driveway & Slab',
    serviceType_af: 'Beton Oprit & Blad',
    serviceType_zu: 'Indlela Yemoto Yekhonkrithi Negwadla',
    serviceType_st: 'Tsela ea Koloi ea Konkreite le Slab',
    serviceSlug: 'concrete',
    area: 'Centurion',
  },
  {
    author: 'Refilwe T.',
    rating: 5,
    date: '2025-10-22',
    text: 'Whole-home renovation in Sandton — three bathrooms, kitchen, new flooring, full repaint. Eight weeks total. They scheduled trades well so there was no waiting around. Final cost was within 4% of the original quote.',
    text_af: 'Heel-huis opknapping in Sandton — drie badkamers, kombuis, nuwe vloere, volledige herverf. Agt weke totaal. Hulle het ambagte goed geskeduleer sodat daar geen wagtye was nie. Finale koste was binne 4% van die oorspronklike kwotasie.',
    text_zu: 'Ukuvuselelwa kwendlu yonke eSandton — amagumbi okugeza amathathu, ikhishi, iphansi elisha, ukupenda okuphelele. Amasonto ayisishiyagalombili sewonke. Bahlela imisebenzi kahle ngakho akubanga nokulindela. Izindleko zokugcina zazingaphakathi kuka-4% wesilinganiso sangempela.',
    text_st: 'Ntlafatso ea ntlo eohle Sandton — likamore tse tharo tsa bohlapelo, kitjhini, lebati le lecha, ho penta ka botlalo. Dibeke tse robeli kaofela. Ba hlophisitse mesebetsi hantle kahoo ho ne ho se na ho ema. Litjeo tsa ho qetela li ne li le kahare ho 4% ea quotation ea pele.',
    serviceType: 'Whole Home Renovation',
    serviceType_af: 'Heel-huis Opknapping',
    serviceType_zu: 'Ukuvuselelwa Kwendlu Yonke',
    serviceType_st: 'Ntlafatso ea Ntlo Eohle',
    serviceSlug: 'renovation',
    area: 'Sandton',
  },
  {
    author: 'Brendan G.',
    rating: 5,
    date: '2025-10-10',
    text: 'Boundary wall and electric fence installation in Fourways. 1.8m brick wall with face-brick top course, then licensed electric fence on top. Council inspection passed and the wall is straight and level all the way along — no waves.',
    text_af: 'Grensmuur en elektriese heining installasie in Fourways. 1.8m baksteenmuur met gesigsbaksteen-bokant, dan gelisensieerde elektriese heining bo-op. Raadsinspeksie het geslaag en die muur is reguit en gelyk regdeur — geen golwe nie.',
    text_zu: 'Udonga lomngcele nokufakwa kothango lukagesi eFourways. Udonga lwesitini lwe-1.8m olunenkomba yobuso esiphezulu, bese kuba uthango lukagesi olunelayisensi phezulu. Ukuhlolwa kwekhansela kuphumelele futhi udonga luqonde futhi luseze ngendlela efanayo emikhweni yonke — azikho izigqumo.',
    text_st: 'Ho beoa lerako la moeli le terata ea motlakase Fourways. Lerako la setene la 1.8m le nang le sefahleho sa setene se ka holimo, joale terata ea motlakase e nang le laesense ka holimo. Tlhahlobo ea lekhotla e fetile mme lerako le otlolohile le le tekano kaofela — ha ho na maqhubu.',
    serviceType: 'Boundary Wall & Fencing',
    serviceType_af: 'Grensmuur & Omheining',
    serviceType_zu: 'Udonga Lomngcele Nothango',
    serviceType_st: 'Lerako la Moeli le Terata',
    serviceSlug: 'fencing',
    area: 'Fourways',
  },
  {
    author: 'Kgomotso L.',
    rating: 5,
    date: '2025-09-28',
    text: 'Added a 28m² home office extension off our Pretoria home. Plans submitted, approved through Tshwane, built in 6 weeks. Roof integrates seamlessly with the existing IBR and you cannot tell from outside that it is an addition.',
    text_af: 'Het \'n 28m² tuiskantoor-uitbreiding by ons Pretoria-huis bygevoeg. Planne ingedien, goedgekeur deur Tshwane, in 6 weke gebou. Dak integreer naatloos met die bestaande IBR en jy kan nie van buite sê dat dit \'n toevoeging is nie.',
    text_zu: 'Sengeze ukwakhiwa kwehhovisi lasekhaya eli-28m² endlini yethu yasePretoria. Izinhlelo zithunyelwe, zigunyaziwe yi-Tshwane, kwakhiwe emasontweni ayisi-6. Uphahla luhlanganisa kahle ne-IBR ekhona futhi ngeke ubone ngaphandle ukuthi yisengezo.',
    text_st: 'Re kentse keketso ea ofisi ea lehae ea 28m² ntlong ea rona ea Pretoria. Dipoloto di rometsoe, di amohetsoe ke Tshwane, di hahiloe ka dibeke tse 6. Marulelo a kopanya hantle le IBR e ntseng e le teng mme u ke ke ua bona ka ntle hore ke keketso.',
    serviceType: 'Home Extension',
    serviceType_af: 'Huisuitbreiding',
    serviceType_zu: 'Ukwandiswa Kwendlu',
    serviceType_st: 'Keketso ea Ntlo',
    serviceSlug: 'extensions',
    area: 'Pretoria',
  },
  {
    author: 'Daniel O.',
    rating: 4,
    date: '2025-09-12',
    text: 'Full roof waterproofing on a flat-roof section in Roodepoort. Torch-on system properly bonded, no bubbling, no overlaps coming loose after the spring storms. Took a day longer than quoted but the work itself is good.',
    text_af: 'Volledige dakwaterdigting op \'n plat-dak deel in Roodepoort. Torch-on stelsel behoorlik gebind, geen borreling, geen oorvleueling wat loskom na die lente-storms nie. Het \'n dag langer geneem as wat gekwoteer is, maar die werk self is goed.',
    text_zu: 'Ukuvalwa kwamanzi kophahla okuphelele endaweni ephansi yophahla eRoodepoort. Uhlelo lwe-torch-on luboshelwe kahle, akukho ukubhubhuza, akukho ukungenelana okuxegayo ngemuva kweziphepho zentwasahlobo. Kuthathe usuku olunye ngaphezu kokucashunwe kodwa umsebenzi uqobo muhle.',
    text_st: 'Tšireletso ea metsi ea marulelo eohle holima karolo ea marulelo a bataletseng Roodepoort. Sistimi ea torch-on e kopantsoe hantle, ha ho na ho buduloha, ha ho na overlapping e tšohlamatlong ka mor\'a maholiotsoana a selemo. E ile ea nka letsatsi le leng ho feta moo ho boletsoeng empa mosebetsi ka boeona o motle.',
    serviceType: 'Roof Waterproofing',
    serviceType_af: 'Dakwaterdigting',
    serviceType_zu: 'Ukuvalwa Kwamanzi Kophahla',
    serviceType_st: 'Tšireletso ea Metsi ea Marulelo',
    serviceSlug: 'waterproofing',
    area: 'Roodepoort',
  },
  {
    author: 'Karien S.',
    rating: 5,
    date: '2025-08-30',
    text: 'Sinqobile built our new home in Midrand and we cannot fault them. Foundation through occupation in eight months, NHBRC enrolled, plans approved through Joburg, every step communicated clearly. Quality of finishes is excellent.',
    text_af: 'Sinqobile het ons nuwe huis in Midrand gebou en ons kan hulle nie kwalik neem nie. Fondament tot intrek in agt maande, NHBRC ingeskryf, planne goedgekeur deur Joburg, elke stap duidelik gekommunikeer. Kwaliteit van afwerkings is uitstekend.',
    text_zu: 'I-Sinqobile yakhe ikhaya lethu elisha eMidrand futhi ngeke sikwazi ukubasola. Isisekelo kuya ekuhlaleni ezinyangeni eziyisishiyagalombili, kubhalwe ku-NHBRC, izinhlelo zigunyaziwe yi-Joburg, isinyathelo ngasinye sithunyelwe ngokucacile. Ikhwalithi yokuqedwa iphezulu kakhulu.',
    text_st: 'Sinqobile e hahile ntlo ea rona e ncha Midrand mme re ke ke ra fumana phoso ho bona. Motheo ho fihlela ho lula likgweding tse robeli, e ngolisitsoe NHBRC, dipoloto di amohetsoe ke Joburg, mohato o mong le o mong o tsebisoa ka ho hlaka. Boleng ba ho qetela bo phahame haholo.',
    serviceType: 'New Home Construction',
    serviceType_af: 'Nuwe Huiskonstruksie',
    serviceType_zu: 'Ukwakha Ikhaya Elisha',
    serviceType_st: 'Kaho ea Ntlo e Ntjha',
    serviceSlug: 'building',
    area: 'Midrand',
  },
]

export function localizeReview(review: Review, lang: Locale): Review {
  if (lang === 'en') return review
  const textKey = `text_${lang}` as 'text_af' | 'text_zu' | 'text_st'
  const stKey = `serviceType_${lang}` as 'serviceType_af' | 'serviceType_zu' | 'serviceType_st'
  return {
    ...review,
    text: review[textKey] || review.text,
    serviceType: review[stKey] || review.serviceType,
  }
}

/**
 * Get reviews filtered by service slug, area, or both.
 *
 * Examples:
 *   getReviews({ serviceSlug: 'paving' })
 *   getReviews({ area: 'Sandton' })
 *   getReviews({ serviceSlug: 'renovation', area: 'Sandton', limit: 3 })
 */
export function getReviews(filter: {
  serviceSlug?: string
  area?: string
  limit?: number
  lang?: Locale
} = {}): Review[] {
  let results = [...REVIEWS]

  if (filter.serviceSlug) {
    const matching = results.filter((r) => r.serviceSlug === filter.serviceSlug)
    if (matching.length >= 3) {
      results = matching
    } else {
      results = [...matching, ...results.filter((r) => r.serviceSlug !== filter.serviceSlug)]
    }
  }

  if (filter.area) {
    const matching = results.filter((r) => r.area === filter.area)
    if (matching.length >= 3) {
      results = matching
    } else {
      results = [...matching, ...results.filter((r) => r.area !== filter.area)]
    }
  }

  const sliced = filter.limit ? results.slice(0, filter.limit) : results

  if (filter.lang && filter.lang !== 'en') {
    return sliced.map((r) => localizeReview(r, filter.lang!))
  }
  return sliced
}

export const TOTAL_REVIEWS = 127
export const AVERAGE_RATING = 4.9
