import "./DevicesList.css";
import React from 'react';
import { MdOutlinePlaylistAdd } from "react-icons/md";
const DevicesList = () => {
    
    return (
        <div className="card">
            <div className="card__label">
                <h2 className="card__label__text">ALL DEVICES</h2>
            </div>
            <div className="card__list" id="element">
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
            </div>
            <div className="card__info">
                <div className="card__info__text">28 устройств</div>
                <button className="card__info__btn">
                <MdOutlinePlaylistAdd className="icon"/>
                </button>
            </div>
        </div>
    );
};

export default DevicesList;