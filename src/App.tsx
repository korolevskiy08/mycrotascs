import React from 'react';
import './App.css';
import {Header} from "./components/Header";
import {Body} from "./components/Body";
import {Footer} from "./components/Footer";
import {NewComponents} from "./components/NewComponents";

const topCars = [
    {manufacturer:'BMW', model:'m5cs'},
    {manufacturer:'Mercedes', model:'e63s'},
    {manufacturer:'Audi', model:'rs6'}
]

function App() {
    return (
        <div className="App">
            <Header title={'NEW HEADER'}/>
            <Body titleForBody={'NEW BODY'}/>
            <Footer titleForFooter={'NEW FOOTER'}/>

            <div>
                <NewComponents topCars={topCars} />
            </div>
        </div>
    );
}

export default App;
