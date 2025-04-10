const pokemons = [
    {
      name: "Bulbasaur",
      num: "1",
      imgsrc: "./src/images/pokemons/gen_one/bulbasaur.gif",
      types: ["grass", "poison"],
      desc: "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger."
    },
    {
      name: "Ivysaur",
      num: "2",
      imgsrc: "./src/images/pokemons/gen_one/ivysaur.gif",
      types: ["grass", "poison"],
      desc: "When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs."
    },
    {
      name: "Venusaur",
      num: "3",
      imgsrc: "./src/images/pokemons/gen_one/venusaur.gif",
      types: ["grass", "poison"],
      desc: "Its plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight."
    },
    {
        name: "Mega Venusaur",
        num: "3",
        imgsrc: "./src/images/pokemons/gen_one/venusaur-mega.gif",
        types: ["grass", "poison"],
        desc: "In order to support its flower, which has grown larger due to Mega Evolution, its back and legs have become stronger."
      },
    {
        name: "Charmander",
        num: "4",
        imgsrc: "./src/images/pokemons/gen_one/charmander.gif",
        types: ["fire"],
        desc: "From the time it is born, a flame burns at the tip of its tail. Its life would end if the flame were to go out."
    },
    {
        name: "Charmeleon",
        num: "5",
        imgsrc: "./src/images/pokemons/gen_one/charmeleon.gif",
        types: ["fire"],
        desc: "If it becomes agitated during battle, it spouts intense flames, incinerating its surroundings."
    },
    {
        name: "Charizard",
        num: "6",
        imgsrc: "./src/images/pokemons/gen_one/charizard.gif",
        types: ["fire", "flying"],
        desc: "Its wings can carry this Pokémon close to an altitude of 4,600 feet. It blows out fire at very high temperatures."
    },
    {
        name: "Mega Charizard X",
        num: "6",
        imgsrc: "./src/images/pokemons/gen_one/charizard-megax.gif",
        types: ["fire", "dragon"],
        desc: "The overwhelming power that fills its entire body causes it to turn black and create intense blue flames."
    },
    {
        name: "Mega Charizard Y",
        num: "6",
        imgsrc: "./src/images/pokemons/gen_one/charizard-megay.gif",
        types: ["fire", "flying"],
        desc: "Its bond with its Trainer is the source of its power. It boasts speed and maneuverability greater than that of a jet fighter."
    },
    {
        name: "Squirtle",
        num: "7",
        imgsrc: "./src/images/pokemons/gen_one/squirtle.gif",
        types: ["water"],
        desc: "When it feels threatened, it draws its limbs inside its shell and sprays water from its mouth."
    },
    {
        name: "Wartortle",
        num: "8",
        imgsrc: "./src/images/pokemons/gen_one/wartortle.gif",
        types: ["water"],
        desc: "It cleverly controls its furry ears and tail to maintain its balance while swimming."
    },
    {
        name: "Blastoise",
        num: "9",
        imgsrc: "./src/images/pokemons/gen_one/blastoise.gif",
        types: ["water"],
        desc: "It crushes its foe under its heavy body to cause fainting. In a pinch, it will withdraw inside its shell."
    },
    {
        name: "Mega Blastoise",
        num: "9",
        imgsrc: "./src/images/pokemons/gen_one/blastoise-mega.gif",
        types: ["water"],
        desc: "The cannon on its back is as powerful as a tank gun. Its tough legs and back enable it to withstand the recoil from firing the cannon."
    },
    {
        name: "Caterpie",
        num: "10",
        imgsrc: "./src/images/pokemons/gen_one/caterpie.gif",
        types: ["bug"],
        desc: "Its short feet are tipped with suction pads that enable it to tirelessly climb slopes and walls."
    },
    {
        name: "Metapod",
        num: "11",
        imgsrc: "./src/images/pokemons/gen_one/metapod.gif",
        types: ["bug"],
        desc: "Even though it is encased in a sturdy shell, the body inside is tender. It can’t withstand a harsh attack."
    },
    {
        name: "Butterfree",
        num: "12",
        imgsrc: "./src/images/pokemons/gen_one/butterfree.gif",
        types: ["bug"],
        desc: "The wings are protected by rain-repellent dust. As a result, this POKéMON can fly about even in rain."
    },
    {
        name: "Weedle",
        num: "13",
        imgsrc: "./src/images/pokemons/gen_one/weedle.gif",
        types: ["bug", "poison"],
        desc: "Often found in forests and grasslands. It has a sharp, toxic barb of around two inches on top of its head."
    },
    {
        name: "Kakuna",
        num: "14",
        imgsrc: "./src/images/pokemons/gen_one/kakuna.gif",
        types: ["bug", "poison"],
        desc: "This POKéMON is in a temporary stage while making its body. It is almost completely unable to move on its own."
    },
    {
        name: "Beedrill",
        num: "15",
        imgsrc: "./src/images/pokemons/gen_one/beedrill.gif",
        types: ["bug", "poison"],
        desc: "May appear in a swarm. Flies at violent speeds, all the while stabbing with the toxic stinger on its rear."
    },
    {
        name: "Mega Breedrill",
        num: "15",
        imgsrc: "./src/images/pokemons/gen_one/beedrill-mega.gif",
        types: ["bug", "poison"],
        desc: "Its legs have become poison stingers. It stabs its prey repeatedly with the stingers on its limbs, dealing the final blow with the stinger on its rear."
    },
    {
        name: "Pidgey",
        num: "16",
        imgsrc: "./src/images/pokemons/gen_one/pidgey.gif",
        types: ["flying", "normal"],
        desc: "Does not like to fight. It hides in tall grass and so on, foraging for food such as small bugs."
    },
    {
        name: "Pidgeotto",
        num: "17",
        imgsrc: "./src/images/pokemons/gen_one/pidgeotto.gif",
        types: ["flying", "normal"],
        desc: "The claws on its feet are well developed. It can carry prey such as an EXEGGCUTE to its nest over 60 miles away."
    },
    {
        name: "Pidgeot",
        num: "18",
        imgsrc: "./src/images/pokemons/gen_one/pidgeot.gif",
        types: ["flying", "normal"],
        desc: "It spreads its gorgeous wings widely to intimidate enemies. It races through the skies at Mach-2 speed."
    },
    {
        name: "Rattata",
        num: "19",
        imgsrc: "./src/images/pokemons/gen_one/rattata.gif",
        types: ["normal"],
        desc: "Its fangs are long and very sharp. They grow continuously, so it gnaws on hard things to whittle them down."
    },
    {
        name: "Raticate",
        num: "20",
        imgsrc: "./src/images/pokemons/gen_one/raticate.gif",
        types: ["normal"],
        desc: "Its rear feet have three toes each. They are webbed, enabling it to swim across rivers."
    },
    {
        name: "Spearow",
        num: "21",
        imgsrc: "./src/images/pokemons/gen_one/spearow.gif",
        types: ["flying", "normal"],
        desc: "It busily flits around here and there. Even if it is frail, it can be a tough foe that uses MIRROR MOVE."
    },
    {
        name: "Fearow",
        num: "22",
        imgsrc: "./src/images/pokemons/gen_one/fearow.gif",
        types: ["flying", "normal"],
        desc: "Its huge and magnificent wings can keep it aloft in the sky. It can remain flying a whole day without landing."
    },
    {
        name: "Ekans",
        num: "23",
        imgsrc: "./src/images/pokemons/gen_one/ekans.gif",
        types: ["poison"],
        desc: "A very common sight in grassland, etc. It flicks its tongue in and out to sense danger in its surroundings."
    },
    {
        name: "Arbok",
        num: "24",
        imgsrc: "./src/images/pokemons/gen_one/arbok.gif",
        types: ["poison"],
        desc: "The pattern on its belly appears to be a frightening face. Weak foes will flee just at the sight of the pattern."
    },
    {
        name: "Pikachu",
        num: "25",
        imgsrc: "./src/images/pokemons/gen_one/pikachu.gif",
        types: ["electric"],
        desc: "It has small electric sacs on both its cheeks. If threatened, it looses electric charges from the sacs."
    },
    {
        name: "Raichu",
        num: "26",
        imgsrc: "./src/images/pokemons/gen_one/raichu.gif",
        types: ["electric"],
        desc: "Its electric charges can reach even 100,000 volts. Careless contact can cause even an Indian elephant to faint."
    },
    {
        name: "Sandshrew",
        num: "27",
        imgsrc: "./src/images/pokemons/gen_one/sandshrew.gif",
        types: ["ground"],
        desc: "It burrows and lives underground. If threatened, it curls itself up into a ball for protection."
    },
    {
        name: "Sandslash",
        num: "28",
        imgsrc: "./src/images/pokemons/gen_one/sandslash.gif",
        types: ["ground"],
        desc: "It is adept at attacking with the spines on its back and its sharp claws while quickly scurrying about."
    },
    {
        name: "Nidoran ♀",
        num: "29",
        imgsrc: "./src/images/pokemons/gen_one/nidoran_f.gif",
        types: ["poison"],
        desc: "Though small, it must be treated with caution because of its powerfully toxic barbs. The female has smaller horns."
    },
    {
        name: "Nidorina",
        num: "30",
        imgsrc: "./src/images/pokemons/gen_one/nidorina.gif",
        types: ["poison"],
        desc: "The female has a gentle temperament. It emits ultrasonic cries that have the power to befuddle foes."
    },
    {
        name: "Nidoqueen",
        num: "31",
        imgsrc: "./src/images/pokemons/gen_one/nidoqueen.gif",
        types: ["poison", "ground"],
        desc: "The body is covered by stiff, needle-like scales. If it becomes excited, the needles bristle outwards."
    },
    {
        name: "Nidoran ♂",
        num: "32",
        imgsrc: "./src/images/pokemons/gen_one/nidoran_m.gif",
        types: ["poison"],
        desc: "Its large ears are flapped like wings when it is listening to distant sounds. It extends toxic barbs when angered."
    },
    {
        name: "Nidorino",
        num: "33",
        imgsrc: "./src/images/pokemons/gen_one/nidorino.gif",
        types: ["poison"],
        desc: "It is easily angered. By swinging its well-developed horn wildly, it can even punch through diamond."
    },
    {
        name: "Nidoking",
        num: "34",
        imgsrc: "./src/images/pokemons/gen_one/nidoking.gif",
        types: ["poison", "ground"],
        desc: "It is recognized by its rock-hard hide and its extended horn. Be careful with the horn as it contains venom."
    },
    {
        name: "Clefairy",
        num: "35",
        imgsrc: "./src/images/pokemons/gen_one/clefairy.gif",
        types: ["fairy"],
        desc: "Its adorable appearance makes it popular as a pet. However, it is rare and difficult to find."
    },
    {
        name: "Clefable",
        num: "36",
        imgsrc: "./src/images/pokemons/gen_one/clefable.gif",
        types: ["fairy"],
        desc: "It has an acute sense of hearing. It can easily hear a pin being dropped nearly 1,100 yards away."
    },
    {
        name: "Vulpix",
        num: "37",
        imgsrc: "./src/images/pokemons/gen_one/vulpix.gif",
        types: ["fire"],
        desc: "While young, it has six gorgeous tails. When it grows, several new tails are sprouted."
    },
    {
        name: "Ninetales",
        num: "38",
        imgsrc: "./src/images/pokemons/gen_one/ninetales.gif",
        types: ["fire"],
        desc: "It has nine long tails and fur that gleams gold. It is said to live for 1,000 years."
    },
    {
        name: "Jigglypuff",
        num: "39",
        imgsrc: "./src/images/pokemons/gen_one/jigglypuff.gif",
        types: ["fairy", "normal"],
        desc: "It captivates foes with its huge, round eyes, then lulls them to sleep by singing a soothing melody."
    },
    {
        name: "Wigglytuff",
        num: "40",
        imgsrc: "./src/images/pokemons/gen_one/wigglytuff.gif",
        types: ["fairy", "normal"],
        desc: "Its fur is extremely fine, dense, and supple. The exquisitely pleasant fur conveys an image of luxury."
    },
    {
        name: "Zubat",
        num: "41",
        imgsrc: "./src/images/pokemons/gen_one/zubat.gif",
        types: ["poison", "flying"],
        desc: "It has no eyes. Instead, it relies on its ultrasonic cries for echo location to flit about in darkness."
    },
    {
        name: "Golbat",
        num: "42",
        imgsrc: "./src/images/pokemons/gen_one/golbat.gif",
        types: ["poison", "flying"],
        desc: "It clamps down on its prey with needle-sharp fangs and drains over 10 ounces of blood in one gulp."
    },
    {
        name: "Oddish",
        num: "43",
        imgsrc: "./src/images/pokemons/gen_one/oddish.gif",
        types: ["grass", "poison"],
        desc: "Its scientific name is “Oddium Wanderus.” At night, it is said to walk nearly 1,000 feet on its two roots."
    },
    {
        name: "Gloom",
        num: "44",
        imgsrc: "./src/images/pokemons/gen_one/gloom.gif",
        types: ["grass", "poison"],
        desc: "Its pistils exude an incredibly foul odor. The horrid stench can cause fainting at a distance of 1.25 miles."
    },
    {
        name: "Vileplume",
        num: "45",
        imgsrc: "./src/images/pokemons/gen_one/vileplume.gif",
        types: ["grass", "poison"],
        desc: "Its petals are the largest in the world. It fiendishly scatters allergy-causing pollen from its petals."
    },
    {
        name: "Paras",
        num: "46",
        imgsrc: "./src/images/pokemons/gen_one/paras.gif",
        types: ["bug", "grass"],
        desc: "Growing out of the bug’s back are mushrooms called tochukaso. The mushrooms grow with the bug host."
    },
    {
        name: "Parasect",
        num: "47",
        imgsrc: "./src/images/pokemons/gen_one/parasect.gif",
        types: ["bug", "grass"],
        desc: "It scatters toxic spores from the mushroom cap. In China, the spores are used as herbal medicine."
    },
    {
        name: "Venonat",
        num: "48",
        imgsrc: "./src/images/pokemons/gen_one/venonat.gif",
        types: ["bug", "poison"],
        desc: "Its eyes act as radar, enabling it to be active in darkness. The eyes can also shoot powerful beams."
    },
    {
        name: "Venomoth",
        num: "49",
        imgsrc: "./src/images/pokemons/gen_one/venomoth.gif",
        types: ["bug", "poison"],
        desc: "The wings are covered with dustlike scales. Every time it flaps its wings, it looses highly toxic dust."
    },
    {
        name: "Diglett",
        num: "50",
        imgsrc: "./src/images/pokemons/gen_one/diglett.gif",
        types: ["ground"],
        desc: "It burrows through the ground at a shallow depth. It leaves raised earth in its wake, making it easy to spot."
    },
    {
        name: "Dugtrio",
        num: "51",
        imgsrc: "./src/images/pokemons/gen_one/dugtrio.gif",
        types: ["ground"],
        desc: "In battle, it digs through the ground and strikes the unsuspecting foe from an unexpected direction."
    },
    {
        name: "Meowth",
        num: "52",
        imgsrc: "./src/images/pokemons/gen_one/meowth.gif",
        types: ["normal"],
        desc: "All it does is sleep during the daytime. At night, it patrols its territory with its eyes aglow."
    },
    {
        name: "Persian",
        num: "53",
        imgsrc: "./src/images/pokemons/gen_one/persian.gif",
        types: ["normal"],
        desc: "Has a vicious temperament. Beware if it raises its tail straight up. It is a signal that it is about to pounce and bite."
    },
    {
        name: "Psyduck",
        num: "54",
        imgsrc: "./src/images/pokemons/gen_one/psyduck.gif",
        types: ["water"],
        desc: "It is constantly wracked by a headache. When the headache turns intense, it begins using mysterious powers."
    },
    {
        name: "Golduck",
        num: "55",
        imgsrc: "./src/images/pokemons/gen_one/golduck.gif",
        types: ["water"],
        desc: "The forelegs are webbed, helping to make it an adept swimmer. It can be seen swimming elegantly in lakes, etc."
    },
    {
        name: "Mankey",
        num: "56",
        imgsrc: "./src/images/pokemons/gen_one/mankey.gif",
        types: ["fighting"],
        desc: "Light and agile on its feet, and ferocious in temperament. When angered, it flies into an uncontrollable frenzy."
    },
    {
        name: "Primeape",
        num: "57",
        imgsrc: "./src/images/pokemons/gen_one/primeape.gif",
        types: ["fighting"],
        desc: "It is always outrageously furious. If it gives chase, it will tenaciously track the target no matter how far."
    },
    {
        name: "Growlithe",
        num: "58",
        imgsrc: "./src/images/pokemons/gen_one/growlithe.gif",
        types: ["fire"],
        desc: "Very friendly and faithful to people. It will try to repel enemies by barking and biting."
    },
    {
        name: "Arcanine",
        num: "59",
        imgsrc: "./src/images/pokemons/gen_one/arcanine.gif",
        types: ["fire"],
        desc: "A POKéMON that is described in Chinese legends. It is said to race at an unbelievable speed."
    },
    {
        name: "Poliwag",
        num: "60",
        imgsrc: "./src/images/pokemons/gen_one/poliwag.gif",
        types: ["water"],
        desc: "Its slick black skin is thin and damp. A part of its internal organs can be seen through the skin as a spiral pattern."
    },
    {
        name: "Poliwhirl",
        num: "61",
        imgsrc: "./src/images/pokemons/gen_one/poliwhirl.gif",
        types: ["water"],
        desc: "Its two legs are well developed. Even though it can live on the ground, it prefers living in water."
    },
    {
        name: "Poliwrath",
        num: "62",
        imgsrc: "./src/images/pokemons/gen_one/poliwrath.gif",
        types: ["water", "fighting"],
        desc: "An adept swimmer, it knows the front crawl, butterfly, and more. It is faster than the best human swimmers."
    },
    {
        name: "Abra",
        num: "63",
        imgsrc: "./src/images/pokemons/gen_one/abra.gif",
        types: ["psychic"],
        desc: "It sleeps for 18 hours a day. It uses a variety of extrasensory powers even while asleep."
    },
    {
        name: "Kadabra",
        num: "64",
        imgsrc: "./src/images/pokemons/gen_one/kadabra.gif",
        types: ["psychic"],
        desc: "It happened one morning - a boy with extrasensory powers awoke in bed transformed into KADABRA."
    },
    {
        name: "Alakazam",
        num: "65",
        imgsrc: "./src/images/pokemons/gen_one/alakazam.gif",
        types: ["psychic"],
        desc: "It does not like physical attacks very much. Instead, it freely uses extrasensory powers to defeat foes."
    },
    {
        name: "Mega Alakazam",
        num: "65",
        imgsrc: "./src/images/pokemons/gen_one/alakazam-mega.gif",
        types: ["psychic"],
        desc: "As a result of Mega Evolution, its power has been entirely converted into psychic energy, and it has lost all strength in its muscles."
    },
    {
        name: "Machop",
        num: "66",
        imgsrc: "./src/images/pokemons/gen_one/machop.gif",
        types: ["fighting"],
        desc: "Its whole body is composed of muscles. Even though it’s the size of a human child, it can hurl 100 grown-ups."
    },
    {
        name: "Machoke",
        num: "67",
        imgsrc: "./src/images/pokemons/gen_one/machoke.gif",
        types: ["fighting"],
        desc: "Its formidable body never gets tired. It helps people by doing work such as the moving of heavy goods."
    },
    {
        name: "Machamp",
        num: "68",
        imgsrc: "./src/images/pokemons/gen_one/machamp.gif",
        types: ["fighting"],
        desc: "Its four ruggedly developed arms can launch a flurry of 1,000 punches in just two seconds."
    },
    {
        name: "Bellsprout",
        num: "69",
        imgsrc: "./src/images/pokemons/gen_one/bellsprout.gif",
        types: ["grass", "poison"],
        desc: "Its bud looks like a human face. Because of the bud, it is rumored to be a type of legendary mandrake plant."
    },
    {
        name: "Weepinbell",
        num: "70",
        imgsrc: "./src/images/pokemons/gen_one/weepinbell.gif",
        types: ["grass", "poison"],
        desc: "The leafy parts act as cutters for slashing foes. It spits a fluid that dissolves everything."
    },
    {
        name: "Victreebel",
        num: "71",
        imgsrc: "./src/images/pokemons/gen_one/victreebel.gif",
        types: ["grass", "poison"],
        desc: "Lures prey into its mouth with a honeylike aroma. The helpless prey is melted with a dissolving fluid."
    },
    {
        name: "Tentacool",
        num: "72",
        imgsrc: "./src/images/pokemons/gen_one/tentacool.gif",
        types: ["water", "poison"],
        desc: "Its eyes are as transparent as crystals. From them, it shoots mysterious beams of light."
    },
    {
        name: "Tentacruel",
        num: "73",
        imgsrc: "./src/images/pokemons/gen_one/tentacruel.gif",
        types: ["water", "poison"],
        desc: "It has 80 tentacles that move about freely. They can sting, causing poisoning and sharp, stabbing pain."
    },
    {
        name: "Geodude",
        num: "74",
        imgsrc: "./src/images/pokemons/gen_one/geodude.gif",
        types: ["rock", "ground"],
        desc: "Its round form makes it easy to pick up. Some people have used them to hurl at each other in a snowball fight."
    },
    {
        name: "Graveler",
        num: "75",
        imgsrc: "./src/images/pokemons/gen_one/graveler.gif",
        types: ["rock", "ground"],
        desc: "Be careful while hiking on mountain trails. GRAVELER may come rolling down the path without slowing."
    },
    {
        name: "Golem",
        num: "76",
        imgsrc: "./src/images/pokemons/gen_one/golem.gif",
        types: ["rock", "ground"],
        desc: "It is enclosed in a hard shell that is as rugged as slabs of rock. It sheds skin once a year to grow larger."
    },
    {
        name: "Ponyta",
        num: "77",
        imgsrc: "./src/images/pokemons/gen_one/ponyta.gif",
        types: ["fire"],
        desc: "Its body is light, and its legs are incredibly powerful. It can clear Ayers Rock in one leap."
    },
    {
        name: "Rapidash",
        num: "78",
        imgsrc: "./src/images/pokemons/gen_one/rapidash.gif",
        types: ["fire"],
        desc: "It can gallop at a top speed of 150 miles per hour. It can race as fast as a bullet train while ablaze."
    },
    {
        name: "Slowpoke",
        num: "79",
        imgsrc: "./src/images/pokemons/gen_one/slowpoke.gif",
        types: ["water", "psychic"],
        desc: "It is always vacantly lost in thought, but no one knows what it is thinking about. It is good at fishing with its tail."
    },
    {
        name: "Slowbro",
        num: "80",
        imgsrc: "./src/images/pokemons/gen_one/slowbro.gif",
        types: ["water", "psychic"],
        desc: "When a SLOWPOKE went hunting in the sea, its tail was bitten by a SHELLDER. That made it evolve into SLOWBRO."
    },
    {
        name: "Mega Slowbro",
        num: "80",
        imgsrc: "./src/images/pokemons/gen_one/slowbro-mega.gif",
        types: ["water", "psychic"],
        desc: "When bathed in the energy of Mega Evolution, Shellder converts into impregnable armor. There is virtually no change in Slowpoke."
    },
    {
        name: "Magnemite",
        num: "81",
        imgsrc: "./src/images/pokemons/gen_one/magnemite.gif",
        types: ["electric", "steel"],
        desc: "It moves while constantly hovering. It discharges THUNDER WAVE and so on from the units at its sides."
    },
    {
        name: "Magneton",
        num: "82",
        imgsrc: "./src/images/pokemons/gen_one/magneton.gif",
        types: ["electric", "steel"],
        desc: "A linked cluster formed of several MAGNEMITE. It discharges powerful magnetic waves at high voltage."
    },
    {
        name: "Farfetch'd",
        num: "83",
        imgsrc: "./src/images/pokemons/gen_one/farfetchd.gif",
        types: ["flying", "normal"],
        desc: "It always walks about with a plant stalk clamped in its beak. The stalk is used for building its nest."
    },
    {
        name: "Doduo",
        num: "84",
        imgsrc: "./src/images/pokemons/gen_one/doduo.gif",
        types: ["flying", "normal"],
        desc: "A two-headed POKéMON that was discovered as a sudden mutation. It runs at a pace of over 60 miles per hour."
    },
    {
        name: "Dodrio",
        num: "85",
        imgsrc: "./src/images/pokemons/gen_one/dodrio.gif",
        types: ["flying", "normal"],
        desc: "An odd species that is rarely found. The three heads respectively represent joy, sadness, and anger."
    },
    {
        name: "Seel",
        num: "86",
        imgsrc: "./src/images/pokemons/gen_one/seel.gif",
        types: ["water"],
        desc: "Covered with light blue fur, its hide is thick and tough. It is active in bitter cold of minus 40 degrees Fahrenheit."
    },
    {
        name: "Dewgong",
        num: "87",
        imgsrc: "./src/images/pokemons/gen_one/dewgong.gif",
        types: ["ice", "water"],
        desc: "Its body is covered with a pure white fur. The colder the weather, the more active it becomes."
    },
    {
        name: "Grimer",
        num: "88",
        imgsrc: "./src/images/pokemons/gen_one/grimer.gif",
        types: ["poison"],
        desc: "Sludge exposed to X rays from the moon transformed into GRIMER. It loves feeding on filthy things."
    },
    {
        name: "Muk",
        num: "89",
        imgsrc: "./src/images/pokemons/gen_one/muk.gif",
        types: ["poison"],
        desc: "It is usually undetectable because it blends in with the ground. Touching it can cause terrible poisoning."
    },
    {
        name: "Shellder",
        num: "90",
        imgsrc: "./src/images/pokemons/gen_one/shellder.gif",
        types: ["water"],
        desc: "It is encased in a shell that is harder than diamond. Inside, however, it is surprisingly tender."
    },
    {
        name: "Cloyster",
        num: "91",
        imgsrc: "./src/images/pokemons/gen_one/cloyster.gif",
        types: ["ice", "water"],
        desc: "Its shell is extremely hard. It cannot be shattered, even with a bomb. The shell opens only when it is attacking."
    },
    {
        name: "Gastly",
        num: "92",
        imgsrc: "./src/images/pokemons/gen_one/gastly.gif",
        types: ["ghost", "poison"],
        desc: "A being that exists as a thin gas. It can topple an Indian elephant by enveloping the prey in two seconds."
    },
    {
        name: "Haunter",
        num: "93",
        imgsrc: "./src/images/pokemons/gen_one/haunter.gif",
        types: ["ghost", "poison"],
        desc: "If you get the feeling of being watched in darkness when nobody is around, HAUNTER is there."
    },
    {
        name: "Gengar",
        num: "94",
        imgsrc: "./src/images/pokemons/gen_one/gengar.gif",
        types: ["ghost", "poison"],
        desc: "It is said to emerge from darkness to steal the lives of those who become lost in mountains."
    },
    {
        name: "Mega Gengar",
        num: "94",
        imgsrc: "./src/images/pokemons/gen_one/gengar-mega.gif",
        types: ["ghost", "poison"],
        desc: "The energy of Mega Evolution awakened it. It sinks into another dimension, where it keeps a patient watch for its chance to attack."
    },
    {
        name: "Onix",
        num: "95",
        imgsrc: "./src/images/pokemons/gen_one/onix.gif",
        types: ["rock", "ground"],
        desc: "It usually lives underground. It searches for food while boring its way through the ground at 50 miles per hour."
    },
    {
        name: "Drowzee",
        num: "96",
        imgsrc: "./src/images/pokemons/gen_one/drowzee.gif",
        types: ["psychic"],
        desc: "A descendent of the legendary animal baku, which is said to eat dreams. It is skilled at hypnotism."
    },
    {
        name: "Hypno",
        num: "97",
        imgsrc: "./src/images/pokemons/gen_one/hypno.gif",
        types: ["psychic"],
        desc: "It carries a pendulum-like device. There once was an incident in which it took away a child it hypnotized."
    },
    {
        name: "Krabby",
        num: "98",
        imgsrc: "./src/images/pokemons/gen_one/krabby.gif",
        types: ["water"],
        desc: "It can be found near the sea. The large pincers grow back if they are torn out of their sockets."
    },
    {
        name: "Kingler",
        num: "99",
        imgsrc: "./src/images/pokemons/gen_one/kingler.gif",
        types: ["water"],
        desc: "Its large and hard pincer has 10,000-horsepower strength. However, being so big, it is unwieldy to move."
    },
    {
        name: "Voltorb",
        num: "100",
        imgsrc: "./src/images/pokemons/gen_one/voltorb.gif",
        types: ["electric"],
        desc: "A life-form whose identity is unknown. It is said to SCREECH or suddenly SELFDESTRUCT."
    },
    {
        name: "Electrode",
        num: "101",
        imgsrc: "./src/images/pokemons/gen_one/electrode.gif",
        types: ["electric"],
        desc: "It explodes in response to even minor stimuli. It is feared, with the nickname of “The Bomb Ball.”"
    },
    {
        name: "Exeggcute",
        num: "102",
        imgsrc: "./src/images/pokemons/gen_one/exeggcute.gif",
        types: ["grass", "psychic"],
        desc: "Even though it appears to be eggs of some sort, it was discovered to be a life-form more like plant seeds."
    },
    {
        name: "Exeggutor",
        num: "103",
        imgsrc: "./src/images/pokemons/gen_one/exeggutor.gif",
        types: ["grass", "psychic"],
        desc: "It is called “The Walking Tropical Rainforest.” Each of the nuts has a face and a will of its own."
    },
    {
        name: "Cubone",
        num: "104",
        imgsrc: "./src/images/pokemons/gen_one/cubone.gif",
        types: ["ground"],
        desc: "It wears the skull of its dead mother on its head. When it becomes lonesome, it is said to cry loudly."
    },
    {
        name: "Marowak",
        num: "105",
        imgsrc: "./src/images/pokemons/gen_one/marowak.gif",
        types: ["ground"],
        desc: "It is small and was originally very weak. Its temperament turned ferocious when it began using bones."
    },
    {
        name: "Hitmonlee",
        num: "106",
        imgsrc: "./src/images/pokemons/gen_one/hitmonlee.gif",
        types: ["fighting"],
        desc: "The legs freely contract and stretch. The stretchy legs allow it to hit a distant foe with a rising kick."
    },
    {
        name: "Hitmonchan",
        num: "107",
        imgsrc: "./src/images/pokemons/gen_one/hitmonchan.gif",
        types: ["fighting"],
        desc: "The spirit of a pro boxer has infused this POKéMON. It throws punches that are faster than a bullet train."
    },
    {
        name: "Lickitung",
        num: "108",
        imgsrc: "./src/images/pokemons/gen_one/lickitung.gif",
        types: ["normal"],
        desc: "Its tongue is twice the length of its body. It can be moved like an arm for grabbing food and attacking."
    },
    {
        name: "Koffing",
        num: "109",
        imgsrc: "./src/images/pokemons/gen_one/koffing.gif",
        types: ["poison"],
        desc: "Its thin, balloon-like body is inflated by horribly toxic gases. It reeks when it is nearby."
    },
    {
        name: "Weezing",
        num: "110",
        imgsrc: "./src/images/pokemons/gen_one/weezing.gif",
        types: ["poison"],
        desc: "Very rarely, a sudden mutation can result in two small KOFFING twins becoming conjoined as a WEEZING."
    },
    {
        name: "Rhyhorn",
        num: "111",
        imgsrc: "./src/images/pokemons/gen_one/rhyhorn.gif",
        types: ["rock", "ground"],
        desc: "Strong, but not too bright, this POKéMON can shatter even a skyscraper with its charging TACKLES."
    },
    {
        name: "Rhydon",
        num: "112",
        imgsrc: "./src/images/pokemons/gen_one/rhydon.gif",
        types: ["rock", "ground"],
        desc: "	It begins walking on its hind legs after evolution. It can punch holes through boulders with its horn."
    },
    {
        name: "Chansey",
        num: "113",
        imgsrc: "./src/images/pokemons/gen_one/chansey.gif",
        types: ["normal"],
        desc: "It lays several eggs a day. The eggs are apparently rich in nutrients and extremely delicious."
    },
    {
        name: "Tangela",
        num: "114",
        imgsrc: "./src/images/pokemons/gen_one/tangela.gif",
        types: ["grass"],
        desc: "Blue plant vines cloak the POKéMON’s identity in a tangled mass. It entangles anything that gets close."
    },
    {
        name: "Kangaskhan",
        num: "115",
        imgsrc: "./src/images/pokemons/gen_one/kangaskhan.gif",
        types: ["normal"],
        desc: "The female raises its offspring in a pouch on its belly. It is skilled at attacking using COMET PUNCH."
    },
    {
        name: "Mega Kangaskhan",
        num: "115",
        imgsrc: "./src/images/pokemons/gen_one/kangaskhan-mega.gif",
        types: ["normal"],
        desc: "Thanks to Mega Evolution, its child grows. But as the child is good only at fighting and nothing else, its mother feels uneasy about its future."
    },
    {
        name: "Horsea",
        num: "116",
        imgsrc: "./src/images/pokemons/gen_one/horsea.gif",
        types: ["water"],
        desc: "It maintains balance using its tail, which is wound up like a coil. It may spray ink from its mouth."
    },
    {
        name: "Seadra",
        num: "117",
        imgsrc: "./src/images/pokemons/gen_one/seadra.gif",
        types: ["water"],
        desc: "Its body bristles with sharp spikes. Carelessly trying to touch it could cause fainting from the spikes."
    },
    {
        name: "Goldeen",
        num: "118",
        imgsrc: "./src/images/pokemons/gen_one/goldeen.gif",
        types: ["water"],
        desc: "Its dorsal and pectoral fins are strongly developed like muscles. It can swim at a speed of five knots."
    },
    {
        name: "Seaking",
        num: "119",
        imgsrc: "./src/images/pokemons/gen_one/seaking.gif",
        types: ["water"],
        desc: "The horn on its head is sharp like a drill. It bores a hole in a boulder to make its nest."
    },
    {
        name: "Staryu",
        num: "120",
        imgsrc: "./src/images/pokemons/gen_one/staryu.gif",
        types: ["water"],
        desc: "It appears in large numbers by seashores. At night, its central core flashes with a red light."
    },
    {
        name: "Starmie",
        num: "121",
        imgsrc: "./src/images/pokemons/gen_one/starmie.gif",
        types: ["water", "psychic"],
        desc: "This POKéMON has a geometric body. Because of its body, the locals suspect that it is an alien creature."
    },
    {
        name: "Mr. Mime",
        num: "122",
        imgsrc: "./src/images/pokemons/gen_one/mr.mime.gif",
        types: ["psychic", "fairy"],
        desc: "It is adept at conning people. It is said to be able to create walls out of thin air by miming."
    },
    {
        name: "Scyther",
        num: "123",
        imgsrc: "./src/images/pokemons/gen_one/scyther.gif",
        types: ["bug", "flying"],
        desc: "It tears and shreds prey with its wickedly sharp scythes. It very rarely spreads its wings to fly."
    },
    {
        name: "Jynx",
        num: "124",
        imgsrc: "./src/images/pokemons/gen_one/jynx.gif",
        types: ["ice", "psychic"],
        desc: "It speaks using a language that sounds human. Research is under way to determine what is being said."
    },
    {
        name: "Electabuzz",
        num: "125",
        imgsrc: "./src/images/pokemons/gen_one/electabuzz.gif",
        types: ["electric"],
        desc: "	It loves to feed on strong electricity. It occasionally appears around large power plants and so on.”"
    },
    {
        name: "Magmar",
        num: "126",
        imgsrc: "./src/images/pokemons/gen_one/magmar.gif",
        types: ["fire"],
        desc: "Found near the mouth of a volcano. This fire-breather’s body temperature is nearly 2,200 degrees Fahrenheit."
    },
    {
        name: "Pinsir",
        num: "127",
        imgsrc: "./src/images/pokemons/gen_one/pinsir.gif",
        types: ["bug"],
        desc: "Its two long pincer horns are powerful. Once they grip an enemy, they won’t release until the foe is torn."
    },
    {
        name: "Mega Pinsir",
        num: "127",
        imgsrc: "./src/images/pokemons/gen_one/pinsir-mega.gif",
        types: ["bug", "flying"],
        desc: "Bathed in the energy of Mega Evolution, its wings become unusually developed. It flies at speeds of approximately 30 mph."
    },
    {
        name: "Tauros",
        num: "128",
        imgsrc: "./src/images/pokemons/gen_one/tauros.gif",
        types: ["normal"],
        desc: "When it is about to TACKLE, it whips its body repeatedly with its three long tails."
    },
    {
        name: "Magikarp",
        num: "129",
        imgsrc: "./src/images/pokemons/gen_one/magikarp.gif",
        types: ["water"],
        desc: "It is virtually worthless in terms of both power and speed. It is the most weak and pathetic POKéMON in the world."
    },
    {
        name: "Gyarados",
        num: "130",
        imgsrc: "./src/images/pokemons/gen_one/gyarados.gif",
        types: ["water", "flying"],
        desc: "It has an extremely aggressive nature. The HYPER BEAM it shoots from its mouth totally incinerates all targets."
    },
    {
        name: "Mega Gyarados",
        num: "130",
        imgsrc: "./src/images/pokemons/gen_one/gyaradosmega.gif",
        types: ["water", "dark"],
        desc: "Mega Evolution also affects its brain, leaving no other function except its destructive instinct to burn everything to cinders.  "
    },
    {
        name: "Lapras",
        num: "131",
        imgsrc: "./src/images/pokemons/gen_one/lapras.gif",
        types: ["ice", "water"],
        desc: "Its high intelligence enables it to understand human speech. It likes to ferry people on its back."
    },
    {
        name: "Ditto",
        num: "132",
        imgsrc: "./src/images/pokemons/gen_one/ditto.gif",
        types: ["normal"],
        desc: "Capable of copying an opponent’s genetic code to instantly transform itself into a duplicate of the enemy."
    },
    {
        name: "Eevee",
        num: "133",
        imgsrc: "./src/images/pokemons/gen_one/eevee.gif",
        types: ["normal"],
        desc: "An extremely rare POKéMON that may evolve in a number of different ways depending on stimuli."
    },
    {
        name: "Vaporeon",
        num: "134",
        imgsrc: "./src/images/pokemons/gen_one/vaporeon.gif",
        types: ["water"],
        desc: "Its body’s cellular structure is similar to the molecular composition of water. It can melt invisibly in water."
    },
    {
        name: "Jolteon",
        num: "135",
        imgsrc: "./src/images/pokemons/gen_one/jolteon.gif",
        types: ["electric"],
        desc: "If it is angered or startled, the fur all over its body bristles like sharp needles that pierce foes."
    },
    {
        name: "Flareon",
        num: "136",
        imgsrc: "./src/images/pokemons/gen_one/flareon.gif",
        types: ["fire"],
        desc: "It has a flame bag inside its body. After inhaling deeply, it blows out flames of nearly 3,100 degrees Fahrenheit."
    },
    {
        name: "Porygon",
        num: "137",
        imgsrc: "./src/images/pokemons/gen_one/porygon.gif",
        types: ["normal"],
        desc: "Using the most advanced technologies, scientists finally succeeded in making the first artificial POKéMON."
    },
    {
        name: "Omanyte",
        num: "138",
        imgsrc: "./src/images/pokemons/gen_one/omanyte.gif",
        types: ["water", "rock"],
        desc: "A prehistoric POKéMON that lived in the primordial sea, it swims by twisting its 10 tentacles about."
    },
    {
        name: "Omastar",
        num: "139",
        imgsrc: "./src/images/pokemons/gen_one/omastar.gif",
        types: ["water", "rock"],
        desc: "Its tentacles are highly developed as if they are hands and feet. As soon as it ensnares prey, it bites."
    },
    {
        name: "Kabuto",
        num: "140",
        imgsrc: "./src/images/pokemons/gen_one/kabuto.gif",
        types: ["rock", "water"],
        desc: "This POKéMON was regenerated from the fossil of an ancient creature. It protects itself with a hard shell."
    },
    {
        name: "Kabutops",
        num: "141",
        imgsrc: "./src/images/pokemons/gen_one/kabutops.gif",
        types: ["rock", "water"],
        desc: "It swims freely through water. It catches prey with its scythe-like arms and drains the victim’s fluids."
    },
    {
        name: "Aerodactyl",
        num: "142",
        imgsrc: "./src/images/pokemons/gen_one/aerodactyl.gif",
        types: ["rock", "flying"],
        desc: "It was regenerated from a dinosaur’s genetic matter that was found in amber. It flies with high-pitched cries."
    },
    {
        name: "Mega Aerodactyl",
        num: "142",
        imgsrc: "./src/images/pokemons/gen_one/aerodactyl-mega.gif",
        types: ["rock", "flying"],
        desc: "When it Mega Evolves, it becomes more vicious than ever before. Some say that’s because its excess of power is causing it pain."
    },
    {
        name: "Snorlax",
        num: "143",
        imgsrc: "./src/images/pokemons/gen_one/snorlax.gif",
        types: ["normal"],
        desc: "It is not satisfied unless it eats over 880 pounds of food every day. When it is done eating, it goes promptly to sleep."
    },
    {
        name: "Articuno",
        num: "144",
        imgsrc: "./src/images/pokemons/gen_one/articuno.gif",
        types: ["ice", "flying"],
        desc: "	One of the legendary bird POKéMON. With its long tail trailing behind, its flying form is magnificent."
    },
    {
        name: "Zapdos",
        num: "145",
        imgsrc: "./src/images/pokemons/gen_one/zapdos.gif",
        types: ["electric", "flying"],
        desc: "One of the legendary bird POKéMON. While it is flying, it makes crackling and snapping sounds. cv"
    },
    {
        name: "Moltres",
        num: "146",
        imgsrc: "./src/images/pokemons/gen_one/moltres.gif",
        types: ["fire", "flying"],
        desc: "One of the legendary bird POKéMON. Those seeing it are overwhelmed by its orange wings that seem to be on fire."
    },
    {
        name: "Dratini",
        num: "147",
        imgsrc: "./src/images/pokemons/gen_one/dratini.gif",
        types: ["dragon"],
        desc: "Even the young can exceed 6.5 feet in length. It grows larger by repeatedly shedding skin."
    },
    {
        name: "Dragonair",
        num: "148",
        imgsrc: "./src/images/pokemons/gen_one/dragonair.gif",
        types: ["dragon"],
        desc: "It is said to live in seas and lakes. Even though it has no wings, it has been seen flying occasionally."
    },
    {
        name: "Dragonite",
        num: "149",
        imgsrc: "./src/images/pokemons/gen_one/dragonite.gif",
        types: ["dragon"],
        desc: "It can fly in spite of its big and bulky physique. It circles the globe in just 16 hours."
    },
    {
        name: "Mewtwo",
        num: "150",
        imgsrc: "./src/images/pokemons/gen_one/mewtwo.gif",
        types: ["psychic"],
        desc: "A POKéMON whose genetic code was repeatedly recombined for research. It turned vicious as a result."
    },
    {
        name: "Mega Mewtwo X",
        num: "150",
        imgsrc: "./src/images/pokemons/gen_one/mewtwo-megax.gif",
        types: ["psychic", "fighting"],
        desc: "Psychic power has augmented its muscles. It has a grip strength of one ton and can sprint a hundred meters in two seconds flat!"
    },
    {
        name: "Mega Mewtwo Y",
        num: "150",
        imgsrc: "./src/images/pokemons/gen_one/mewtwo-megay.gif",
        types: ["psychic"],
        desc: "Despite its diminished size, its mental power has grown phenomenally. With a mere thought, it can smash a skyscraper to smithereens."
    },
    {
        name: "Mew",
        num: "151",
        imgsrc: "./src/images/pokemons/gen_one/mew.gif",
        types: ["psychic"],
        desc: "A POKéMON of South America that was thought to have been extinct. It is very intelligent and learns any move."
    },
];

export function frist_gen_pokemons(){
    return pokemons
}