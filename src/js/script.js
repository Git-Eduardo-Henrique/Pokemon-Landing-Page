const logo_img = document.querySelector("img.logo")
const theme_button = document.querySelector("img.button-img")
const body = document.querySelector("body")

function trocar_tema(){
    const themeIsDark = body.classList.contains("dark")

    body.classList.toggle("dark") // remove e coloca a classe

    if (themeIsDark){
        theme_button.setAttribute("src", "./src/images/sun-stone.png")
        logo_img.setAttribute("src", "./src/images/pokeball.jpg")
    } else {
        theme_button.setAttribute("src", "./src/images/moon-stone.png")
        logo_img.setAttribute("src", "./src/images/masterball.jpg")
    }
}