import React from 'react';



function Pokecard({ exp, id, name, type }){
    const imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    <div className='Pokecard'>
        <div className='Pokecard-name'>{name}</div>
        <img className='Pokecard-img' src={imgSrc} alt={name}/>
        <div className='Pokecard-type'>Type: {type}</div>
        <div className='Pokecard-exp'>Base Exp: {exp}</div>
    </div>
        
}

export default Pokecard;