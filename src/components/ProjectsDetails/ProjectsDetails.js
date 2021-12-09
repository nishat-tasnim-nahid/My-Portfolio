import React, { useState, useEffect } from 'react';
import ProjectDetail from '../ProjectDetail/ProjectDetail';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { Typography } from '@mui/material';
AOS.init();

const ProjectsDetails = () => {
    const [projectsDetails, setProjectsDetails] = useState([]);
    useEffect(() => {
        fetch("details.json")
            .then(res => res.json())
            .then(data => setProjectsDetails(data))
    }, [])
    return (
        <div style={{backgroundColor: 'black', color: 'white'}}>
            <Typography
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                sx={{ p: 5,m:4 }}
                variant="h3">ALL PROJECTS</Typography>
            <div>
                {
                    projectsDetails.map(projectDetail => <ProjectDetail
                    key={projectDetail.key}
                    projectDetail={projectDetail}
                    ></ProjectDetail> )
                }
            </div>
        </div>
    );
};

export default ProjectsDetails;