     console.log("hello");
     
     const name = document.querySelector("#usernameid");
     const password = document.querySelector("#passwordid");
     const form = document.querySelector("#form");
     const errElement = document.querySelector("#error");
     const e1 = document.querySelector("#uerr");
     const e2 = document.querySelector("#perr");

   form.addEventListener("submit", (event) => {
    
    let message = [];   
    if (name.value === "" || name.value == null){
      document.querySelector("#usernameid").style.border.innerHTML="red";
      message.push("*Enter valid username!!");
      
    }
    if(name.value.length < 4)
    {
      message.push("*username is too short max.length is 4 character!!");
      document.querySelector("#usernameid").style.borderColor="red";
    }
    if(message.length > 0){
      event.preventDefault();
      e1.innerHTML = message.join(' , ');
    }
    
    let message2 = [];

    if(password.value.length >= 20){
      message2.push("*password must be less than 20");
      document.querySelector("#passwordid").style.borderColor = "red";
    }

    if(message.length > 0){
      event.preventDefault()
      e2.innerText = message2.join(' , ');
    }

  //  name.value = "";
  });

  