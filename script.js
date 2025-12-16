// ============================
// Main JavaScript File
// ============================

// Wait until page is fully loaded
document.addEventListener("DOMContentLoaded", function () {

    // ----------------------------
    // Navbar shadow on scroll
    // ----------------------------
    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 10) {
            navbar.classList.add("shadow");
        } else {
            navbar.classList.remove("shadow");
        }
    });


    // ----------------------------
    // Course cards click (if any)
    // ----------------------------
    const courseCards = document.querySelectorAll(".course-card-detail");

    courseCards.forEach(function (card) {
        card.addEventListener("mouseenter", function () {
            card.style.transform = "translateY(-5px)";
            card.style.transition = "0.3s";
        });

        card.addEventListener("mouseleave", function () {
            card.style.transform = "translateY(0)";
        });
    });


    // ----------------------------
    // Notification icon click
    // ----------------------------
    const notifyIcon = document.querySelector(".notification-icon");

    if (notifyIcon) {
        notifyIcon.addEventListener("click", function () {
            alert("No new notifications");
        });
    }


    // ----------------------------
    // CTA Button click
    // ----------------------------
    const ctaBtn = document.querySelector(".btn-cta");

    if (ctaBtn) {
        ctaBtn.addEventListener("click", function () {
            alert("Registration will be available soon");
        });
    }

});
