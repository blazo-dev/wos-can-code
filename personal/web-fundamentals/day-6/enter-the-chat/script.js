document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("real-form");
    const formAlert = document.getElementById("form-alert");

    const fields = [
        {
            id: "character-name",
            validate: (val) => val.trim() !== "",
            message: "Character name is required.",
        },
        {
            id: "character-class",
            validate: (val) => val.trim() !== "",
            message: "Character class is required.",
        },
    ];

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        clearAlert();
        let hasError = false;

        fields.forEach(({ id, validate, message }) => {
            const input = document.getElementById(id);
            const isValid = validate(input.value);
            input.setAttribute("aria-invalid", String(!isValid));

            if (!isValid) {
                hasError = true;
                appendAlertMessage(message);
            }
        });

        if (hasError) {
            showAlert("error");
        } else {
            const characterName = document
                .getElementById("character-name")
                .value.trim();
            const characterClass = document
                .getElementById("character-class")
                .value.trim();
            formAlert.textContent = `${characterName} the ${characterClass} enters the realm!`;
            showAlert("success");
            resetFormState();
        }
    });

    function clearAlert() {
        formAlert.textContent = "";
        formAlert.classList.remove("alert--active", "error", "success");
    }

    function appendAlertMessage(message) {
        formAlert.innerHTML += message + "<br>";
    }

    function showAlert(type) {
        formAlert.classList.add("alert--active", type);
    }

    function resetFormState() {
        setTimeout(() => {
            form.reset();
            clearAlert();
            document
                .querySelectorAll("[aria-invalid]")
                .forEach((el) => el.setAttribute("aria-invalid", "false"));
        }, 3000);
    }
});
