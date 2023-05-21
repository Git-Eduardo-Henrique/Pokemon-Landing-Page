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
        name: "Tangela",
        num: "114",
        imgsrc: "./src/images/pokemons/gen_one/tangela.gif",
        types: ["grass"],
        desc: "Blue plant vines cloak the POKéMON’s identity in a tangled mass. It entangles anything that gets close."
    },
    {
        name: "Scyther",
        num: "123",
        imgsrc: "./src/images/pokemons/gen_one/scyther.gif",
        types: ["bug", "flying"],
        desc: "It tears and shreds prey with its wickedly sharp scythes. It very rarely spreads its wings to fly."
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
        name: "Flareon",
        num: "136",
        imgsrc: "./src/images/pokemons/gen_one/flareon.gif",
        types: ["fire"],
        desc: "It has a flame bag inside its body. After inhaling deeply, it blows out flames of nearly 3,100 degrees Fahrenheit."
    },
    {
        name: "Moltres",
        num: "146",
        imgsrc: "./src/images/pokemons/gen_one/moltres.gif",
        types: ["fire", "flying"],
        desc: "One of the legendary bird POKéMON. Those seeing it are overwhelmed by its orange wings that seem to be on fire."
    },
];

export function frist_gen_pokemons(){
    return pokemons
}