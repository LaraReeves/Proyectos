let botonapi =document.getElementById('btnApi');
let apidata=document.getElementById('apidata');
const base_experience= document.getElementById('base_experience');
const name= document.getElementById('name');
const llamadaApi=()=>{
    url="https://pokeapi.co/api/v2/pokemon/ditto";
    fetch(url)
    .then(res => res.json())
    .then(data=> { 
        apidata.innerHTML=`Nombre: ${JSON.stringify(data.name)}`;
        base_experience.innerHTML=  `Experiencia Base: ${ JSON.stringify(data.base_experience)}`
    })
        .catch(e=> console.error(new error(e)));
}

botonapi.addEventListener('click', llamadaApi);