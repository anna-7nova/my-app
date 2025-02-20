import { action } from '@storybook/addon-actions';

import { Rating, ValueType } from './Rating';
import { UncontrolledRating } from '../UncontrolledRating/UncontrolledRating';
import { useState } from 'react';

export default {
    component: Rating,
};

const onChangeHandler = action("onChange")

export const Rating0 = () => {
    return (
        <Rating value={0} onClick={()=>{}}/>
    )
}
export const Rating1 = () => {
    return (
        <Rating value={1} onClick={()=>{}}/>
    )
}
export const Rating2 = () => {
    return (
        <Rating value={2} onClick={()=>{}}/>
    )
}
export const Rating3 = () => {
    return (
        <Rating value={3} onClick={()=>{}}/>
    )
}
export const Rating4 = () => {
    return (
        <Rating value={4} onClick={()=>{}}/>
    )
}
export const Rating5 = () => {
    return (
        <Rating value={5} onClick={()=>{}}/>
    )
}
export const RatingChanging = () => {
    const [ratingValue, setRatingValue] = useState<ValueType>(0)
    return (
        <Rating value={ratingValue} onClick={setRatingValue}/>
    )
}

export const RatingUncontrolled = () => {
    return <UncontrolledRating />
}

