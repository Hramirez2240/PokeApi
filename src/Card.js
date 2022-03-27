import React from 'react';

class Card extends React.Component{
    render(){
        const pokemon = this.props;
        return(
            <div className="pokemon-profile">
                <div className="card">
                    <img src={pokemon.sprites.other.dream_world.front_default} className="card-img-top" alt="pokeimg" />
                    <div className='card-body'>
                        <div className="info">
                            <div className="name"><strong>Name:</strong> {pokemon.name}</div>
                            <div className="name"><strong>Base experience:</strong> {pokemon.base_experience}</div>
                            <div className="name"><strong>Height:</strong> {pokemon.height}</div>
                            <div className="name"><strong>Weight:</strong> {pokemon.weight}</div>
                            <div className="name"><strong>Type:</strong> {pokemon.types[0].type.name}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;