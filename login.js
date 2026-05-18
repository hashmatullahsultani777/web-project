let login_form = document.querySelector('.login-form');

let email_input = document.querySelector('.email-input');
let password_input = document.querySelector('.password-input');


login_form.addEventListener("submit", function(event){

      event.preventDefault();

      let email = email_input.value.trim();
      let password = password_input.value.trim();

      let email_validation =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      let password_validation = /^.{8,}$/;

      if(email===""||password===""){
        alert("ټول معلومات داخل کړی")
        return ;
      }

      if(!email_validation.test(email)){
        alert("سم ایمیل داخل کړی");
        return;
      }

      if(!password_validation.test(password)){
        alert("پاسورډ باید لږ تر لږه اته حرفه وی");
        return ;
      }

       alert("تاسو په بریالیتوب سره داخل سول ");

})