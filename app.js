const navLinks = document.querySelectorAll("nav a");
const pages = document.querySelectorAll(".page");

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

navLinks.forEach((link) => {
    link.addEventListener("click", togglePage);
});

// ustawiamy czas trwania animacji i opóźnienie przeniesienia do kolejnej strony
const animationDuration = 2 * 1000; // 2 sekundy
const delayBeforeRedirect = 3 * 1000; // 3 sekundy

// pobieramy element z napisem powitalnym
const helloMessage = document.getElementById("hello-message").parentNode;
// ustawiamy animację fade-out dla napisu

setTimeout(() => {
    helloMessage.parentNode.removeChild(helloMessage)
}, animationDuration);


setTimeout(() => {
togglePage()
}, delayBeforeRedirect);

// przekierowujemy użytkownika do strony "About Me" po opóźnieniu

