import { Card } from 'antd';
import Meta from 'antd/lib/card/Meta';
import { useDispatch } from 'react-redux';
import { StarButton } from './StarButton';
import { setFavorite } from '../slices/dataSlice';

export function PokemonCard({ name, image, abilities, id, favorite }) {

    const showAbilities = (abilitiess) =>{
        return abilitiess.map(ability => ability.type.name).join(', ');
    }

    const dispatch= useDispatch();

    const handleOnFavorite = () =>{
        dispatch(setFavorite({pokemonId: id}))
    }
    return (
        <Card 
        title={name} 
        cover={<img src={image} alt={name}/>}  
        extra={<StarButton isFavorite={favorite} onClick={handleOnFavorite}/>}>
            <Meta description={showAbilities(abilities)}/>
        </Card>
    )
}