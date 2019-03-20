# rm2front


### Frontend

Jag har använt Vue på klientsidan, eftersom jag kände till det från ett tidigare projekt och
ville vidareutveckla mina kunskaper där. Att innehåll, skript och CSS ligger på samma sida upplevde jag
som smidigt till att börja med, men klumpigare när man ville ha generella funktioner för alla sidor och likaså
likastylade element på olika sidor. Allt eftersom blev jag bättre på att utnyttja Vue:s specialmöjligheter att
referera till element o.s.v.

Aktiekursen uppdateras ständigt med Vue-native-Websocket. Det fungerade smidigt.

Graferna ritas med Canvas. Nytt för mig, men det gick ganska bra.

Huvudsidan består bl.a. av fem likadana element med graf, aktiekurser o.s.v. Från början skrev jag dem var för
sig, men använde senare en lopfunktion i Vue för att bli mera DRY. Dock fungerade det inte riktigt som jag
trott, så vissa lösningar hade blivit ännu bättre om jag tänkt lop från början och vetat hur den fungerade. Så där finns
vissa inbyggda klantigheter, men det visuella resultatet är som det ska.

### Frontend-tester

Jag försökte mig på krav 5 med use-cases i Selenium.

Första use-caset är enkelt. Titta på förstasidan och se om överskriften stämmer.

Andra use-caset innebär ett klick på Om-länken varefter det kontrolleras att h3-rubriken blir rätt.

Därefter hade jag tänkt att göra fler use-cases med andra knapptryckningar, men dessvärre vill inte Selenium samarbeta.
Det strular med promises och .then verkar anropas innan respektive element riktigt har hittats, varför klickfunktioner o.s.v. inte
fungerar. Jag löste det i början genom att sätta en setTimeout på olika tider vid varje funktion så att de väntar in varandra, men
det funkade bara till en viss gräns. Därefter blev det bekymmer med beforeEach eller afterEach. Efter flera timmar måste jag dessvärre
ge upp, fastän jag bara lyckat göra 2 av de krävda 5 use-casen.

(Men jag anser att det mest är Seleniums fel. Det borde inte vara svårare att göra 5 än 2 nästan likadana tester.)
