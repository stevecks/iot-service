import "./DevicesPage.css";
import React from 'react';
import DeviceCard from "../DeviceCard/DeviceCard";
import DevicesList from "../DevicesList/DevicesList";

const DevicesPage = () => {

    return (
        <div className='container1'>
            <div className="content1">
                <div className="nav-devices1">
                    <DevicesList/>
                </div>
                <div className="test1">
                    <DeviceCard />
                </div>
            </div>
        </div>
    );
};

export default DevicesPage;