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

export const ControlledInput = () => {
    const[title, setTitle]=useState("")
    const onChangeHandler=(e: ChangeEvent<HTMLInputElement>)=> {
        setTitle(e.currentTarget.value)
    }
    return (
        <>
        <input onChange={onChangeHandler} value={title}/>
        </>
    )
}

export const ControlledCheckbox = () => {
    const[value, setValue]=useState(true)
    const onChangeHandler=(e: ChangeEvent<HTMLInputElement>)=> {
        setValue(e.currentTarget.checked)
    }
    return (
        <>
        <input type={"checkbox"} onChange={onChangeHandler} checked={value}/>
        </>
    )
}

export const ControlledSelect = () => {
    const[value, setValue]=useState<string | undefined>(undefined)
    const onChangeHandler=(e: ChangeEvent<HTMLSelectElement>)=> {
        setValue(e.currentTarget.value)
    }
    return (
        <>
        <select value={value} onChange={onChangeHandler}>
            <option>none</option>
            <option value={"1"}>Grodno</option>
            <option value={"2"}>Minsk</option>
            <option value={"3"}>Brest</option>
        </select>
        </>
    )
}


