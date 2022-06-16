// components/layout.js

import React, {PropsWithChildren} from "react";
import Styles from "./layout.module.scss";
import Routes from "./routes/routes";
import {Typography} from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const LINKEDIN_URL = "https://www.linkedin.com/in/alex-chow/";
const GITHUB_URL = "https://github.com/czolbe88";
export default function Layout(props: PropsWithChildren<any>) {
    return (
            <div className={Styles.layoutRoot}>

                <div className={Styles.header}>
                    <Routes/>
                </div>

                <div className={Styles.bodyRoot}>
                        {props.children}
                </div>

                <div className={Styles.footerRoot}>
                    <Typography variant={"subtitle1"}>&copy; 2022 by Alex Chow</Typography>
                    {/*<div className={Styles.socialMedia}>*/}
                    <a href={"mailto: czolbe88@gmail.com"}>
                        <EmailIcon />
                    </a>
                        <GitHubIcon
                            onClick={()=>{
                                window.open(GITHUB_URL)
                            }}
                        />
                        <LinkedInIcon
                            onClick={()=>{
                                window.open(LINKEDIN_URL)
                            }}
                        />
                    {/*</div>*/}
                </div>

            </div>
    )
}