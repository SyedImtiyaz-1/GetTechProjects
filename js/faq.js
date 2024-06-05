const accHeaders = document.querySelectorAll(".accordion-header");
accHeaders.forEach(header => {
    header.addEventListener("click", () => {
        const content = header.nextElementSibling;
        header.classList.toggle("active");
        if (header.classList.contains("active")) {
            content.style.maxHeight = content.scrollHeight + "px";
        } else {
            content.style.maxHeight = 0;
        }
    });
});