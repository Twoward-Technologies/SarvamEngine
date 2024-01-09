const toggleSidebarButton = document.getElementById("toggle-sidebar");
const sidebar = document.querySelector(".sidebar");
const chatContainer = document.querySelector(".chat-container");
const chatInput = document.querySelector("#chat-input");
const sendButton = document.querySelector("#send-btn");
const themeButton = document.querySelector("#theme-btn");
const deleteButton = document.querySelector("#delete-btn");
const conversationList = document.querySelector(".conversation-list");
let userText = null;
const API_KEY = "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"; // Paste your API key here
// Initialize a variable or array to store the inputs
let aiSearchHistory = [];

// Function to perform Sarvam AI search
function aisearch() {
    const inputElement = document.getElementById("searchInput");
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
const createChatElement = (content, className) => {
  // Create a new div and apply chat, specified class and set html content of div
  const chatDiv = document.createElement("div");
  chatDiv.classList.add("chat", className);
  chatDiv.innerHTML = content;
  return chatDiv; // Return the created chat div
};

const getChatResponse = async (incomingChatDiv) => {
  const API_URL = "https://api.openai.com/v1/chat/completions";
  const pElement = document.createElement("p");
  // Define the properties and data for the API request
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${API_KEY}`
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      prompt: userText,
      max_tokens: 2048,
      temperature: 0.2,
      n: 1,
      stop: null
    })
  };
  // Send POST request to API, get response and set the response as paragraph element text
  try {
    const response = await (await fetch(API_URL, requestOptions)).json();
    pElement.textContent = response.choices[0].text.trim();
  } catch (error) { // Add error class to the paragraph element and set error text
    pElement.classList.add("error");
    pElement.textContent = "Oops! Something went wrong while retrieving the response. Please try again.";
  }
  // Remove the typing animation, append the paragraph element and save the chats to local storage
  incomingChatDiv.querySelector(".typing-animation").remove();
  incomingChatDiv.querySelector(".chat-details").appendChild(pElement);
  localStorage.setItem("all-chats", chatContainer.innerHTML);
  chatContainer.scrollTo(0, chatContainer.scrollHeight);
};

const copyResponse = (copyBtn) => {
  // Copy the text content of the response to the clipboard
  const responseTextElement = copyBtn.parentElement.querySelector("p");
  navigator.clipboard.writeText(responseTextElement.textContent);
  copyBtn.textContent = "done";
  setTimeout(() => copyBtn.textContent = "content_copy", 1000);
};

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
  getChatResponse(incomingChatDiv);
};

const handleOutgoingChat = () => {
  userText = chatInput.value.trim(); // Get chatInput value and remove extra spaces
  if (!userText) return; // If chatInput is empty, return from here
  // Clear the input field and reset its height
  chatInput.value = "";
  chatInput.style.height = `${initialInputHeight}px`;
  const html = `<div class="chat-content">
                    <div class="chat-details">
                        <img src="assests/profile.jpg" alt="user-img">
                        <p>${userText}</p>
                    </div>
                </div>`;
  // Create an outgoing chat div with the user's message and append it to the chat container
  const outgoingChatDiv = createChatElement(html, "outgoing");
  chatContainer.querySelector(".default-text")?.remove();
  chatContainer.appendChild(outgoingChatDiv);
  chatContainer.scrollTo(0, chatContainer.scrollHeight);
  setTimeout(showTypingAnimation, 500);
};

const deleteAllChats = () => {
  // Remove the chats from local storage and call loadDataFromLocalstorage function
  if (confirm("Are you sure you want to delete all the chats?")) {
    localStorage.removeItem("all-chats");
    loadDataFromLocalstorage();
  }
};

const toggleThemeMode = () => {
  // Toggle body's class for the theme mode and save the updated theme to the local storage
  document.body.classList.toggle("light-mode");
  localStorage.setItem("themeColor", themeButton.innerText);
  themeButton.innerText = document.body.classList.contains("light-mode") ? "dark_mode" : "light_mode";
};

const initialInputHeight = chatInput.scrollHeight;

chatInput.addEventListener("input", () => {
  // Adjust the height of the input field dynamically based on its content
  chatInput.style.height = `${initialInputHeight}px`;
  chatInput.style.height = `${chatInput.scrollHeight}px`;
});

chatInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    handleOutgoingChat();
  }
});

loadDataFromLocalstorage();

sendButton.addEventListener("click", handleOutgoingChat);
deleteButton.addEventListener("click", deleteAllChats);
themeButton.addEventListener("click", toggleThemeMode);

toggleSidebarButton.addEventListener("click", () => {
  sidebar.classList.toggle("retracted");
  chatContainer.classList.toggle("retracted");
  // Add the following line to also toggle the typing container
  document.querySelector('.typing-container').classList.toggle('retracted');
});;

// Add an event listener to load past conversations when the page loads
window.addEventListener("load", () => {
  loadConversationsFromLocalStorage();
});

// Add an event listener to the sidebar to handle conversation clicks
conversationList.addEventListener("click", handleConversationClick);

function loadConversationsFromLocalStorage() {
  const conversations = JSON.parse(localStorage.getItem("conversations")) || [];
  conversationList.innerHTML = conversations.map((conv, index) => `<li data-index="${index}">${conv.title}</li>`).join("");
}

function saveConversationToLocalStorage(title, content) {
  const conversations = JSON.parse(localStorage.getItem("conversations")) || [];
  conversations.push({ title, content });
  localStorage.setItem("conversations", JSON.stringify(conversations));
  loadConversationsFromLocalStorage();
}

function handleConversationClick(e) {
  const index = e.target.getAttribute("data-index");
  const conversations = JSON.parse(localStorage.getItem("conversations")) || [];
  if (conversations[index]) {
    chatContainer.innerHTML = conversations[index].content;
    chatContainer.scrollTo(0, chatContainer.scrollHeight);
  }
}
// New Chat Button
const newChatButton = document.getElementById("new-chat-btn");
newChatButton.addEventListener("click", handleNewChat);

function handleConversationClick(e) {
  const index = e.target.getAttribute("data-index");
  const conversations = JSON.parse(localStorage.getItem("conversations")) || [];
  if (conversations[index]) {
    renderChatContent(conversations[index].content);
  }
}

function renderChatContent(content) {
  chatContainer.innerHTML = content;
  chatContainer.scrollTo(0, chatContainer.scrollHeight);
}

// ...

function handleNewChat() {
  // Get the first input of the chat as the title
  const firstInput = chatContainer.querySelector(".chat-container .chat.outgoing p");
  const newChatTitle = firstInput ? firstInput.textContent : "New Chat";

  // Save existing chat to past conversations
  saveConversationToLocalStorage(newChatTitle, chatContainer.innerHTML);

  // Clear the current chat
  clearChatContent();

  // Display the "SARVAM AI" section
  const defaultText = `<div class="default-text">
                            <h1>SARVAM AI</h1>
                            <p>Start a conversation and explore the power of AI.<br> Your chat history will be displayed here.</p>
                        </div>`;
  chatContainer.innerHTML = defaultText;
}

function clearChatContent() {
  chatContainer.innerHTML = "";
}


function handleNewChat() {
  // Get the first input of the chat as the title
  const firstInput = chatContainer.querySelector(".chat-container .chat.outgoing p");
  const newChatTitle = firstInput ? firstInput.textContent : "New Chat";

  // Save existing chat to past conversations
  saveConversationToLocalStorage(newChatTitle, chatContainer.innerHTML);

  // Clear the current chat
  chatContainer.innerHTML = "";

  // Display the "SARVAM AI" section
  const defaultText = `<div class="default-text">
                            <h1>SARVAM AI</h1>
                            <p>Start a conversation and explore the power of AI.<br> Your chat history will be displayed here.</p>
                        </div>`;
  chatContainer.innerHTML = defaultText;

  // Optionally, you can also reset the chat input
  chatInput.value = "";
  chatInput.style.height = `${initialInputHeight}px`;
}
function loadConversationsFromLocalStorage() {
  const conversations = JSON.parse(localStorage.getItem("conversations")) || [];
  conversationList.innerHTML = conversations.map((conv, index) => {
    return `<li data-index="${index}">
              <div class="conversation-item">
                <div class="conversation-title">${conv.title}</div>
                <button class="delete-conversation-btn material-symbols-rounded">delete</button>
              </div>
            </li>`;
  }).join("");
}

// ...

// Add an event listener to the sidebar to handle conversation clicks
conversationList.addEventListener("click", handleConversationClick);

// Add an event listener to handle delete conversation button clicks
conversationList.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-conversation-btn")) {
    // Retrieve the index of the conversation to be deleted
    const index = e.target.closest("li").getAttribute("data-index");
    
    // Retrieve and parse the conversations from local storage
    let conversations = JSON.parse(localStorage.getItem("conversations")) || [];

    // Remove the conversation at the specified index
    conversations.splice(index, 1);

    // Save the updated conversations back to local storage
    localStorage.setItem("conversations", JSON.stringify(conversations));

    // Reload the conversation list
    loadConversationsFromLocalStorage();
  }
});

function truncateText(text, words) {
  const wordArray = text.split(' ');
  const truncatedArray = wordArray.slice(0, words);
  return truncatedArray.join(' ') + (wordArray.length > words ? ' ...' : '');
}

function loadConversationsFromLocalStorage() {
  const conversations = JSON.parse(localStorage.getItem("conversations")) || [];
  conversationList.innerHTML = conversations.map((conv, index) => {
    const truncatedTitle = truncateText(conv.title, 3); // Truncate to first 3 words
    return `<li data-index="${index}">
              <div class="conversation-item">
                <div class="conversation-title">${truncatedTitle}</div>
                <button class="delete-conversation-btn material-symbols-rounded">delete</button>
              </div>
            </li>`;
  }).join("");
}
