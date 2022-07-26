let id = localStorage.getItem('studentID');
    async function getData(id){
    try {
        let result = await fetch(`http://localhost:3000/students/${id}`);
        let studentData = await result.json();
        // console.log(students);
        return studentData;
    } catch (error) {
        console.log(error);
    }
}

async function updateData(id,updatedData){
    try {
        let result = await fetch(`http://localhost:3000/students/${id}`,{
            method : 'PUT',  // also make a PATCH request ..
            body : JSON.stringify(updatedData),
            headers : {"Content-Type" : "application/json"}
        });

    } catch (error) {
        console.log(error);
    }
}

getData(id).then(response => {
    // console.log(response);
    document.getElementById('name').value = response.name;
    document.getElementById('age').value = response.age;
    document.getElementById('gender').value = response.gender;
    document.getElementById('marks').value = response.marks;
    document.getElementById('cohort').value = response.cohort;
});

document.getElementById('editStudent').addEventListener('submit', () => {
    event.preventDefault();
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let gender = document.getElementById('gender').value;
    let marks = document.getElementById('marks').value;
    let cohort = document.getElementById('cohort').value;
    let updatedData = {
        name,
        age,
        gender,
        marks,
        cohort
    }
    // console.log(studentData);
    updateData(id,updatedData).then(window.location.href = './index.html');
})