import {createTheme} from "@mui/material/styles";

export const theme = createTheme({
    palette: {
        primary: {
            main: '#be7a38',
            light: '#b80dd0',
            dark: '#074481',
            contrastText: '#4188d0',
        },
        secondary: {
            main: '#11cb5f',
        },
        text: {
            primary: '#2293ff',
            secondary: '#ffd2f0',
            disabled: '#93af41',
        },
    },
    components: {
        MuiButtonBase: {
            defaultProps: {
                disableRipple: true,
            },
        },
    },
});