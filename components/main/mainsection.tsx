import React, {PropsWithChildren} from "react";
import {Typography} from "@mui/material";

interface MainSectionProps {
    title: string;
}

export default function MainSection(props: PropsWithChildren<MainSectionProps>) {
    return (
        <React.Fragment>
            {/*@ts-ignore*/}
            <Typography variant={"hSpaced"}>{props.title}</Typography>
            <hr className={"divider"}/>
            {props.children}
        </React.Fragment>
    )
}