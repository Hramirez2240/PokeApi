import Card from "./Card"
import ReactPaginate from "react-paginate";

const CardList = (props) => (
    <div>
        {props.pokemons.map(pokemon => <Card key={pokemon.id} {...pokemon}/>)}
    </div>
)

export default CardList;