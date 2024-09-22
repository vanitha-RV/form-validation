const form=document.getElementById('form');
const username=document.getElementById('name');
const email=document.getElementById('email');
const pwd=document.getElementById('pwd');
const msg=document.getElementById('msg');
const submit=document.getElementById('submit');
const phone=document.getElementById('phone');

const name_error=document.getElementById('name_error');
const email_error=document.getElementById('email_error');
const pwd_error=document.getElementById('pwd_error');
const msg_error=document.getElementById('msg_error');
const submit_error=document.getElementById('submit_error');
const phone_error=document.getElementById('phone_error');
const pattern = /^\d{10}$/;




form.addEventListener('submit',e =>
{
       var email_Check= "[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$";
     if(username.value===''|| username.value== null)
     {
        e.preventDefault();
        name_error.innerHTML="name is required";
        
     }
     else
     {
        name_error.innerHTML="";
     }
     if(!email.value.match(email_Check))
     {
        e.preventDefault();
        email_error.innerHTML="valid email is required";
        
     }
     else
     {
        email_error.innerHTML="";
     }
     if(pwd.value.length<=5)
     {
        e.preventDefault();
        pwd_error.innerHTML="password must be less than 6 charactors";
        
     }
     else
            {
               pwd_error.innerHTML="";
            }
     if(pwd.value.length>=20)
        {
           e.preventDefault();
           pwd_error.innerHTML="password must be more than 20 charactors";
        }
        if(pwd.value==='pwd')
            {
               e.preventDefault();
               pwd_error.innerHTML="password cant be password";
            }

    if(msg.value.length<=0)
    {
        e.preventDefault();
        msg_error.innerHTML="message cannot be blank";
        
    }
else 
     {
        msg_error.innerHTML=" ";
        }




        if(!phone.value.match(pattern))
{
        
         e.preventDefault();
         phone_error.innerHTML="enter the valid number";

        }
        
      
else{
   phone_error.innerHTML=" ";
}    




})






