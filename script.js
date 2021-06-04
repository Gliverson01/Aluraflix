const movie = {
  title: "Harry potter",
  url: "http://caminho.com/imagem",
}

// HTML
const figure = document.createElement("figcaption"); // <figure>
const img = document.createElement("img"); // <img>
const title = document.createElement("figcaption"); // <figcaption>
const listBanners = document.querySelector(".list-banners");

figure.classList.add("wrapper-banner"); // <figure class="wrapper-banner">

img.src = "img/banner1.png"; // <img src="img/banner1.png">
img.alt = "Banner of the movie"; // <img src="img/banner1.png" alt="Banner of the movie"
img.classList.add("main-banner"); // <img class="main-banner" src="img/banner1.png"

title.textContent = "Nome do Filme"; // <figcaption> Nome do Filme</figcaption>
title.classList.add("main-caption"); // <figcaption class="main-caption">Nome do filme</figcaption>

/* 
<figure class ="wrapper-banner">
<img class="main-banner" src="img/banner1.png" alt="Banner of the movie">
<figcaption class="main-caption">Nome do filme</figcaption>
</figure>
*/
figure.insertAdjacentElement("beforeend", img);
figure.insertAdjacentElement("beforeend", figure);

listBanners.insertAdjacentElement("beforeend", img);
