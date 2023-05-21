const logo_img = document.querySelector("img.logo")
const theme_button_img = document.querySelector("img.button-img")
const body = document.querySelector("body")

const linkedin = document.querySelector("img#icon1")
const github = document.querySelector("img#icon2")
const instagram = document.querySelector("img#icon3")

export function trocar_tema(){
    const themeIsDark = body.classList.contains("dark")

    body.classList.toggle("dark") // remove e coloca a classe

    if (themeIsDark){
        theme_button_img.setAttribute("src", "./src/images/sun-stone.png")
        logo_img.setAttribute("src", "./src/images/pokeball.jpg")

        linkedin.setAttribute("src", "./src/images/icons/social-medias/light/linkedin.png")
        github.setAttribute("src", "./src/images/icons/social-medias/light/github.png")
        instagram.setAttribute("src", "./src/images/icons/social-medias/light/instagram.png")
    } else {
        theme_button_img.setAttribute("src", "./src/images/moon-stone.png")
        logo_img.setAttribute("src", "./src/images/masterball.jpg")

        linkedin.setAttribute("src", "./src/images/icons/social-medias/dark/linkedin.png")
        github.setAttribute("src", "./src/images/icons/social-medias/dark/github.png")
        instagram.setAttribute("src", "./src/images/icons/social-medias/dark/instagram.png")
    }
}