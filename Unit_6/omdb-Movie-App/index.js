document.querySelector('#searchBtn').addEventListener('click', function (){
    var movieName=document.querySelector('#movieName').value;
    // console.log(movieName);
    fetch(('https://www.omdbapi.com/?s='+movieName+'&apikey=99729c5e')).then((response) => {
        // console.log(response)
        
            response.json().then((result)=>{
                // console.log(result);
                if(result.Search==undefined){
                    // console.log('Error !')
                    document.querySelector('#movieGrid').innerHTML='';
                    document.querySelector('#errorBox').innerHTML='';
                    // var div=document.createElement('div');
                    // div.setAttribute('id','errorBox')
                    // div.style.margin='auto'

                    var img=document.createElement('img');
                    img.setAttribute('id','errorImg');
                    img.setAttribute('src', './notfound.png');

                    var heading=document.createElement('h2');
                    heading.setAttribute('id','errorHead');
                    heading.innerText='Movie Not Found';
                    // heading.style.textAlign='center'

                    document.querySelector('#errorBox').append(img, heading);
                    // document.querySelector('body').append(div);
                }
                else{
                    // console.log(result.Search);
                    displayData(result.Search);
                }
            })
        
        
    })//.catch((error) => {
    //    console.log(error)
    // });
    // console.log(movies);
    
})

// function displayData(movies){
//     document.querySelector('#movieGrid').innerHTML='';
//     document.querySelector('#errorBox').innerHTML='';
//     movies.forEach(element => {
//         var div=document.createElement('div');
//         div.setAttribute('class','gridDiv');

//         var img=document.createElement('img');
//         img.setAttribute('class','gridDivImg');
//         img.setAttribute('src', element.Poster);
//         // img.setAttribute('alt','./notfound.png');

//         var name=document.createElement('h3');
//         name.setAttribute('class','divMovieName');
//         name.innerText=element.Title;
//         // name.style.textAlign='center'
    
//         var type=document.createElement('p');
//         type.setAttribute('class','movieType');
//         type.innerText='Type : '+element.Type;

//         var year=document.createElement('p');
//         year.setAttribute('class','movieYear');
//         year.innerText='Release Year : '+element.Year;

//         div.append(img, name, type, year)

//         document.querySelector('#movieGrid').append(div);
//     });
// }

function displayData(movies){
    var allList=[];
    document.querySelector('#movieGrid').innerHTML='';
    document.querySelector('#errorBox').innerHTML='';
    movies.forEach(element => {
        var id=element.imdbID;
        fetch(('https://www.omdbapi.com/?i='+id+'&apikey=99729c5e')).then(response =>{
            response.json().then(result => {
                // console.log(result)
                allList.push(result);
                var div=document.createElement('div');
                div.setAttribute('class','gridDiv');

                var img=document.createElement('img');
                img.setAttribute('class','gridDivImg');
                img.setAttribute('src', result.Poster);

                var name=document.createElement('h3');
                name.setAttribute('class','divMovieName');
                name.innerText=result.Title;

                var type=document.createElement('p');
                type.setAttribute('class','movieType');
                type.innerText='Type : '+result.Type;

                var year=document.createElement('p');
                year.setAttribute('class','movieYear');
                year.innerText='Release Date : '+result.Released;

                var genre=document.createElement('p');
                genre.setAttribute('class','movieGenre');
                genre.innerText='Genre : '+result.Genre;

                var rating=document.createElement('p');
                rating.setAttribute('class','movieRating');
                rating.innerText='Imdb Rating : '+result.imdbRating;

                if(result.imdbRating>8.5){
                    var recommended=document.createElement('h5');
                    recommended.setAttribute('class','recommended');
                    recommended.innerText='Recommended';

                    name.append(recommended);
                }
                // else{
                    div.append(img, name, type, year, genre, rating);
                // }

                document.querySelector('#movieGrid').append(div);
            })
        })
    })
    // console.log(allList)
    var allListCopy=[...allList]
}