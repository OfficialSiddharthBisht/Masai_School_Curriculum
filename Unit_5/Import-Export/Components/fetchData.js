async function getData(url){
    try {
        let result = await fetch(url);
        let data = await result.json();
        // console.log(data);
        showData(data.meals);
        // return data;
    } catch (error) {
        console.log(error);
    }
}

let timerId;
function debounce(callbackFunction,delay,url){
    if(timerId){
        clearTimeout(timerId);
    }
    timerId  = setTimeout(callbackFunction,delay ,url);
}

function showData(data){
    // console.log(data.meals);
    document.getElementById('container').innerHTML='';
    data.forEach(element => {
        let div = document.createElement('div');
        div.setAttribute('class','mealDiv');
        
        let image = document.createElement('img');
        image.setAttribute('class','mealImage');
        image.setAttribute('src',element.strMealThumb);

        let name = document.createElement('h3');
        name.setAttribute('class','mealName');
        name.innerText = element.strMeal;

        let catArea = document.createElement('p');
        catArea.innerText = `Category Area : ${element.strArea} ${element.strCategory}`

        let instructions = document.createElement('p');
        instructions.innerText = `Instructions : \n ${element.strInstructions}`;

        div.append(image, name, catArea, instructions);
        document.getElementById('container').append(div);
    });
}

export {getData, debounce};