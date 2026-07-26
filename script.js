const button = document.querySelector("button");

button.addEventListener("click", function() {
    alert("Welcome to my website clone!");

});

const form = document.querySelector("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    alert("Thanks for your message!");

});