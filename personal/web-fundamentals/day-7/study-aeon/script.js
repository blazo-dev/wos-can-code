const characters = [
    {
        name: "Juno Reyes",
        image: "juno-reyes.webp",
        alt: "Portrait of Juno Reyes",
        id: "juno",
    },
    {
        name: "Kaika Moana",
        image: "kaika-moana.webp",
        alt: "Portrait of Kaika Moana",
        id: "kaika",
    },
    {
        name: "Rook Granger",
        image: "rook-granger.webp",
        alt: "Portrait of Rook Grander",
        id: "rook",
    },
];

const createCharacterCard = ({ name, image, alt, id }) => {
    return `
        <div class="character-card">
            <h4 class="card-name">${name}</h4>
            <img src="./assets/images/${image}" alt="${alt}" class="card-image">
            <div class="card-info flex-container">
                <div class="card-amps"><span class="amps-count" id="counter-${id}">0</span> AMPS</div>
                <button class="card-button" onclick="increaseAmp('counter-${id}')">AMP</button>
            </div>
        </div>
        `;
};

const increaseAmp = (counterId) => {
    const counter = document.getElementById(counterId);
    console.log(counter);
    counter.textContent++;
};

document.addEventListener("DOMContentLoaded", () => {
    const charactersContainer = document.getElementById("topmains-list");
    const emailInput = document.getElementById("email");
    const emailButton = document.getElementById("email-button");
    const promoButton = document.getElementById("promo-button");

    emailButton.addEventListener("click", () => {
        const emailValue = emailInput.value;
        if (emailValue === "") return;
        alert(`Preorder completed ${emailValue}`);
    });
    promoButton.addEventListener("click", (e) => {
        e.target.remove();
    });

    if (characters.length !== 0) {
        characters.forEach((character) => {
            const characterCard = createCharacterCard(character);
            charactersContainer.insertAdjacentHTML("beforeend", characterCard);
        });
    } else {
        charactersContainer.innerHTML = "No characters found 😖";
    }
});
