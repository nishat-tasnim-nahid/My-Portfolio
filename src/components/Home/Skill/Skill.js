import React from 'react';
import { Grid, Typography } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Skill = () => {
    return (
        <Grid sx={{ p: 12, backgroundColor: '#080A0C' }}>
            <Typography
                variant="h3"
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                sx={{ pb: 6, color: '#fff' }}>MY SKILLS</Typography>
            <Grid container spacing={2}
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"
                style={{ boxShadow: '0 0 15px #3C3A36' }}
                sx={{ backgroundColor: 'var(--dark-sec-color)', border: 2, borderColor: '#000000', borderRadius: 3, color: '#DBA933', p: 3 }}>

                <Grid item xs={6} md={3} sm={2}  >
                    <Typography variant="h5">
                        HTML
                    </Typography>
                </Grid>
                <Grid item xs={6} md={3} sm={2}>
                    <Typography variant="h5">
                        CSS
                    </Typography>
                </Grid>
                <Grid item xs={6} md={3} sm={2}>
                    <Typography variant="h5">
                        Bootstrap
                    </Typography>
                </Grid>
                <Grid item xs={6} md={3} sm={2} >
                    <Typography variant="h5">
                        Meterial UI
                    </Typography>
                </Grid>
                <Grid item xs={6} md={3} sm={2} >
                    <Typography variant="h5">
                        React.js
                    </Typography>
                </Grid>
                <Grid item xs={6} md={3} sm={2} >
                    <Typography variant="h5">
                        JavaScript
                    </Typography>
                </Grid>
                <Grid item xs={6} md={3} sm={2}>
                    <Typography variant="h5">
                        Node.js
                    </Typography>
                </Grid>
                <Grid item xs={6} md={3} sm={2} >
                    <Typography variant="h5">
                        JSON
                    </Typography>
                </Grid>
                <Grid item xs={6} md={3} sm={2} >
                    <Typography variant="h5">
                        Rest API
                    </Typography>
                </Grid>
                <Grid item xs={6} md={3} sm={2} >
                    <Typography variant="h5">
                        MongoDB
                    </Typography>
                </Grid>
                <Grid item xs={6} md={3} sm={2} >
                    <Typography variant="h5">
                        Firebase
                    </Typography>
                </Grid>
                <Grid item xs={6} md={3} sm={2} >
                    <Typography variant="h5">
                        Figma
                    </Typography>
                </Grid>
                <Grid item xs={6} md={3} sm={2} >
                    <Typography variant="h5">
                        Git/GitHub
                    </Typography>
                </Grid>

            </Grid>
        </Grid>

    );
};

export default Skill;