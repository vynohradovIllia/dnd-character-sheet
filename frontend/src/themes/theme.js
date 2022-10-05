import {createTheme} from "@mui/material/styles";

export const theme = createTheme({
    palette: {
        primary: {
            main: '#be7a38',
            light: '#b80dd0',
            dark: '#074481',
            contrastText: '#e14444',
        },
        secondary: {
            main: '#11cb5f',
        },
        text: {
            primary: 'rgba(255,255,255,0.9)',
            secondary: '#ffffff',
            disabled: '#93af41',
        },
    },
    components: {
        MuiButtonBase: {
            defaultProps: {
                disableRipple: false,
            },
        },
    },
});