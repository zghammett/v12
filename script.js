console.log("Red White & Clean website loaded");

document.querySelectorAll('.carousel').forEach(carousel => {
  const track = carousel.querySelector('.carousel-track');
  const slides = track.querySelectorAll('img');
  const next = carousel.querySelector('.next');
  const prev = carousel.querySelector('.prev');

  let index = 0;

  function update(){
    track.style.transform = `translateX(-${index * 100}%)`;
  }

  next.addEventListener('click', () => {
    index = (index + 1) % slides.length;
    update();
  });

  prev.addEventListener('click', () => {
    index = (index - 1 + slides.length) % slides.length;
    update();
  });

  setInterval(() => {
    index = (index + 1) % slides.length;
    update();
  }, 4000);
});
