import Link from "next/link";
import React from "react";
import Styles from "./routes.module.scss";
import {Typography} from "@mui/material";

const Routes = () => {
    return (
        <div className={Styles.routes}>
            <Typography variant={"h4"}>
                <Link href={"/photography"}>
                    photography</Link>
            </Typography>
            <Typography variant={"h4"}>
                <Link href={"/illustrations"}>
                    illustrations
                </Link>
            </Typography>
            <Typography variant={"h4"}>
                <Link href={"/blog"}>
                    blog
                </Link>
            </Typography>
            <Typography variant={"h4"}>
                <Link href={"/about"}>
                    about
                </Link>
            </Typography>
        </div>
    )
}

export default Routes;