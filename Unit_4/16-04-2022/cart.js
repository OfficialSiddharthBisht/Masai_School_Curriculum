var cartProducts=JSON.parse(localStorage.getItem('cartProducts')) || [] ;

function displayData(cartProducts){
    document.querySelector('#productsGrid').innerHTML='';
    cartProducts.forEach(function (product){
        var div=document.createElement('div');
        div.setAttribute('class','gridDiv');
        
        var img=document.createElement('img');
        img.setAttribute('src',product.image_url);
        img.setAttribute('class','divImage');

        var name=document.createElement('p');
        name.innerText=product.name;
        name.setAttribute('class','divName');

        var price=document.createElement('p');
        price.innerText='Price : ' +product.price;
        price.setAttribute('class','divPrice');

        var rating=document.createElement('p');
        rating.innerText='Rating :'+product.rating;
        rating.setAttribute('class','divRating')

        // var addCart=document.createElement('button');
        // addCart.innerText='Add to Cart';
        // addCart.setAttribute('class','cartBtn');

        // addCart.addEventListener('click',function(){
        //     cartProducts.push(product);
        //     localStorage.setItem('cartProducts',JSON.stringify(cartProducts));
        //     alert('Added to Cart');
        // })
       
        div.append(img, name, price, rating);
        document.querySelector('#productsGrid').append(div);
    })

    
}

var total=0;
cartProducts.forEach(function (product){
    total+=product.price;
})
if(total==0){
    document.querySelector('#cartTotal').innerText='Cart is Empty'
}
else{
    document.querySelector('#cartTotal').innerText='Total Price : '+total;
    var inputBox=document.createElement('input');
    inputBox.type='text';
    inputBox.setAttribute('id','inputBox');
    inputBox.placeholder='Apply Coupon Code';
    var btn=document.createElement('button');
    btn.innerText='Apply'
    btn.setAttribute('onclick','coupon()')
    var checkout=document.createElement('a');
    checkout.setAttribute('id','checkout')
    checkout.innerText='Proceed to Checkout'
    checkout.setAttribute('href','./checkout.html')
    document.querySelector('#upperDivCart').append(inputBox,btn,checkout);

}

function coupon(){
    if(document.querySelector('#inputBox').value=='masai30'){
    total=total*70/100;
    document.querySelector('#cartTotal').innerText='Total Price : '+total;
    document.querySelector('#inputBox').value='';
 }
}

window.addEventListener('load',function(){
        displayData(cartProducts);
    })