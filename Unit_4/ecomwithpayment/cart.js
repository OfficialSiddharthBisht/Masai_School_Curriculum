var cart = JSON.parse(localStorage.getItem('cartData'));
// console.log(cart);

if (cart == null || cart.length == 0) {
    document.querySelector('#totalItem').innerText = 'Your cart is Empty ! '
    document.querySelector('#totalPrice').innerText = 'Add items to it'
}
else {
    var totalItem = cart.length;
    document.querySelector('#totalItem').innerText = 'Total item in your cart : ' + totalItem;

    var totalPrice = cart.reduce(function (sum, prev) {
        return sum + (prev.price);
    }, 0);

    var pay = document.createElement('a');
    pay.setAttribute('id', 'pay');
    pay.setAttribute('href', './payment.html');
    pay.innerText = 'Proceed to Buy';

    document.querySelector('#payBox').append(pay);

    document.querySelector('#totalPrice').innerText = 'Total Price : ' + "₹ " + totalPrice;

    cart.forEach((cartItem, itemIndex) => {
        var box = document.createElement('div');
        box.setAttribute('class', 'box');

        var img = document.createElement('img');
        img.setAttribute('src', cartItem.image_url);

        var name = document.createElement('p');
        name.innerText = cartItem.name;

        var price = document.createElement('p');
        price.innerText = "₹ " + cartItem.price;

        var cartButton = document.createElement('button');
        cartButton.innerText = 'Remove from Cart';

        cartButton.addEventListener('click', function () {
            cart.splice(itemIndex, 1);
            localStorage.setItem('cartData', JSON.stringify(cart));
            window.location.reload();
        });

        box.append(img, name, price, cartButton);
        document.querySelector('#checkOut').append(box);
    });

};