
function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  fetch("https://script.google.com/macros/s/PASTE_YOUR_DEPLOYED_SCRIPT_URL_HERE/exec")
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
