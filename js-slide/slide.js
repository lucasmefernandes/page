let count = 1;
let interval;

let slider = document.querySelector(".slider");
slider.addEventListener("mouseover", () => {
  interval = setInterval(function () {
    nextImage();
  }, 1600);

  function nextImage() {
    count++;
    if (count > 5) {
      count = 1;
    }
    document.getElementById("radio" + count).checked = true;
  }
});

slider.addEventListener("mouseout", () => {
  clearInterval(interval);
});

// script-second-slide
let slider2 = document.querySelector(".slider2");
slider2.addEventListener("mouseover", () => {
  interval = setInterval(function () {
    nextImage();
  }, 1600);

  function nextImage() {
    count++;
    if (count > 5) {
      count = 1;
    }
    document.getElementById("radio2-" + count).checked = true;
  }
});

slider2.addEventListener("mouseout", () => {
  clearInterval(interval);
});
