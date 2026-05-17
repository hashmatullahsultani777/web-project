
let features_div = document.querySelector('.features-div');

const feature_array = [

    {
        link: "register.html",

        icon: `
        <svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
        <rect width="60" height="60" rx="12" fill="#00695C"/>
        <circle cx="30" cy="22" r="10" fill="none" stroke="white" stroke-width="2.5"/>
        <path d="M10 54c0-11 9-20 20-20s20 9 20 20" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round"/>
        </svg>
        `,

        title: "د کارونکی اکوڼټ",

        description: "خپل اکونټ جوړ کړئ او د رانیولو اسانه تجربه ترلاسه کړئ"
    },

    {
        link: "products.html",

        icon: `
        <svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
        <rect width="60" height="60" rx="12" fill="#00695C"/>
        <circle cx="26" cy="26" r="10" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="33" y1="33" x2="44" y2="44" stroke="white" stroke-width="2.5" stroke-linecap="round"/>
        </svg>
        `,

        title: "د محصول لټون",

        description: "د خپل خوښې توکي په اسانۍ سره ومومئ"
    },

    {
        link: "cart.html",

        icon: `
        <svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
        <rect width="60" height="60" rx="12" fill="#00695C"/>
        <path d="M10 15h8l9 20h20l6-14H18" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="28" cy="42" r="3" fill="white"/>
        <circle cx="42" cy="42" r="3" fill="white"/>
        </svg>
        `,

        title: "د رانیولو ټوکری",

        description: "خپل غوره توکي ټوکري کې واچوئ او په یو ځل یی رانیسی"
    },

    {
        link: "order.html",

        icon: `
        <svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
        <rect width="60" height="60" rx="12" fill="#00695C"/>
        <rect x="12" y="12" width="36" height="36" rx="4" fill="none" stroke="white" stroke-width="2.5"/>
        <line x1="20" y1="22" x2="40" y2="22" stroke="white" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="20" y1="30" x2="40" y2="30" stroke="white" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="20" y1="38" x2="30" y2="38" stroke="white" stroke-width="2.5" stroke-linecap="round"/>
        </svg>
        `,

        title: "د اډر مدیریت",

        description: "خپل ټول اډرونه وګورئ، تعقیب کړئ او اداره کړئ"
    },

    {
        link: "payment.html",

        icon: `
        <svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
        <rect width="60" height="60" rx="12" fill="#00695C"/>
        <rect x="12" y="28" width="36" height="22" rx="4" fill="none" stroke="white" stroke-width="2.5"/>
        <path d="M20 28v-6a10 10 0 0 1 20 0v6" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round"/>
        <circle cx="30" cy="38" r="3" fill="none" stroke="white" stroke-width="2"/>
        <line x1="30" y1="41" x2="30" y2="46" stroke="white" stroke-width="2" stroke-linecap="round"/>
        </svg>
        `,

        title: "خوندي تادیه",

        description: "ستاسو پیسې او معلومات په بشپړ ډول خوندي دي"
    },

    {
        link: "products.html#review_and_rating",

        icon: `
        <svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
        <rect width="60" height="60" rx="12" fill="#00695C"/>
        <path d="M30 10l5 14h15l-12 9 5 14-13-9-13 9 5-14-12-9h15z" fill="white"/>
        </svg>
        `,

        title: "نظر او درجه بندي",

        description: "د نورو رانیونکو نظرونه ولولئ او خپل نظر هم شریک کړئ"
    }

];

feature_array.forEach((feature)=>{

    let child_feature = document.createElement('div');
    child_feature.classList.add('features');


    let feature_svg = document.createElement('a');
    feature_svg.href = feature_array.link;
    feature_svg.classList.add('svg-icons');
    feature_svg.innerHTML = feature.icon;

    let feature_title = document.createElement('h3');
    feature_title.classList.add('features-header');
    feature_title.textContent = feature.title;

    let feature_discription = document.createElement('p');
    feature_discription.textContent = feature.description;
    feature_discription.classList.add('short-explain-p');
    
    child_feature.append(feature_svg,feature_title,feature_discription);
     features_div.append(child_feature);


});


let parent_div = document.querySelector('.reocmmend-products');  

let productsArray = [

        {
        image: "images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",

        title: "د لویانو لپاره وړین یخنکاکونه",

        ratingImage: "images/ratings/rating-50.png",

        ratingCount: "۲۱۹۷",

        price: "120AF"
    },

    {
        image: "images/products/athletic-cotton-socks-6-pairs.jpg",

        title: "شپږ جوړی ورزشی جرابی",

        ratingImage: "images/ratings/rating-45.png",

        ratingCount: "۸۷",

        price: "180AF"
    },

    {
        image: "images/products/black-2-slot-toaster.jpg",

        title: "د روغانی پخولو دیګ",

        ratingImage: "images/ratings/rating-50.png",

        ratingCount: "۲۱۹۷",

        price: "1200AF"
    },

    {
        image: "images/products/men-chino-pants-beige.jpg",

        title: "مردانه نخی پتلونان",

        ratingImage: "images/ratings/rating-45.png",

        ratingCount: "۹۰۱۷",

        price: "800AF"
    },

    {
        image: "images/products/coffeemaker-with-glass-carafe-black.jpg",

        title: "د قهوی جوړولو ماشین",

        ratingImage: "images/ratings/rating-45.png",

        ratingCount: "۱۲۱۱",

        price: "1500AF"
    }
    
];


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



productsArray.forEach((product)=>{

   let  product_div = document.createElement('div');
   product_div.classList.add('child-div');

   let product_img = document.createElement("img");
   product_img.src = product.image;
   product_img.classList.add("pro-image");

   let pro_title = document.createElement('p');
   pro_title.textContent = product.title;
   pro_title.classList.add('content-p');

   let ratingDiv = document.createElement('div');
   ratingDiv.classList.add('best-product-rating-div');

   let rating_img = document.createElement('img');
   rating_img.src = product.ratingImage;
   rating_img.classList.add('star-rating');

   let rating_count = document.createElement('a');
   rating_count.textContent = product.ratingCount;
    rating_count.href = "#";
    rating_count.classList.add('number-rating');

    let product_price = document.createElement('p');
    product_price.textContent = product.price;
    product_price.classList.add('price-p');

    let count_div = document.createElement('div');
    count_div.classList.add('count-div');

    let label = document.createElement("label");
    label.textContent = "شمیر:";
    
    let input = document.createElement('input');
    input.type = "number";
    input.min = "1";
    input.max = "1000";
    input.value = "1";


    let button_div = document.createElement('div');
    button_div.classList.add('product-button-div');

    let cart_button = document.createElement('button');
    cart_button.textContent = "کارټ ته ولږئ";
    cart_button.classList.add("product-button", "cart-button");


    let buy_button = document.createElement("button"); 
    buy_button.textContent = "اوس یی رانیسی";
    buy_button.classList.add("product-button", "buy-button");


    cart_button.addEventListener("click", function(){

        add_to_cart(product);

    });

    buy_button.addEventListener("click", function(){
        Buy_Now(product);
    });

  

   parent_div.append(product_div);
   product_div.append(product_img,pro_title,ratingDiv,product_price, count_div,button_div);
   ratingDiv.append(rating_img,rating_count);
   count_div.append(label,input);
   button_div.append(cart_button);
   button_div.append(buy_button);
   
   console.log(product_div);
});



let questionContainer = document.querySelector('.faq-container');
let question_list = document.createElement('div');

question_aaray = [

    {
        question: "څنګه کولی شم یو توکی رانیسم؟",
        answer: "خپل د خوښې توکی انتخاب کړئ، کارټ ته یی اضافه کړئ او بیا فرمایش بشپړ کړئ."
    },

    {
        question: "ایا د حساب جوړول ضروري دي؟",
        answer: "هو، د فرمایشونو او معلوماتو خوندي ساتلو لپاره حساب جوړول ضروري دي."
    },

    {
        question: "تادیه څنګه ترسره کیږي؟",
        answer: "تاسو کولی شئ د خوندي تادیې سیستم له لارې پیسې ورکړئ."
    },

    {
        question: "ایا فرمایش تعقیبولی شم؟",
        answer: "هو، تاسو کولی شئ خپل فرمایشونه د اډر مدیریت برخه کې تعقیب کړئ."
    },

    {
        question: "ایا زه خپل نظر شریکولی شم؟",
        answer: "هو، تاسو کولی شئ د هر محصول لپاره نظر او درجه بندي ورکړئ."
    }

];

question_aaray.forEach((questions)=>{

    let faq_detail = document.createElement('details');
    let faq_summary = document.createElement('summary');
    faq_summary.textContent = questions.question;
    faq_summary.classList.add('summary-class');

    

    let faq_answer = document.createElement("p");
    faq_answer.textContent = questions.answer;
    faq_answer.classList.add('summary-class-p');
    
    
    faq_detail.append(faq_summary,faq_answer);
     question_list.append(faq_detail);   

});



questionContainer.append(question_list);


const imagesToPreload = [
            'images/istockphoto-2227981382-1024x1024.jpg',
            'images/istockphoto-2061836383-612x612.jpg',
            'images/rupixen-Q59HmzK38eQ-unsplash.jpg'
        ];
        
        imagesToPreload.forEach(src => {
            const img = new Image();
            img.src = src;
        });
