import { load_pokemons } from "./pokecards.js"
import { trocar_tema } from "./themes.js"

const theme_button = document.querySelector("button#theme-button")

theme_button.addEventListener("click", trocar_tema)
document.addEventListener("DOMContentLoaded", load_pokemons)
