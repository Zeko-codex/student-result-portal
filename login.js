function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  fetch("https://script.google.com/macros/s/AKfycbxcSeSMJNUTJOhgbQhLl4TnLLvkm_VFxwysRtGfHNKrprD5rVx9ErxhAFHQPBA_5Nw9/exec")
    .then(res => res.json())
    .then(data => {
      const user = data.find(d => d.username === username && d.password.toString() === password);
      if (user) {
        localStorage.setItem("student", JSON.stringify(user));
        window.location.href = "profile.html";
      } else {
        document.getElementById("error").innerText = "بيانات الدخول غير صحيحة.";
      }
    });
}
