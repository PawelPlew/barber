document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll("header a");

    navLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: "smooth"
                });
            }
        });
    });

    // Interactive hover effect for footer social icons
    const socialIcons = document.querySelectorAll(".social-icons a");

    socialIcons.forEach(icon => {
        icon.addEventListener("mouseover", () => {
            icon.style.color = "#f0c674";
        });

        icon.addEventListener("mouseout", () => {
            icon.style.color = "#fff";
        });
    });

    // Example: Lazy loading for the map iframe
    const mapIframe = document.querySelector(".map-container iframe");
    if (mapIframe) {
        mapIframe.setAttribute("loading", "lazy");
    }

    // Additional interactivity or initialization code can go here
});
