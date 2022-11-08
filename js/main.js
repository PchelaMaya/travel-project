//Carousel

const owl = $('.owl-carousel');//находим элемент, на который будем вешать owlcarousel
owl.owlCarousel({
  center: true,
  loop: true,
  margin: 20,
  startPosition: 0,
  items: 1,
  responsive : {
    540 : {
      items: 3,
      startPosition: 1,
    },
    1200 : {
      items: 3,
      margin: 30,
    },
}
});//вызываем метод

// Кнопка назад

$('.slider__btn--prev').click(function() {
// При клике на кнопек будет вызываться trigger, карусель прокутит вперёд
  owl.trigger('prev.owl.carousel');
})

// Кнопка вперёд
$('.slider__btn--next').click(function() {
    owl.trigger('next.owl.carousel');
})

//Nav icon
const navBtn = document.querySelector('.nav__toggle');
const nav = document.querySelector('.nav');
const menuIcon = document.querySelector('.menu-icon');

navBtn.onclick = function(){
  nav.classList.toggle('nav--mobile');
  menuIcon.classList.toggle('menu-icon--active');
  document.body.classList.toggle('no-scroll');
}