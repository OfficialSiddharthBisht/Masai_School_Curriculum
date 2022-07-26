import navbar from '../components/navbar.js';

document.getElementById('navbarContainer').innerHTML = navbar();
// navbar();

import {getData} from '../Components/fetchData.js'

let url = `https://www.themealdb.com/api/json/v1/1/random.php`;
getData(url);