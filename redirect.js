var searchInputValue = "";

function redirect() {
    var userInput = document.getElementById('searchInput').value.toLowerCase();
    
    // Store the search input value in localStorage
    localStorage.setItem('searchInputValue', userInput)

    if (userInput.includes("palak paneer") || userInput.includes("paneer recipe") || userInput.includes("palak panneer")) {
        window.location.href = "sarvam search palak.html";
    } else if (userInput.includes("how to do engineering online") || userInput.includes("engineering online")) {
        window.location.href = "sarvam search engi.html";
    } else if (userInput.includes("what is Sarvam") || userInput.includes("how sarvam works") || userInput.includes("sarvam")) {
        window.location.href = "https://smartgenai.netlify.app/dumb%20ai";
    } else if (userInput.includes("computer mutex engineering") || userInput.includes("mutex engineering")){
        window.location.href = "sarvam search.html"
    }
      else {
        alert("Information not found!");
    }
}


document.getElementById('searchInput').addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        redirect();
    }
});

document.addEventListener('DOMContentLoaded', function () {
    var searchInput = document.getElementById('searchInput');
    
    // Retrieve the search input value from localStorage
    var storedInputValue = localStorage.getItem('searchInputValue');

    // Set the input value to the retrieved value
    searchInput.value = storedInputValue || ''; // Use an empty string if no value is found
});