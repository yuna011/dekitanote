// できたことの出力

document.addEventListener("DOMContentLoaded", () => {
    const data = JSON.parse(localStorage.getItem("data")) || [];

    const container = document.getElementById("displayContainer");

    data.forEach((item) => {
        const titleElem = document.createElement("p");
        titleElem.textContent = ` ${item.title}`;

        const detailsElem = document.createElement("p");
        detailsElem.textContent = ` ${item.details}`;

        container.appendChild(titleElem);
        container.appendChild(detailsElem);
    });
});
