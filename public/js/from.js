// できたことの登録

function saveData() {
    const title = document.getElementById("title").value;
    const details = document.getElementById("details").value;

    // 保存するデータをオブジェクトにする
    const newData = { title, details };

    // 既存のデータを取得する
    let existingData = JSON.parse(localStorage.getItem("data")) || [];

    // 新しいデータを追加する
    existingData.push(newData);

    // 更新されたデータを保存する
    localStorage.setItem("data", JSON.stringify(existingData));

    // ページ遷移
    window.location.href = "studyText.html";
}
