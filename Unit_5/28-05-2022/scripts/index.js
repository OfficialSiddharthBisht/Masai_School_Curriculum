function addData (){
//    console.log('Hii')
    var input = document.getElementById('taskDetails').value;
    var checkedValue = document.getElementById('taskStatus').checked;
    // console.log(input, checkedValue);

    var object = {
        task: input,
        status: checkedValue
    }
    if(input == ''){
        alert('Please enter a task');
    } else {
        // console.log(object);
        postData(object);
    }
}

async function postData(data){
    try {
        let post = await fetch('http://localhost:3000/allTasks', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { "Content-Type": "application/json" }
        });
    } catch (error) {
        console.log(error);
    }
}

async function getData(){
    try {
        let get = await fetch('http://localhost:3000/allTasks');
        let data = await get.json();
        // console.log(data);
        displayData(data);
    } catch (error) {
        console.log(error);
    }
}

function displayData(data){
    var ul = document.getElementById('taskList');
    ul.innerHTML = '';
    data.forEach(function(task){
        var li = document.createElement('li');
        var span1 = document.createElement('span');
        span1.innerText = task.task;
        span1.setAttribute('class','span1');

        if(task.status == true){
            span1.style.color = 'green';
        }
        else{
            span1.style.color = 'red';
        }

        span1.addEventListener('click', ()=>{
            localStorage.setItem('taskId', task.id);
            window.location.href = 'edit.html';
        })
        var span2 = document.createElement('span');
        span2.innerText = 'X';
        span2.setAttribute('class','span2');
        
        span2.addEventListener('click', ()=>{
            deleteData(task.id);
            getData();
        })

        li.append(span1, span2);
        ul.appendChild(li);
    });
}

getData();


async function deleteData(id){
    try {
        let deleteData = await fetch(`http://localhost:3000/allTasks/${id}`,{
            method: 'DELETE',
            headers: { "Content-Type": "application/json" }
        });
    } catch (error) {
        console.log(error);
    }
}