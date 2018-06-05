import React from 'react';
import {PokemonIndexItem} from './pokemon_index_item';
import {Link} from 'react-router-dom';
export class PokemonIndex extends React.Component {

  componentDidMount() {
    this.props.requestAllPokemon();
  }


  render() {
    return (
      <div>
        {this.props.pokemon.map(poke => <PokemonIndexItem key={poke.id} pokemon={poke} />)}
      </div>
    );
  }

}

// <li>{this.props.pokemon[0].name}</li>


// {this.props.pokemon.map((poke, idx) => <li>{poke.name} <img src={poke.image_url}/></li>)}
//
// <section className="pokedex">
//   <ul>
//     {pokemonItems}
//   </ul>
// </section>
