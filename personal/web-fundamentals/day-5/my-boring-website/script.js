// ===== HEADER =====
function handleHeaderEnter(element) {
    const title = element.querySelector(".header__title");
    element.style.backgroundColor = "#0066cc";
    element.style.color = "#fff";
    if (title) title.textContent = "Let's Goooooo!!";
}

function handleHeaderLeave(element) {
    const title = element.querySelector(".header__title");
    element.style.backgroundColor = "#333";
    element.style.color = "#fff";
    if (title) title.textContent = "My Boring Website";
}

// ===== EMOJIS =====
function emojiEnter(element) {
    element.textContent = "🤪";
}

function emojiLeave(element) {
    element.textContent = "😐";
}

// ===== MAIN BACKGROUND =====
function changeMainBackground(element) {
    element.style.backgroundColor = "#e0f7fa";
}

// ===== MAIN HEADING =====
function changeMainHeading(element) {
    element.textContent = "A Brilliant Azure Sky";
    element.style.color = "#005f99";
}

// ===== MAIN PARAGRAPH =====
function changeMainParagraph(element) {
    element.textContent = `Colossal, tempestuous clouds churned and roiled with an almost palpable energy. The sun, a blazing orb of pure power, scorched the very air, casting razor-sharp shadows that danced and writhed across the parched earth below. Every fiber of the ground vibrated with an unseen force, a primal pulse that resonated deep within.`;
    element.style.color = "#333366";
}

// ===== ASIDE HEADING =====
function changeAsideHeadingText(element) {
    element.textContent = "Fun Fact";
}

// ===== ASIDE PARAGRAPH =====
function changeAsideParagraphText(element) {
    element.textContent = `Chewbacca in "Star Wars" is based on George Lucas' dog, an Alaskan Malamute named "Indiana," who also inspired "Indiana Jones."`;
}

// ===== BUTTON =====
function hideButton(element) {
    element.style.display = "none";
}
