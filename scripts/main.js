/**Contact Page Scripts */
/**
 * validateForm
 * This function recieved the values from the form and validates each one.
 * If not errors are found it allows submission of form. Otherwise, submission is prevented
 * and error messages are displayed in the DOM.
 */
 function validateForm(e){
    e.preventDefault(); // do not submit form until validated
    let errors = [];
    let errorDiv = document.getElementById("errorDiv");
    errorDiv.innerHTML = "";

    //Get values from form
    let fullName = document.getElementById("fullName").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let message = document.getElementById("message").value.trim();

    //Run error validation
    errors = errors.concat(validateFullName(fullName));
    errors = errors.concat(validateEmail(email));
    errors = errors.concat(validatePhone(phone));

    //Allow submit if no errors found
    if(errors.length === 0){
        //Below is where a submit would normally happen
       // document.forms["contactForm"].submit();
       document.getElementById("beforeFormSubmit").classList.remove("show");
       document.getElementById("beforeFormSubmit").classList.add("hide");
       document.getElementById("afterFormSubmit").classList.remove("hide");
       document.getElementById("afterFormSubmit").classList.add("show");

       document.getElementById("fullNameRes").innerHTML += "<b>Full name: </b>" + fullName;
       document.getElementById("emailRes").innerHTML += "<b>Email: </b>" + email;
       document.getElementById("phoneRes").innerHTML += "<b>Phone: </b>" + phone;
       document.getElementById("messageRes").innerHTML += "<b>Message: </b>" + message;
    }

    //Display errors through the DOM
    for(let i = 0; i < errors.length; i++){
        errorDiv.innerHTML += "<p class=\"errorMsg\">" + errors[i] + "</p>";
        console.log(errors[i])
    }
}

/**
 * validateFirstName
 * Ensures that first name is not empty, is alphabetical, and has at least 2 characters.
 */
function validateFullName(fullName){
     errors = [];

    //Check that first name is not null
    if(fullName =="" || fullName == null){
        errors.push("Full name is required.");
    }

    //Check that full name is alphabetical
    if(!(new RegExp(/^[a-z ]+$/i).test(fullName))){
        errors.push("Full name must contain alphabetical characters only.");
    }

    //Check that full name is at least 2 characters
    if(fullName.length < 2){
        errors.push("Full name must be at least 2 characters.");
    }

    return errors;
}

/**
 * validateEmail
 * Checks that the email is not empty and is correctly formatted
 */
function validateEmail(email){
    errors = [];

   //Check that first name is not null
   if(email =="" || email == null){
       errors.push("Email is required.");
   }

   //Check that the email is properly formatted. RegEx referenced from https://www.w3resource.com/javascript/form/email-validation.php
   if(!(new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(email))){
       errors.push("This is not a valid email address.");
   }

   return errors;
}

/**
 * validatePhone
 * Checks that the phone number is properly formatted
 */
function validatePhone(phone){
    //Checks that the phone number is properly formatted. RegEx referenced from https://www.w3resource.com/javascript/form/phone-no-validation.php (tweaked a little)
    if(!(new RegExp(/^\+?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/).test(phone))){
        errors.push("This is not a valid phone number. A phone should be at least 10 digits, '-' are acceptable.");
    }

    return errors;
}


//Apply event listener to student submission form
contactForm = document.forms["contactForm"];
contactForm.addEventListener("submit", validateForm);