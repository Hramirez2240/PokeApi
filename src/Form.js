import React from 'react';
import axios from 'axios';

class Form extends React.Component{
    state = {pokemonName: ""};
    handleSubmit = async (event) => {
        event.preventDefault();
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${this.state.pokemonName}`);
        this.props.onSubmit(response.data);
        this.setState({pokemonName: ""});
    };

    render(){
        return(
            <div className="form-container">
                <form onSubmit={this.handleSubmit} className="poke-form">
                <input
                    className='form-control'
                    type="text"
                    value={this.state.pokemonName}
                    onChange={event => this.setState({pokemonName: event.target.value})}
                    placeholder = "Pokemon name"
                    required
                />
                <button className='btn btn-danger'>Add Pokemon</button>
            </form>
            </div>
        );
    }
}

export default Form;