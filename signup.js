console.log("hello");
     
const emailid = document.querySelector("#emailid");
const name = document.querySelector("#userid");
const password = document.querySelector("#passwordid");
const mob = document.querySelector("#mobileid");
const form = document.querySelector("#form");

const e1 = document.querySelector("#emailerr");
const e2 = document.querySelector("#usererr");
const e3 = document.querySelector("#passerr");
const e4 = document.querySelector("#moberr");

form.addEventListener("submit", (event) => {


let msg = [];
// if()
// {
    
// }


let message = [];
if (name.value === "" || name.value == null){
 document.querySelector("#userid").style.border.innerHTML="red";
 message.push("*Enter valid username");
 
}
if(name.value.length < 4)
{
 message.push("*username is too short max.length is 4 character");
 document.querySelector("#userid").style.borderColor="red";
}
if(message.length > 0){
 event.preventDefault();
 e2.innerHTML = message.join(' , ');
}

let message2 = [];

if(password.value.length >= 20){
 message2.push("*password must be less than 20");
 document.querySelector("#passwordid").style.borderColor = "red";
}

if(message.length > 0){
 event.preventDefault()
 e3.innerText = message2.join(' , ');
}

name.value = "";
});

let msgphone = [];

if(mob.value >= 10)
{
    msgphone.push("*Enter a 10 digit number ");
    document.querySelector("#mobileid").style.borderColor = "red";
}
if(msgphone.length > 0)
{
    event.preventDefault()
    e4.innerText=msgphone.join(' , ');
}

