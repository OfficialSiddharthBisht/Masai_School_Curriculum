var favourites = JSON.parse(localStorage.getItem("favourites")) || [];

function displayData(favourites) {
  document.querySelector("tbody").innerHTML = "";
  favourites.forEach((element) => {
    var row = document.createElement("tr");

    var td1 = document.createElement("td");
    td1.innerText = element.name;

    var td2 = document.createElement("td");
    td2.innerText = element.number;

    var td3 = document.createElement("td");
    td3.innerText = element.type;

    row.append(td1, td2, td3);
    document.querySelector("tbody").append(row);
  });
}
window.addEventListener("load", function () {
  displayData(favourites);
});
