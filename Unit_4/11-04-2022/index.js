var contactList = JSON.parse(localStorage.getItem("contactList")) || [];

document.querySelector("#myForm").addEventListener("submit", addFunction);

function addFunction() {
  event.preventDefault();
  var obj = {
    name: document.querySelector("#name").value,
    number: document.querySelector("#phoneNumber").value,
    type: document.querySelector("#selectType").value,
  };

  contactList.push(obj);
  localStorage.setItem("contactList", JSON.stringify(contactList));
  alert("Contact Added to Your Contact List");
  document.querySelector("#name").value='';
  document.querySelector("#phoneNumber").value='';
  document.querySelector("#selectType").value='';
}
