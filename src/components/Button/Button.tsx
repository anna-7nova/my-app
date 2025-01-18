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
        //style
        const btnTypeStyle = (typeOfButton: string) => {
            let style = "white"
            if(typeOfButton==="on") {
                style="green"
            } else if (typeOfButton==="off") {
               style="red"
            }
                return style
        }
        const btnStyle = {
            backgroundColor: btnTypeStyle(typeOfButton),
        }

            return (
                <>
                    <input type={props.type} value={typeOfButton} style={btnStyle}/>
                </>
            );
}


