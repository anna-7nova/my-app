import React, { useState} from 'react';

export function UncontrolledRating() {
    debugger
    console.log("rating is done")
    const [value, setValue] = useState<number>(0)

    const onClickHandler = (value: 1 | 2| 3 | 4 | 5) => {
        debugger
        setValue(value)
    }
    return (
        <div>
            <Star value={1} selected={value > 0} onClick={onClickHandler} />
            <Star value={2} selected={value > 1} onClick={onClickHandler} />
            <Star value={3} selected={value > 2} onClick={onClickHandler} />
            <Star value={4} selected={value > 3} onClick={onClickHandler} />
            <Star value={5} selected={value > 4} onClick={onClickHandler} />
        </div>);
}

type StarPropsType = {
    selected: boolean
    value: 1 | 2| 3 | 4 | 5
    onClick: (value: 1 | 2| 3 | 4 | 5) => void
}

function Star(props: StarPropsType) {
    const starStyle = {
        color: props.selected ? "green" : "black",
        fontWeight: props.selected ? "bold" : "normal"
    }
    console.log("star is rendered")
    return <span style={starStyle} onClick={()=>props.onClick(props.value)}>star </span>
}
