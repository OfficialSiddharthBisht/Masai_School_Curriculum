document.querySelector('form').addEventListener('submit',function(){
    event.preventDefault();
    if(document.querySelector('#name').value==''||document.querySelector('#number').value==''||document.querySelector('#exp').value==''||document.querySelector('#cvv').value==''){
        alert('Please Provide All Details');
    }
    else{
        alert('Your order is successfully placed');
        document.querySelector('#name').value='';
        document.querySelector('#number').value='';
        document.querySelector('#exp').value='';
        document.querySelector('#cvv').value='';
    }
})