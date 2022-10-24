console.log("board page document.cookie: " + (document.cookie || 'blank')) // document.cookie currently not working

function createPostElement (data) {
    const post = document.createElement("div");
    post.className = "post";

    const header = document.createElement("h2");
    header.textContent = data["title"];
    post.appendChild(header);

    const content = document.createElement("p");
    content.textContent = data["content"];
    post.appendChild(content);

    const sender = document.createElement("em");
    sender.textContent = data["sender_name"];
    post.appendChild(sender);

    return post;
}

document.getElementById("post-form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const form = new FormData(e.target);

    const options = {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },

        body: JSON.stringify({
            title: form.get("post-title"),
            content: form.get("post-content"),
            sender_id: form.get("post-sender_id"),
            recipient_id: form.get("post-recipient_id"),
        })
    }

    const response = await fetch("http://localhost:4000/posts", options);
    const post = await response.json();
    console.log(post);

    if (response.status === 201) {
        window.location.reload();
    }
})

async function loadPosts () {
    const response = await fetch("http://localhost:4000/posts", {credentials: 'include'}); // FIX: [credentials: 'include'] sends any cookies to the fetch url
    const posts = await response.json();
    console.log(posts);
    
    const container = document.getElementById("posts");

    posts.forEach(p => {
        const elem = createPostElement(p);
        console.log(elem)
        container.appendChild(elem);
    })
}

loadPosts();
