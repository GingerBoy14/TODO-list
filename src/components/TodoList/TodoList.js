import React from "react";
import {CSSTransition, TransitionGroup} from "react-transition-group";

import TodoListItem from "./TodoListItem";

import './TodoList.css'
/*
* Todo list should scroll only when there are new item in it
*
* */
const TodoList = ({todoItem, onDeleted, onToggleImportant, onToggleDone}) =>{
    const List = todoItem.map((item) =>{
            const { id, ...itemProps} = item;
            return(
                <CSSTransition
                    key={id}
                    timeout={330}
                    classNames="list-item">
                    <li key={id} className="list-group-item">
                        <TodoListItem {...itemProps}
                                      onDeleted={()=>{onDeleted(id);}}
                                      onToggleImportant={()=>{onToggleImportant(id);}}
                                      onToggleDone={()=>{onToggleDone(id);}}/>
                    </li>
                </CSSTransition>
            )
        }

    );
    const hidden = todoItem.length>9 ? `todo-list-hidden` : null;

    return(

        <div className="item-list">
            <ul className={`list-group todo-list ${hidden}`}>
                <TransitionGroup>
                    {List}
                </TransitionGroup>
            </ul>
        </div>
    );
};
export default TodoList;
