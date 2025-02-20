import { action } from '@storybook/addon-actions';

import Accordion from './Accordion';
import { useState } from 'react';

export default {
    component: Accordion,
};


const onChangeHandler = action('onChange')

export const CollapsedAccordion = () => {
    return (
        <Accordion titleValue="Collapsed Menu" collapsed={true} onClick={onChangeHandler} />
    )
}

export const OpenedAccordion = () => {
    return (
        <Accordion titleValue="Opened Menu" collapsed={false} onClick={() => { }} />
    )
}

export const DefaultAccordion = () => {
    const [collapsed, setCollapsed] = useState(true)
    const onClickAccordionHandler = () => setCollapsed(!collapsed)
    return (
        <Accordion titleValue="Menu" collapsed={collapsed} onClick={onClickAccordionHandler} />
    )
}