// components/layout.js

import React from "react";
import Header from "./header/header";

type layoutProps = {
    children: React.ReactNode
}

export default function Layout({children}: layoutProps) {
    return (
        <React.Fragment>
            <Header />
            <main>{children}</main>
        </React.Fragment>
    )
}