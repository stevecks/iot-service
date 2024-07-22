import "./SensorCard.css";
import React from 'react';
import { MdModeEdit } from "react-icons/md";


const SensorCard = () => {

    return (
        <div className="card">
            <div className="content">
                <div className="content__text">
                    <h2 className="content__text__name">Датчик 1</h2>
                    <div className="content__text__descr">Описание Описание Описание Описание Описание</div>
                </div>
                <div className="content__info">
                    <div className="content__info__table"></div>
                    <div className="content__info__timetable"></div>
                </div>
            </div>
            <div className="btn-box">
                    <button className="btn-box__button">
                        <MdModeEdit className="icon"/>
                    </button>
                </div>
        </div>
    );
};

export default SensorCard;