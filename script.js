document.addEventListener('DOMContentLoaded', function () {
    var searchInput = document.getElementById('searchInput');
    searchInput.focus();

     document.addEventListener('click', function (event) {
        var suggestionList = document.getElementById('suggestionList');
        var searchInput = document.getElementById('searchInput');

        if (event.target !== searchInput && !searchInput.contains(event.target)) {
            // Clicked outside the search input, hide the suggestion list
            suggestionList.style.display = 'none';
        }
    });

    const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

setTheme(prefersDarkMode ? 'dark' : 'light');

var toggleModeSwitch = document.getElementById('toggleModeSwitch');
toggleModeSwitch.checked = prefersDarkMode;

toggleModeSwitch.addEventListener('change', function () {
    const newTheme = toggleModeSwitch.checked ? 'dark' : 'light';
    setTheme(newTheme);
});
});
function changeLanguage() {
    var languageDropdown = document.getElementById('languageDropdown');
    var selectedLanguage = languageDropdown.value;
    
    console.log('Selected Language:', selectedLanguage);
}

function toggleTheme() {
    var toggleModeSwitch = document.getElementById('toggleModeSwitch');
    var newTheme = toggleModeSwitch.checked ? 'dark' : 'light';
    setTheme(newTheme);
}

function setTheme(theme) {
    document.body.classList.remove('light-mode', 'dark-mode');
    document.body.classList.add(theme + '-mode');
    localStorage.setItem('theme', theme);

    var toggleModeLabel = document.getElementById('toggleModeLabel');
    toggleModeLabel.textContent = theme === 'dark' ? 'Dark Mode' : 'Light Mode';
}

function showSuggestions() {
    var input = document.getElementById('searchInput');
    var suggestionList = document.getElementById('suggestionList');
    var inputValue = input.value.trim();
    suggestionList.innerHTML = '';

    if (inputValue !== '') {
        var suggestions = ['How to make panneer butter masala', 'Make a presentation on global warming', 'JavaScript', 'Web Development', 'Programming'];

        // Display suggestions
        suggestions.forEach(function (suggestion) {
            var li = document.createElement('li');
            li.textContent = suggestion;
            suggestionList.appendChild(li);
        });
        suggestionList.style.display = 'block';
    } else {
        suggestionList.style.display = 'none';
    }
}

function performSearch() {
    var searchInput = document.getElementById('searchInput');
    var query = searchInput.value.trim();
    console.log('Performing search for:', query);
}

function luckySearch() {
    console.log('Feeling lucky!');
}


function startVoiceInput() {
    var searchInput = document.getElementById('searchInput');
    searchInput.value = 'Voice input placeholder';
}

document.addEventListener('DOMContentLoaded', function () {
    var searchInput = document.getElementById('searchInput');
    searchInput.focus();
});
document.addEventListener('DOMContentLoaded', function () {
    // Wait for the DOM to be fully loaded
    const welcomeText = document.getElementById('welcomeText');

    anime.timeline({ loop: false })
        .add({
            targets: '#welcomeText',
            opacity: [0, 1],
            easing: 'easeInOutQuad',
            duration: 1500
        })
        .add({
            targets: '#welcomeText',
            translateY: [50, 0],
            opacity: [1, 1],
            easing: 'easeInOutQuad',
            duration: 1000
        });

    setTimeout(function () {
        // Hide the intro animation
        document.querySelector('.intro-animation').style.display = 'none';
        // Show the main content
        document.querySelector('.container').style.display = 'block';
    }, 3000); // 3000 milliseconds = 3 seconds
});