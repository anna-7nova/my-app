import React, { useState } from 'react';
import { Button} from '../Button/Button';


export const OnOff = () => {
//bll
    const [currentBtnIsOn, setCurrentBtnIsOn] = useState<boolean>(true)
    const onClickHandler = () => {
        setCurrentBtnIsOn(!currentBtnIsOn)
    }
//styles
    const indicatorStyle = {
    backgroundColor: currentBtnIsOn ? "green" : "red",
    display: "inline-block",
    borderRadius: "5px",
    border: "1px solid black",
    height: "10px",
    width: "10px",
    marginLeft: "2px",
    }

    return (
        <div onClick={onClickHandler}>
        <Button type="button"  isTurnIn={!currentBtnIsOn} value ={"off"} />
        <Button type="button"  isTurnIn={currentBtnIsOn} value ={"on"} />
        <div style={indicatorStyle}></div>
        </div>
    );
}