//


// let here2 = document.querySelector('#here2')
function namecheck (){
    let name = document.querySelector('#name')
    let ncheck = document.querySelector('#ncheck')
    if (name.value.length >= 8) //Dayne helped
    {
       ncheck.innerHTML = "Correct length of name"
       ncheck.style.color = "Blue";
     
    }
    else
    {   ncheck.innerHTML = "Please enter 8 characters for name"
        ncheck.style.color = "Red";
    }
}
function check  ()  {
    
    let pass = document.querySelector('#pass')
    let cpass = document.querySelector('#cpass')
    let submit = document.querySelector('#submit')
    // let checker = document.querySelector('#checker')
    
    if (pass.value == cpass.value ){
       
        // alert("password is same")
        checker.innerHTML  = "Password is the same"   // Change text of empty p tag  //https://stackoverflow.com/questions/17509050/innerhtml-and-change-color
        checker.style.color = 'Blue'; //Change color of text
    }
   else {
    //    alert("password is not same");
       checker.innerHTML = "Password do not match please try again"
       checker.style.color = 'Red';
   }
}


submit.addEventListener('click', (e) => { namecheck(); e.preventDefault() })
submit.addEventListener('click', (e) => { check(); e.preventDefault() })
