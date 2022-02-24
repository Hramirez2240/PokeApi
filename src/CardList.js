import Card from "./Card"

const CardList = (props) => (
    <div>
        {props.pokemons.map(pokemon => <Card key={pokemon.id} {...pokemon}/>)}
    </div>
)

export default CardList;