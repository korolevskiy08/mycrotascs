import React, {useState} from 'react';
import './App.css';
import {Header} from "./components/Header";
import {Body} from "./components/Body";
import {Footer} from "./components/Footer";
import {NewComponents} from "./components/NewComponents";
import {Button} from "./components/Button";
import {FilterComponent} from "./components/FilterComponent";


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
// 4 task
    let [a, setA] = useState(1);

    const onClickHandler = () => {
        setA(++a);
        console.log(a)
    }

    const deleteValue = () => {
        setA(0)
    }

// five Task
    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])

    const [filter, setFilter] = useState('All')

    let filteredMoney = money

    const onClickFilterHandler = (nameBytton: string) => {
        setFilter(nameBytton)
    }

    if (filter === 'RUBLS') {
        filteredMoney = money.filter(el => el.banknots === 'RUBLS')
    }
    if (filter === 'Dollars') {
        filteredMoney = money.filter(el => el.banknots === 'Dollars')
    }

    return (
        <div className="App">
            <h1>First Task</h1>

            <Header title={'NEW HEADER'}/>
            <Body titleForBody={'NEW BODY'}/>
            <Footer titleForFooter={'NEW FOOTER'}/>

            <h1>Second Task</h1>


            <NewComponents topCars={topCars}/>

            <h1>Third Tasks</h1>

            <Button name={'MyYouTubeChanel1'} callBack={() => ButtonFoo1('Im Vasya')}/>
            <Button name={'MyYouTubeChanel2'} callBack={() => ButtonFoo2('Im Pablo')}/>
            <Button name={'MyYouTubeChanel3'} callBack={() => ButtonFoo3('im stupid button')}/>

            <h1>Fourth Task</h1>

            <h1>{a}</h1>
            <button onClick={onClickHandler}>Click</button>
            <button onClick={deleteValue}>Delete</button>
            <h1>Five Task</h1>

            <FilterComponent callBack={onClickFilterHandler} filteredMoney={filteredMoney}/>

        </div>
    );
}

export default App;
