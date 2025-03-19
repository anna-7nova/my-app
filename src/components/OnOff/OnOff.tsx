import React from 'react';
import { Button} from '../Button/Button';

type OnOffType = {
onClick: ()=> void
on: boolean
}

export const OnOff = ({onClick, on } : OnOffType) => {
//styles
    const indicatorStyle = {
    backgroundColor: on ? "green" : "red",
    display: "inline-block",
    borderRadius: "5px",
    border: "1px solid black",
    height: "10px",
    width: "10px",
    marginLeft: "2px",
    }

    return (
        <div onClick={onClick}>
        <Button type="button"  isTurnIn={!on} value ={"off"} />
        <Button type="button"  isTurnIn={on} value ={"on"} />
        <div style={indicatorStyle}></div>
        </div>
    );
}