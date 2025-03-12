import React, { useState } from 'react';

export type ItemsPropsType = {
    value: string
    title: string
}

export type SelectPropsType = {
    items: ItemsPropsType[]
    onClick: (value: string) => void
}

const onChangeHandler = () => {

}

export const Select = ({ items, onClick }: SelectPropsType) => {
    const [collapsed, setCollapsed] = useState(true)
    const [currentChoice, setCurrentChoice] = useState("none")

    return (
        <>
            collapsed
            ?  <div  onChange={onChangeHandler}>{currentChoice}</div>
            : {items.map(el => <div key={el.value}>{el.title}</div>)}
        </>
    );
}

/*
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
    */
