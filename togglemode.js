/* Botão para ligar e desligar o fundo branco */
function togglemode() {
  const html = document.documentElement
  if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }

  const img = document.querySelector("#profile img")

  /* Troca de foto de perfil */
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/gustavo-light.png")
  } else {
    img.setAttribute("src", "assets/avatar gustavo.png")
  }
}
