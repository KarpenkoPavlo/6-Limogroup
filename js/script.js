/*Choose another language*/

document.addEventListener('DOMContentLoaded', function() {
    var currentLanguage = document.querySelector('.current-language');
    var languageList = document.querySelector('.language-list');
  
    currentLanguage.addEventListener('click', function() {
      languageList.style.display = (languageList.style.display === 'block') ? 'none' : 'block';
    });
  
    // Handling Language Selection
    var languageLinks = document.querySelectorAll('.language-list a');
    for (var i = 0; i < languageLinks.length; i++) {
      languageLinks[i].addEventListener('click', function(event) {
        event.preventDefault();
        var selectedLanguage = this.getAttribute('data-lang');
        // Close the language selection menu
        languageList.style.display = 'none';
        // Update the current language
        currentLanguage.querySelector('span').textContent = this.textContent;
      });
    }
  
    // Close the language selection menu when clicking outside of it
    document.addEventListener('click', function(event) {
      if (!currentLanguage.contains(event.target)) {
        languageList.style.display = 'none';
      }
    });
  });

  

/*Back to the top button*/
// We get the "Back to the top" button
var scrollToTopButton = document.getElementById("scrollToTopButton");

// Show the button when the user scrolls down the page
window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
};

// Scroll the page up when you click on the button
scrollToTopButton.addEventListener("click", function() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For other browsers
});

/*showMessage*/

function showMessage() {
  alert("Thanks for subscribing)");
}

/**/

function showMessageEdit() {
  alert("Error 404(");
}

/**/

function footer__li1() {
  alert("I am footer li 1)");
}
function footer__li2() {
  alert("I am footer li 2)");
}
function footer__li3() {
  alert("I am footer li 3)");
}

/*Burger*/
document.addEventListener('DOMContentLoaded', function () {
  const burger = document.getElementById('burger');
  const menuRight = document.querySelector('.header__right');
  const headerMenu = document.querySelector('.header');
  const body = document.body;
  const html = document.documentElement;

  burger.addEventListener('click', function () {
    burger.classList.toggle('active');
    toggleMenu();
  });

  document.addEventListener('click', function (event) {
    const isClickInsideMenu = menuRight.contains(event.target);
    const isClickOnBurger = burger.contains(event.target);

    if (!isClickInsideMenu && !isClickOnBurger) {
      burger.classList.remove('active');
      menuRight.style.left = '-100%';
      headerMenu.style.height = '110px';
      enableScrolling(); // Дозволяє прокручування при закритті меню
    }
  });

  function toggleMenu() {
    if (menuRight.style.left === '-100%' || menuRight.style.left === '') {
      menuRight.style.left = '0';
      headerMenu.style.height = 'auto';
      disableScrolling(); // Забороняє прокручування при відкритті меню
    } else {
      headerMenu.style.height = '110px';
      menuRight.style.left = '-100%';
      enableScrolling(); // Дозволяє прокручування при закритті меню
    }

    if (window.innerWidth > 767) {
      headerMenu.style.height = '140px';
    }
  }

  function disableScrolling() {
    const scrollBarWidth = window.innerWidth - html.clientWidth;
    body.style.overflow = 'hidden';
    body.style.paddingRight = scrollBarWidth + 'px';
    html.style.overflow = 'hidden';
  }

  function enableScrolling() {
    body.style.overflow = '';
    body.style.paddingRight = '';
    html.style.overflow = '';
  }
});


/*slider*/
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 45,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // Зміни в параметрах responsive
  breakpoints: {
    // Коли ширина екрана менше або рівна 991px
    2560: {
      slidesPerView: 3,
      spaceBetween: 45,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 45,
    },
    991: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    767: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    766: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  },
});