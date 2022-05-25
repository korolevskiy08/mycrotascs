import React, {MouseEvent} from 'react';
import './App.css';
import {Header} from "./components/Header";
import {Body} from "./components/Body";
import {Footer} from "./components/Footer";
import {NewComponents} from "./components/NewComponents";
import {Button} from "./components/Button";

const topCars = [
    {manufacturer: 'BMW', model: 'm5cs'},
    {manufacturer: 'Mercedes', model: 'e63s'},
    {manufacturer: 'Audi', model: 'rs6'}
]

function App() {

    const ButtonFoo1 = (subscriber: string) => {
        console.log(subscriber)
    }

    const ButtonFoo2 = (subscriber: string) => {
        console.log(subscriber)
    } 

    const ButtonFoo3 = (text: string) => {
        console.log(text)
    }

    return (
        <div className="App">
            <h1>First Task</h1>

            <Header title={'NEW HEADER'}/>
            <Body titleForBody={'NEW BODY'}/>
            <Footer titleForFooter={'NEW FOOTER'}/>

            <h1>Second Task</h1>

            <div>
                <NewComponents topCars={topCars}/>
            </div>

            <h1>Third Tasks</h1>

            <Button name={'MyYouTubeChanel1'} callBack={()=>ButtonFoo1('Im Vasya')}/>
            <Button name={'MyYouTubeChanel2'} callBack={()=>ButtonFoo2('Im Pablo')}/>
            <Button name={'MyYouTubeChanel3'} callBack={ ()=>ButtonFoo3('im stupid button')}/>

        </div>
    );
}

export default App;
