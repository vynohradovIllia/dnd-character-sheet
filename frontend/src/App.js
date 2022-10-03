import * as React from 'react';
import './styles/App.css'
import './styles/navbar.css';
import {Button} from "@mui/material";
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

function SimpleBottomNavigation() {
    const [value, setValue] = React.useState(0);

    return (
        <Box sx={{ width: 150 }}>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction icon="" />
                <BottomNavigationAction label="" />
            </BottomNavigation>
        </Box>
    );
}

function App() {

    return (
        <div className="App">
            <div className="main-bg"/>
            <div className='absolute-util'>
                <SimpleBottomNavigation/>
                <Button variant="outlined">Outlined</Button>
            </div>

        </div>
    );
}

export default App;
