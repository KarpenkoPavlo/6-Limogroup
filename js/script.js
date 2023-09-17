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

  /**/
