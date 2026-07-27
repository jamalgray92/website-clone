const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelector(".nav-links");
const heroForm = document.querySelector(".hero-form");

menuButton.addEventListener("click", function () {
    navLinks.classList.toggle("open");
});

navLinks.addEventListener("click", function (event) {
    if (event.target.tagName === "A") {
        navLinks.classList.remove("open");
    }
});

heroForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const emailInput = heroForm.querySelector("input");

    alert(`Thanks! We will send template information to ${emailInput.value}.`);

    heroForm.reset();
});