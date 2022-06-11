import TitleRow from "../titlerow/titlerow";
import React, {PropsWithChildren} from "react";

interface MainSectionProps {
    title: string;
}

export default function MainSection(props: PropsWithChildren<MainSectionProps>) {
    return (
        <React.Fragment>
            <TitleRow text={props.title}/>
            <hr className={"divider"}/>
            {props.children}
        </React.Fragment>
    )
}