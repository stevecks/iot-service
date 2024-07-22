import styles from "./Header.module.css";
import React from 'react';
import { FaRegUser } from "react-icons/fa";

const Header = () => {

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h2 className={styles.header__logo}>IoT Service</h2>
                <div className={styles.header__user}>
                    <div className={styles.header__user__info}>anna</div>
                    <div className={styles.header__user__icon}>
                        <FaRegUser className={styles.icon}/>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;