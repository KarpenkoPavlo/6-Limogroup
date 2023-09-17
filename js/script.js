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

  /*================================*/

// Получаем элементы слайдера
const prevButton = document.querySelector('.slider__prev-button');
const nextButton = document.querySelector('.slider__next-button');
const sliderItems = document.querySelectorAll('.slider__item');

// Устанавливаем начальный индекс текущего слайда
let currentSlide = 0;

// Функция для отображения слайдов, начиная с указанного индекса
function showSlides(startIndex) {
    // Пройдемся по слайдам, начиная с startIndex и до startIndex + 3 (для отображения трех слайдов)
    for (let i = startIndex; i < startIndex + 3; i++) {
        // Убедимся, что индекс в пределах допустимых значений
        if (i < sliderItems.length) {
            // Показываем слайд
            sliderItems[i].style.display = 'block';
        }
    }
}

// Обработчик нажатия на кнопку "prev"
prevButton.addEventListener('click', () => {
    // Сначала скрываем предыдущие отображенные слайды
    for (let i = currentSlide; i < currentSlide + 3; i++) {
        if (i < sliderItems.length) {
            sliderItems[i].style.display = 'none';
        }
    }
    // Уменьшаем текущий индекс слайда
    currentSlide--;
    // Если индекс стал отрицательным, переходим к последнему слайду
    if (currentSlide < 0) {
        currentSlide = sliderItems.length - 1;
    }
    // Отображаем новый набор слайдов
    showSlides(currentSlide);
});

// Обработчик нажатия на кнопку "next"
nextButton.addEventListener('click', () => {
    // Сначала скрываем предыдущие отображенные слайды
    for (let i = currentSlide; i < currentSlide + 3; i++) {
        if (i < sliderItems.length) {
            sliderItems[i].style.display = 'none';
        }
    }
    // Увеличиваем текущий индекс слайда
    currentSlide++;
    // Если индекс стал больше или равен количеству слайдов, переходим к первому слайду
    if (currentSlide >= sliderItems.length) {
        currentSlide = 0;
    }
    // Отображаем новый набор слайдов
    showSlides(currentSlide);
});

// Показываем начальный набор слайдов
showSlides(currentSlide);