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

