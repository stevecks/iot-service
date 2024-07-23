import styles from "./MapCard.module.css";
import React from 'react';


const MapCard = () => {

    return (
        <div className={styles.card}>
            <div className={styles.card__content}>
                <p className={styles.card__contant__text}>Выберите устройство из списка</p>
            </div>
        </div>
    );
};

export default MapCard;