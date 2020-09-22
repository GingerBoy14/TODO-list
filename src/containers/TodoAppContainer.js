import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import {TodoApp} from "../routes";
import {
    addTodo,
    deleteTodo,
    toggleDone,
    toggleImportant,
    togglePinToTop
} from "../redux/actions"

const TodoAppContainer = (props) =>{
    const {todos, loading} = props.todoList;

    return(
        <TodoApp {...props} todoList={todos}/>
    )
}



const mapStateToProps = ({todoList}) =>{
    return{todoList}
}
const mapDispatchToProps = (dispatch) =>{
    return bindActionCreators({
        createTodoItem:addTodo,
        deleteTodo:deleteTodo,
        togglePinToTop:togglePinToTop,
        toggleDone:toggleDone,
        toggleImportant:toggleImportant
    }, dispatch) ;
};
export default connect(mapStateToProps,mapDispatchToProps)(TodoAppContainer)
