import React from 'react';

//Global const for part of URL

/** Shows a single Pokemon, with their name, image, and type. */
function Pokecard({ exp, id, name, type }){
    const imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    
    
    return (
    <div className='Pokecard'>
        <div>{name}</div>
        <img className='Pokecard-img' src={imgSrc} alt={name}/>
        <div>Type: {type}</div>
        <div>Base Exp: {exp}</div>
    </div>
    );
}

export default Pokecard;

//Try to tidy up the pattern of divs