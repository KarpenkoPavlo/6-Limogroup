document.addEventListener('DOMContentLoaded', function() {
    var currentLanguage = document.querySelector('.current-language');
    var languageList = document.querySelector('.language-list');
  
    currentLanguage.addEventListener('click', function() {
      languageList.style.display = (languageList.style.display === 'block') ? 'none' : 'block';
    });
  
    // Обработка выбора языка
    var languageLinks = document.querySelectorAll('.language-list a');
    for (var i = 0; i < languageLinks.length; i++) {
      languageLinks[i].addEventListener('click', function(event) {
        event.preventDefault();
        var selectedLanguage = this.getAttribute('data-lang');
        // Здесь можно добавить логику для смены языка
        // Например, загрузить соответствующий файл перевода или изменить тексты на странице
        // Закрыть меню выбора языка
        languageList.style.display = 'none';
        // Обновить текущий язык
        currentLanguage.querySelector('span').textContent = this.textContent;
      });
    }
  
    // Закрыть меню выбора языка при клике вне него
    document.addEventListener('click', function(event) {
      if (!currentLanguage.contains(event.target)) {
        languageList.style.display = 'none';
      }
    });
  });