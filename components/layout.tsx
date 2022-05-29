// components/layout.js

import React, {PropsWithChildren} from "react";
import Styles from "./layout.module.scss";
import Routes from "./routes/routes";


export default function Layout(props: PropsWithChildren<any>) {
    return (
            <div className={Styles.layoutRoot}>

                <div className={Styles.header}>
                    <Routes/>
                </div>

                <div className={Styles.bodyRoot}>
                    <main>
                        {props.children}
                    </main>
                </div>

            </div>
    )
}