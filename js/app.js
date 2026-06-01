// =========================
// EMAIL VALIDATION
// =========================

const emailInput = document.getElementById("email");
const getStartedBtn = document.getElementById("getStartedBtn");

if (getStartedBtn) {

    getStartedBtn.addEventListener("click", () => {

        const email = emailInput.value.trim();

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email === "") {
            alert("Please enter your email address.");
            return;
        }

        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        alert(`Welcome! Registration started for: ${email}`);

        emailInput.value = "";

    });

}

// =========================
// ENTER KEY SUPPORT
// =========================

if (emailInput) {

    emailInput.addEventListener("keypress", (e) => {

        if (e.key === "Enter") {
            getStartedBtn.click();
        }

    });

}

// =========================
// NAVBAR SCROLL EFFECT
// =========================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.background = "rgba(0,0,0,0.95)";
        navbar.style.transition = "0.3s ease";

    } else {

        navbar.style.background = "transparent";

    }

});

// =========================
// FADE-IN ANIMATION
// =========================

const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {
        threshold: 0.2
    }

);

document
    .querySelectorAll(
        ".feature-section, .faq-section, .trending-section"
    )
    .forEach((section) => {

        section.classList.add("hidden");

        observer.observe(section);

    });

// =========================
// FAQ UX IMPROVEMENT
// =========================

const accordionButtons =
    document.querySelectorAll(".accordion-button");

accordionButtons.forEach((button) => {

    button.addEventListener("click", () => {

        accordionButtons.forEach((btn) => {

            if (btn !== button) {
                btn.classList.add("collapsed");
            }

        });

    });

});

// =========================
// MOVIE CARD HOVER EFFECT
// =========================

const movieCards =
    document.querySelectorAll(".movie-card");

movieCards.forEach((card) => {

    card.addEventListener("mouseenter", () => {

        card.style.zIndex = "10";

    });

    card.addEventListener("mouseleave", () => {

        card.style.zIndex = "1";

    });

});

// =========================
// CONSOLE MESSAGE
// =========================

console.log(
    "%cNetflix Homepage Clone Loaded Successfully 🚀",
    "color:red;font-size:16px;font-weight:bold;"
);