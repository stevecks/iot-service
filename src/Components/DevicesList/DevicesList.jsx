import styles from "./DevicesList.module.css";
import React from 'react';
import { MdOutlinePlaylistAdd } from "react-icons/md";
// import AddDeviceDialog from "./../AddDeviceDialog/AddDeviceDialog"

const DevicesList = ({ onAddDevice }) => {
    return (
        <div className={styles.card}>
            <div className={styles.card__label}>
                <h2 className={styles.card__label__text}>ALL DEVICES</h2>
            </div>
            <div className={styles.card__list} id={styles.element}>
                <button className={styles.item}>
                    <p className={styles.item__name}>Устройство 1</p>
                </button>
                <button className={styles.item}>
                    <p className={styles.item__name}>Устройство 1</p>
                </button>
                <button className={styles.item}>
                    <p className={styles.item__name}>Устройство 1</p>
                </button>
                <button className={styles.item}>
                    <p className={styles.item__name}>Устройство 1</p>
                </button>
                <button className={styles.item}>
                    <p className={styles.item__name}>Устройство 1</p>
                </button>
                <button className={styles.item}>
                    <p className={styles.item__name}>Устройство 1</p>
                </button>
                <button className={styles.item}>
                    <p className={styles.item__name}>Устройство 1</p>
                </button>
                <button className={styles.item}>
                    <p className={styles.item__name}>Устройство 1</p>
                </button>
                <button className={styles.item}>
                    <p className={styles.item__name}>Устройство 1</p>
                </button>
                <button className={styles.item}>
                    <p className={styles.item__name}>Устройство 1</p>
                </button>
                <button className={styles.item}>
                    <p className={styles.item__name}>Устройство 1</p>
                </button>
                <button className={styles.item}>
                    <p className={styles.item__name}>Устройство 1</p>
                </button>
            </div>
            <div className={styles.card__info}>
                <div className={styles.card__info__text}>28 устройств</div>
                <button className={styles.card__info__btn} onClick={onAddDevice}>
                    <MdOutlinePlaylistAdd className={styles.icon} />
                </button>
            </div>
        </div>
    );
};

export default DevicesList;
