const controls = document.querySelectorAll(".control");
let currentItem = 0;
const items = document.querySelectorAll(".item");
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

    items.forEach((item) => item.classList.remove("neon"));

    items[currentItem].scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "center"
    });

    items[currentItem].classList.add("neon");
  });
});


window.addEventListener('load', function () {
    const nav = document.querySelector('nav');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', function () {
        const currentScrollY = window.scrollY;

        // Defina o ponto de rolagem onde você deseja ocultar o 'nav'
        const scrollThreshold = 600; // Altere este valor conforme necessário

        if (currentScrollY > lastScrollY && currentScrollY > scrollThreshold) {
            nav.style.display = 'none'; // Oculta o 'nav'
        } else {
            nav.style.display = 'flex'; // Mostra o 'nav'
        }

        lastScrollY = currentScrollY;
    });
});

document.getElementById('whatsappForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = encodeURIComponent(document.getElementById('name').value);
    const message = encodeURIComponent(document.getElementById('message').value);

    const whatsappLink = `https://api.whatsapp.com/send?phone=+551637216351&text=Olá,%20${name}!%20${message}`;

    window.open(whatsappLink, '_blank');
});