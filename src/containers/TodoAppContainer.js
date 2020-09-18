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
import Loading from "../components/Loading";
const TodoAppContainer = ({todoList,createTodoItem}) =>{
    const {todos, loading} = todoList;

    return(
        <TodoApp createTodoItem={createTodoItem}/>
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
