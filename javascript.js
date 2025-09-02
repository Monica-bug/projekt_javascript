console.log("JS kører korrekt!");

const siteName = "JYSK Inspiration";
let totalClicks = 0;
var currentFilter = "All";
let menuOpen = false;


const cardsData = [
  { title: "Stue", description: "Se vores tips til en hyggelig stue.", img: "img/nordisk.jpg" },
  { title: "Soveværelse", description: "Find inspiration til en god nattesøvn.", img: "img/sovevaerelse.jpg" },
  { title: "Have", description: "Skab en skøn oase i haven.", img: "img/have.jpg" },
  // Nye kort
  { title: "Køkken", description: "Få idéer til et funktionelt køkken.", img: "img/koekken.jpg" },
  { title: "Hyggelig belysning", description: "Indretning med hyggelig belysning.", img: "img/hyggeligbelysning.png" },
  { title: "Badeværelse", description: "Inspiration til et flot badeværelse.", img: "img/bathroom1.jpg" }
];

const cardsContainer = document.querySelector("main.cards");
const menuToggle = document.querySelector(".menu-toggle");
const searchInput = document.querySelector(".search-bar input");

function displayCards(filter) {
  cardsContainer.innerHTML = "";

    for (let i = 0; i < cardsData.length; i++) {
    const card = cardsData[i];

    if (filter === "All" || card.title === filter) {
      const div = document.createElement("div");
      div.classList.add("card");
      div.innerHTML = `
        <img src="${card.img}" alt="${card.title}">
        <h3>${card.title}</h3>
        <p>${card.description}</p>
        <button class="btn">Læs mere</button>
      `;