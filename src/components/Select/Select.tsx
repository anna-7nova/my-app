import React, { FormEvent, useState } from 'react';

export type ItemsPropsType = {
    value: string
    title: string
}

export type SelectPropsType = {
    items: ItemsPropsType[]
    onClick: (value: string) => void
}

export const Select = ({ items, onClick }: SelectPropsType) => {
    const [collapsed, setCollapsed] = useState(true)
    const [currentChoice, setCurrentChoice] = useState("none")

    //handlers
    const onChangeHandler = (e: FormEvent<HTMLDivElement>) => {
        setCollapsed(false)
    }

    const choiceHandler = (e: FormEvent<HTMLDivElement>) => {
        setCurrentChoice(e.currentTarget.innerHTML)
        setCollapsed(true)
    }

    const listOptions = items.map(el => <div onClick={choiceHandler} key={el.value}>{el.title}</div>)

    return (
        <>
            {collapsed
                ? <div onClick={onChangeHandler} >{currentChoice}</div>
                : <>
                <div onClick={choiceHandler}>none</div> 
                {listOptions}
                </>}
        </>
    );
}

/*

<FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Country</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={currentChoice}
    label="Country"
    onChange={onChangeHandler}
  >
    listOptions
  </Select>
</FormControl>

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
