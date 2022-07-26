document.querySelector('#userData').addEventListener('submit', checkData);

function checkData() {
    event.preventDefault();
    var enteredEmail = document.querySelector('#enteredEmail').value;
    var enteredPassword = document.querySelector('#enteredPassword').value;
    var usersData = JSON.parse(localStorage.getItem('userData'));
    var flag = false;
    usersData.forEach(everyUser => {
        if (enteredEmail == everyUser.email && enteredPassword == (everyUser.password)) {
            flag = true;
            // break;
        }
    });

    if (flag) {
        alert("Login Successful");
        window.location.href= './menPage.html';
    }
    else {
        alert("Check Login Email and Password");
    }
    document.querySelector('#enteredEmail').value = '';
    document.querySelector('#enteredPassword').value = '';
}