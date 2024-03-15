
const total=document.querySelector(".total");

const btns = document.querySelectorAll(".btn");

const cart = document.querySelector(".cart");

btns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        let pro = e.target.parentElement;
        let h5Elements = pro.querySelector("h5").textContent;
        let pElement = pro.querySelector("p").textContent;
        addToCart(h5Elements, pElement);
    });
});

cart.addEventListener("click", (e) => {
    if (e.target.classList.contains("remove")) {
        e.target.parentElement.remove();
        updateTotal();
    }
});

function addToCart(item, price) {
    cart.innerHTML += AddingToCart(item, price);
    updateTotal();
}

function AddingToCart(item, price) {
    return (
        `<li class="item">
            <p>${item}</p>
            <p>${price}</p>
            <a class="remove">X</a>
        </li>`
    );
}

function updateTotal() {
    let items = document.querySelectorAll(".item");
    let totalPrice = 0;
    items.forEach(item => {
        let price = parseFloat(item.querySelector("p:nth-child(2)").textContent);
        totalPrice += price;
    });
    total.textContent = `Total: $${totalPrice.toFixed(2)}`;
}
