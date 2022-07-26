document.querySelector('#submit').addEventListener('click', function () {
    if (document.querySelector('#enteredotp').value == '1234') {
        alert('Payment Successful');
        window.location.href = './index.html';
    }
    else {
        alert('Incorrect OTP');
    }

    localStorage.removeItem('cartData');
});