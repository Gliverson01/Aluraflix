const movie = {
  title: "Harry potter",
  url: "http://caminho.com/imagem",
}

// HTML

const img = document.createElement("img"); // <img>
const listBanners = document.querySelector(".list-banners");

img.src = "img/banner1.png"; // <img src="img/banner1.png">
img.alt = "Banner of the movie"; // <img src="img/banner1.png" alt = "Banner of the movie"
img.classList.add("main-banner"); // <img class="main-banner" src="img/banner1.png"

listBanners.insertAdjacentElement("beforeend", img);