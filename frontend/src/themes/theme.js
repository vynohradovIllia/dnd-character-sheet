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
        action: {
            active: '#8ac1fa',
            disabled: '#71a3d0',
            hoverOpacity: '#51abff',
        },
        grey: {
            "600": '#62a8ef',
            "700": '#679cd2',
            "800": '#89b3de',
            A700: '#556677', //TODO border colors for inputs
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