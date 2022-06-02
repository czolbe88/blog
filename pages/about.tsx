import React from "react";
import TitleRow from "../components/titlerow/titlerow";
import Styles from "./about.module.scss";
import {Typography} from "@mui/material";

export default function About() {
    return (
        <div>
            <TitleRow text={"About"}/>
            <hr className={"divider"}/>


            <div className={Styles.aboutContent}>
                <img id={Styles.profilePic} src="./images/about.jpg"/>

                <div className={Styles.aboutWriteup}>
                    <Typography variant={"h3"}>
                        A Programmer
                    </Typography>

                    <Typography variant={"body1"}>
                        I r programmer. beep boop.
                    </Typography>
                </div>


            </div>


        </div>
    )
}