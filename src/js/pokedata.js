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
    }
  ];

export function load_pokemons() {
    const pokelist = document.querySelector("ul.poke-list")

    let pokecard = document.createElement("li")
    pokecard.classList.add(`${pokemons[0].types[0]}-poke-card`)

    let titlediv = document.createElement("div")
    titlediv.classList.add("info")

    let nome = document.createElement("span")
    nome.classList.add("poke-name-num")
    nome.innerHTML = `${pokemons[0].name} N° ${pokemons[0].num.padStart(4, "0")}`

    let pokemonimg = document.createElement("img")
    pokemonimg.src = `${pokemons[0].imgsrc}`

    let types_list = document.createElement("ul")
    types_list.classList.add("types")

    let type1 = document.createElement("li")
    type1.classList.add(`${pokemons[0].types[0]}-type`)

    let type1_img = document.createElement("img")
    type1_img.src = `./src/images/icons/types/${pokemons[0].types[0]}.svg`
    type1_img.classList.add("types-icons")

    type1.innerHTML = type1_img.outerHTML
    type1.innerHTML += `${pokemons[0].types[0]}`

    let desc = document.createElement("p")
    desc.classList.add("desc")
    desc.innerHTML = `${pokemons[0].desc}`

    titlediv.appendChild(nome)
    types_list.appendChild(type1)
    pokecard.appendChild(titlediv)
    pokecard.appendChild(pokemonimg)
    pokecard.append(types_list)
    pokecard.append(desc)
    pokelist.appendChild(pokecard)

    console.log(types_list)
}

