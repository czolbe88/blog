import React, {PropsWithChildren} from "react";
import Styles from "./body.module.scss";
import {Typography} from "@mui/material";

//not in use
export default function Body(props: PropsWithChildren<any>) {
    return (
        <div className={Styles.bodyRoot}>
            <main>
                {props.children}
            </main>
        </div>
    )
}