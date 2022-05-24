import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {ThemeProvider} from '@mui/material/styles';
import React from 'react';
import theme from "../theme";
import Layout from "../components/layout";


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
