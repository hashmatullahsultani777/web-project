let register_form  = document.querySelector('.form-part');

let full_name = document.querySelector('.full-name-input');
let email_input = document.querySelector('.email-input');

let password_input = document.querySelector('.password-input');
let confirm_input = document.querySelector('.confirm-input');

register_form.addEventListener("submit",function(event){
     event.preventDefault();

     let fullName = full_name.value.trim();

     let email = email_input.value.trim();

     let password = password_input.value.trim();

     let confirm = confirm_input.value.trim();

     let fullName_validation = /^[A-Za-z\u0600-\u06FF\s]{3,}$/;

     let email_validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

     let password_validation = /^.{8,}$/;


     if(fullName ===""||email===""||password ===""||confirm===""){
        alert("ټول معلومات داخل کړی");
        return;
     }


     if(!fullName_validation.test(fullName)){
        alert("سم نوم داخل کړی");
        return;
     }

     if(!email_validation.test(email)){
        alert("سم ایمیل داخل کړی");
        return;
     }
     if(!password_validation.test(password)){

        alert("پاسورډ باید لږ تر لږه ۸ حروف ولري");
        return;
     }

     if(!password_validation.test(confirm)){
        alert("پاسورډونه یو شان نه دي");
        return;
     }

        alert("راجستر بریالی شو");

})