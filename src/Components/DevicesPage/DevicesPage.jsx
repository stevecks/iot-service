import styles from "./DevicesPage.module.css";
import React, { useState } from 'react';
import DeviceCard from "../DeviceCard/DeviceCard";
import DevicesList from "../DevicesList/DevicesList";
import AddDeviceDialog from "../dialogs/AddDeviceDialog/AddDeviceDialog";
import EditDeviceDialog from "../dialogs/EditDeviceDialog/EditDeviceDialog";
// import StartCard from "../StartCard/StartCard";
// import MapCard from "../MapCard/MapCard";

const DevicesPage = () => {
    const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
    const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);

    const handleOpenAddDialog = () => {
        setIsAddDialogOpen(true);
    };

    const handleCloseAddDialog = () => {
        setIsAddDialogOpen(false);
    };

    const handleOpenEditDialog = () => {
        setIsEditDialogOpen(true);
    };

    const handleCloseEditDialog = () => {
        setIsEditDialogOpen(false);
    };

    return (
        <>
            {isAddDialogOpen && <AddDeviceDialog onClose={handleCloseAddDialog} />}
            {isEditDialogOpen && <EditDeviceDialog onClose={handleCloseEditDialog} />}
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles["nav-devices"]}>
                        <DevicesList onAddDevice={handleOpenAddDialog} />
                    </div>
                    <div className={styles.test}>
                        {/*<StartCard/>*/}
                        {/*<MapCard/>*/}
                        <DeviceCard onEditDevice={handleOpenEditDialog}/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DevicesPage;
