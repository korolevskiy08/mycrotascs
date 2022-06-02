import React, {ChangeEvent, MouseEvent, useState} from "react";

type FullInputType = {
    addMassage: (title: string) => void
}

export const FullInput = (props: FullInputType) => {

    let [title, setTitle] = useState('')
    console.log(title)
    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }

    const onClickButtonHandler = () => {
        props.addMassage(title)
        setTitle('')
    }

    return (
        <div>
            <h1>MycroTasks Input</h1>
            <div>
                <input value={title} onChange={onChangeInputHandler}/>
                <button onClick={onClickButtonHandler}>+</button>
            </div>

        </div>
    )
}