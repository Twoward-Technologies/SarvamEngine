const suggestions = [
    "Suggestion 1",
    "Suggestion 2",
    "Suggestion 3",
    "Suggestion 4",
    "How to",
    "What is",
    "Why",
    "Where",
    "When",
    // Add the remaining suggestions here
];

// Declare the animationInterval variable outside the function
let animationInterval;

function showSuggestions() {
    const input = document.getElementById('searchbartext');
    const suggestionList = document.getElementById('suggestionList');
    const inputValue = input.value.toLowerCase();

    suggestionList.innerHTML = '';

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

    if (inputValue.length > 0 && matchingSuggestions.length > 0) {
        suggestionList.style.display = 'block';
    } else {
        suggestionList.style.display = 'none';
    }
}

document.addEventListener('click', (event) => {
    const suggestionList = document.getElementById('suggestionList');
    if (event.target !== document.getElementById('searchbartext') && event.target !== suggestionList) {
        suggestionList.style.display = 'none';
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const typingContainerElement = document.getElementById("typing-container");
    const typingTextElement = document.getElementById("typing-animation-text");
    typingContainerElement.classList.add("typing-animation-container");
    typingTextElement.classList.add("typing-animation");
});

document.addEventListener("DOMContentLoaded", function () {
    const animationTextElement = document.getElementById("animation-text");
    const originalText = animationTextElement.textContent.trim();
    const letters = originalText.split("");

    let currentLetterIndex = 0;

    function updateAnimationText() {
        const animatedText = letters
            .slice(0, currentLetterIndex)
            .join("");
        animationTextElement.textContent = animatedText;

        if (currentLetterIndex < letters.length) {
            currentLetterIndex++;
        } else {
            clearInterval(animationInterval); // Stop the animation
        }
    }

    function startAnimation() {
        animationInterval = setInterval(updateAnimationText, 10); // Adjust the interval as needed
    }

    startAnimation();
});

document.addEventListener("DOMContentLoaded", function () {
    const toggleModeSwitch = document.getElementById("toggleModeSwitch");
    const body = document.body;

    // Function to set theme based on system default
    function setThemeBySystemDefault() {
        const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        const systemDefaultTheme = prefersDarkMode ? 'dark' : 'light';
        setTheme(systemDefaultTheme);
        toggleModeSwitch.checked = prefersDarkMode;
    }

    toggleModeSwitch.addEventListener("change", function () {
        const newTheme = toggleModeSwitch.checked ? 'dark' : 'light';
        setTheme(newTheme);
    });

    setThemeBySystemDefault();

    function setTheme(theme) {
        body.classList.remove('light-mode', 'dark-mode');
        body.classList.add(theme + '-mode');
        localStorage.setItem('theme', theme);

        var toggleModeLabel = document.getElementById('toggleModeLabel');
        toggleModeLabel.textContent = theme === 'dark' ? 'Dark Mode' : 'Light Mode';
    }

    
});

// Your API key for OpenAI goes here
const API_KEY = "...";

// Initialize a variable or array to store the inputs
let userText = null;
let aiSearchHistory = []; // Add this line to initialize aiSearchHistory array

// Function to perform Sarvam AI search
function aisearch() {
  const inputElement = document.getElementById("chatInput");
  const userInput = inputElement.value.trim();

  if (userInput !== "") {
    // Save the input to the history
    aiSearchHistory.push(userInput);

    // Set userText for AI processing
    userText = userInput;

    // Perform AI search logic here or do whatever you want with the input
    // In your existing code, this will be done in the getChatResponse function
    // which is triggered when the outgoing chat is handled
    handleOutgoingChat();
  }
}

const loadDataFromLocalstorage = () => {
  // Load saved chats and theme from local storage and apply/add on the page
  const themeColor = localStorage.getItem("themeColor");
  document.body.classList.toggle("light-mode", themeColor === "light_mode");
  themeButton.innerText = document.body.classList.contains("light-mode") ? "dark_mode" : "light_mode";
  const defaultText = `<div class="default-text">
                            <h1>SARVAM AI</h1>
                            <p>Start a conversation and explore the power of AI.<br> Your chat history will be displayed here.</p>
                        </div>`;
  chatContainer.innerHTML = localStorage.getItem("all-chats") || defaultText;
  chatContainer.scrollTo(0, chatContainer.scrollHeight); // Scroll to the bottom of the chat container
};

// ... (your existing functions)

const chatInput = document.getElementById("chatInput");
const chatContainer = document.querySelector(".chat-container");

chatInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    handleOutgoingChat();
  }
});

function handleOutgoingChat() {
  userText = chatInput.value.trim();

  if (!userText) return;

  chatInput.value = "";
  chatInput.style.height = `${initialInputHeight}px`;

  const html = `<div class="chat-content">
                  <div class="chat-details">
                      <img src="assests/profile.jpg" alt="user-img">
                      <p>${userText}</p>
                  </div>
              </div>`;

  const outgoingChatDiv = createChatElement(html, "outgoing");
  chatContainer.querySelector(".default-text")?.remove();
  chatContainer.appendChild(outgoingChatDiv);
  chatContainer.scrollTo(0, chatContainer.scrollHeight);

  setTimeout(() => {
    showTypingAnimation();
    // After the typing animation, call the function to handle AI response
    getChatResponse(outgoingChatDiv);
  }, 500);
}

// ... (your existing code)

const showTypingAnimation = () => {
  // Display the typing animation and call the getChatResponse function
  const html = `<div class="chat-content">
                    <div class="chat-details">
                        <img src="images/chatbot.jpg" alt="chatbot-img">
                        <div class="typing-animation">
                            <div class="typing-dot" style="--delay: 0.2s"></div>
                            <div class="typing-dot" style="--delay: 0.3s"></div>
                            <div class="typing-dot" style="--delay: 0.4s"></div>
                        </div>
                    </div>
                    <span onclick="copyResponse(this)" class="material-symbols-rounded">content_copy</span>
                </div>`;
  // Create an incoming chat div with typing animation and append it to the chat container
  const incomingChatDiv = createChatElement(html, "incoming");
  chatContainer.appendChild(incomingChatDiv);
  chatContainer.scrollTo(0, chatContainer.scrollHeight);

  // After displaying the typing animation, call the function to handle AI response
  getChatResponse(incomingChatDiv);
};

// ... (your existing code)

function getChatResponse(incomingChatDiv) {
  const API_URL = "https://api.openai.com/v1/engines/davinci-codex/completions";
  const pElement = document.createElement("p");

  // Define the properties and data for the API request
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${API_KEY}`
    },
    body: JSON.stringify({
      model: "text-davinci-003",
      prompt: userText,
      max_tokens: 2048,
      temperature: 0.2,
      n: 1,
      stop: null
    })
  };

  // Send POST request to API, get response, and set the response as paragraph element text
  try {
    // Simulate a delay to mimic the AI processing time (adjust the duration as needed)
    setTimeout(async () => {
      const response = await (await fetch(API_URL, requestOptions)).json();
      pElement.textContent = response.choices[0].text.trim();

      // Remove the typing animation, append the paragraph element, and save the chats to local storage
      incomingChatDiv.querySelector(".typing-animation").remove();
      incomingChatDiv.querySelector(".chat-details").appendChild(pElement);
      localStorage.setItem("all-chats", chatContainer.innerHTML);
      chatContainer.scrollTo(0, chatContainer.scrollHeight);
    }, 1000); // Adjust the delay based on your preference
  } catch (error) {
    // Handle errors if any
    console.error("Error fetching AI response:", error);
    pElement.classList.add("error");
    pElement.textContent = "Oops! Something went wrong while retrieving the response. Please try again.";
    incomingChatDiv.querySelector(".typing-animation").remove();
    incomingChatDiv.querySelector(".chat-details").appendChild(pElement);
    localStorage.setItem("all-chats", chatContainer.innerHTML);
    chatContainer.scrollTo(0, chatContainer.scrollHeight);
  }
}

// ... (your existing code)
