import * as React from 'react';

//importing icons
import SearchIcon from '@mui/icons-material/Search'; //TODO
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

//importing styles
import {theme} from './themes/theme'
import './styles/App.css'
import './styles/navbar.css';

//importing IU components
import {Button, IconButton} from "@mui/material";
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import TextField from '@mui/material/TextField';

function SimpleBottomNavigation() {
    const [value, setValue] = React.useState(0);
    return (
        <Box sx={{width: 'auto', height: '56px', display: 'flex', borderBottom: 'solid', borderWidth: '1px' }} >
            <div style={{height: 'inherit', width: '35%', left: 0, display: 'flex', justifyContent: 'left'}}>
                <div style={{weight: '112px', height: 'inherit'}}>
                    <BottomNavigationAction icon={<MenuOutlinedIcon/>} sx={{height: 'inherit', weight: '56px', padding: 0}} />
                    <BottomNavigationAction icon={<AccountCircleOutlinedIcon/>} sx={{height: 'inherit', weight: '56px', padding: 0}} />
                </div>
            </div>
            {/*<BottomNavigation sx={{backgroundColor: '#ffffff00'}}*/}
            {/*                  showLabels*/}
            {/*                  value={value}*/}
            {/*                  onChange={(event, newValue) => {*/}
            {/*                      setValue(newValue);*/}
            {/*                  }}*/}
            {/*>*/}
            <TextField id="filled-basic" label="Search" variant="filled" fullWidth sx={{display: 'block', width: '30%', borderLeft: 'solid', borderRight: 'solid', borderWidth: '1px'}}/>

            <div style={{height: 'inherit', width: '35%',  right: 0, display: 'flex', justifyContent: 'right'}}>
                <div style={{weight: '112px', height: 'inherit'}}>
                    <BottomNavigationAction icon={<PersonAddOutlinedIcon/>} sx={{height: 'inherit', weight: '56px', padding: 0}} />
                    <BottomNavigationAction icon={<ArticleOutlinedIcon/>} sx={{height: 'inherit', weight: '56px', padding: 0}} />
                </div>
            </div>
            {/*</BottomNavigation>*/}
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
                    <Button variant="outlined" sx={{marginTop: '24px'}}>Generate character</Button>
                </div>
            </ThemeProvider>
        </div>
    );
}

export default App;
