import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import { IconButton } from '@mui/material';


export function StarButton({ isFavorite, onClick}) {
        const Icon = isFavorite ? StarIcon : StarBorderIcon
        return (
                <IconButton color="secondary" onClick={onClick}>
                        <Icon/>
                </IconButton>
        )
}