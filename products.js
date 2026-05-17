

let parent_product_div = document.querySelector('.product-parent-div');

fetch("products.json")
.then(res=> res.json())
.then(products_array => {

    Render_products(products_array);
});

function Render_products(products_array){

    products_array.forEach(product => {
        
        let product_card = document.createElement('div');
        product_card.classList.add('child-div');
        
        let img = document.createElement('img');
        img.src = product.image;
        img.classList.add('product-image');

        let title = document.createElement("p");
        title.textContent = product.title;
        title.classList.add("product-p");

        let rating_div = document.createElement("div");
        rating_div.classList.add("product-rating-div");

        let rating_image = document.createElement("img");
        rating_image.src = product.ratingImage;
        rating_image.classList.add("star-rating");

        let rating_count = document.createElement("a");
        rating_count.textContent = product.ratingCount;
        rating_count.href = "#";
        rating_count.classList.add("number-rating");

        let price = document.createElement("p");
        price.textContent = product.price;
        price.classList.add("product-price");

        
       let count_div = document.createElement('div');
       count_div.classList.add('count-div');

       let label = document.createElement("label");
       label.textContent = "شمیر:";
    
       let input = document.createElement('input');
       input.type = "number";
       input.min = "1";
       input.max = "1000";
       input.value = "1";

       let button_div = document.createElement("div");
       button_div.classList.add("products-button-div");


       let cart_button = document.createElement("button");
        cart_button.textContent = "کارټ ته ولږئ";
        cart_button.classList.add("products-button", "carts-button");

       let buy_button = document.createElement("button");
        buy_button.textContent = "اوس یی رانیسی";
        buy_button.classList.add("products-button", "buys-button"); 


       rating_div.append(rating_image, rating_count);

       cart_button.addEventListener("click", () => add_to_cart(product));
       buy_button.addEventListener("click", () => Buy_Now(product));

        button_div.append(cart_button, buy_button);

        product_card.append(img, title, rating_div, price, button_div);
        parent_product_div.appendChild(product_card);


    });
}


function add_to_cart(product){
      
     let cart = JSON.parse(localStorage.getItem("cart")) || [];

     cart.push(product);
     
     localStorage.setItem("cart", JSON.stringify(cart));
     console.log(cart);
}


function Buy_Now(product){

    add_to_cart(product);
    window.location.href = "cart.html";
    
}
