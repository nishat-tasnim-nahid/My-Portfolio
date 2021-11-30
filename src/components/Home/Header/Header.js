import React from 'react';
import Grid from '@mui/material/Grid';
import { Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import bg from '../../../images/bg.jpg'

const bannerBg = {
    background: `url(${bg})`,
    height: '700px',

}

const Header = () => {
    return (
        
            <Grid style={{bannerBg}}>
                <Grid sx={{ flexGrow: 1, color: '#fff',pt: 12,backgroundColor: '#080909' }}>
               
               <Typography variant="h3" >
                   I'm Nishat Tasnim
               </Typography>

               <Typography variant="h4" sx={{ color: '#0D8BF0' }}>
                   a junior web developer
               </Typography>
               <Button
                   variant="contained"
                   style={{ backgroundColor: '#053357', border: '1px solid #fff', marginTop: '12px' }}>
                   <a style={{ textDecoration: 'none', color: '#fff',marginRight:'5px' }} href="https://drive.google.com/file/d/1E_ZnhY5CXClKTlVHt4UQHat_mv8P1MJP/view">RESUME</a>
               </Button>
               <Link to='contactMe' style={{ textDecoration: 'none' }}>
                   <Button
                       variant="contained"
                       style={{ backgroundColor: '#053357', border: '1px solid #fff', marginTop: '12px',marginLeft:'5px' }}>
                       CONTACT ME
                   </Button>
               </Link>
           
       </Grid>
            </Grid>
       
    );
};

export default Header;