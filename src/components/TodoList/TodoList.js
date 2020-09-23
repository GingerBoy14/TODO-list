import React from "react";
import { TransitionGroup } from "react-transition-group";

import TodoListItem from "./TodoListItem";

import './TodoList.scss'
/*
* Todo list should scroll only when there are new item in it
*
* */
const TodoList = ({todoItem}) =>(
        <div className="item-list">
            <ul className={`list-group todo-list ${todoItem.length>9 ? `todo-list-hidden` : null}`}>
                <TransitionGroup>
                    {todoItem.map((todo)=><TodoListItem key={todo.id} {...todo}/>)}
                </TransitionGroup>
            </ul>
        </div>
    );

export default TodoList;
