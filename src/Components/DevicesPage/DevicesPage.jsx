import styles from "./DevicesPage.module.css";
import React from 'react';
import DeviceCard from "../DeviceCard/DeviceCard";
import DevicesList from "../DevicesList/DevicesList";
import StartCard from "../StartCard/StartCard";
import MapCard from "../MapCard/MapCard";

const DevicesPage = () => {

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles["nav-devices"]}>
                    <DevicesList/>
                </div>
                <div className={styles.test}>
                    <StartCard/>
                    <MapCard/>
                    {/* <DeviceCard /> */}
                </div>
            </div>
        </div>
    );
};

export default DevicesPage;