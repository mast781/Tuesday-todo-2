import React, {useState} from "react";

type propsType = {
    title: string
}

export const EditableSpan = (props:propsType) => {
    const [edit, setEdit] = useState(false)
    const onDoubleClickHandler = () => {
        setEdit(true)
    }

    const onBlurHandler = () => {
        setEdit(false)
    }

    return (
        edit
        ? <input value={props.title} autoFocus onBlur={onBlurHandler}/>
        : <span onDoubleClick={onDoubleClickHandler}>{props.title}</span>
    )
}