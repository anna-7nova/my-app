import { action } from '@storybook/addon-actions';

import Accordion from './Accordion';
import { useState } from 'react';

export default {
    component: Accordion,
};

const onChangeHandler = action('it should be collapsed');
const onClickHandler = action('items was clicked');

export const CollapsedAccordion = () => {
    return (
        <Accordion titleValue="Collapsed Menu" collapsed={true} onChange={onChangeHandler} items={[]} onClick={()=> {}}/>
    )
}

export const OpenedAccordion = () => {
    return (
        <Accordion titleValue="Opened Menu" collapsed={false} onChange={onChangeHandler} onClick={(value)=> {alert(`was pushed ${value} title`)}}
        items={[{ value: "1", title: "Anna" },
            { value: "2", title: "Anton" },
            { value: "3", title: "Victor" }]}/>
    )
}

export const DefaultAccordion = () => {
    const [value, setValue] = useState<boolean>(false)
    return (
        <Accordion titleValue="Menu" collapsed={value} onChange={()=> setValue(!value)} onClick={onClickHandler}
            items={[{ value: "1", title: "Anna" },
                { value: "2", title: "Anton" },
                { value: "3", title: "Victor" }]} />
                //onChange не работает - пока не разобралась почему, работал только через onClick
    )
}