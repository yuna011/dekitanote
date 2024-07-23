function saveData() {
    const num = document.getElementById("num").value;
    const text = document.getElementById("text").value;
    localStorage.setItem("num", num);
    localStorage.setItem("text", text);
    window.location.href = "index.html";
}
