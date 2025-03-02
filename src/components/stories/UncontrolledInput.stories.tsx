import { action } from '@storybook/addon-actions';
import { Rating } from '../Rating/Rating';
import { ChangeEvent, useRef, useState } from 'react';

export default {
    title: "Input",
    component: <input type="text" />
};


export const UncontrolledInput = () => {
    return (
        <>
        <input />
        </>
    )
}

export const SeeValueFromInput = () => {
    const[title, setTitle]=useState("")
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        return setTitle(e.currentTarget.value)
    }
    return (
        <>
        <input onChange={onChangeHandler} value={title}/>
        <span>value: {title}</span>
        </>
    )
}

export const GetValueAfterPressButton = () => {
    const inputRef=useRef<HTMLInputElement>(null)
    const[title, setTitle]=useState("")
    const onClickHandler=()=>{
        const getValueFromRef = inputRef.current as HTMLInputElement
        setTitle(getValueFromRef.value)
    }

    return (
        <>
        <input ref={inputRef}/>
        <button onClick={onClickHandler}>save</button>
        <span>value: {title}</span>
        </>
    )
}


