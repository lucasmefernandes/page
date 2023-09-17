import dadosSliders from "./dados.js";

const dadosObtidos = dadosSliders


const contPrincipal = document.querySelector(".slider-main");


dadosObtidos.forEach((dadosSlider, index) => {

  const slider = document.createElement("div");
  slider.classList.add("slider");

  const manual = document.createElement("div")
  manual.classList.add("manual-navigation")

  const navigation = document.createElement("div")
  navigation.classList.add("navigation-auto")
 
  const slides = document.createElement("div");
  slides.classList.add("slides");

  const wpp = document.createElement("button");
    wpp.type = "submit"
    wpp.textContent = "Enviar via WhatsApp"
    wpp.classList.add("button-wpp")

  dadosSlider.imagens.forEach((imagem, i) => {

    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = `radio-btn-${i}`;
    radio.id = `radio${i + 1}-${i}`;
    radio.addEventListener("click", () => {
      count = i + 1;
  });

    const rotulo = document.createElement("label");
    rotulo.htmlFor = `radio${i + 1}-${i}`;
    rotulo.classList.add("manual-btn");
    manual.appendChild(rotulo)


    const img = document.createElement("img");
    img.src = imagem;
    img.alt = `img${i + 1}`;

    const slide = document.createElement("div");
    slide.classList.add("slide");
    slide.appendChild(img);

    const auto = document.createElement("div");
    auto.classList.add(`auto-btn${i}`)

    
    slides.appendChild(radio);
    navigation.appendChild(auto);
    slides.appendChild(slide);
  });



  slider.appendChild(slides);
  slider.appendChild(manual);
 

  slides.appendChild(navigation)

  const carga = document.createElement("div");
  carga.classList.add("load");

  slider.appendChild(carga); 
  slider.appendChild(wpp)
  contPrincipal.appendChild(slider);
});

let count = 1;


let slider = document.querySelector(".slider");
let loadBar = document.querySelectorAll(".load");

let loadBars = Array.from(loadBar);

loadBars.forEach(load => load.style.display = "none"); 

slider.addEventListener("mouseover", () => {
  loadBars.forEach(load => load.style.display = "block");
  setInterval(function () {
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