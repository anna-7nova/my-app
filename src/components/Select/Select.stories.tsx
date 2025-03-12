import { ItemsPropsType, Select } from './Select';

export default {
    component: Select,
};

export const DefaultSelect = () => {
//busines logic
const data: ItemsPropsType[] = [
  {value: "1", title: "Italy"},
  {value: "2", title: "France"},
  {value: "3", title: "Norway"},
]


    return (
        <Select items={data} onClick={(value: string)=>{}}/>
    )
}