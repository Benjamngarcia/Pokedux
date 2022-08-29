import React from 'react'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export function Paginacion({ pagina, setPagina, maximo}) {

    const handleChangePage = (event, value) =>{
        setPagina(value)
    }
    return (
    <Stack 
        spacing={2}
        sx={{
            width: {xs: '80%', md:'45%', lg: '30%'},
            margin: 'auto',
            marginTop: '3rem',
        }}
    >
        <Pagination count={maximo} page={pagina} variant="outlined" color="secondary" size="medium" onChange={handleChangePage} />
    </Stack>
    )
}