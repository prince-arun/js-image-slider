let slides = document.querySelectorAll(".slide");
let counter = 0;

slides.forEach((slide, index) => {
  slide.style.top = `${index * 100}%`;
});

let goPrevious = () => {
  counter--;
  slideImage();
};

let goNext = () => {
  counter++;
  slideImage();
};

let slideImage = () => {
  slides.forEach((slide) => {
    slide.style.transform = `translateY(-${counter * 100}%)`;
  });
};
