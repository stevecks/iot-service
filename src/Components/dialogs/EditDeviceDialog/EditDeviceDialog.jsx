import styles from "./EditDeviceDialog.module.css";
import React, { useState } from 'react';
import Dialog from "../Dialog/Dialog";

const EditDeviceDialog = ({ onClose }) => {
    const [formData, setFormData] = useState(
        {
            name: "",
            descr: "",
            latitude: "",
            longitude: ""
        }
    );

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    return (
        <>
            <Dialog>
                <div className={styles.content}>
                    <h2 className={styles.content__label}>Редактировать устройство</h2>
                    <form className={styles.content__form}>
                        <label className={styles.form__label} htmlFor="name">Название</label>
                        <input
                            className={styles["form__input-box__input"]}
                            type="text"
                            name="name"
                            id="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder='Введите название устройства'
                        />
                        <label className={styles.form__label} htmlFor="descr">Описание</label>
                        <textarea
                            className={styles["form__input-box__textarea"]}
                            name="descr"
                            id="descr"
                            value={formData.descr}
                            onChange={handleChange}
                            placeholder='Введите описание устройства'
                            rows="3"
                        />

                        <label className={styles.form__label} htmlFor="latitude">Широта</label>
                        <input
                            className={styles["form__input-box__input"]}
                            type="text"
                            name="latitude"
                            id="latitude"
                            value={formData.latitude}
                            onChange={handleChange}
                            placeholder='Введите широту устройства'
                        />
                        <label className={styles.form__label} htmlFor="longitude">Долгота</label>
                        <input
                            className={styles["form__input-box__input"]}
                            type="text"
                            name="longitude"
                            id="longitude"
                            value={formData.longitude}
                            onChange={handleChange}
                            placeholder='Введите долготу устройства'
                        />
                    </form>
                    <div className={styles["content__btn-box"]}>
                        <button className={styles.button} onClick={onClose}>Отмена</button>
                        <button
                            className={styles.button}
                            disabled={!formData.name || !formData.descr || !formData.latitude || !formData.longitude}
                        >Сохранить</button>
                    </div>
                </div>
            </Dialog>
        </>
    );
};

export default EditDeviceDialog;
