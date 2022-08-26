import { TextField } from '@mui/material'
import { useDispatch } from 'react-redux';
import { setFilter } from '../slices/dataSlice';

export function Searcher() {
    const dispatch = useDispatch();

    const handleOnChange = (e) => {
        dispatch(setFilter(e.target.value));
    }
    
    return(
        <TextField
            id="outlined-basic"
            label="Busca poke"
            placeholder="Ingresa el nombre del poke que deseas buscar"
            variant="outlined"
            size="small"
            onChange={handleOnChange}
            sx={{
                width: '60%',
                margin: 'auto'
            }}
        />
    )
}