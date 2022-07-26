var products=JSON.parse(localStorage.getItem('Products'));
        products.forEach((element,index) => {
            var div = document.createElement('div');
            div.setAttribute('class','product');

            var image=document.createElement('img');
            image.setAttribute("class",'image');
            image.setAttribute('src',element.image_url);

            var name = document.createElement('h4');
            name.setAttribute('class','name');
            name.innerText = element.name;

            var price = document.createElement('p');
            price.setAttribute('class','price');
            price.innerText ='Price : ' + '₹ ' + element.price;

            var category = document.createElement('p');
            category.setAttribute('class','category');
            category.innerText ='Category : ' +element.category;

            var div2 = document.createElement('div');
            div2.setAttribute('class','btnDiv');

            var remove = document.createElement('button');
            remove.setAttribute('id','remove');
            remove.innerText='Remove';

            remove.addEventListener('click', function () {
                products.splice(index,1);
                localStorage.setItem('Products',JSON.stringify(products));
                location.reload();
            })

            var sold = document.createElement('button');
            sold.setAttribute('id','sold');
            sold.innerText='Sold';
            if(element.sold){
                sold.style.backgroundColor='red';
            }
            else{
                sold.style.backgroundColor='green';
            }
            sold.addEventListener('click', function () {
                // console.log(element.sold);
                var data;
                if(element.sold){
                    data=JSON.parse(localStorage.getItem('Products'));
                    data[index].sold=false;

                    // sold.style.backgroundColor='green';
                }
                else{
                    data=JSON.parse(localStorage.getItem('Products'));
                    data[index].sold=true;
                    // sold.style.backgroundColor='red';
                }
                // console.log(element.sold);
                localStorage.setItem('Products',JSON.stringify(data));
                location.reload();
            })
     
            div2.append(remove, sold)

            div.append(image,name,price,category, div2);
            document.getElementById('container').append(div);
        });

var counter=products.length;
document.getElementById('counter').innerText='Product Count: '+counter;