
/* =========================================
   DUGNAD SCHOOL WEBSITE
   MAIN JAVASCRIPT
========================================= */


/* =========================================
   1. MOBILE HAMBURGER NAVIGATION
========================================= */

const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("mainNav");

if (menuToggle && navigation) {

    // Open and close the mobile navigation
    menuToggle.addEventListener("click", function () {

        navigation.classList.toggle("open");

        const isOpen = navigation.classList.contains("open");

        menuToggle.setAttribute("aria-expanded", isOpen);

        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );

        // Change hamburger icon
        menuToggle.textContent = isOpen ? "✕" : "☰";

    });


    // Close navigation after selecting a link
    const navigationLinks = document.querySelectorAll("#mainNav a");

    navigationLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navigation.classList.remove("open");

            menuToggle.setAttribute("aria-expanded", "false");

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

            menuToggle.textContent = "☰";

        });

    });

}


/* =========================================
   2. AUTOMATIC COPYRIGHT YEAR
========================================= */

const copyrightYear = document.getElementById("year");

if (copyrightYear) {

    copyrightYear.textContent = new Date().getFullYear();

}


/* =========================================
   3. DEMONSTRATION CONTACT FORM
========================================= */

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm && formMessage) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        formMessage.textContent =
            "Thank you for your enquiry. This demonstration form is not yet connected to the school's email.";

        contactForm.reset();

    });

}
