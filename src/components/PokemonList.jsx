import { Grid, Stack } from '@mui/material'
import { PokemonCard } from "./PokemonCard"

export function PokemonList({ pokemons, pagina, porPagina }) {
    return (
        <Grid container spacing={2}>
            {pokemons.slice(
                (pagina - 1) * porPagina,
                (pagina - 1) * porPagina + porPagina
            ).map((pokemon) => {
                return (
                    <Grid item xs={6} md={4} lg={3} key={pokemon.name}>
                        <Stack>
                            <PokemonCard name={pokemon.name} key={pokemon.name} image={pokemon.sprites.front_default} abilities={pokemon.types} id={pokemon.id} favorite={pokemon.favorite} />
                        </Stack>
                    </Grid>
                )
            })}
        </Grid>
    )
}

PokemonList.defaultProps = {
    pokemons: Array(10).fill(''),
}
