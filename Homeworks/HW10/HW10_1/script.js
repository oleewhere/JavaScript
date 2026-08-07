const priceBlock = document.createElement("div");
priceBlock.id = "price";
priceBlock.className = "priceBox";
document.body.appendChild(priceBlock);

let oldPrice = localStorage.getItem("oldPrice");
const lastTime = localStorage.getItem("lastTime");
const currentTime = new Date().getTime();

if (oldPrice === null) {
    oldPrice = 100;
} else {
    oldPrice = Number(oldPrice);

}
if (lastTime !== null) {
    let diff = (currentTime - Number(lastTime)) / 1000;
    if (diff > 10) {
        oldPrice = oldPrice + 10;
    }
}

localStorage.setItem("oldPrice", oldPrice);
localStorage.setItem("lastTime", currentTime);
priceBlock.innerHTML = oldPrice + "грн";