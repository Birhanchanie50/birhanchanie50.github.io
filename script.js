/* =====================================================
   BIRHAN CHANIE PORTFOLIO
   JAVASCRIPT
   ===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    console.log("Birhan Chanie Portfolio loaded successfully.");


    /* =================================================
       SMOOTH NAVIGATION
       ================================================= */

    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (targetId && targetId.startsWith("#")) {

                const target = document.querySelector(targetId);

                if (target) {

                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            }

        });

    });


    /* =================================================
       ACTIVE NAVIGATION
       Highlights the section currently being viewed
       ================================================= */

    const sections = document.querySelectorAll("section[id]");

    window.addEventListener("scroll", function () {

        let currentSection = "";

        sections.forEach(function (section) {

            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {
                currentSection = section.getAttribute("id");
            }

        });


        navLinks.forEach(function (link) {

            link.classList.remove("active");

            if (
                link.getAttribute("href") === "#" + currentSection
            ) {
                link.classList.add("active");
            }

        });

    });


    /* =================================================
       CV DOWNLOAD
       ================================================= */

    const cvLinks = document.querySelectorAll(
        'a[href*="CV/"]'
    );

    cvLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            console.log("CV download/view requested.");

        });

    });


    /* =================================================
       CERTIFICATE LINKS
       ================================================= */

    const certificateLinks = document.querySelectorAll(
        ".certificate-link"
    );

    certificateLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            console.log("Certificate opened.");

        });

    });


    /* =================================================
       SCROLL REVEAL EFFECT
       ================================================= */

    const revealElements = document.querySelectorAll(
        ".card, .experience-item, .about-text, .section-label"
    );

    const revealObserver = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },
        {
            threshold: 0.12
        }
    );


    revealElements.forEach(function (element) {

        element.classList.add("reveal");

        revealObserver.observe(element);

    });


    /* =================================================
       CONTACT LINKS
       ================================================= */

    const phoneLinks = document.querySelectorAll(
        'a[href^="tel:"]'
    );

    phoneLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            console.log("Phone contact selected.");

        });

    });


    const emailLinks = document.querySelectorAll(
        'a[href^="mailto:"]'
    );

    emailLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            console.log("Email contact selected.");

        });

    });


    /* =================================================
       PAGE LOAD
       ================================================= */

    window.addEventListener("load", function () {

        document.body.classList.add("page-loaded");

    });

});