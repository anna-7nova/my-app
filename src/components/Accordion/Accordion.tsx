import React from 'react';

export type ItemsPropsType = {
    value: string
    title: string
}

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    items: ItemsPropsType[]
    onChange: () => void
    onClick: (value: string) => void
}

function Accordion(props: AccordionPropsType) {
    // console.log("accordion is rendering")
        return (
            <div>
                <AccordionTitle title={props.titleValue} onChange={props.onChange}/>
                {!props.collapsed === true && <AccordionBody items={props.items} onClick={props.onClick}/>}
            </div>
        );
    }
    

type AccordionTitlePropsType = {
    title: string
    onChange: ()=> void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    // console.log("title of accordion is rendered")
        return <h4 onClick={()=>props.onChange()}>--{props.title}--</h4>
}

type AccordionBodyPropsType = {
    items: ItemsPropsType[]
    onClick: (value: string)=> void
}

function AccordionBody(props: AccordionBodyPropsType) {
    // console.log("body of accordion is rendered")
    return (
        <ul>
            {props.items.map((el, index) => <li onClick={()=>props.onClick(el.value)} key={index}>{el.title}</li>)}
        </ul>
    );
}

export default Accordion;