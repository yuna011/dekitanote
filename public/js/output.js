// 設定した目標の出力
document.addEventListener("DOMContentLoaded", () => {
    const num = localStorage.getItem("num");
    const text = localStorage.getItem("text");
    if (num !== null && text !== null) {
        document.getElementById("displayNum").textContent = num;
        document.getElementById("displayText").textContent = text;
    }
});
