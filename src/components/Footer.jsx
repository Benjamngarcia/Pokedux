import { Grid, Stack } from "@mui/material";
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

export function Footer() {
    return (
        <Grid container sx={{
            padding: '0.5rem',
            justifyContent: 'space-between'
        }}>
            <Grid item>
                <Typography>
                    Benjamín García &reg; 2022
                </Typography>
            </Grid>
            <Grid item>
                <IconButton color="secondary" target="_blank" href="https://github.com/Benjamngarcia">
                    <GitHubIcon/>
                </IconButton>
                <IconButton color="secondary" target="_blank" href="https://www.linkedin.com/in/benjamngarcia">
                    <LinkedInIcon/>
                </IconButton>    
                <IconButton color="secondary" target="_blank" href="https://www.instagram.com/benjamngarcia/">
                    <InstagramIcon/>
                </IconButton>    
            </Grid>
        </Grid>
    )
}