import styles from "./DeviceCard.module.css";
import React from 'react';
import { MdModeEdit } from "react-icons/md";
import SensorCard from "../SensorCard/SensorCard";


const DeviceCard = () => {

    return (
        <div className={styles.card}>
            <div className={styles.info}>
                <div className={styles.info__text}>
                    <h2 className={styles.info__text__name}>Устройство 1</h2>
                    <div className={styles.info__text__descr}>Описание Описание Описание Описание Описание</div>
                </div>
                <div className={styles["info__btn-box"]}>
                    <button className={styles["info__btn-box__button"]}>
                        <MdModeEdit className={styles.icon}/>
                    </button>
                </div>
            </div>
            <div className={styles["sensors-list"]}>
                <SensorCard/>
                <SensorCard/>
                <SensorCard/>
                <SensorCard/>
                <SensorCard/>
            </div>
        </div>
    );
};

export default DeviceCard;