import React from "react";
import styles from "./header.module.scss";
import Link from "next/link";
import Routes from "../routes/routes";




//not in use
const Header = () => {
    return (
        <div className={styles.header}>
            <Routes/>
        </div>
    )
}

export default Header;