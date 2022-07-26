var count=localStorage.getItem('count')||0;
function localSet(){
    count++;
    fetch('https://pokeapi.co/api/v2/pokemon/').then(response => {
            response.json().then(answer =>{
                // console.log(answer.results);
                localStorage.setItem('pokeData', JSON.stringify(answer.results))
            })
        });
}

if(count==0){
    localSet();
    count++;
    localStorage.setItem('count',count);
    // console.log(count);
}

        var pokeData = JSON.parse(localStorage.getItem('pokeData'));
        // console.log(pokeData);

        pokeData.forEach((element,index) => {
            var tr= document.createElement('tr');
            var td1=document.createElement('td');
            td1.innerText=(index+1);

            var td2=document.createElement('td');
            td2.innerText=element.name;

            tr.append(td1,td2);

            document.querySelector('#table>tbody').append(tr);
        });
        
       document.querySelector('#searchBtn').addEventListener('click',()=>{
        document.querySelector('#PokeDiv').innerHTML='';
           var value=document.querySelector('#searchBar').value;
        //    console.log(value);
        pokeData.forEach((element,index) => {
            if(element.name==value || (index+1)==value){
                // console.log(element.name,index+1);
                // console.log(element.url);
                fetch(element.url).then(response => {
                    response.json().then(answer =>{
                    // console.log(answer);
                    var name= document.createElement('p');
                    name.innerText='Name : '+answer.species.name;

                   var id=document.createElement('p');
                   id.innerText='Id : '+answer.id;

                   var height=document.createElement('p');
                   height.innerText='Height : '+answer.height;

                   var weight=document.createElement('p');
                   weight.innerText='Weight : '+answer.weight;

                   
                   var abil='';
                   answer.abilities.forEach((element,index)=>{
                      if(index<(answer.abilities).length-1){
                        abil+=element.ability.name+', ';
                      }
                      else{
                        abil+=element.ability.name;
                      }
                   })
                   var abilities=document.createElement('p');
                   abilities.innerText='Abilities : '+abil;

                   var mov='';
                   answer.moves.forEach((element,index)=>{
                      if(index<(answer.moves).length-1){
                        mov+=element.move.name+', ';
                      }
                      else{
                        mov+=element.move.name;
                      }
                   })

                   var moves=document.createElement('p');
                   moves.innerText='Moves : '+mov;

                //    console.log(answer.abilities)
                   document.querySelector('#PokeDiv').append(name,id,height,weight,abilities,moves);
                   

            })
        });
            }
        });
        document.querySelector('#searchBar').value='';
       })