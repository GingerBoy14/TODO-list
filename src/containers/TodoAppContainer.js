import React, {useEffect} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import {TodoApp} from "../routes";
import {addTodo} from "../redux/actions"
import {compose} from "../utils";
import {firestoreConnect} from "react-redux-firebase";
import {fetchData} from "../redux/actions";

const TodoAppContainer = ({ fetchTodos, todos, todosLoaded, createTodoItem, todoList }) =>{
    useEffect(()=>{
        if (todosLoaded){
            fetchTodos(todos)
        }
    },[fetchTodos, todos, todosLoaded])
    return(
        <TodoApp createTodoItem={createTodoItem} todoList={todoList}/>
    )
}



const mapStateToProps = ({ firestore: { ordered:{todos},status:{requested}}, todoList }) =>{
    return {
        todos,
        todoList,
        todosLoaded: requested.todos
    }
}
const mapDispatchToProps = (dispatch) =>{
    return bindActionCreators({
        createTodoItem:addTodo,
        fetchTodos: fetchData
    }, dispatch) ;
};
export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    firestoreConnect(({userId}) =>[
            { collection: `users/${userId}/todos`, storeAs:'todos' } // or `todos/${props.todoId}`
        ])
)(TodoAppContainer)
