import dadosSliders from "./dados.js";

const dadosObtidos = dadosSliders


const contPrincipal = document.querySelector(".slider-main");


dadosObtidos.forEach((dadosSlider, index) => {

  const slider = document.createElement("div");
  slider.classList.add("slider");

 
  const slides = document.createElement("div");
  slides.classList.add("slides");

  dadosSlider.imagens.forEach((imagem, i) => {

    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = `radio-btn-${i}`;
    radio.classList.add("radio-btn");
    radio.id = `radio${i + 1}-${i}`;

    const rotulo = document.createElement("label");
    rotulo.htmlFor = `radio${i + 1}-${i}`;
    rotulo.classList.add("manual-btn");


    const img = document.createElement("img");
    img.src = imagem;
    img.alt = `img${i + 1}`;


    const slide = document.createElement("div");
    slide.classList.add("slide");
    slide.appendChild(img);

    slides.appendChild(radio);
    slides.appendChild(rotulo);
    slides.appendChild(slide);
  });


  slider.appendChild(slides);

  const carga = document.createElement("div");
  carga.classList.add("load");


  slider.appendChild(carga);
  contPrincipal.appendChild(slider);
});

let count = 1;
let interval;

let slider = document.querySelector(".slider");
let loadBar = document.querySelectorAll(".load");

let loadBars = Array.from(loadBar);

loadBars.forEach(load => load.style.display = "none"); 

slider.addEventListener("mouseover", () => {
  loadBars.forEach(load => load.style.display = "block");
  interval = setInterval(function () {
    nextImage();
    loadBars.forEach(load => {
      load.style.animation = "none";
      void load.offsetWidth;
      load.style.animation = "loading 1.6s linear infinite";
    });
  }, 1600);
});

slider.addEventListener("mouseout", () => {
  loadBars.forEach(load => load.style.display = "none");
  clearInterval(interval);
});

function nextImage() {
  count++;
  if (count > 5) {
    count = 1;
  }
  document.getElementById("radio" + count).checked = true;
}