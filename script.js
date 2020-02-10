const hamburger = document.querySelector('.hamburger-menu');
hamburger.addEventListener("click", () => {
const container = document.querySelector('.container');
container.classList.toggle("change");
}
);

const navList = document.querySelector(".nav-list");
navList.addEventListener("click", ($e) => {
const el = $e.target.parentElement;
$e.preventDefault();

if (el.classList[0] === "nav-link") {
    el.nextElementSibling.classList.toggle("change");
    el.classList.toggle("change");
}
});