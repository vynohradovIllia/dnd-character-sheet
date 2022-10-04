import * as React from 'react';

//importing icons
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';

//importing styles
import {theme} from './themes/theme'
import './styles/App.css'
import './styles/navbar.css';

//importing IU components
import {Button} from "@mui/material";
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import TextField from '@mui/material/TextField';



function SimpleBottomNavigation() {
    const [value, setValue] = React.useState(0);

    return (
        <Box sx={{width: 150, display: 'flex', justifyContent: 'right', marginLeft: 'auto'}} >
            <TextField id="filled-basic" label="Filled" variant="filled"/>
            <BottomNavigation sx={{backgroundColor: '#ffffff00'}}
                              showLabels
                              value={value}
                              onChange={(event, newValue) => {
                                  setValue(newValue);
                              }}
            >
                <BottomNavigationAction icon={<AccountCircleOutlinedIcon/>} />
                <BottomNavigationAction icon={<ArticleOutlinedIcon/>} />
            </BottomNavigation>
        </Box>
    );
}

function App() {

    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <div className="main-bg"/>
                <div className='absolute-util'>
                    <SimpleBottomNavigation/>
                    <Button variant="outlined">Generate character</Button>
                </div>
            </ThemeProvider>
        </div>
    );
}

export default App;
