import React from "react";
import styles from "./ReadMoreButton.module.css";
import { Link } from "react-router-dom";
export default function ReadMoreButton({ link }: { link: string }) {
    return (
        <Link to={link} className={styles.button_link}>
            <button className={styles.read_more_button}>Читать далее</button>
        </Link>
    );
}
