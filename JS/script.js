
/* ======================================================
   Session 1: JavaScript basics for The Gaming Club
   ====================================================== */

// STEP 1: Check that JavaScript has loaded

console.log("The Gaming Club JavaScript is connected!");


// STEP 1: Select the HTML elements


/* ======================================================
   Session 2: Website Search
   ====================================================== */

const searchInput = document.querySelector("#SearchInput");
const searchResults = document.querySelector("#searchResults");
const searchButton = document.querySelector(".search-box button");

function searchWebsite() {
    if (!searchInput || !searchResults) { alert("The search box could not be found.");
        return;
    }
    const searchText = searchInput.value.toLowerCase().trim();

    if (searchText === "") { searchResults.textContent = "Please enter something to search.";
        return;
    }

    const pages = [
        {
            name: "Home",
            link: "index.html",
            keywords: "home welcome gaming club play compete connect"
        },
        {
            name: "About Us",
            link: "about.html",
            keywords: "about story mission vision gamers"
        },
        {
            name: "Games & Services",
            link: "services.html",
            keywords: "games services gaming pc playstation xbox ea fc fortnite call of duty mortal kombat racing basketball prices tournament"
        },
        {
            name: "Enquiry",
            link: "enquiry.html",
            keywords: "enquiry booking session players date time"
        },
        {
            name: "Contact Us",
            link: "contact.html",
            keywords: "contact location phone email"
        }
    ];

    const matchingPages = pages.filter(function (page) {
        return (page.name + " " + page.keywords).toLowerCase()
            .includes(searchText);
    });

    searchResults.replaceChildren();

    if (matchingPages.length > 0) {
        searchResults.appendChild(
            document.createTextNode("Matching pages: ")
        );

        matchingPages.forEach(function (page, index) {
            const pageLink = document.createElement("a");
            pageLink.href = page.link;
            pageLink.textContent = page.name;

            searchResults.appendChild(pageLink);

            if (index < matchingPages.length - 1) {
                searchResults.appendChild(
                    document.createTextNode(" | ")
                );
            }
        });
    } else {
        searchResults.textContent = "No matching pages found. Try another search.";
    }
}

if (searchButton) {
    searchButton.addEventListener("click", searchWebsite);
}

if (searchInput) {
    searchInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            searchWebsite();
        }
    });
}


// ======================================================
// Session 3: Enquiry Form Validation
// ======================================================

// STEP 1: Select the enquiry form.

const enquiryForm = document.querySelector(".enquiry-form");


// STEP 2: Check the form when it is submitted.

if (enquiryForm) {

    enquiryForm.addEventListener("submit", function (event) {

        // Stop the form from submitting to a server.
        event.preventDefault();

        // Check that all required fields are completed.
        if (enquiryForm.checkValidity()) {

            alert(
                "Your enqury form is complete is successsfully sent."
            );

        } else {

            // Ask the visitor to complete the missing fields.
            enquiryForm.reportValidity();
        }
    });
}


/* ======================================================
   Session 4: Gallery Lightbox
   ====================================================== */

const gameImages = document.querySelectorAll(".services-game-card img");

gameImages.forEach(function (gameImage) {
    gameImage.style.cursor = "pointer";

    gameImage.addEventListener("click", function () {
        // Create the dark background
        const overlay = document.createElement("div");
        overlay.className = "lightbox-overlay";

        // Create the enlarged image
        const enlargedImage = document.createElement("img");
        enlargedImage.src = gameImage.src;
        enlargedImage.alt = gameImage.alt || "Enlarged game image";
        enlargedImage.className = "lightbox-image";

        // Create the close button
        const closeButton = document.createElement("button");
        closeButton.textContent = "×";
        closeButton.className = "lightbox-close";
        closeButton.setAttribute("aria-label", "Close image");

        // Add everything to the background
        overlay.appendChild(closeButton);
        overlay.appendChild(enlargedImage);
        document.body.appendChild(overlay);

        // Close the enlarged image
        function closeLightbox() {
            overlay.remove();
            document.removeEventListener("keydown", closeWithEscape);
        }

        // Close when Escape is pressed
        function closeWithEscape(event) {
            if (event.key === "Escape") {
                closeLightbox();
            }
        }

        closeButton.addEventListener("click", closeLightbox);

        // Close when the dark background is clicked
        overlay.addEventListener("click", function (event) {
            if (event.target === overlay) {
                closeLightbox();
            }
        });

        document.addEventListener("keydown", closeWithEscape);
    });
});
 

/* Contact Form Validation */

const contactForm = document.querySelector(".contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        if (contactForm.checkValidity()) {
            alert("Thank you for contacting The Gaming Club! Your form has been completed successfully.");
            contactForm.reset();
        } else {
            contactForm.reportValidity();
        }
    });
}

