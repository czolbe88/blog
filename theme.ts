import {createTheme} from "@mui/material";

const theme = createTheme({

    typography: {
        h1: {
            /* Oswald H1 */
            fontFamily: 'Oswald',
            fontStyle: 'normal',
            fontWeight: 700,
            fontSize: 48,
            textTransform: 'uppercase',
        },
        h2: {
            fontFamily: 'Oswald',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: 32,
            textTransform: 'uppercase',
        },
        h3:{
            fontFamily: 'Oswald',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: 24,
            textTransform: 'uppercase',
        },
        h4:{
            fontFamily: 'Oswald',
            fontStyle: 'normal',
            fontWeight: 700,
            fontSize: 16,
            textTransform: 'uppercase',
            letterSpacing: "0.1em"
        },
        // @ts-ignore
        hSpaced:{
            fontFamily: 'Oswald',
            fontStyle: 'normal',
            fontWeight: 200,
            fontSize: 48,
            textTransform: 'uppercase',
            letterSpacing: "0.25em"

        },
        body1: {
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: 18,
        },
        subtitle1: {
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: 12,
        },

        button: {
            fontStyle: 'italic',
        },
    },


});

export default theme;