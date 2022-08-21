import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getPokemon, getPokemonDetails } from '../api';
import { setLoading } from './uiSlices';

const initialState = {
    pokemons: [],
    pokemonsFiltered: []
};

export const fetchPokemonsWithDetails = createAsyncThunk(
    'data/fetchPokemonsWithDetails',
    async (_, { dispatch }) => {
        //dispatch loader
        dispatch(setLoading(true));
        //fetch
        const pokemonsRes = await getPokemon();
        const pokemonsDetailed = await Promise.all(pokemonsRes.map(pokemon => getPokemonDetails(pokemon)));
        dispatch(setPokemons(pokemonsDetailed));
        //dispatch loader
        dispatch(setLoading(false));
    }
);

export const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        setPokemons: (state, action) => {
            state.pokemons = action.payload;
            state.pokemonsFiltered = action.payload;
        },
        setFavorite: (state, action) => {
            const currentPokemonIndex = state.pokemonsFiltered.findIndex(
                (pokemon) => pokemon.id === action.payload.pokemonId
            );
            if (currentPokemonIndex >= 0) {
                const isFavorite = state.pokemonsFiltered[currentPokemonIndex].favorite;
                state.pokemonsFiltered[currentPokemonIndex].favorite = !isFavorite;
            }
        },
        setFilter: (state, action) => {
            const pokemonsFiltered = state
                .pokemons
                .filter(pokemon => pokemon.name.includes(action.payload))
            state.pokemonsFiltered = pokemonsFiltered;
        }
    },
});

export const { setFavorite, setPokemons, setFilter } = dataSlice.actions;

export default dataSlice.reducer;