const container = document.createElement("div");
container.id = "container";

const controls = document.createElement("div");
controls.className = "controls";
controls.innerHTML = `
    <button id="prev">Prev</button>
    <button id="next">Next</button>
`;
document.body.append(container, controls);

let prevButton = document.getElementById("prev");
let nextButton = document.getElementById("next");

const items = [];
let i = 1;
while (i <= 100) {
    items.push({title: `Об'єкт ${i}`});
    i++;
}
let page = 0;

function grouping() {
    container.innerHTML = "";
    const start = page * 10;
    for (let i = start; i < start + 10 && i < items.length; i++) {
        container.innerHTML += `<div class="objects">${items[i].title}</div>`;
    }
    prevButton.disabled = page === 0;
    nextButton.disabled = start + 10 >= items.length;
}

prevButton.onclick = () => {
    page--;
    grouping();
};
nextButton.onclick = () => {
    page++;
    grouping();
};
grouping();