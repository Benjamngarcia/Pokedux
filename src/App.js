import { useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { Container, Stack } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress';
import { PokemonList } from './components/PokemonList';
import { Searcher } from './components/Searcher';
import { Footer } from './components/Footer';
import { Paginacion } from './components/Paginacion';
import Typography from '@mui/material/Typography';
import logo from './static/logopokedux.svg'
import { fetchPokemonsWithDetails } from './slices/dataSlice';
import './App.css';


function App() {

  const [ pagina, setPagina ] = useState(1);
  const [ porPagina, setPorPagina ] = useState(24)

  const pokemons  = useSelector((state) => 
    state.data.pokemonsFiltered, shallowEqual
    );

  const loading = useSelector((state) => state.ui.loading);

  const dispatcher = useDispatch();

  useEffect(() => { 
    dispatcher(fetchPokemonsWithDetails());
  }, []);

  const maximo = pokemons.length / porPagina;
  
  return (
    <Container sx={{
      background: 'white'
    }}>
      <Stack sx={{
        maxWidth: '200px',
        margin: 'auto',
        padding: '1rem 0px'
      }}>
      <a href="/">
        <img src={logo} alt="pokedux"/>
      </a>
      </Stack>
      <Stack sx={{
        marginBottom: '3rem'
      }}>
        <Searcher/>
        <Typography>Página: {pagina}</Typography>
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
          <PokemonList pokemons={pokemons} pagina={pagina} porPagina={porPagina}/>
        )
      }
      <Paginacion pagina={pagina} setPagina={setPagina} maximo={maximo}/>
      <Footer/>
      </Container>
  );
}


export default App;
