import {Typography} from "@mui/material";
import React, {PropsWithoutRef} from "react";


const TitleRow = (props: PropsWithoutRef<any>) => {
    return (
        <div>
            {/* @ts-ignore */}
            <Typography variant={"hSpaced"}>{props.text}</Typography>
        </div>
    )
}

export default TitleRow;