import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';
import { StarButton } from './StarButton';
import { setFavorite } from '../slices/dataSlice';

export function PokemonCard({ name, image, abilities, id, favorite }) {

    const showAbilities = (abilitiess) => {
        return abilitiess.map(ability => ability.type.name).join(', ');
    }

    const dispatch = useDispatch();

    const handleOnFavorite = () => {
        dispatch(setFavorite({ pokemonId: id }))
    }

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader
                action={
                    <StarButton isFavorite={favorite} onClick={handleOnFavorite} />
                }
            />
            <CardMedia
                component="img"
                height="95%"
                image={image}
                alt={name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name.toUpperCase()}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Habilidades: {showAbilities(abilities)}
                </Typography>
            </CardContent>
        </Card>
    )
}