import "./DevicesPage.css";
import React from 'react';
import DeviceCard from '../DeviceCard/DeviceCard';
// import { Button } from '@mui/material';
// import IconButton from '@mui/material/IconButton';
//import TextField from '@mui/material/TextField';

const DevicesPage = () => {

    return (
        <div className='container1'>
            <div className="content1">
                <div className="nav-devices1"></div>
                <div className="test1">
                <DeviceCard/>
                </div>
            </div>
        </div>
    );
};

export default DevicesPage;