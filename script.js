//Burger menu
document.addEventListener('DOMContentLoaded', function () {
    const burgerBtn = document.querySelector('.header__burger-btn');
    const menu = document.querySelector('.menu');
    const closeBtn = document.querySelector('.close-btn');

    burgerBtn.addEventListener('click', function () {
        menu.classList.toggle('active');
        if (menu.classList.contains('active')) {
            closeBtn.style.display = 'block';
            menu.style.display = 'flex';
        } else {
            closeBtn.style.display = 'none';
            menu.style.display = 'none';
        }
    });

    closeBtn.addEventListener('click', function () {
        menu.classList.remove('active');
        closeBtn.style.display = 'none';
        menu.style.display = 'none';
    });
});

window.addEventListener('scroll', function() {
  var header = document.querySelector('.header');
  var scrollPosition = window.scrollY;

  if (scrollPosition > 900) {
      header.classList.add('scrolled');
  } else {
      header.classList.remove('scrolled');
  }
});
  

//Scroll
document.querySelector('.scroll-down').addEventListener('click', function() {
    window.scrollBy({
        top: window.innerHeight - 100,
        behavior: 'smooth'
    });
});

//Modal
const modal = document.getElementById("modal");
const hireUsBtn = document.querySelector(".btn-hire-us-relative");
const closeBtn = document.querySelector(".modal .close");

function showModal(event) {
  event.preventDefault();
  modal.style.display = "block";
}

function hideModal() {
  modal.style.display = "none";
}

hireUsBtn.addEventListener("click", showModal);

closeBtn.addEventListener("click", hideModal);

window.addEventListener("click", function(event) {
  if (event.target == modal) {
    hideModal();
  }
});