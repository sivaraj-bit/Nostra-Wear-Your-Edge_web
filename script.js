
// MOBILE MENU

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

if (menuBtn && mobileMenu) {

    menuBtn.addEventListener("click", function () {

        if (mobileMenu.style.display === "block") {
            mobileMenu.style.display = "none";
        } else {
            mobileMenu.style.display = "block";
        }

    });

}

// SEARCH + CATEGORY + RATING

const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const ratingFilter = document.getElementById("ratingFilter");
const clearFilters = document.getElementById("clearFilters");
const productCount = document.getElementById("productCount");
const products = document.querySelectorAll(".product");
const noProducts = document.getElementById("noProducts");

function filterProducts() {

    const searchValue =
        searchInput
            ? searchInput.value.toLowerCase().trim()
            : "";

    const categoryValue =
        categoryFilter
            ? categoryFilter.value
            : "all";

    const ratingValue =
        ratingFilter
            ? ratingFilter.value
            : "all";

    let foundProducts = 0;

    products.forEach(function (product) {

        const nameElement =
            product.querySelector("h3");

        const productName =
            nameElement
                ? nameElement.textContent.toLowerCase()
                : "";

        const productCategory =
            product.getAttribute("data-category");

        const productRating =
            Number(
                product.getAttribute("data-rating")
            );

        // SEARCH MATCH

        const searchMatch =
            productName.includes(searchValue);

        // CATEGORY MATCH

        const categoryMatch =
            categoryValue === "all" ||
            productCategory === categoryValue;

        // RATING MATCH

        const ratingMatch =
            ratingValue === "all" ||
            productRating === Number(ratingValue);

        // SHOW / HIDE PRODUCT

        if (
            searchMatch &&
            categoryMatch &&
            ratingMatch
        ) {

            product.style.display = "block";

            foundProducts++;

        } else {

            product.style.display = "none";

        }

    });

    // PRODUCT COUNT

    if (productCount) {

        productCount.textContent =
            `Showing ${foundProducts} products`;

    }

    // NO PRODUCTS MESSAGE

    if (noProducts) {

        if (foundProducts === 0) {

            noProducts.style.display = "block";

        } else {

            noProducts.style.display = "none";

        }

    }

}

// SEARCH

if (searchInput) {

    searchInput.addEventListener(
        "input",
        filterProducts
    );

}

// CATEGORY

if (categoryFilter) {

    categoryFilter.addEventListener(
        "change",
        filterProducts
    );

}

// RATING

if (ratingFilter) {

    ratingFilter.addEventListener(
        "change",
        filterProducts
    );

}

// CLEAR FILTERS

if (clearFilters) {

    clearFilters.addEventListener(
        "click",
        function () {

            if (searchInput) {
                searchInput.value = "";
            }

            if (categoryFilter) {
                categoryFilter.value = "all";
            }

            if (ratingFilter) {
                ratingFilter.value = "all";
            }

            filterProducts();

        }
    );

}

// SHOW INITIAL PRODUCT COUNT

filterProducts();

// CONTACT FORM

const contactForm =
    document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            const nameInput =
                document.getElementById("name");

            const emailInput =
                document.getElementById("email");

            const messageInput =
                document.getElementById("message");

            const name =
                nameInput
                    ? nameInput.value.trim()
                    : "";

            const email =
                emailInput
                    ? emailInput.value.trim()
                    : "";

            const message =
                messageInput
                    ? messageInput.value.trim()
                    : "";

            const nameError = document.getElementById("nameError");
            const emailError = document.getElementById("emailError");
            const messageError = document.getElementById("messageError");
            const successMessage = document.getElementById("successMessage");

            if (nameError) {
                nameError.textContent = "";
            }

            if (emailError) {
                emailError.textContent = "";
            }

            if (messageError) {
                messageError.textContent = "";
            }

            if (successMessage) {
                successMessage.textContent = "";
            }

            let valid = true;

            // NAME VALIDATION

            if (name === "") {

                if (nameError) {
                    nameError.textContent =
                        "Please enter your name";
                }

                valid = false;

            }

            // EMAIL VALIDATION

            if (email === "") {

                if (emailError) {
                    emailError.textContent =
                        "Please enter your email";
                }

                valid = false;

            } else if (
                !email.includes("@") ||
                !email.includes(".")
            ) {

                if (emailError) {
                    emailError.textContent =
                        "Please enter a valid email";
                }

                valid = false;

            }

            // MESSAGE VALIDATION

            if (message === "") {

                if (messageError) {
                    messageError.textContent =
                        "Please enter your message";
                }

                valid = false;

            } else if (message.length < 10) {

                if (messageError) {
                    messageError.textContent =
                        "Message must contain at least 10 characters";
                }

                valid = false;

            }

            // SUCCESS

            if (valid) {

                if (successMessage) {
                    successMessage.textContent =
                        "✓ Message sent successfully!";
                }

                contactForm.reset();

            }

        }
    );

}
