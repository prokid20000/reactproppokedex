import React from "react";
import Pokecard from "./Pokecard";

/**After getting array of pokemons it renders a sequence of Pokecard components */
function Pokedex({pokemon}) {
  console.log("pokemon is ", pokemon);
  return (
    <div className="Pokedex">
      {pokemon.map((p) => (
        <Pokecard
          id={p.id}
          name={p.name}
          type={p.type}
          exp={p.base_experience}
        />
      ))}
    </div>
  );
}

export default Pokedex;

// Always destructure props so that readers can understand what is in here