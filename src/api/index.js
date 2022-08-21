import axios from 'axios'

export const getPokemon = () =>{
    try {
        return axios.get('https://pokeapi.co/api/v2/pokemon?limit=151').then(res => res.data.results);
    } catch (error) {
        console.log(error);
    }
}

export const getPokemonDetails = (pokemon) =>{
    try {
        return axios.get(pokemon.url).then(res => res.data)
    } catch (error) {
        console.log(error);
    }
}