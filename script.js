
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
function toggleProfileSettings() {
        var profileSettings = document.getElementById('profileSettings');
        profileSettings.style.display = (profileSettings.style.display === 'block') ? 'none' : 'block';
    }
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
if (window.innerWidth <= 600) {
        // Create mobile footer
        createMobileFooter();
    }
function createMobileFooter() {
        // Create a new footer element
        var mobileFooter = document.createElement('footer');
        mobileFooter.id = 'mobileFooter';

        // Create three buttons for the footer
        var chatButton = createFooterButton('Chat', 'sarvam-ai.html');
        var searchButton = createFooterButton('Search', '#', true); // Set the second button as active
        var menuButton = createFooterButton('Menu', '#');

        // Append buttons to the mobile footer
        mobileFooter.appendChild(chatButton);
        mobileFooter.appendChild(searchButton);
        mobileFooter.appendChild(menuButton);

        // Append the mobile footer to the body
        document.body.appendChild(mobileFooter);
    }

    function createFooterButton(text, link, isActive = false) {
        // Create a button element
        var button = document.createElement('button');

        // Set button text
        button.textContent = text;

        // Set button link
        button.onclick = function () {
            window.location.href = link;
        };

        // Set button class based on isActive
        button.className = isActive ? 'active' : '';

        return button;
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
    console.log('Sarvam AI');
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
const suggestions = [
        "How is Diwali celebrated in India?",
        "How to make masala dosa?",
        "How to make butter chicken?",
        "How to make vegetable biryani?",
        "How to make paneer tikka?",
        "How to make chicken curry?",
        "How to make aloo gobi?",
        "How to make dal makhani?",
        "How to make chole bhature?",
        "How to make samosa?",
        "How to make idli?",
        "How to make rajma?",
        "How to make tandoori chicken?",
        "How to make pav bhaji?",
        "How to make fish curry?",
        "How to make kofta curry?",
        "How to make chicken biryani?",
        "How to make aloo paratha?",
        "How to make palak paneer?",
        "How to make mutton curry?",
        "How to make pani puri?",
        "What are the most popular Indian festivals?",
        "Why is the Taj Mahal a famous landmark?",
        "Where can I find the best street food in Mumbai?",
        "When is the monsoon season in India?",
        "How do Indian weddings differ from Western weddings?",
        "What is the significance of Holi in Indian culture?",
        "Why do many Indians practice yoga and meditation?",
        "Where are the best historical sites to visit in Delhi?",
        "When is the festival of Raksha Bandhan celebrated?",
        "How is the Indian education system structured?",
        "What are the major cuisines in different Indian states?",
        "Why is the Ganges River considered sacred in India?",
        "Where can I experience traditional Indian dance performances?",
        "When is the Independence Day celebrated in India?",
        "How do Indian classical music and dance differ from Western forms?",
        "What are the top tourist destinations in Rajasthan?",
        "Why is Ayurveda important in Indian healthcare?",
        "Where can I explore wildlife in India?",
        "When is the Kumbh Mela festival held?",
        "How are Indian marriages arranged?",
        "What is the significance of the Indian national flag colors?",
        "Why do many Indians follow a vegetarian diet?",
        "Where can I witness traditional Indian art and crafts?",
        "When is the harvest festival of Pongal celebrated?",
        "How is the Indian film industry different from Hollywood?",
        "What are the main attractions in Goa?",
        "Why is the Red Fort historically significant?",
        "Where can I experience the vibrant nightlife in India?",
        "When is the festival of Navratri celebrated?",
        "How do Indian traditional medicines differ from modern medicine?",
        "What are the major historical events in India's independence struggle?",
        "Why do many Indians celebrate Karva Chauth?",
        "Where can I witness traditional Indian wedding ceremonies?",
        "When is the Republic Day celebrated in India?",
        "How is the Indian caste system viewed in modern society?",
        "What are the best destinations for trekking in the Himalayas?",
        "Why are Indian spices so integral to the cuisine?",
        "Where can I explore the rich biodiversity of Western Ghats?",
        "When is the festival of Eid celebrated in India?",
        "How is the Durga Puja festival celebrated in West Bengal?",
        "What are the main pilgrimage sites for Hindus in India?",
        "Why is Bollywood so popular worldwide?",
        "Where can I experience authentic Indian classical dance performances?",
        "When is the festival of Ganesh Chaturthi celebrated?",
        "How is the Indian railway system organized?",
        "What are the traditional clothing styles in different Indian states?",
        "Why is the Jaipur Literature Festival significant?",
        "Where can I find the best spice markets in India?",
        "When is the International Yoga Day celebrated?",
        "How is Indian art influenced by diverse cultural traditions?",
        "What are the main attractions in Varanasi?",
        "Why is the Indian Premier League (IPL) so popular?",
        "Where can I experience the cultural diversity of India?",
        "When is the festival of Dussehra celebrated?",
        "How is the education system in Indian schools and universities?",
        "What are the main historical monuments in Agra?",
        "Why are Indian weddings known for their grandeur?",
        "Where can I explore the architectural marvels of South India?",
        "When is the festival of Diwali observed in India?",
        "How do traditional Indian family values influence society?",
        "What are the best destinations for a spiritual retreat in India?",
        "Why are Indian classical dance forms important cultural expressions?",
        "Where can I experience the traditional art of Rangoli?",
        "When is the festival of Onam celebrated in Kerala?",
        "How is the Indian economy structured?",
        "What are the major languages spoken in different Indian states?",
        "Why is the Lotus Temple in Delhi unique?",
        "Where can I witness the art of traditional Indian puppetry?",
        "When is the festival of Baisakhi celebrated in Punjab?",
        "How are traditional Indian weddings celebrated in different regions?",
        "What are the main attractions in the city of Jaipur?",
        "Why is the Indian Space Research Organisation (ISRO) significant?",
        "Where can I experience the cultural heritage of Karnataka?",
        "When is the festival of Lohri celebrated in North India?",
        "How do Indian street markets contribute to the local economy?",
        "What are the major dance forms in Indian classical dance?",
        "Why are Indian spices considered a key element in Ayurvedic cooking?",
        "Where can I explore the cultural heritage of Madhya Pradesh?",
        "When is the festival of Karthigai Deepam celebrated in Tamil Nadu?",
        "How is the traditional art of mehndi (henna) used in Indian culture?",
        "What are the main attractions in the city of Hyderabad?",
        "Why is the Konark Sun Temple a UNESCO World Heritage Site?",
        "Where can I witness traditional Indian martial arts?",
        "When is the festival of Buddha Purnima celebrated?",
        "How is the traditional art of kolam practiced in South India?",
        "What are the major wildlife sanctuaries in India?",
        "Why is the city of Udaipur known as the 'City of Lakes'?",
        "Where can I explore the traditional handicrafts of India?",
        "When is the festival of Puthandu (Tamil New Year) celebrated?",
        "How is the Indian judiciary system structured?",
        "What are the main attractions in the city of Kolkata?",
        "Why are Indian spices used for both culinary and medicinal purposes?",
        "Where can I experience the traditional art of Kathakali?",
        "When is the festival of Bihu celebrated in Assam?",
        "How is the traditional art of Tanjore painting practiced?",
        "What are the major cultural festivals in Northeast India?",
        "Why is the Indian state of Kerala known as 'God's Own Country'?",
        "Where can I experience the traditional art of Kuchipudi?",
        "When is the festival of Chhath Puja celebrated in North India?",
        "How to start a blog?",
        "What are the benefits of learning a new language?",
        "Why is climate action important?",
        "Where can I learn graphic design for free?",
        "When is the best time to visit Paris?",
        "How does the human brain work?",
        "What are the health benefits of yoga?",
        "Why is renewable energy crucial for the future?",
        "Where can I find online coding challenges?",
        "When was the last lunar eclipse?",
        "How does 3D printing technology function?",
        "What are the effects of social media on mental health?",
        "Why is nutrition important for a healthy lifestyle?",
        "Where can I volunteer for environmental causes?",
        "When is the next major meteor shower?",
        "How does the human immune system work?",
        "What are the advantages of remote work?",
        "Why is reading important for personal development?",
        "Where can I find resources for learning data science?",
        "When is the best time to travel to New York?",
        "How does virtual reality impact various industries?",
        "What are the benefits of a plant-based diet?",
        "Why is cybersecurity essential in the digital age?",
        "Where can I take online courses on digital marketing?",
        "When is World Wildlife Day celebrated?",
        "How do electric airplanes work?",
        "What are the benefits of practicing mindfulness?",
        "Why is space exploration important?",
        "Where can I find free resources for learning web development?",
        "When is the next total solar eclipse?",
        "How does quantum computing differ from classical computing?",
        "What are the effects of climate change on biodiversity?",
        "Why is diversity and inclusion crucial in the workplace?",
        "Where can I learn to play a musical instrument online?",
        "When is International Women's Day celebrated?",
        "How does the gig economy impact employment?",
        "What are the benefits of learning to code?",
        "Why is water conservation important?",
        "Where can I find reputable online bookstores?",
        "When is the next SpaceX rocket launch?",
        "How do electric scooters function?",
        "What are the benefits of intermittent fasting?",
        "Why is sleep important for overall health?",
        "Where can I find online courses on artificial intelligence?",
        "When is the best time to visit the Grand Canyon?",
        "How does CRISPR gene editing technology work?",
        "What are the environmental benefits of recycling?",
        "Why is renewable agriculture crucial for sustainable food production?",
        "Where can I volunteer for community development projects?",
        "When is the next major technology conference?",
        "How do self-driving cars navigate?",
        "What are the benefits of learning a musical instrument?",
        "Why is mindfulness meditation practiced for stress relief?",
        "Where can I find online resources for learning photography editing?",
        "When is the International Day of Friendship celebrated?",
        "How does the human respiratory system function?",
        "What are the benefits of adopting a pet?",
        "Why is learning a second language beneficial for the brain?",
        "Where can I find online courses on game development?",
        "When is the best time to start a fitness routine?",
        "How does CRISPR technology impact genetic diseases?",
        "What are the benefits of strength training?",
        "Why is ocean conservation important?",
        "Where can I volunteer for education-related projects?",
        "When is the next major gaming convention?",
        "How does the circadian rhythm affect sleep?",
        "What are the benefits of learning to play chess?",
        "Why is social entrepreneurship essential for positive change?",
        "Where can I find online resources for learning animation?",
        "When is the International Day of Happiness celebrated?",
        "How does geothermal energy work?",
        "What are the benefits of mindfulness for students?",
        "Why is learning to code important for children?",
        "Where can I find online courses on ethical hacking?",
        "When is the best time to visit the Great Barrier Reef?",
        "How does blockchain impact the finance industry?",
        "What are the benefits of daily physical exercise?",
        "Why is mental health awareness important?",
        "Where can I volunteer for disaster relief efforts?",
        "When is the next major scientific discovery expected?",
        "How does CRISPR technology impact agriculture?",
        "What are the benefits of learning to cook?",
        "Why is renewable energy crucial for combating climate change?",
        "Where can I find online resources for learning graphic design?",
        "When is the best time to start a podcast?",
        "How does the human digestive system work?",
        "What are the benefits of learning to write poetry?",
        "Why is environmental conservation crucial for future generations?",
        "Where can I volunteer for animal welfare organizations?",
        "When is the next major space mission planned?",
        "How does artificial intelligence impact healthcare?",
        "What are the benefits of mindfulness for workplace productivity?",
        "What is Sarvam?",
        "How to do engineering online?",
        "Why is artificial intelligence important?",
        "Where can I learn programming online?",
        "When is the best time to visit Japan?",
        "How do electric cars work?",
        "What are the benefits of meditation?",
        "Why is climate change a global concern?",
        "Where can I find online courses on photography?",
        "When was the internet invented?",
        "How does blockchain technology work?",
        "What are the health benefits of green tea?",
        "Why is Shakespeare considered a great playwright?",
        "Where can I volunteer for community service?",
        "When is the next solar eclipse?",
        "How does the stock market function?",
        "What are the major planets in our solar system?",
        "Why is biodiversity important for ecosystems?",
        "Where can I find resources for learning graphic design?",
        "When is the best time to start a small business?"
        
    ];

    function showSuggestions() {
        const input = document.getElementById('searchInput');
        const suggestionList = document.getElementById('suggestionList');
        const inputValue = input.value.toLowerCase();

        // Clear previous suggestions
        suggestionList.innerHTML = '';

        // Filter and display matching suggestions
        const matchingSuggestions = suggestions.filter(suggestion => suggestion.toLowerCase().includes(inputValue));
        matchingSuggestions.forEach(suggestion => {
            const listItem = document.createElement('li');
            listItem.textContent = suggestion;
            listItem.addEventListener('click', () => {
                input.value = suggestion;
                suggestionList.style.display = 'none';
            });
            suggestionList.appendChild(listItem);
        });

        // Display suggestion list
        if (inputValue.length > 0 && matchingSuggestions.length > 0) {
            suggestionList.style.display = 'block';
        } else {
            suggestionList.style.display = 'none';
        }
    }

    // Close suggestion list when clicking outside the input and list
    document.addEventListener('click', (event) => {
        const suggestionList = document.getElementById('suggestionList');
        if (event.target !== document.getElementById('searchInput') && event.target !== suggestionList) {
            suggestionList.style.display = 'none';
        }

        function openPage(page) {
            // Handle opening the specified page
            window.location.href = page;
        }

        function highlightButton(buttonId) {
            // Remove 'active' class from all buttons
            const buttons = document.querySelectorAll('.footer-button');
            buttons.forEach(button => button.classList.remove('active'));

            // Add 'active' class to the clicked button
            document.getElementById(buttonId).classList.add('active');
        }

        function openMenu() {
            // Handle opening the menu
            // Add your menu functionality here
        }

        // Check for dark mode and adjust styles accordingly
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            // Dark mode styles
            document.querySelector('.mobile-footer').style.backgroundColor = '#2c3e50'; // Dark mode background color
            // Add more styles for dark mode if needed
        }
    });