import { Pokemon } from "./js/Pokemon.js";

let id = 25

const apiUrl = `https://pokeapi.co/api/v2/pokemon/${id}`

function fetchApi(url) {
     fetch (url)
       .then(function(response){
           return response.json();
           // JSON.parse : JSON -> JS types
       })
       .then (function(data){
           let pokemon = new Pokemon (data.id, data.sprites.front_shiny, data.name, data.weight, data.height)
           id = pokemon.id
           pokemon.display()
           return pokemon;
           })
       .catch (function (error) {
            console.log("une erreur : " + error);
        });
}

fetchApi(apiUrl)

//Previous button Function
 document.getElementById('previousButton').addEventListener('click', previous)

 function previous() {
    console.log("yiooo");
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${id-1}`
    fetchApi(apiUrl)
 }

 //Next button Function
document.getElementById('nextButton').addEventListener('click', next)

function next() {
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${id+1}`
    fetchApi(apiUrl)
 }


//Random button Function
document.getElementById('randomButton').addEventListener('click', randomButton)

function random(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

function randomButton() {
    let randomId = random(1, 248)
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${randomId}`
    fetchApi(apiUrl)
}

