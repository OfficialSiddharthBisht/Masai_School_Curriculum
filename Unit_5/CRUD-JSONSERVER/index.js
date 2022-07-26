let leftPart = document.getElementById('leftPart');

async function getData(){
    try {
        let result = await fetch(`http://localhost:3000/students`);
        let students = await result.json();
        // console.log(students);
        showStudents(students)
    } catch (error) {
        console.log(error);
    }
}

async function deleteData(id){
    try {
        let result = await fetch(`http://localhost:3000/students/${id}`,{
            method : 'DELETE',
            headers : {'Content-Type' : 'application/json'}
        });
        // let students = await result.json();
        // console.log(students);
        // showStudents(students)
    } catch (error) {
        console.log(error);
    }
}

async function postData(studentData){
    try {
        let result = await fetch(`http://localhost:3000/students/`,{
            method : 'POST',
            body : JSON.stringify(studentData),
            headers : {"Content-Type" : 'application/json'}
        });
        let students = await result.json();
        console.log(students);
        // showStudents(students)
    } catch (error) {
        console.log(error);
    }
}

getData();

function showStudents(students){
    leftPart.innerHTML='';
    var table = document.createElement('table');

    var headRow = document.createElement('tr');

    var th1 = document.createElement('th');
    th1.innerText =  'ID';

    var th2 = document.createElement('th');
    th2.innerText =  'NAME';

    var th3 = document.createElement('th');
    th3.innerText =  'AGE';

    var th4 = document.createElement('th');
    th4.innerText =  'GENDER';

    var th5 = document.createElement('th');
    th5.innerText =  'MARKS';

    var th6 = document.createElement('th');
    th6.innerText =  'COHORT';

    var th7 = document.createElement('th');
    th7.innerText =  'DELETE';

    var th8 = document.createElement('th');
    th8.innerText =  'EDIT';

    headRow.append(th1,th2,th3,th4,th5,th6,th7,th8);
   
    table.append(headRow);
    students.forEach(element => {
        var bodyRow = document.createElement('tr');

        var td1 = document.createElement('td');
        td1.innerText =  element.id;

        var td2 = document.createElement('td');
        td2.innerText =  element.name;

        var td3 = document.createElement('td');
        td3.innerText =  element.age;

        var td4 = document.createElement('td');
        td4.innerText =  element.gender;

        var td5 = document.createElement('td');
        td5.innerText =  element.marks;

        var td6 = document.createElement('td');
        td6.innerText =  element.cohort;

        var td7 = document.createElement('td');
        var deleteBtn = document.createElement('button');
        deleteBtn.innerText = 'DELETE';
        deleteBtn.addEventListener('click', () => {
            deleteData(element.id);
            // window.location.reload();
        })
        td7.append(deleteBtn);

        var td8 = document.createElement('td');
        var editBtn = document.createElement('button');
        editBtn.innerText = 'EDIT';
        editBtn.addEventListener('click', () => {
            // deleteData(element.id);
            localStorage.setItem('studentID',element.id);
            window.location.href = './edit.html'
        })
        td8.append(editBtn);

        bodyRow.append(td1,td2,td3,td4,td5,td6,td7,td8);
        table.append(bodyRow);
    });
    leftPart.append(table);
}

document.getElementById('createStudent').addEventListener('submit', () => {
    event.preventDefault();
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let gender = document.getElementById('gender').value;
    let marks = document.getElementById('marks').value;
    let cohort = document.getElementById('cohort').value;

    let studentData = {
        name,
        age,
        gender,
        marks,
        cohort
    }
    // console.log(studentData);
    postData(studentData)
})