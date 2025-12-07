const cards = document.querySelectorAll(".fruit-card");
let total = 0;


cards.forEach(card => {
    let quantityText = card.querySelector("p").innerText;  
    let quantity = parseInt(quantityText.replace("Quantity: ", ""));
    total += quantity;
});

console.log(total)

const counter = document.getElementById("countId");
let count = 0;

let interval = setInterval(() => {
    if (count < total) {
        count++;
        counter.textContent = count;
    } else {
        clearInterval(interval);
    }
}, 40);

console.log(count)

//jjj


// SEARCH FILTER FOR CARDS
const search = document.getElementById("search");

search.addEventListener("keyup", () => {
    let value = search.value.toLowerCase();

    cards.forEach(card => {
        let name = card.getAttribute("data-name");

        if (name.toLowerCase().includes(value)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});