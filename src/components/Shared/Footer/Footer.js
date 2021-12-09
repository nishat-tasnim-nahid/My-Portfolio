import { Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
    return (
        <div style={{ backgroundColor: 'black', color: 'white' }}>
            <Typography
            sx={{p:5}}
                variant="body1"
            >©️2020 All Right Reserved | nishatTasnim.pro</Typography>
        </div>
    );
};

export default Footer;