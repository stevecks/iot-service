import styles from "./Footer.module.css";
import React from 'react';
// import { Button } from '@mui/material';
// import IconButton from '@mui/material/IconButton';
//import TextField from '@mui/material/TextField';

const Footer = () => {

    return (
        <div className={styles.container}>
            <footer className={styles.footer}>
                <div className={styles.footer__info}>
                <p className={styles.footer__info__text}>Practice</p>
                <p className={styles.footer__info__text}>IoT Service</p>
                <p className={styles.footer__info__text}>2024</p>
                </div>
            </footer >
        </div>
    );
};

export default Footer;