import { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { Container, Stack } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress';
import { PokemonList } from './components/PokemonList';
import { Searcher } from './components/Searcher';
import log from './static/logopokedux.svg'
import { fetchPokemonsWithDetails } from './slices/dataSlice';
import './App.css';


function App() {

  const pokemons  = useSelector((state) => 
    state.data.pokemonsFiltered, shallowEqual
    );

  const loading = useSelector((state) => state.ui.loading);

  const dispatcher = useDispatch();

  useEffect(() => { 
    dispatcher(fetchPokemonsWithDetails());
  }, []);
  
  return (
    <Container sx={{
      background: 'white'
    }}>
      <Stack sx={{
        maxWidth: '200px',
        margin: 'auto',
        padding: '1rem 0px'
      }}>
        <img src={log} alt="pokedux"/>
      </Stack>
      <Stack sx={{
        marginBottom: '3rem'
      }}>
        <Searcher/>
      </Stack>
      {
        loading ? (
          <Stack xs={12}>
            <CircularProgress 
              size={80} 
              thickness={5}
              color="secondary"
              sx={{padding: '2rem auto', margin: 'auto'}}/>
          </Stack>
        ) : (
          <PokemonList pokemons={pokemons}/>
        )
      }
    </Container>
  );
}


export default App;
