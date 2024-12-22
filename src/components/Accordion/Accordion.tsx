import React from 'react';

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
}

function Accordion(props: AccordionPropsType) {
    console.log("accordion is rendering")
        return (
            <div>
                <AccordionTitle title={props.titleValue}/>
                {!props.collapsed === true && <AccordionBody />}
            </div>
        );
    }
    

type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("title of accordion is rendered")
        return <h4>--{props.title}--</h4>
}

function AccordionBody() {
    console.log("body of accordion is rendered")
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
        </ul>
    );
}

export default Accordion;