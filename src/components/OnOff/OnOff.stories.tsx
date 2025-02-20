import { action } from '@storybook/addon-actions';

import { OnOff } from './OnOff';
import { UncontrolledOnOff } from '../UncontrolledOnOff/UncontrolledOnOff';
import { useState } from 'react';

export default {
    component: OnOff
};

const onChangeHandler = action("onChange")

export const ButtonOn = () => {
    return (
        <OnOff on={true} onClick={() => { }} />
    )
}

export const ButtonOff = () => {
    return (
        <OnOff on={false} onClick={() => { }} />
    )
}

export const ButtonChanging = () => {
    const [currentBtnIsOn, setCurrentBtnIsOn] = useState<boolean>(false)
    return (
        <OnOff on={currentBtnIsOn} onClick={()=>setCurrentBtnIsOn(!currentBtnIsOn)} />
    )
}

export const ButtonUncontrolled = () => {
    return (
        <UncontrolledOnOff onChange={onChangeHandler} />
    )
}


