let obdbid = JSON.parse(localStorage.getItem("breweryId"));
getAllData(obdbid);

async function getAllData(obdbid) {
  try {
    let result = await fetch(
      `https://api.openbrewerydb.org/breweries/${obdbid}`
    );
    let data = await result.json();
    // console.log(data);
    showCard(data);
  } catch (error) {
    console.log(error);
  }
}

function showCard(data) {
  document.getElementById("container").innerHTML = "";
  var div = document.createElement("div");
  div.setAttribute("id", "card");

  var name = document.createElement("h3");
  name.innerText = data.name;

  var type = document.createElement("p");
  type.innerText = "Brewery-Type : " + data.brewery_type;

  var street = document.createElement("p");
  street.innerText = "Street : " + data.street;

  var city = document.createElement("p");
  city.innerText = "City : " + data.city;

  var state = document.createElement("p");
  state.innerText = "State : " + data.state;

  var country = document.createElement("p");
  country.innerText = "Country : " + data.country;

  var postal_code = document.createElement("p");
  postal_code.innerText = "Postal Code : " + data.postal_code;

  var phone = document.createElement("p");
  phone.innerText = "Phone : " + data.phone;

  var latitude = document.createElement("p");
  latitude.innerText = "Latitude : " + data.latitude;

  var longitude = document.createElement("p");
  longitude.innerText = "Longitude : " + data.longitude;

  var created_at = document.createElement("p");
  created_at.innerText = "Created At : " + data.created_at;

  var website = document.createElement("p");
  website.innerText = "Website URL : " + data.website_url;

  div.append(
    name,
    type,
    street,
    city,
    state,
    country,
    postal_code,
    phone,
    phone,
    latitude,
    longitude,
    created_at,
    website
  );
  document.getElementById("container").append(div);
}
