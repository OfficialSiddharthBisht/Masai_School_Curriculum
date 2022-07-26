// https://api.openbrewerydb.org/breweries?by_type=${type}
document.getElementById('brewerySelect').addEventListener('change',() => {
    let type = document.getElementById('brewerySelect').value;
    // console.log(type);
    if(type!=''){
        getTypeData(type);
        
    }
});
async function getTypeData(type){
    try {
        let result = await fetch(`https://api.openbrewerydb.org/breweries?by_type=${type}`);
        let data = await result.json();
        // console.log(data);
        showTable(data);
    } catch (error) {
        console.log(error);
    }
}

function showTable(dataList){
    document.getElementById('tableDiv').innerHTML='';
    
    var table = document.createElement('table');
    table.setAttribute('id','table');

    var thead = document.createElement('thead');
    var trow = document.createElement('tr');

    var th1 = document.createElement('th');
    th1.innerText='Name';

    var th2 = document.createElement('th');
    th2.innerText='Brewery-Type';

    var th3 = document.createElement('th');
    th3.innerText='City';

    var th4 = document.createElement('th');
    th4.innerText='State';

    var th5 = document.createElement('th');
    th5.innerText='Details';

    trow.append(th1,th2,th3,th4,th5);
    thead.append(trow);

    var tbody = document.createElement('tbody');

    dataList.forEach(element => {
        var row = document.createElement('tr');
        
        var td1 = document.createElement('td');
        td1.innerText = element.name;

        var td2 = document.createElement('td');
        td2.innerText = element.brewery_type;

        var td3 = document.createElement('td');
        td3.innerText = element.city;

        var td4 = document.createElement('td');
        td4.innerText = element.state;

        var td5 = document.createElement('td');
        var more = document.createElement('button');
        more.innerText = 'MORE DETAILS'
        more.addEventListener('click', () => {
            localStorage.setItem('breweryId',JSON.stringify(element.id));
            window.location.href = './brewerypage.html';
        });

        td5.append(more);
        row.append(td1,td2,td3,td4,td5);
        tbody.append(row);
    });
    
    table.append(thead,tbody);
    document.getElementById('tableDiv').append(table);
    document.getElementById('brewerySelect').value='';
}