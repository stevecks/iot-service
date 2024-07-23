import styles from "./StartCard.module.css";
import React from 'react';


const StartCard = () => {

    return (
        <div className={styles.card}>
            <div className={styles.card__content}>
                <p className={styles.card__contant__text}>Выберите устройство из списка</p>
            </div>
        </div>
    );
};

export default StartCard;