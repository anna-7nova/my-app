import { useState } from 'react';
import { ItemsPropsType, Select } from './Select';

export default {
    component: Select,
};

export const DefaultSelect = () => {
//busines logic
const data: ItemsPropsType[] = [
  {value: "1", title: "Anna"},
  {value: "2", title: "Anton"},
  {value: "3", title: "Viktor"},
]

//states
  const [currentChoice, setCurrentChoice] = useState("")


    return (
        <Select items={data} onClick={(value: string)=>{setCurrentChoice(value)}} propsValue={currentChoice}/>
    )
}

export const SelectWithValue = () => {
//busines logic
const data: ItemsPropsType[] = [
  {value: "1", title: "Italy"},
  {value: "2", title: "France"},
  {value: "3", title: "Norway"},
]

//states
  const [currentChoice, setCurrentChoice] = useState("2")


    return (
        <Select items={data} onClick={(value: string)=>{setCurrentChoice(value)}} propsValue={currentChoice}/>
    )
}