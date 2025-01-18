import React, { useState, MouseEvent } from 'react';

export function UncontrolledRating() {
    debugger
    console.log("rating is done")
    const [getNumber, setGetNumber] = useState<number>(0)

    const onClickHandler = (e: MouseEvent<HTMLSpanElement>) => {
        debugger
        setGetNumber(Number(e.currentTarget.getAttribute("data-name")))
    }
    return (
        <div>
            <Star name={1} selected={getNumber > 0} onClick={onClickHandler} />
            <Star name={2} selected={getNumber > 1} onClick={onClickHandler} />
            <Star name={3} selected={getNumber > 2} onClick={onClickHandler} />
            <Star name={4} selected={getNumber > 3} onClick={onClickHandler} />
            <Star name={5} selected={getNumber > 4} onClick={onClickHandler} />
        </div>);
}

type StarPropsType = {
    name: number
    selected: boolean
    onClick: (e: MouseEvent<HTMLSpanElement>) => void
}

function Star(props: StarPropsType) {
    const starStyle = {
        color: props.selected ? "green" : "black",
        fontWeight: props.selected ? "bold" : "normal"
    }
    console.log("star is rendered")
    return <span style={starStyle} data-name={props.name} onClick={(e)=>props.onClick(e)}>star </span>
}
