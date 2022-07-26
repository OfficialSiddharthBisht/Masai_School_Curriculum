import navbar from '../components/navbar.js';

document.getElementById('navbarContainer').innerHTML = navbar();
// navbar();

import {getData, debounce} from '../Components/fetchData.js'

document.getElementById('searchBar').addEventListener('input',() => {
    let searchedMeal = document.getElementById('searchBar').value;
    // console.log(searchedMeal);
    let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchedMeal}`;
    debounce(getData,2000,url);
   
})