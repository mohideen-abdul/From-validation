const nameInput=document.querySelector('#name'); //0
const email=document.querySelector('#email');  //1
const password=document.querySelector("#password"); //2
const phone=document.querySelector("#phone") //3
const message=document.querySelector('#message'); //4
const success=document.querySelector('#success');  
const errorNodes=document.querySelectorAll('.error');

function validateform()
{
    clearMessages();  //calling
    let errorFlag=false;
    if(nameInput.value.length<3)  
    {
        errorNodes[0].innerText="name cannot be blank";
        errorFlag=true;
       nameInput.classList.add('error-border');
    }
    if(!emailisValid(email.value))
    {
        errorNodes[1].innerText="invalid email"
        errorFlag=true;
        email.classList.add('error-border');
    }
    if(!passwordvalid(password.value)){
        errorNodes[2].innerText="Please enter a password with alteast 6 characters that contains Uppercase,Lowercase,Symbol and number"
        errorFlag=true;
        password.classList.add('error-border')
    }
    if(phone.value.length!=10){
        errorNodes[3].innerText="Please enter 10 digit number"
        errorFlag=true;
        phone.classList.add('error-border')
    }
    if(message.value.length<4)
    {
        errorNodes[4].innerHTML="message cannot be blank";
        errorFlag=true;
       nameInput.classList.add('error-border');
    }
    if(!errorFlag){
        openPopup();
        nameInput.classList.remove('error-border')
        email.classList.remove('error-border')
        password.classList.remove('error-border')
        phone.classList.remove('error-border')
        message.classList.remove('error-border')
        
    }
    success.innerText=""
}

//function definiion
function clearMessages()
{
   for(let i=0;i<errorNodes.length;i++)
   {
    errorNodes[i].innerText="";
    nameInput.classList.remove('error-border')
    email.classList.remove('error-border')
    phone.classList.remove('error-border')
    password.classList.remove('error-border')
    message.classList.remove('error-border')
    
   }
   success.innerText=""
}
function emailisValid(email)
{
    let pattern=/\S+@\S+\.\S+/;
    return pattern.test(email);
}
function passwordvalid(password){
    let pattern=/^((?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*]).{6,})+$/;
    return pattern.test(password)
} 


let popup=document.getElementById("popup")
function openPopup(){
    popup.classList.add("open-popup")
}
function closePopup(){
    nameInput.value=""
    email.value="" 
    password.value=""
    phone.value=""
    message.value=""
    popup.classList.remove("open-popup")

}