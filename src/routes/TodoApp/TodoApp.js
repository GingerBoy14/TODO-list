import React, { useState, useEffect } from "react";

import AppHeader from "../../components/AppHeader";

import TodoList from "../../components/TodoList";
import AddItemForm from "../../components/AddItemForm";
import Search from "../../components/Search";
import Loading from "../../components/Loading";


const TodoApp = ({todoList, createTodoItem}) =>{
    const [visibleItems, setVisibleItems] = useState([]);

    useEffect(()=>setVisibleItems(todoList.todos),[todoList.todos]);
    const doneCount = todoList.todos.filter((el)=>el.done).length;
    const todoCount = todoList.todos.length - doneCount;



    return(
        <div>
            <AppHeader
                toDo={todoCount}
                done={doneCount}/>

            <Search
                todoData={todoList}
                displayData={setVisibleItems}/>

            {
                todoList.loading ? <Loading/>
                    :<TodoList todoItem={visibleItems}/>
            }

            <AddItemForm
                onItemAdd={createTodoItem}/>
        </div>
    );
}

export default TodoApp;