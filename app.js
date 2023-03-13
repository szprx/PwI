const navLinks = document.querySelectorAll("nav a");
const pages = document.querySelectorAll(".page");


navLinks.forEach((link) => {
    link.addEventListener("click", togglePage);
});
function togglePage(event) {
    event.preventDefault();

    const targetPageId = this.getAttribute("data-target");
    const targetPage = document.getElementById(targetPageId);

    pages.forEach((page) => {
        if (page === targetPage) {
            page.style.display = "block";
        } else {
            page.style.display = "none";
        }
    });
}

const animationDuration = 2.5 * 1000;

document.querySelector("#hello-message").classList.add("fade-out");

const helloStartCV = document.querySelector(".start-page")
setTimeout(() => {
    helloStartCV.remove();
    togglePage.call(document.querySelector("nav a[data-target='about-me']"), new Event("click"));
}, animationDuration);