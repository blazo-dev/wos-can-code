const handleHeroImage = () => {
    const heroImages = [
        "./assets/images/blasterrex.webp",
        "./assets/images/blasterrex-2.webp",
    ];
    const heroElement = document.getElementById("hero-image");
    const prevArrows = document.querySelectorAll(".hero-arrow--left");
    const nextArrows = document.querySelectorAll(".hero-arrow--right");
    let currentPosition = 0;

    const next = () => {
        if (currentPosition >= heroImages.length - 1) return;
        currentPosition++;

        heroElement.src = heroImages[currentPosition];
    };

    const previous = () => {
        if (currentPosition <= 0) return;
        currentPosition--;

        heroElement.src = heroImages[currentPosition];
    };

    prevArrows.forEach((pArrow) => {
        pArrow.addEventListener("click", previous);
    });

    nextArrows.forEach((nArrow) => {
        nArrow.addEventListener("click", next);
    });
};

const handleCart = () => {
    const cartCounter = document.getElementById("cart-counter");
    const addCartButtons = document.querySelectorAll(".button-add-cart");

    const add = () => {
        cartCounter.textContent++;
    };

    addCartButtons.forEach((button) => {
        button.addEventListener("click", add);
    });
};

const handleSearch = () => {
    const searchInput = document.getElementById("search-input");
    const searchForm = document.getElementById("search-form");

    const search = (e) => {
        e.preventDefault();
        const searchValue = searchInput.value;

        if (!searchValue) return;

        alert(`You are searching for: ${searchValue}`);
    };

    searchForm.addEventListener("submit", search);
};

document.addEventListener("DOMContentLoaded", () => {
    handleHeroImage();
    handleCart();
    handleSearch();
});
