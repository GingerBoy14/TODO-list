import React, { useState, useEffect } from "react";

import AppHeader from "../../components/AppHeader";

import TodoList from "../../components/TodoList";
import AddItemForm from "../../components/AddItemForm";
import Search from "../../components/Search";
import Loading from "../../components/Loading";


const TodoApp = ({todoList, createTodoItem}) =>{
    const [visibleItems, setVisibleItems] = useState([]);
    const { todos, loading } = todoList;
    useEffect(()=>setVisibleItems(todos),[todos]);
    const doneCount = todos.filter((el)=>el.done).length;
    const todoCount = todos.length - doneCount;



    return(
        <div>
            <AppHeader
                toDo={todoCount}
                done={doneCount}/>

            <Search
                todoData={todoList}
                displayData={setVisibleItems}/>

            {
                loading ? <Loading/>
                    :<TodoList todoItem={visibleItems}/>
            }

            <AddItemForm
                onItemAdd={createTodoItem}/>
        </div>
    );
}

export default TodoApp;