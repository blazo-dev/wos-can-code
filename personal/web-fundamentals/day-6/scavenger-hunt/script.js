// === Base Level Requirements ===

// 1. Select the Title
// Use querySelector to log the <h1> element to the console.

const mainTitle = document.querySelector("#main-title");
console.log({ mainTitle });

// 2. Grab All Paragraphs
// Use querySelectorAll to select all <p> tags and log the NodeList.

const paragraphs = document.querySelectorAll("p");
console.log({ paragraphs });

// 3. Log a Button
// Log the <button> element with id="contact-button" using querySelector.
const contactButton = document.querySelector("#contact-button");
console.log({ contactButton });

// 4. Count the Paragraphs
// After selecting all <p> tags, log how many were found using .length.
console.log({ paragraphsCount: paragraphs.length });

// 5. Loop Through and Log Text
// Use a for...of loop to log the innerText of each paragraph.
for (const element of paragraphs) {
    console.log(element.textContent);
}

// 6. Pick by Class
// Select and log all elements with the class highlight.
const highlightClassItems = document.querySelectorAll(".highlight");
console.log({ highlightClassItems });

// 7. First vs. All
// Use both querySelector and querySelectorAll on the section element type. Note the results.
const firstSection = document.querySelector("section");
const allSections = document.querySelectorAll("section");

console.log({ firstSection, allSections });

// === Jam-Master Challenges ===

// 8. Descendant Selector (SPACE)
// Select all <span> elements nested in a <div>.
const nestedSpans = document.querySelectorAll("div span");
console.log({ nestedSpans });

// 9. Direct Child Selector (>)
// Select only the top-level list items in the nav.

const topLevelInNav = document.querySelectorAll("nav > *");
console.log({ topLevelInNav });

// 10. Adjacent Sibling Selector (+)
// Select the <button> with "Register Now" inside of it.
const siblingSelector = document.querySelector("p + button");
console.log({ siblingSelector });

// 11. General Sibling Selector (~)
// Select all paragraph siblings after an <h2>.
const generalSiblingSelector = document.querySelectorAll("h2 ~ p");
console.log({ generalSiblingSelector });

// 12. Mix and Match
// Use at least three selectors to select the <span> containing the text "bonus clues!".
//! There is not a span element containing that text. But there is a <p> element
const bonusCluesElement = document.querySelector("section > p.highlight");
console.log({ bonusCluesElement });

// 13. Chain It Up
// Select only elements with the .note class inside the <aside>. Log the innerText of each selected element.
const noteElementsInAside = document.querySelectorAll("aside .note");
console.log({ noteElementsInAside });

for (const element of noteElementsInAside) {
    console.log(element.textContent);
}
