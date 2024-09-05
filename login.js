// const submitButton = document.getElementById('submit-button');
// console.log(submitButton);


// const submitButton = document.getElementById('submit-button').addEventListener('click',function(){
//     console.log('event added');
    
// });



document.getElementById('submit-button').addEventListener('click',function(){

    // USER EMAIL GET

    const userEmailInputField = document.getElementById('user-email');
    const userEmail = userEmailInputField.value;
    console.log(userEmail);
    
    // USER PASSWORD GET
    const userPasswordInputField = document.getElementById('user-password');
    const userPassword = userPasswordInputField.value;
    console.log(userPassword);

    if (userEmail == 'admin@gmail.com' && userPassword == '123456') {
        alert("Login Successfull");
        window.location.href ="./banking.html"
    } else if (userEmail != 'admin@gmail.com' || userPassword != '123456') {
        alert("username or password is not valid")
    }
    
    
});