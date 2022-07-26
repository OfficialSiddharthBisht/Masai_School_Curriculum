document.querySelector('form').addEventListener('submit',function(){
    event.preventDefault();
    if(document.querySelector('#name').value==''||document.querySelector('#number').value==''||document.querySelector('#email').value==''||document.querySelector('#address').value==''){
        alert('Please Provide All Details');
    }
    else{
        window.location.href='./payment.html';
    }
})