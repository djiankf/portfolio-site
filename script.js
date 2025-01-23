document.addEventListener("DOMContentLoaded", function() {
    const button = document.createElement("button");
    button.textContent = "Scroll to Top";
    button.classList.add("scroll-to-top");
    document.body.appendChild(button);

    button.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
