// will have seven document.querySelector to call out id from html
// will have 6 lets 2x username entrys 2x password1 and 2x password 2
// 3 functions for username, password and to check
// User enter 8+ characters 
// user enter same password in the password field
// js will check if user enter same password and if user entered 8 charcters or more if not error will accur and infrom user whats wrongs


let pass = document.querySelector('#pass')
let cpass = document.querySelector('#cpass')
let name = document.querySelector('#name')
let ncheck = document.querySelector('#ncheck')
let checker = document.querySelector('#checker')
let set = document.querySelector('#set')


let ValidateUsername = () =>{
    let nothing = "";
    let username = name.value; //will hold userentry
    if (username.length >= 8) //will check if user entered more than 8 charcters fore name
    {
       ncheck.innerHTML = "Correct length of name"//Will display in a p tag in html form it will over right empty details
       ncheck.style.color = "Blue"; //it its same it the text will be blue
       console.log(name);
       console.log("Correct length of name"); // shows in the console
     
    }
    
    else if (username.length <= 8){
        ncheck.innerHTML = "Please enter 8 or more characters for name" //this will display
        ncheck.style.color = "Red";
        console.log("Please enter 8 characters for name");
    }      console.log("Please enter 8 characters for name");
    
}


let ValidatePassword = () =>  {
    let password1 = pass.value;
    let password2 = cpass.value;
   let nothing = "";
    
   
    if (password2 == password1) //check if both password that is entered by the user is same
    {
        ncheck.innerHTML = "Password is a match"
        ncheck.style.color = "Blue"; 
        // console.log("Password is a match");

    }
   
   else {
    //    alert("password is not same");
       checker.innerHTML = "Password do not match please try again" // this wil tell user password don't match.
       checker.style.color = 'Red'; //change text color to red
       console.log("Password do not match please try again");
   }
}
let match = () => {
    // This is so website can display Username and password has been set 
    let username = name.value;
    let password1 = pass.value;
    let password2 = cpass.value;
    let nothing = " ";
  
    if ( username.length <= 8 ) //if less than 8 error
    {
        set.innerHTML= "name is not long enough"
        set.style.color = 'Red'
        console.log("Check error");
    }
    else if (password1 != password2) // if password is not a match
     {
        set.innerHTML="Check error"
        set.style.color = 'Red'
        console.log("Check error");
    }
  
 
    else // if there is no userinput error
    { 
    set.innerHTML="Username and password has been set" 
    set.style.color = 'Blue'
    console.log("Username and password has been set");
    }
}


let submit = document.querySelector('#submit')
submit.addEventListener('click', (e) => { ValidateUsername(); e.preventDefault() }) //will run ValidateUsername function
submit.addEventListener('click', (e) => { ValidatePassword(); e.preventDefault() }) //will run ValidatePassword function
submit.addEventListener('click', (e) => { match(); e.preventDefault() })
