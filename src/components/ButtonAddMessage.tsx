import React from 'react';

type ButtonAddMessagePropsType = {
    name: string
    callBack: () => void
}


export const ButtonAddMessage = (props: ButtonAddMessagePropsType) => {

    const onclickButtonHandler = () => {
        props.callBack()
    }

    return (
        <button onClick={onclickButtonHandler}>{props.name}</button>
    );
};

