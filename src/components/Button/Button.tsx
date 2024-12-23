import React from 'react';

export type ButtonType = {
    name?: string
    type: "radio" | "button"
    isTurnIn: boolean
}

export const Button = (props: ButtonType) => {
    {
        if (props.name === "on" && props.isTurnIn === true) {
            return (
                <>
                    <input type={props.type} name={props.name} value={"on"}/>
                </>
            );
        } else if (props.name === "off" && props.isTurnIn === false) {
            return (
                <>
                    <input type={props.type} name={props.name} value={"off"}/>
                </>
            );
        } else {
            return (
                <>
                    <input type={props.type} name={props.name}/>
                </>
            );
        }
    }

}


