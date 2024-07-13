document.addEventListener("DOMContentLoaded", function () {
    let options = {
        root: null, // Use the viewport as the container
        rootMargin: "0px",
        threshold: 0.1 // Trigger when 10% of the section is visible
    };

    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // Stop observing once it's visible
            }
        });
    }, options);

    let elements = document.querySelectorAll(".fade-up");
    elements.forEach(element => {
        observer.observe(element);
    });
});
