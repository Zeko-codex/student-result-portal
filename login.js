
function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

 fetch("https://script.google.com/macros/s/AKfycbxrYf2aBcDsFRHsZmnT-O-RosDzoccq66UvYY5Uv5OtUGh0MrL7KWhscJbrbF0jYKM76Q/exec")
    .then(res => res.json())
    .then(data => {
      const user = data.find(d => d.username === username && d.password === password);
      if (user) {
        localStorage.setItem("student", JSON.stringify(user));
        window.location.href = "profile.html";
      } else {
        document.getElementById("error").innerText = "Invalid login credentials.";
      }
    });
}
