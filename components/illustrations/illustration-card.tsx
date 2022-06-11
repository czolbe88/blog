import React from "react";
import {Typography} from "@mui/material";
import Styles from "./illustration-card.module.scss";

interface IllustrationCardProps {
    name: string,
    imageUrl: string,
    description?: string,
    date?: Date
}

export default function IllustrationCard(props: IllustrationCardProps) {

    return (
        <div className={Styles.illustrationCard}>
            <img src={props.imageUrl}/>
            <Typography variant={"h4"}>{props.name}</Typography>
            {props.description ? <Typography variant={"subtitle1"}>{props.description}</Typography> : null}
            {props.date ? <Typography variant={"subtitle1"}>{props.date?.toLocaleDateString()}</Typography> : null}
            {/*<hr className={"divider"}/>*/}
        </div>
    )

}