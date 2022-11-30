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
            title: form.get("title"),
            content: form.get("content")
        })
    }

    const result = await fetch("http://localhost:3000/posts", options);

    if (result.status == 201) {
        window.location.reload();
    }
})

async function loadPosts () {
    const response = await fetch("http://localhost:3000/posts");
    const posts = await response.json();
    
    const container = document.getElementById("posts");

    posts.forEach(p => {
        const elem = createPostElement(p);
        container.appendChild(elem);
    })
}

loadPosts();