import React from 'react';

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onClick: ()=> void
}

function Accordion(props: AccordionPropsType) {
    console.log("accordion is rendering")
        return (
            <div>
                <AccordionTitle title={props.titleValue} onClick={props.onClick}/>
                {!props.collapsed === true && <AccordionBody />}
            </div>
        );
    }
    

type AccordionTitlePropsType = {
    title: string
    onClick: ()=> void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("title of accordion is rendered")
        return <h4 onClick={()=>props.onClick()}>--{props.title}--</h4>
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