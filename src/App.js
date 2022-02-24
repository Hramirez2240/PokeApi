import Form from './Form';
import CardList from './CardList';
import './App.css';
import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';

class App extends React.Component{
  state = {
    pokemons: [],
    sortType: "asc",
  };
  addNewPokemon = (pokemonData) => {
    this.setState(prevPokemon => ({
      pokemons: [...prevPokemon.pokemons, pokemonData]
    }));

  };

  onSort = sortType => {
    this.setState({sortType});
  }

  render(){
    const {pokemons, sortType} = this.state;

    const sorted = pokemons.sort((a,b) => {

      const isReversed = (sortType === "asc") ? 1 : -1;
      return isReversed * a.name.localeCompare(b.name)
    });
    return(
      <div>
        <div className='container-menu'>
          <div className='img-container'>
            <img src='https://2.bp.blogspot.com/-j_GR1Tq5tP0/VbY3ueWy4qI/AAAAAAAAIvE/wCjca8TaU6g/s1600/Logo%2BPokemon.png' className='img-logo' alt='poke-logo'/>
          </div>
        </div>
        <div className="dropdown">
            <button className="btn btn-danger dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" style={{background: "red"}}>
              Sort By
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><button className='btn btn-danger' onClick={() => this.onSort("asc")}>Asc</button></li>
              <li><button className='btn btn-danger' onClick={() => this.onSort("desc")}>Desc</button></li>
            </ul>
        </div>
        
        <Form onSubmit={this.addNewPokemon} />
        <CardList pokemons={sorted}/>
      </div>
    );
  }
}

export default App;
