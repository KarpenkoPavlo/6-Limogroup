/*==========================Choose another language==================================*/

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

  /*================================Slider==========================*/

  const slider = document.querySelector('.slider');
  const slides = document.querySelectorAll('.slide');
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  let currentIndex = 0;
  
  function updateSlider() {
      slides.forEach((slide, index) => {
          const offset = (index - currentIndex) * 50;
          slide.style.transform = `translateX(${offset}%)`;
      });
  }
  
  prevButton.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      updateSlider();
  });
  
  nextButton.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % slides.length;
      updateSlider();
  });
  
  updateSlider();

/*==========================="Back to the top" button=======================*/

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

/*=====================================*/

function showMessage() {
  alert("Thanks for subscribing)");
}

/*=====================================*/

function showMessageEdit() {
  alert("Error 404(");
}

/*=====================================*/

function footer__li1() {
  alert("I am footer li 1)");
}
function footer__li2() {
  alert("I am footer li 2)");
}
function footer__li3() {
  alert("I am footer li 3)");
}

/*burger*/
// document.addEventListener('DOMContentLoaded', function () {
//   const burger = document.querySelector('.header__burger');
//   const menuRight = document.querySelector('.header__right');

//   burger.addEventListener('click', function () {
//       if (menuRight.style.left === '-100%') 
//       {
//           menuRight.style.left = '0';
//       } else {
//           menuRight.style.left = '-100%';
//       }
//   });
// });

// document.addEventListener('DOMContentLoaded', function () {
//   const burger = document.querySelector('.header__burger');
//   const menuRight = document.querySelector('.header__right');
//   const body = document.body; // Получаем элемент <body>

//   burger.addEventListener('click', function () {
//     if (menuRight.style.left === '-100%') {
//       menuRight.style.left = '0'; // Показываем меню
//       body.style.overflowY = 'hidden'; // Блокируем прокрутку сайта
//     } else {
//       menuRight.style.left = '-100%'; // Скрываем меню
//       body.style.overflowY = 'auto'; // Разблокируем прокрутку сайта
//     }
//   });
// });



document.addEventListener('DOMContentLoaded', function () {
  const burger = document.querySelector('.header__burger');
  const menuRight = document.querySelector('.header__right');
  const headerMenu = document.querySelector('.header');

  burger.addEventListener('click', function () {
    if (menuRight.style.left === '-100%') {
      headerMenu.style.height = 'auto';
      menuRight.style.left = '0';
    } else {
      headerMenu.style.height = '150px';
      menuRight.style.left = '-100%';
    }
    // if (window.innerWidth > '767.98px') {
    //   headerMenu.style.height = '110px';
    // } else {
    //   headerMenu.style.height = '100%';
    // }
  });
});