import React from 'react';
import { Button} from '../Button/Button';

type OnnOffType = {
    isTurnIn: boolean
}

export const OnOff = (props: OnnOffType) => {
    return (
        <div>
        <Button type="button" name={"on"} isTurnIn={props.isTurnIn}/>
        <Button type="button" name={"off"} isTurnIn={props.isTurnIn}/>
        <Button type="radio" isTurnIn={props.isTurnIn}/>
        </div>
    );
}