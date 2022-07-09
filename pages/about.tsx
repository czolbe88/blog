import React from "react";
import Styles from "./about.module.scss";
import {Typography} from "@mui/material";
import MainSection from "../components/main/mainsection";

export default function About() {
    return (
        <MainSection title={"ABOUT ME"}>

            <div className={Styles.aboutContent}>
                <img id={Styles.profilePic} src="./images/about2.jpg"/>

                <div className={Styles.aboutWriteup}>
                    <Typography variant={"h3"}>
                        {"Or... life stages of (a) homo sapiens male"}
                    </Typography>

                    <Typography variant={"subtitle1"}>Coming Soon</Typography>

                    {/*<Typography variant={"h4"}>*/}
                    {/*</Typography>*/}

                </div>

            </div>
        </MainSection>
    )
}