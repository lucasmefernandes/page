import { dadosVitrineSliders } from "./produtos.js";

const cards = document.querySelector(".box-vitrine");

dadosVitrineSliders.forEach((categoria) => {
  for (const key in categoria.Categoria) {
    const produtos = categoria.Categoria[key].produtos;

    for (const produtoKey in produtos) {
      const produto = produtos[produtoKey];

      const slider = document.createElement("div");
      slider.classList.add("slider");
      slider.classList.add("card-item");
      slider.classList.add("item");
      slider.classList.add("neon");

      const title = document.createElement("h2");
      title.textContent = produto.nome;
      title.classList.add("slider-title");

      const wpp = document.createElement("button");
      wpp.type = "submit";
      wpp.textContent = "Enviar via WhatsApp";
      wpp.classList.add("button-wpp");

      wpp.addEventListener("click", () => {
        const link = produto.mensagem();
        const whatsappLink = `https://api.whatsapp.com/send?phone=+551637216351&text=${link}`;

        window.open(whatsappLink);
      });

      const img = document.createElement("img");
      img.src = produto.imagem;
      img.alt = produto.nome;

      const slide = document.createElement("div");
      slide.classList.add("slide");

      slide.appendChild(img);
      slider.appendChild(title);
      slider.appendChild(slide);
      slider.appendChild(wpp);
      cards.appendChild(slider);
    }
  }
});

dadosVitrineSliders.forEach((categoria) => {
  const topnavList = document.getElementById("topnav-list");
  const categorias = dadosVitrineSliders[0].Categoria;

  for (const categoria in categorias) {
    const nomeCategoria = categorias[categoria].name;
    const li = document.createElement("li");
    li.className = "topnav-link";

    const link = document.createElement("a");
    link.href = `/${nomeCategoria}`;
    link.textContent = nomeCategoria;

    li.appendChild(link);
    topnavList.appendChild(li);
  }
});
