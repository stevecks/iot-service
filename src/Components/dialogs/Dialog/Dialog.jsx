import styles from "./Dialog.module.css";
import React from 'react';

const Dialog = (props) => {
    
    return (
        <div className={styles["dialog-overlay"]} >
            <dialog open className={styles.dialog}>
                {props.children}
            </dialog>
        </div>
    );
};

export default Dialog;