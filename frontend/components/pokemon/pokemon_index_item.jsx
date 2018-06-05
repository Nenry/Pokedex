import React from 'react';
import {Link} from 'react-router-dom';
export class PokemonIndexItem extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li key = {this.props.pokemon.id}>
        <Link to={`/pokemon/${this.props.pokemon.id}`}>
          {this.props.pokemon.name}
          <img src= {this.props.pokemon.image_url}/>
        </Link>
      </li>
    );
  }

}
