const posts = [
    {
        id: 1,
        image: "./images/elyndra-willowstep.png",
        alt: "Avatar of Elyndra Willowstep",
        username: "Elyndra Willowstep",
        text: "The stars spoke to me again last night. The omens are clear, and their voices whispered secrets of the coming tides. Change is upon us, and I must be ready to face what destiny holds. 🌌🔮✨",
        likes: 14,
    },
    {
        id: 2,
        image: "./images/drakthorn.png",
        alt: "Avatar of Drakthorn The Blue",
        username: "Drakthorn The Blue",
        text: "The moonlight reveals truths we dare not speak aloud. Beneath its silver gaze, ancient knowledge stirs and forgotten memories awaken. What lies in the shadows cannot stay hidden forever. 🌕🧙‍♂️🌒",
        likes: 3,
    },
    {
        id: 3,
        image: "./images/mycomage.png",
        alt: "Avatar of MycoMage",
        username: "MycoMage",
        text: "Fate weaves a strange tapestry — and I'm caught in its thread. Every spore I conjure dances to a rhythm I barely understand, as if nature itself is guiding my hand toward something greater. 🍄🌀📜",
        likes: 35,
    },
];

const createPost = ({ image, alt, username, text, id, likes }) => {
    return `
        <article class="post-card">
                <header class="post-header">
                    <img src="${image}" alt="${alt}" class="avatar-img" />
                    <h2 class="username">${username}</h2>
                </header>
                <div class="post-body">
                    <p class="post-text">
                        ${text}
                    </p>
                </div>
                <footer class="post-footer flex-container">
                    <div><span class="likes-count" id="post-counter-${id}">${likes}</span> likes</div>
                    <button class="post-button" id="post-button-${id}" onclick="likePost('post-counter-${id}')">🔮 scry</button>
                </footer>
            </article>
    `;
};

const likePost = (counterId) => {
    const counter = document.getElementById(counterId);
    counter.textContent++;
};

document.addEventListener("DOMContentLoaded", () => {
    const feed = document.getElementById("feed");

    if (posts.length === 0) {
        feed.innerHTML = "<h2>No posts found! 😖</h2>";
        return;
    }

    posts.forEach((postInfo) => {
        const post = createPost(postInfo);
        feed.insertAdjacentHTML("beforeend", post);
    });
});
