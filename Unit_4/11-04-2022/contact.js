var contactList = JSON.parse(localStorage.getItem("contactList")) || [];
var favourites = JSON.parse(localStorage.getItem("favourites")) || [];

function displayData(contactList) {
  document.querySelector("tbody").innerHTML = "";
  contactList.forEach((element) => {
    var row = document.createElement("tr");

    var td1 = document.createElement("td");
    td1.innerText = element.name;

    var td2 = document.createElement("td");
    td2.innerText = element.number;

    var td3 = document.createElement("td");
    td3.innerText = element.type;

    var td4 = document.createElement("td");
    td4.innerText = "Add to Favourites";
    td4.style.color = "red";
    td4.style.cursor = "pointer";

    td4.addEventListener("click", function () {
      favourites.push(element);
      localStorage.setItem("favourites", JSON.stringify(favourites));
      alert("Added to Favourites");
    });
    row.append(td1, td2, td3, td4);
    document.querySelector("tbody").append(row);
  });
}
window.addEventListener("load", function () {
  displayData(contactList);
});
