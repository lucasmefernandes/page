import {dadosSliders} from "./dados.js";

const dadosObtidos = dadosSliders;

const cards = document.querySelector(".cards");

dadosObtidos.forEach((dadosSlider, index) => {

  const slider = document.createElement("div");
  slider.classList.add("slider");
  slider.classList.add("card-item");
  slider.classList.add("item");
  slider.classList.add("neon");
  slider.classList.add("slider-sup");

  if(index === 0 ) {
    slider.style.display = "block"
  } else {
    slider.style.display = "none"
  }

  const title = document.createElement("h2");
  title.textContent = dadosSlider.nome;
  title.classList.add("slider-title"); 

  const slides = document.createElement("div");
  slides.classList.add("slides");

  const wpp = document.createElement("button");
  wpp.type = "submit";
  wpp.textContent = "Enviar via WhatsApp";
  wpp.classList.add("button-wpp");

  wpp.addEventListener("click", () => {
    const link = dadosSlider.mensagem();
    const whatsappLink = `https://api.whatsapp.com/send?phone=+551637216351&text=${link}`;
    
    window.open(whatsappLink);
  });

  let selectedImageIndex = 0; // Adicione uma variável para rastrear a imagem selecionada no slider atual
  let selectedRadio = null;

  const radioDiv = document.createElement("div");
  
  dadosSlider.imagens.forEach((imagem, i) => {
    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = `radio-btn-${index}`;
    radio.id = `radio${i + 1}-${index}`;
    radio.classList.add("manual-btn");
    radio.addEventListener("change", () => {
      selectedImageIndex = i;
      updateImage();
    });

    radioDiv.classList.add("radioDiv");
    radioDiv.appendChild(radio);

    radio.addEventListener("change", () => {
      selectedImageIndex = i;
      updateImage();
      
      if (selectedRadio) {
        const prevLabel = document.querySelector(`label[for=${selectedRadio.id}]`);
        prevLabel.classList.remove("selected");
      }
    
      const label = document.querySelector(`label[for=${radio.id}]`);
      label.classList.add("selected");
      
      selectedRadio = radio;
    });

    const img = document.createElement("img");
    img.src = imagem;
    img.alt = `img${i + 1}`;

    const slide = document.createElement("div");
    slide.classList.add("slide");
    slide.appendChild(img);

    const auto = document.createElement("div");
    auto.classList.add(`auto-btn${i}`);

    slides.appendChild(slide);
    slides.appendChild(radioDiv);
  });
  slider.appendChild(title); 
  slider.appendChild(slides);

  const carga = document.createElement("div");
  carga.classList.add("load");

  slider.appendChild(carga);
  slider.appendChild(wpp);
  cards.appendChild(slider);

  updateImage();

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



