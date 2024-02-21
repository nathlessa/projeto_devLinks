function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/assets/avatar.png")
  }

   if (html.classList.contains("light")) {
     img.setAttribute(
       "alt",
       "Foto Maykbrito sorrindo, usando óculos escuro e jaqueta de couro preta, sem barba e fundo em gradiente azul, rosa e roxo"
     )
   } else {
     img.setAttribute(
       "alt",
       "Foto Maykbrito sorrindo, usando óculos e camisa preta, barba e fundo amarelo"
     )
   }
}
