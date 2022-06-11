// components/layout.js

import React, {PropsWithChildren} from "react";
import Styles from "./layout.module.scss";
import Routes from "./routes/routes";
import {Typography} from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

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
                        <EmailIcon />
                        <GitHubIcon />
                        <LinkedInIcon />
                    {/*</div>*/}
                </div>

            </div>
    )
}