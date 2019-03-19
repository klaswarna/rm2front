# rm2front

Jag försökte mig på krav 5 med use-cases i Selenium.

Första use-caset är enkelt. Titta på förstasidan och se om överskriften stämmer.

Andra use-caset innebär ett klick på Om-länken varefter det kontrolleras att h3-rubriken blir rätt.

Därefter hade jag tänkt att göra fler use-cases med andra knapptryckningar, men dessvärre vill inte Selenium samarbeta.
Det strular med promises och .then verkar anropas innan respektive element riktigt har hittats, varför klickfunktioner o.s.v. inte
fungerar. Jag löste det i början genom att sätta en setTimeout på olika tider vid varje funktion så att de väntar in varandra, men
det funkade bara till en viss gräns. Därefter blev det bekymmer med beforeEach eller afterEach. Efter flera timmar måste jag dessvärre
ge upp, fastän jag bara lyckat göra 2 av de krävda 5 use-casen.

(Men jag anser att det mest är Seleniums fel. Det borde inte vara svårare att göra 5 än 2 nästan likadana tester.)
