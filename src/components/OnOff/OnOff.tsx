import React from 'react';

type OnOffType = {
    value?: string
    style?: string
    type: "radio" | "button"
}

export const OnOff = (props: OnOffType) => {
    return (
        <>
        <input type={props.type} value={props.value}/>
        </>
    );
}


