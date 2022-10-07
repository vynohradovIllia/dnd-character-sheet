import * as React from 'react';

//importing styles
import './styles/App.css'
import {useState} from "react";

function Random() {
    return <div>
        <button>
            random
        </button>
    </div>
}

function Parameter({name}) {
    const [number, setNumber] = useState(10)
    return <div>
        {name}
        <Random/>
        <div>
            <input onChange={(value) => setNumber(value.target.value)}/>
            {Math.floor((number - 10) / 2)}
        </div>
    </div>
}

function Header() {
    return <div className='header'>
        <div>
            <button>Menu</button>
            <button>Profile</button>
        </div>
        <div>
            <input placeholder={'Search'}/>
            <Random/>
        </div>
        <div>
            <button>Add character</button>
            <button>All characters</button>
        </div>
    </div>
}

function MainInfo() {
    return <div id='Main info'>
        <input placeholder={'Character name'}/>
        <input placeholder={'Level'}/>
        <div>
            <input placeholder={'Player`s name'}/>
            <Random/>
        </div>
        <div>
            <input placeholder={'Race'}/>
            <Random/>
        </div>
        <div>
            <input placeholder={'Class'}/>
            <Random/>
        </div>
        <div>
            <input placeholder={'Specialization'}/>
            <Random/>
        </div>
    </div>
}

function MainParameters() {
    return <div>
        <Parameter name='Strength'/>
        <Parameter name='Dexterity'/>
        <Parameter name='Constitution'/>
    </div>
}

function App() {

    return (
        <div>
            <div className="background"/>
            <div className='main'>
                <Header/>
                <div className='body'>

                    <MainInfo/>
                    <MainParameters/>
                </div>
            </div>
        </div>
    );
}

export default App;
