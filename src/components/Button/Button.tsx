import React from 'react';

export type ButtonType = {
    type: "radio" | "button"
    isTurnIn?: boolean
    value: "on" | "off" 
}

export const Button = (props: ButtonType) => {
        //bll
        const disabledBtn = ""
        const typeOfButton = props.isTurnIn ? props.value : disabledBtn
            return (
                <>
                    <input type={props.type} value={typeOfButton} />
                </>
            );
}


