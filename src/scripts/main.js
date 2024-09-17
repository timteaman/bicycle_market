// fixed header

const headerEl = document.querySelector('.header');

window.addEventListener('scroll', () => {
  if (window.scrollY > headerEl.offsetHeight) {
    headerEl.classList.add('scrolled');
  } else {
    headerEl.classList.remove('scrolled');
  }
});

// swiperJs

const swiper = new Swiper('.feedback .swiper', {
  slidesPerView: 1,
  centeredSlides: true,
  loop: false,
  navigation: {
    nextEl: '.slider-btn--next',
    prevEl: '.slider-btn--prev',
  },
  breakpoints: {
    992: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
});

// header menu active page

document.addEventListener('DOMContentLoaded', function () {
  const menuLinks = document.querySelectorAll('.menu__link');
  const currentPath = window.location.pathname;

  menuLinks.forEach((link) => {
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('menu__link--active');
    }
  });
});

// tabs

const showTabs = (tabsNav, tabsContent) => {
  tabsNav?.forEach((navLink, index) => {
    navLink?.addEventListener('click', () => {
      tabsNav.forEach((link) => {
        link.classList.remove('active');
      });

      navLink.classList.add('active');

      let navIndex = index;

      tabsContent.forEach((contentItem, index) => {
        contentItem.classList.remove('active');
        if (index === navIndex) {
          contentItem.classList.add('active');
        }
      });
    });
  });
};

const tabsNav = document.querySelectorAll('.bikes .tabs-nav__link');
const tabsContent = document.querySelectorAll('.bikes .tabs-content');
showTabs(tabsNav, tabsContent);

// burger

const burgerBtnEl = document.querySelector('.burger');

const handleBurgerClick = () => {
  burgerBtnEl.classList.toggle('burger--active');
};

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('burger')) {
    handleBurgerClick();
  }
});
