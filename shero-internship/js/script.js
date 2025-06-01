 // script.js

document.addEventListener("DOMContentLoaded", function () {
  new Glide(".glide", {
    type: "carousel",
    startAt: 0,
    perView: 3,
    breakpoints: {
      1024: {
        perView: 2
      },
      768: {
        perView: 1
      }
    }
  }).mount();
});