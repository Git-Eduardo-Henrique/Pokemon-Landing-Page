const pokemons = [
    {
      name: "Bulbasaur",
      num: "1",
      imgsrc: "./src/images/pokemons/bulbasaur.gif",
      types: ["grass", "poison"],
      desc: "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger."
    },
    {
      name: "Ivysaur",
      num: "2",
      imgsrc: "./src/images/pokemons/ivysaur.gif",
      types: ["grass", "poison"],
      desc: "When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs."
    },
    {
      name: "Venusaur",
      num: "3",
      imgsrc: "./src/images/pokemons/venusaur.gif",
      types: ["grass", "poison"],
      desc: "Its plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight."
    },
    {
        name: "Mega Venusaur",
        num: "3",
        imgsrc: "./src/images/pokemons/venusaur-mega.gif",
        types: ["grass", "poison"],
        desc: "In order to support its flower, which has grown larger due to Mega Evolution, its back and legs have become stronger."
      },
    {
        name: "Charmander",
        num: "4",
        imgsrc: "./src/images/pokemons/charmander.gif",
        types: ["fire"],
        desc: "From the time it is born, a flame burns at the tip of its tail. Its life would end if the flame were to go out."
    },
    {
        name: "Charmeleon",
        num: "5",
        imgsrc: "./src/images/pokemons/charmeleon.gif",
        types: ["fire"],
        desc: "If it becomes agitated during battle, it spouts intense flames, incinerating its surroundings."
    },
    {
        name: "Charizard",
        num: "6",
        imgsrc: "./src/images/pokemons/charizard.gif",
        types: ["fire", "flying"],
        desc: "Its wings can carry this Pokémon close to an altitude of 4,600 feet. It blows out fire at very high temperatures."
    },
    {
        name: "Mega Charizard X",
        num: "6",
        imgsrc: "./src/images/pokemons/charizard-megax.gif",
        types: ["fire", "dragon"],
        desc: "The overwhelming power that fills its entire body causes it to turn black and create intense blue flames."
    },
    {
        name: "Mega Charizard Y",
        num: "6",
        imgsrc: "./src/images/pokemons/charizard-megay.gif",
        types: ["fire", "flying"],
        desc: "Its bond with its Trainer is the source of its power. It boasts speed and maneuverability greater than that of a jet fighter."
    },
    {
        name: "Squirtle",
        num: "7",
        imgsrc: "./src/images/pokemons/squirtle.gif",
        types: ["water"],
        desc: "When it feels threatened, it draws its limbs inside its shell and sprays water from its mouth."
    },
    {
        name: "Wartortle",
        num: "8",
        imgsrc: "./src/images/pokemons/wartortle.gif",
        types: ["water"],
        desc: "It cleverly controls its furry ears and tail to maintain its balance while swimming."
    },
    {
        name: "Blastoise",
        num: "9",
        imgsrc: "./src/images/pokemons/blastoise.gif",
        types: ["water"],
        desc: "It crushes its foe under its heavy body to cause fainting. In a pinch, it will withdraw inside its shell."
    },
    {
        name: "Mega Blastoise",
        num: "9",
        imgsrc: "./src/images/pokemons/blastoise-mega.gif",
        types: ["water"],
        desc: "The cannon on its back is as powerful as a tank gun. Its tough legs and back enable it to withstand the recoil from firing the cannon."
    },
    {
        name: "Caterpie",
        num: "10",
        imgsrc: "./src/images/pokemons/caterpie.gif",
        types: ["bug"],
        desc: "Its short feet are tipped with suction pads that enable it to tirelessly climb slopes and walls."
    },
    {
        name: "Metapod",
        num: "11",
        imgsrc: "./src/images/pokemons/metapod.gif",
        types: ["bug"],
        desc: "Even though it is encased in a sturdy shell, the body inside is tender. It can’t withstand a harsh attack."
    },
    {
        name: "Butterfree",
        num: "12",
        imgsrc: "./src/images/pokemons/butterfree.gif",
        types: ["bug"],
        desc: "The wings are protected by rain-repellent dust. As a result, this POKéMON can fly about even in rain."
    },
    {
        name: "Weedle",
        num: "13",
        imgsrc: "./src/images/pokemons/weedle.gif",
        types: ["bug", "poison"],
        desc: "Often found in forests and grasslands. It has a sharp, toxic barb of around two inches on top of its head."
    },
    {
        name: "Kakuna",
        num: "14",
        imgsrc: "./src/images/pokemons/kakuna.gif",
        types: ["bug", "poison"],
        desc: "This POKéMON is in a temporary stage while making its body. It is almost completely unable to move on its own."
    },
    {
        name: "Beedrill",
        num: "15",
        imgsrc: "./src/images/pokemons/beedrill.gif",
        types: ["bug", "poison"],
        desc: "May appear in a swarm. Flies at violent speeds, all the while stabbing with the toxic stinger on its rear."
    },
    {
        name: "Mega Breedrill",
        num: "15",
        imgsrc: "./src/images/pokemons/beedrill-mega.gif",
        types: ["bug", "poison"],
        desc: "Its legs have become poison stingers. It stabs its prey repeatedly with the stingers on its limbs, dealing the final blow with the stinger on its rear."
    },
    {
        name: "Pidgey",
        num: "16",
        imgsrc: "./src/images/pokemons/pidgey.gif",
        types: ["flying", "normal"],
        desc: "Does not like to fight. It hides in tall grass and so on, foraging for food such as small bugs."
    },
    {
        name: "Pidgeotto",
        num: "17",
        imgsrc: "./src/images/pokemons/pidgeotto.gif",
        types: ["flying", "normal"],
        desc: "The claws on its feet are well developed. It can carry prey such as an EXEGGCUTE to its nest over 60 miles away."
    },
    {
        name: "Pidgeot",
        num: "18",
        imgsrc: "./src/images/pokemons/pidgeot.gif",
        types: ["flying", "normal"],
        desc: "It spreads its gorgeous wings widely to intimidate enemies. It races through the skies at Mach-2 speed."
    },
    {
        name: "Spearow",
        num: "21",
        imgsrc: "./src/images/pokemons/spearow.gif",
        types: ["flying", "normal"],
        desc: "It busily flits around here and there. Even if it is frail, it can be a tough foe that uses MIRROR MOVE."
    },
    {
        name: "Fearow",
        num: "22",
        imgsrc: "./src/images/pokemons/fearow.gif",
        types: ["flying", "normal"],
        desc: "Its huge and magnificent wings can keep it aloft in the sky. It can remain flying a whole day without landing."
    },
    {
        name: "Farfetch'd",
        num: "83",
        imgsrc: "./src/images/pokemons/farfetchd.gif",
        types: ["flying", "normal"],
        desc: "It always walks about with a plant stalk clamped in its beak. The stalk is used for building its nest."
    },
    {
        name: "Doduo",
        num: "84",
        imgsrc: "./src/images/pokemons/doduo.gif",
        types: ["flying", "normal"],
        desc: "A two-headed POKéMON that was discovered as a sudden mutation. It runs at a pace of over 60 miles per hour."
    },
    {
        name: "Dodrio",
        num: "85",
        imgsrc: "./src/images/pokemons/dodrio.gif",
        types: ["flying", "normal"],
        desc: "An odd species that is rarely found. The three heads respectively represent joy, sadness, and anger."
    },
];

export function frist_gen_pokemons(){
    return pokemons
}