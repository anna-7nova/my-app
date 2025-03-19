import React, { FormEvent, KeyboardEvent, useState } from 'react';
import s from "./Select.module.css"

export type ItemsPropsType = {
    value: string
    title: string
}

export type SelectPropsType = {
    items: ItemsPropsType[]
    onClick: (value: string) => void
    propsValue?: string
}

export const Select = ({ items, onClick, propsValue }: SelectPropsType) => {
    const [collapsed, setCollapsed] = useState(true)

    const currentValue = items.find(el => el.value === propsValue)

    //handlers
    const onClickHandler = (e: FormEvent<HTMLDivElement>) => {
        if (collapsed) {
            setCollapsed(false)
        } else {
            const newText = e.currentTarget.innerHTML
            const newValue = items.find(el => el.title === newText) || { value: "0", title: "" }
            onClick(newValue?.value)
            setCollapsed(true)
        }
    }
    const onKeyUpHandler = (e: KeyboardEvent<HTMLDivElement>) => {
        if (collapsed && e.key === 'Enter') {
            setCollapsed(false)
        } else if (e.key === 'Enter') {
            setCollapsed(true)
        }
    }


    const listOptions = items.map(el => <div onClick={onClickHandler} key={el.value} className={s.element} >{el.title}</div>)

    return (
        <div onKeyUp={onKeyUpHandler} tabIndex={0} >
            <div onClick={onClickHandler} className={s.choiced}>{currentValue?.title}</div>
            {!collapsed && <div className={s.options}>
                <div onClick={onClickHandler} className={s.element}>none</div>
                {listOptions}
            </div>}
        </div>
    );
}
