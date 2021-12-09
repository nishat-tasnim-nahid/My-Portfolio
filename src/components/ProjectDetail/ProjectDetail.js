import React from 'react';
import { Typography } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const ProjectDetail = ({ projectDetail }) => {
    const { name, img1, img2, img3, description } = projectDetail
    return (
        <div style={{ marginTop: '80px' }}>
            <Typography data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                sx={{ p: 5 }}
                variant="h4">{name}</Typography>

            <img
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"
                style={{
                    borderRadius: '5px',
                    height: '200px',
                    width: '300px',
                    margin: '5px'
                }} src={img1} alt="" />
            <img
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"
                style={{
                    borderRadius: '5px',
                    height: '200px',
                    width: '300px',
                    margin: '5px'
                }} src={img2} alt="" />
            <img
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"
                style={{
                    borderRadius: '5px',
                    height: '200px',
                    width: '300px',
                    margin: '5px'
                }} src={img3} alt="" />
                
            <p>{description}</p>
        </div>
    );
};

export default ProjectDetail;