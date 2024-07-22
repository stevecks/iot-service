import "./DeviceCard.css";
import React from 'react';
import { MdModeEdit } from "react-icons/md";


const DeviceCard = () => {

    return (
        <div className='card'>
            <div className="card__info">
                <div className="card__info__description">
                    <h1 className="card__header">Устройство 1</h1>
                    <label htmlFor="description">Описание Описание Описание</label>
                </div>
                <button className="card__info__button">
                <MdModeEdit className="card__info__icon"/>
                </button>  
            </div>
        </div>
    );
};

export default DeviceCard;