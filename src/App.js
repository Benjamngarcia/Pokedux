import { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { Col, Spin } from 'antd';
import { PokemonList } from './components/PokemonList';
import { Searcher } from './components/Searcher';
import log from './static/logopokedux.svg'
// import { getPokemon } from './api'
// import { getPokemonWithDetails, setLoading } from './actions'
import { fetchPokemonsWithDetails } from './slices/dataSlice';
import './App.css';


function App() {

  // const [pokemons, setPokemons] = useState([]);
  const pokemons  = useSelector((state) => 
    state.data.pokemonsFiltered, shallowEqual
    // .get('data').get('pokemons'), shallowEqual
    );
  const loading = useSelector((state) => state.ui.loading);
  // .get('ui').get('loading'));
  const dispatcher = useDispatch();
  // const pokemons = useSelector((state) => state.data.pokemons, shallowEqual);

  
  useEffect(() => { 
    dispatcher(fetchPokemonsWithDetails());
    // const fetchPokemons = async() => {
      // dispatcher(setLoading(true));
      // const pokemonsRes = await getPokemon();
      // const pokemonsDetailed = await Promise.all(pokemonsRes.map(pokemon => getPokemonDetails(pokemon)));
      // dispatcher(getPokemonWithDetails(pokemonsRes))
      // dispatcher(setLoading(false));
    // };
    // fetchPokemons();
  }, []);
  
  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={log} alt="pokedux"/>
      </Col>
      <Col span={8} offset={8}>
        <Searcher/>
      </Col>
      {
        loading ? (
          <Col offset={12}>
            <Spin spinning size='large'/>
          </Col>
        ):(
          <PokemonList pokemons={pokemons}/>
        )
      }
    </div>
  );
}


export default App;
