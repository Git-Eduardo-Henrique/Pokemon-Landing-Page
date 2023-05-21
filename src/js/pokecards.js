import { frist_gen_pokemons } from "./first-gen.js"

export function load_pokemons() {
    const pokemons = frist_gen_pokemons()

    for (let pos = 0; pos < pokemons.length; pos++){

        const pokelist = document.querySelector("ul.poke-list")

        let pokecard = document.createElement("li")
        pokecard.classList.add(`${pokemons[pos].types[0]}-poke-card`)

        let titlediv = document.createElement("div")
        titlediv.classList.add("info")

        let nome = document.createElement("span")
        nome.classList.add("poke-name-num")
        nome.innerHTML = `${pokemons[pos].name} N° ${pokemons[pos].num.padStart(4, "0")}`

        let pokemonimg = document.createElement("img")
        pokemonimg.src = `${pokemons[pos].imgsrc}`

        let types_list = document.createElement("ul")
        types_list.classList.add("types")

        for (let type_pos = 0; type_pos < pokemons[pos].types.length; type_pos++){
            let type = document.createElement("li")
            type.classList.add(`${pokemons[pos].types[type_pos]}-type`)
    
            let type_img = document.createElement("img")
            type_img.src = `./src/images/icons/types/${pokemons[pos].types[type_pos]}.svg`
            type_img.classList.add("types-icons")
    
            type.innerHTML = type_img.outerHTML
            type.innerHTML += `${pokemons[pos].types[type_pos]}`

            types_list.appendChild(type)
        }

        let desc = document.createElement("p")
        desc.classList.add("desc")
        desc.innerHTML = `${pokemons[pos].desc}`

        titlediv.appendChild(nome)
        pokecard.appendChild(titlediv)
        pokecard.appendChild(pokemonimg)
        pokecard.append(types_list)
        pokecard.append(desc)
        pokelist.appendChild(pokecard)
    }
}