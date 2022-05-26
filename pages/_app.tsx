import '../styles/globals.scss'
import type {AppProps} from 'next/app'
import {ThemeProvider} from '@mui/material/styles';
import React from 'react';
import theme from "../theme";
import Layout from "../components/layout";
import "@fontsource/roboto";
import "@fontsource/oswald";

function MyApp({Component, pageProps}: AppProps) {
    return (
        <React.StrictMode>
            <ThemeProvider theme={theme}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ThemeProvider>
        </React.StrictMode>
    );

}

export default MyApp
