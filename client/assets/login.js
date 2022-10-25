document.getElementById("login-form").addEventListener('submit', async (e) => {
    e.preventDefault();

    const form = new FormData(e.target);

    const options = {
        method: "POST",
        credentials: 'include', // credentials is set to 'include' mode to allow the client to send and recieve cookies
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: form.get("username"),
          password: form.get("password")
        })
    };
    
    const response = await fetch("http://localhost:3000/users/login", options);
    const data = await response.json();

    if (response.status == 200) {
        alert(`User ${form.get("username")} logged in`);
        window.location.assign("./board.html");
    } else {
        alert(data["error"]);
    }
})
