import React, {ChangeEvent, useState, KeyboardEvent} from 'react';
import {FilterValuesType} from './App';
import {AddItemForm} from "./components/AddItemForm";
import {EditableSpan} from "./components/EditableSpan";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    id: string
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string, todolistId: string) => void
    changeFilter: (value: FilterValuesType, todolistId: string) => void
    addTask: (title: string, todolistId: string) => void
    changeTaskStatus: (id: string, isDone: boolean, todolistId: string) => void
    removeTodolist: (id: string) => void
    filter: FilterValuesType
    updateTask: (todolistId: string, id: string, title: string) => void
    updateTodolist: (todolistId: string,  title: string) => void
}

export function Todolist(props: PropsType) {


    const removeTodolist = () => props.removeTodolist(props.id)
    const onAllClickHandler = () => props.changeFilter("all", props.id);
    const onActiveClickHandler = () => props.changeFilter("active", props.id);
    const onCompletedClickHandler = () => props.changeFilter("completed", props.id);

    const callBackHandler = (title: string) => {
        props.addTask(title, props.id)
    }

    const onClickHandler = (tID: string) => {
        props.removeTask(tID, props.id)
    }

    const callBackHandlerForUpdateTask = (tID: string, title: string) => {
        props.updateTask(props.id, tID, title)
    }

    const callBackHandlerForUpdateTodolist = (tID: string, title: string) => {
        props.updateTodolist(props.id, title)
    }

    const onChangeHandler = (tID: string, e: ChangeEvent<HTMLInputElement>) => {
        let newIsDoneValue = e.currentTarget.checked;
        props.changeTaskStatus(tID, newIsDoneValue, props.id);
    }

    return <div>
        <h3> <EditableSpan title={props.title} callBack={(title) => callBackHandlerForUpdateTodolist(props.id, title)}/>{/*{props.title}*/}
            <button onClick={removeTodolist}>x</button>
        </h3>
        <AddItemForm callBack={callBackHandler}/>

        <ul>
            {
                props.tasks.map(t => {

                    //Вынести функцию наверх
                    /*const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                        let newIsDoneValue = e.currentTarget.checked;
                        props.changeTaskStatus(t.id, newIsDoneValue, props.id);
                    }*/

                    return <li key={t.id} className={t.isDone ? "is-done" : ""}>
                        <input type="checkbox" onChange={(e) => onChangeHandler(t.id, e)} checked={t.isDone}/>
                        <EditableSpan title={t.title} callBack={(title) => callBackHandlerForUpdateTask(t.id, title)}/>
                        <button onClick={() => onClickHandler(t.id)}>x</button>
                    </li>
                })
            }
        </ul>
        <div>
            <button className={props.filter === 'all' ? "active-filter" : ""}
                    onClick={onAllClickHandler}>All
            </button>
            <button className={props.filter === 'active' ? "active-filter" : ""}
                    onClick={onActiveClickHandler}>Active
            </button>
            <button className={props.filter === 'completed' ? "active-filter" : ""}
                    onClick={onCompletedClickHandler}>Completed
            </button>
        </div>
    </div>
}


