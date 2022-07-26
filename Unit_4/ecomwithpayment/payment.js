document.querySelector('#payment').addEventListener('submit', paymentCheck);

function paymentCheck() {
    event.preventDefault();
    var name = document.querySelector('#name').value;
    var address = document.querySelector('#address').value;
    var country = document.querySelector('#countrySelect').value;
    var state = document.querySelector('#state').value;
    var city = document.querySelector('#city').value;
    var zip = document.querySelector('#zipcode').value;
    var cardNumber = document.querySelector('#cardNumber').value;
    var valid = document.querySelector('#validThru').value;
    var cvv = document.querySelector('#cvv').value;

    // console.log(name,address,country,state,city,zip,cardNumber,valid,cvv);
    if (name == "" || address == "" || country == "" || state == "" || city == "" || zip == "" || cardNumber.length != 16 || valid.length != 4 || cvv.length != 3) {
        alert('Please provide valid information');
    }
    else if (cardNumber.length == 16 && valid.length == 4 && cvv.length == 3) {
        window.location.href = './OTP.html';
    }

}