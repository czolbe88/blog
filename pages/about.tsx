import React from "react";
import Styles from "./about.module.scss";
import {Typography} from "@mui/material";
import MainSection from "../components/main/mainsection";

export default function About() {
    return (
        <MainSection title={"About"}>

            <div className={Styles.aboutContent}>
                <img id={Styles.profilePic} src="./images/about.jpg"/>

                <div className={Styles.aboutWriteup}>
                    <Typography variant={"h3"}>
                        A Programmer
                    </Typography>

                    <Typography variant={"body1"}>
                        {"A software developer's blog. It is under construction 🚧 and there is nothing much to see here at the moment. Have you met my human?"}
                    </Typography>
                </div>

            </div>
        </MainSection>
    )
}