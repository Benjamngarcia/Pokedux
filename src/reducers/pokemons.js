import { SET_FAVORITE, SET_POKEMONS } from "../actions/types";
import { fromJS } from 'immutable'

const initialState = fromJS({
    pokemons: []
});

export  const pokemonsReducer = (state = initialState, action) =>{
    switch (action.type) {
        case SET_POKEMONS:
            // return {...state, pokemons: action.payload}
            return state.setIn(['pokemons'], fromJS(action.payload))
        case SET_FAVORITE:
            // const newPokemonList = [...state.pokemons];
            const currentPokemonIndex = state.get('pokemons').findIndex((pokemon) =>{
                return pokemon.get('id') === action.payload.pokemonId
            });
            if(currentPokemonIndex < 0){
                return state;
            }
            // newPokemonList[currentPokemonIndex].favorite = !newPokemonList[currentPokemonIndex].favorite;
            const isFavorite = state.get('pokemons').get(currentPokemonIndex).get('favorite')
            // return {...state, pokemons: newPokemonList}
            return state.setIn(['pokemons', currentPokemonIndex, 'favorite'], !isFavorite)
        default:
            return state;
    }
}