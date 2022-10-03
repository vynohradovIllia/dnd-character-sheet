import './styles/App.css'
import './styles/navbar.css';
import {Button} from "@mui/material";

function App() {
    return (
        <div className="App">
            <div className="main-bg"/>
            <div className='absolute-util'>
                <Button variant="outlined">Outlined</Button>
            </div>
        </div>
    );
}

export default App;
