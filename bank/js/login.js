document.getElementById('logIn').addEventListener('click', function(){
    // step 01: 
    const getEmailAddress = document.getElementById('email');
    const getEmailValue = getEmailAddress.value;

    const getPassword = document.getElementById('passwordId');
    const getPasswordValue = getPassword.value;

    const myEmail = 'mdfaysal.freelancer@gmail.com';
    const mypassWord = 'admin';

    if(getEmailValue == myEmail && getPasswordValue == mypassWord){
        window.location.href = "index.html";
    }
    else{
        window.alert('Please Enter Your Correct Email and Password');
    }

    // Step 07
    getEmailAddress.value = '';
    getPassword.value = '';

})

document.getElementById('forget').addEventListener('click', function(){
    window.alert('Email: mdfaysal.freelancer@gmail.com and Password: admin')
})