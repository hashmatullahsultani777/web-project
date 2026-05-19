
let cart_Container = document.querySelector(".cart-div");
let total_Items = document.querySelector(".total-items");
let total_Price = document.querySelector(".total-price");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function render_Cart(){

    cart_Container.innerHTML = "";

    let totalItems = 0;
    let totalPrice = 0;

    cart.forEach((product, index) => {

        let item = document.createElement("div");
        item.classList.add("cart-items");

        let image_Div = document.createElement("div");
        image_Div.classList.add("image-div");

        let img = document.createElement("img");
        img.classList.add("product-image");
        img.src = product.image;

        image_Div.appendChild(img);

        let details_Div = document.createElement("div");
        details_Div.classList.add("details-div");

        let title = document.createElement("h3");
        title.classList.add("title-p");
        title.textContent = product.title;

        let price = document.createElement("p");
        price.textContent = product.price;

        
        let quantity_Div = document.createElement("div");
        quantity_Div.classList.add("quantity-div");

        let minus_Button = document.createElement("button");
        minus_Button.textContent = "-";
        minus_Button.classList.add('minus-button')

        let input = document.createElement("input");
        input.type = "number";
        input.value = 1;
        input.classList.add("quantiy-input");

        let plus_button = document.createElement("button");
        plus_button.textContent = "+";
        plus_button.classList.add('plus-button');

        quantity_Div.append(minus_Button, input, plus_button);

        let remove_button = document.createElement("button");
        remove_button.textContent = "ایسته یی کی";
        remove_button.classList.add("remove-button");

        remove_button.addEventListener("click", function(){
            removeItem(index);
        });

        let options_div = document.createElement("div");
        options_div.classList.add("options-div");

        options_div.append(quantity_Div, remove_button);

        details_Div.append(title, price, options_div);

        item.append(image_Div, details_Div);

        cart_Container.appendChild(item);

        // calculations
        totalItems += 1;
        totalPrice += parseInt(product.price);
    });

    total_Items.textContent = totalItems + " توکی";
    total_Price.textContent = totalPrice + "AF";
}


function removeItem(index){

    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));

    render_Cart();
}

render_Cart();