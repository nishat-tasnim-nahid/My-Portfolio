import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import projectSS1 from '../../../images/projectSS1.png';
import projectSS2 from '../../../images/projectSS2.png'
import projectSS3 from '../../../images/projectSS3.png';
import projectSS4 from '../../../images/projectSS4.png';

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Projects = () => {
    return (

        <Grid sx={{ backgroundColor: '#080A0C', color: '#fff', p: 6 }}>
            <Typography
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                sx={{ p: 5 }}
                variant="h3">MY PROJECTS</Typography>
            <Grid container Spacing={2} sx={{}}>

                <Grid

                    style={{ boxShadow: '0 0 15px #3C3A36' }}
                    sx={{ backgroundColor: 'var(--dark-sec-color)', border: 2, borderColor: '#000000', borderRadius: 3, color: '#DBA933', p: 3 }} item xs={12} md={6} sm={6}>
                    <img
                        style={{
                            borderRadius: '5px',
                            height: '200px',
                            width: '300px'
                        }} src={projectSS1} alt="" />
                    <Typography variant="h5">BABY TOY</Typography>
                    <Link to='projectsDetails' style={{ textDecoration: 'none' }}>
                        <Button
                            variant="contained"
                            style={{ backgroundColor: '#053357', border: '1px solid #fff', marginTop: '12px' }}>
                            DETAILS
                        </Button>
                    </Link>
                </Grid>
                <Grid style={{ boxShadow: '0 0 15px #3C3A36' }}
                    sx={{ backgroundColor: 'var(--dark-sec-color)', border: 2, borderColor: '#000000', borderRadius: 3, color: '#DBA933', p: 3 }} item xs={12} md={6} sm={6} >
                    <img style={{
                        borderRadius: '5px',
                        height: '200px',
                        width: '300px'
                    }} src={projectSS2} alt="" />
                    <Typography variant="h5">HEALTH CARE</Typography>
                    <Link to='projectsDetails' style={{ textDecoration: 'none' }}>
                        <Button
                            variant="contained"
                            style={{ backgroundColor: '#053357', border: '1px solid #fff', marginTop: '12px' }}>
                            DETAILS
                        </Button>
                    </Link>
                </Grid>
                <Grid style={{ boxShadow: '0 0 15px #3C3A36' }}
                    sx={{ backgroundColor: 'var(--dark-sec-color)', border: 2, borderColor: '#000000', borderRadius: 3, color: '#DBA933', p: 3 }} item xs={12} md={6} sm={6} >
                    <img style={{
                        borderRadius: '5px',
                        height: '200px',
                        width: '300px'
                    }} src={projectSS3} alt="" />
                    <Typography variant="h5">LEARNING STATISTICS</Typography>
                    <Link to='projectsDetails' style={{ textDecoration: 'none' }}>
                        <Button
                            variant="contained"
                            style={{ backgroundColor: '#053357', border: '1px solid #fff', marginTop: '12px' }}>
                            DETAILS
                        </Button>
                    </Link>
                </Grid>
                <Grid
                    style={{ boxShadow: '0 0 15px #3C3A36' }}
                    sx={{ backgroundColor: 'var(--dark-sec-color)', border: 2, borderColor: '#000000', borderRadius: 3, color: '#DBA933', p: 3 }} item xs={12} md={6} sm={6}>
                    <img style={{
                        borderRadius: '5px',
                        height: '200px',
                        width: '300px'
                    }} src={projectSS4} alt="" />
                    <Typography variant="h5">HEXA IN ONE</Typography>
                    <Link to='projectsDetails' style={{ textDecoration: 'none' }}>
                        <Button
                            variant="contained"
                            style={{ backgroundColor: '#053357', border: '1px solid #fff', marginTop: '12px' }}>
                            DETAILS
                        </Button>
                    </Link>
                </Grid>
            </Grid>

        </Grid>
    );
};

export default Projects; <h2>Here my projest</h2>