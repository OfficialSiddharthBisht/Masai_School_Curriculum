var orderNumber= +(JSON.parse(localStorage.getItem('orderCount'))||0);
        function foodOrdered(){
            if(document.querySelector('#name').value==''||document.querySelector('#number').value==''){
                  alert('Please Enter Correct Details.')
            }
            else if(document.querySelector('#FrenchFries:checked')==null&&document.querySelector('#ChickenMcNuggets:checked')==null&&document.querySelector('#Coca-ColaClassic:checked')==null&&document.querySelector('#VanillaIceCream:checked')==null&&document.querySelector('#BigMac:checked')==null&&document.querySelector('#IcedCoffee:checked')==null&&document.querySelector('#SweetTea:checked')==null){
                alert('Please Select Any Food Item.')
            }
            else{
                orderNumber++;
                localStorage.setItem('orderCount',JSON.stringify(orderNumber));
                document.querySelector('#imageDiv').innerHTML='';
                document.querySelector('#orderNumber').innerText='Your Order Number is : #'+ orderNumber;
                document.querySelector('#wait').innerText="Please wait for sometime we are preparing your order";
                document.querySelector('#workingOrder').innerText='Order Number #'+orderNumber+" is processing";
                document.querySelector('#ready').innerText='Wait soon it will be ready';
                clean();
                resolveAfter10Seconds();
                // cleanInput();
                // var answer=document.querySelector('#FrenchFries:checked').value;
                
            }
        }

        function resolveAfter10Seconds() {
            return new Promise(resolve => {
                setTimeout(() => {
                resolve(orderReady());
                }, 10000);
            });
        }
        function orderReady(){
            showImg();
            document.querySelector('#workingOrder').innerText='Order Number #'+orderNumber+" is ready!";
            document.querySelector('#ready').innerText='Come and Check Out !!';
        }
        function clean(){
            setTimeout(() =>{
                document.querySelector('#orderNumber').innerText='';
                document.querySelector('#wait').innerText='';
            },4000);
        }
        function cleanInput(){
            document.querySelector('#name').value='';
            document.querySelector('#number').value='';
            document.querySelector('#FrenchFries').value='';
            document.querySelector('#ChickenMcNuggets').value='';
            document.querySelector('#Coca-ColaClassic').value='';
            document.querySelector('#VanillaIceCream').value='';
            document.querySelector('#BigMac').value='';
            document.querySelector('#IcedCoffee').value='';
            document.querySelector('#SweetTea').value='';
        }
        function showImg(){
            
            if(document.querySelector('#FrenchFries:checked')!=null){
                var image=document.createElement('img');
                image.src='https://fastfoodnutrition.org/item-photos/200x150/595_s.jpg'
                document.querySelector('#imageDiv').append(image);
            }
            if(document.querySelector('#ChickenMcNuggets:checked')!=null){
                var image=document.createElement('img');
                image.src='https://fastfoodnutrition.org/item-photos/200x150/793_s.jpg'
                document.querySelector('#imageDiv').append(image);
            }
            if(document.querySelector('#Coca-ColaClassic:checked')!=null){
                var image=document.createElement('img');
                image.src='https://fastfoodnutrition.org/item-photos/200x114/589_s.jpg'
                document.querySelector('#imageDiv').append(image);
            }
            if(document.querySelector('#VanillaIceCream:checked')!=null){
                var image=document.createElement('img');
                image.src='https://fastfoodnutrition.org/item-photos/200x114/4392_s.jpg'
                document.querySelector('#imageDiv').append(image);
            }
            if(document.querySelector('#BigMac:checked')!=null){
                var image=document.createElement('img');
                image.src='https://fastfoodnutrition.org/item-photos/200x217/825_s.jpg'
                document.querySelector('#imageDiv').append(image);
            }
            if(document.querySelector('#IcedCoffee:checked')!=null){
                var image=document.createElement('img');
                image.src='https://fastfoodnutrition.org/item-photos/200x111/8740_s.jpg'
                document.querySelector('#imageDiv').append(image);
            }
            if(document.querySelector('#SweetTea:checked')!=null){
                var image=document.createElement('img');
                image.src='https://fastfoodnutrition.org/item-photos/200x111/588_s.jpg'
                document.querySelector('#imageDiv').append(image);
            }
        }