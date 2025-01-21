import React from 'react';

export type ValueType = 0 | 1 | 2 | 3 | 4 | 5 

type RatingPropsType = {
    value: ValueType
    onClick: (value: ValueType) => void
}

export function Rating(props: RatingPropsType) {
    debugger
    console.log("rating is done")
        return (
        <div>
            <Star value={1} selected={props.value > 0} onClick={props.onClick}/>
            <Star value={2} selected={props.value > 1} onClick={props.onClick}/>
            <Star value={3} selected={props.value > 2} onClick={props.onClick}/>
            <Star value={4} selected={props.value > 3} onClick={props.onClick}/>
            <Star value={5} selected={props.value > 4} onClick={props.onClick}/>
        </div>);
}

type StarPropsType = {
    value: ValueType
    selected: boolean
    onClick: (value: ValueType) => void
}

function Star(props: StarPropsType) {
    console.log("star is rendered")
    return <span onClick={()=>props.onClick(props.value)}>
        {props.selected === true ? <b> star</b> : " star"}
        </span>
}
