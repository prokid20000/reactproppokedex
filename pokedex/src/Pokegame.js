import React from "react";
import Pokedex from "./Pokedex";

const pokemonList = [
    { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
    { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
    { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
    { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
    { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
    { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
    { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
    { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
  ];
function Pokegame({pokemon=pokemonList}){
    
    
    let hand1 = [];
    let hand2 = [];
    // const randomItemIndex = Math.floor(Math.random() * pokemon.length);
    let idx = 0;

    while(idx < 4){
        const randomPokeIndex = Math.floor(Math.random() * pokemon.length);
        hand1.push(pokemon[randomPokeIndex]);
        pokemon.splice(randomPokeIndex, 1);
        idx++;
        console.log("hand1", hand1);
    }
    for(let i = 0; i < pokemon.length; i++){
        hand2.push(pokemon[i]);
        console.log("hand2", hand2);
    }
    return(
        <div>
            <Pokedex pokemon={hand1}/>
            <Pokedex pokemon={hand2}/>
        </div>
    );

}

export default Pokegame;