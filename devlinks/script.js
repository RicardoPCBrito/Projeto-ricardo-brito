function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  // OUTRA MANEIRA
  //if (html.classList.contains("light")) {
  //  html.classList.remove("light")
  //} else {
  //  html.classList.add("light")
  //}

  // pegar a tag image (img)
  const img = document.querySelector("#profile img")
  //substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
  }

  // exercicio: alterando o ALT da imagem
  if (html.classList.contains("light")) {
    img.setAttribute("alt", "Ricardo em um dia de sol em uma casa com piscina")
  } else {
    img.setAttribute("alt", "Foto de Ricardo Brito de terno cinza e fundo roxo")
  }
}
