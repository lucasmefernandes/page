import { dadosSlidersMain } from "./js-slide/dados.js";

document.addEventListener("DOMContentLoaded", function () {
  const controls = document.querySelectorAll(".control");
  let currentItem = 0;
  const items = document.querySelectorAll(".slider");
  const maxItems = items.length;

  controls.forEach((control) => {
    control.addEventListener("click", (e) => {
      let isLeft = e.target.classList.contains("left");

      if (isLeft) {
        currentItem -= 1;
      } else {
        currentItem += 1;
      }

      if (currentItem >= maxItems) {
        currentItem = 0;
      }

      if (currentItem < 0) {
        currentItem = maxItems - 1;
      }

      items.forEach((item) => (item.style.display = "none"));

      items[currentItem].style.display = "block";
    });
  });

  document
    .getElementById("whatsappForm")
    .addEventListener("submit", function (e) {
      e.preventDefault();

      const name = encodeURIComponent(document.getElementById("name").value);
      const message = encodeURIComponent(
        document.getElementById("message").value
      );

      const whatsappLink = `https://api.whatsapp.com/send?phone=+551637216351&text=Olá,%20${name}!%20${message}`;

      window.open(whatsappLink, "_blank");
    });
});

// Selecione o elemento de texto onde você deseja aplicar o efeito de digitação
const textoElemento = document.querySelector('.box-text-sobre');

// Texto completo que você deseja mostrar
const textoCompleto = `
  Não se engane: todas as empresas não são iguais. O que realmente faz a diferença de uma para outra é a cultura, os valores e a maneira como cada uma trata seus funcionários.  
  <br> 
  <br> 
  Em meio à pandemia, nasceu a Vabadus, uma empresa de vendas apaixonada por entregar produtos versáteis, de alta qualidade e, acima de tudo, duráveis! Localizada em Franca/SP/Brasil, somos uma equipe dedicada que se orgulha em oferecer soluções excepcionais aos nossos clientes.
  <br> 
  <br> 
  Nossa cultura é profundamente enraizada em princípios éticos e morais. Acreditamos em respeitar nossos clientes e parceiros, seguindo estritamente todas as regras legais e normas do setor. 
  <br> 
  <br> 
  Nossos valores estão centrados principalmente no respeito ao próximo. Valorizamos nossos clientes e parceiros, considerando-os parte essencial do nosso dia a dia. Estamos comprometidos em fornecer um atendimento excepcional, ouvindo atentamente suas necessidades e superando suas expectativas.
  <br> 
  <br> 
  E quando se trata de nossos funcionários, eles são verdadeiramente os nossos melhores e mais valiosos ativos. Investimos em suas habilidades, promovemos um ambiente de trabalho inclusivo e encorajamos a criatividade e a inovação. 
`;

// Velocidade de digitação em milissegundos por caractere
const velocidadeDigitacao = 25;

let posicaoAtual = 0;

function exibirTexto() {
  textoElemento.innerHTML = textoCompleto.slice(0, posicaoAtual);
  posicaoAtual++;

  if (posicaoAtual <= textoCompleto.length) {
    setTimeout(exibirTexto, velocidadeDigitacao);
  }
}

exibirTexto()

document.addEventListener("DOMContentLoaded", function () {
  const backgroundImg = document.querySelector('.backgroundImg');
  const backText = document.querySelector('.backText');
  let currentIndex = 0;

  function updateSlider() {
    const data = dadosSlidersMain[currentIndex];
    const foto = data.imagens[0];
    const texto = `"${data.frase}"`;

    backgroundImg.style.transition = 'background-image 0.5s ease-in-out'
    backgroundImg.style.backgroundImage = `url(${foto})`;
    backText.textContent = texto;

    currentIndex = (currentIndex + 1) % dadosSlidersMain.length;

    setTimeout(() => {
      backgroundImg.style.transition = 'none';
    }, 500);
  }

  updateSlider(); 

  setInterval(updateSlider, 4000);
});


const btn = document.getElementById("toggleMenu")

function toggleMenu() {
  var x = document.getElementById("myTopnavMobile");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

btn.addEventListener("click", () => {
  toggleMenu()
})
