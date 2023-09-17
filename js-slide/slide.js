import dadosSliders from "./dados.js";

const dadosObtidos = dadosSliders;

const contPrincipal = document.querySelector(".slider-main");
const cards = document.querySelector(".cards");

dadosObtidos.forEach((dadosSlider, index) => {
  const slider = document.createElement("div");
  slider.classList.add("slider");
  slider.classList.add("card-item");
  slider.classList.add("item");
  slider.classList.add("neon");

  const manual = document.createElement("div");
  manual.classList.add("manual-navigation");

  const navigation = document.createElement("div");
  navigation.classList.add("navigation-auto");

  const slides = document.createElement("div");
  slides.classList.add("slides");

  const wpp = document.createElement("button");
  wpp.type = "submit";
  wpp.textContent = "Enviar via WhatsApp";
  wpp.classList.add("button-wpp");

  let selectedImageIndex = 0; // Adicione uma variável para rastrear a imagem selecionada no slider atual

  dadosSlider.imagens.forEach((imagem, i) => {
    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = `radio-btn-${index}`;
    radio.id = `radio${i + 1}-${index}`;
    radio.addEventListener("change", () => {
      selectedImageIndex = i; // Atualize a variável com o índice da imagem selecionada
      updateImage(); // Atualize a imagem dentro do slider atual
    });

    const rotulo = document.createElement("label");
    rotulo.htmlFor = `radio${i + 1}-${index}`;
    rotulo.classList.add("manual-btn");
    manual.appendChild(rotulo);

    const img = document.createElement("img");
    img.src = imagem;
    img.alt = `img${i + 1}`;

    const slide = document.createElement("div");
    slide.classList.add("slide");
    slide.appendChild(img);

    const auto = document.createElement("div");
    auto.classList.add(`auto-btn${i}`);

    slides.appendChild(radio);
    navigation.appendChild(auto);
    slides.appendChild(slide);
  });

  slider.appendChild(slides);
  slider.appendChild(manual);

  slides.appendChild(navigation);

  const carga = document.createElement("div");
  carga.classList.add("load");

  slider.appendChild(carga);
  slider.appendChild(wpp);
  cards.appendChild(slider);


  function updateImage() {
    const images = slider.querySelectorAll(".slide img");
    images.forEach((img, i) => {
      img.style.display = i === selectedImageIndex ? "block" : "none";
    });
  }

  let count = 1;
  let interval;

  let loadBar = slider.querySelector(".load");
  let loadBars = [loadBar];

  loadBars.forEach(load => load.style.visibility = "hidden");

  slides.addEventListener("mouseover", () => {
    loadBars.forEach(load => load.style.visibility = "visible");
    loadBars.forEach(load => {
      load.style.animation = "none";
      void load.offsetWidth;
      load.style.animation = "loading 1.6s linear infinite";
    });
    interval = setInterval(function () {
      nextImage();
    }, 1600);
  });

  slides.addEventListener("mouseout", () => {
    loadBars.forEach(load => load.style.visibility = "hidden");
    clearInterval(interval);
  });

  function nextImage() {
    count++;
    if (count > dadosSlider.imagens.length) {
      count = 1;
    }
    const radioElement = document.getElementById(`radio${count}-${index}`);
    if (radioElement) {
      radioElement.checked = true;
      selectedImageIndex = count - 1;
      updateImage();
    }
  }

});
