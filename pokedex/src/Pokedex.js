import React from "react";
import Pokecard from "./Pokecard";

function Pokedex(props) {
  return (
    <div>
      {props.map((p) => (
        <Pokecard
          id={p.id}
          name={p.name}
          type={p.type}
          exp={p.base_experience}
        />
      ))}
      ;
    </div>
  );
}

export default Pokedex;