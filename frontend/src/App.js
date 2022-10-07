import * as React from 'react';
import {useState} from 'react';
import i18next from "i18next";
import './styles/App.css'

function Random() {
    return <div>
        <button>
            random
        </button>
    </div>
}

function PrimaryParam({name, onChange}) {
    const [number, setNumber] = useState(10)
    return <div>
        {i18next.t(name)}
        <Random/>
        <div>
            <input onChange={onChange}/>
            {Math.floor((number - 10) / 2)}
        </div>
    </div>
}

function PrimaryParameters({params, setParams}) {
    return <div>
        <PrimaryParam name={"param.STR"}/>
        <PrimaryParam name={"param.DEX"}/>
        <PrimaryParam name={"param.CON"}/>
        <PrimaryParam name={"param.INT"}/>
        <PrimaryParam name={"param.WIS"} onChange={(value) => setParams({...params,wisdom:Number(value.target.value)})}/>
        <PrimaryParam name={"param.CHA"}/>
    </div>
}

function SecondaryParam({name, number}){
    return <div>
        {i18next.t(name)}
        {number}
    </div>
}

function SecondaryParameters({params}) {
    return <div>
        <SecondaryParam name={"param.prof_bonus"} number={2 + (Math.floor((params.level-1)/4))}/>
        <SecondaryParam name={"param.inspiration"} number={0}/>
        <SecondaryParam name={"param.passive_wisdom"} number={10 + Math.floor((params.wisdom - 10) / 2)}/>
    </div>
}

function Skills() {
    return <div>

    </div>
}

function Header() {
    return <div className='header'>
        <div>
            <button>Menu</button>
            <button>Profile</button>
        </div>
        <div>
            <input placeholder={i18next.t("search")}/>
            <Random/>
        </div>
        <div>
            <button>Add character</button>
            <button>All characters</button>
        </div>
    </div>
}

function MainInfo({params, setParams}) {
    return <div id='Main info'>
        <input placeholder={i18next.t("player_name")}/>
        <input placeholder={i18next.t("param.level")} onChange={(value) => setParams({...params,level:Number(value.target.value)})}/>
        <div>
            <input placeholder={i18next.t("character_name")}/>
            <Random/>
        </div>
        <div>
            <input placeholder={i18next.t("param.race")}/>
            <Random/>
        </div>
        <div>
            <input placeholder={i18next.t("param.class")}/>
            <Random/>
        </div>
        <div>
            <input placeholder={i18next.t("param.spec")}/>
            <Random/>
        </div>
    </div>
}

function ParametersAndSkills({params, setParams}) {
    return <div>
        <PrimaryParameters params={params} setParams={setParams}/>
        <SecondaryParameters params={params}/>
        <Skills/>
    </div>;
}

function App() {
    const [params, setParams] = useState({level: 1, wisdom: 10})

    return (<div>
            <div className="background"/>
            <div className='main'>
                <Header/>
                <div className='body'>
                    <MainInfo params={params} setParams={setParams}/>
                    <ParametersAndSkills params={params} setParams={setParams}/>
                </div>
            </div>
        </div>);
}

export default App;
