function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img") //mesmo seletor css

  //substituir a imagem
  if (html.classList.contains("light")) {
    //se estiver light mode, adicionar avatar.png
    img.setAttribute("src", "./assets/avatar.png") //modifica atributo
    img.setAttribute("alt", "Imagem Avatar clara")
  } else {
    //se estiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar-dark.png")
    img.setAttribute("alt", "Imagem Avatar escura")
  }
}
