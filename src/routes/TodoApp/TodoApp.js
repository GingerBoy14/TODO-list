import React, {Component} from "react";

import AppHeader from "../../components/AppHeader";

import TodoList from "../../components/TodoList";
import AddItemForm from "../../components/AddItemForm";
import Search from "../../components/Search";
import Loading from "../../components/Loading";

export default class TodoApp extends Component{

        lastId = 0;

        state={
            todoData:[],
            visibleItems:[],
        };


        creatTodoItem(text){
            return{
                id:this.lastId++,
                text,
                important:false,
                done:false
            };
        };

        toggleProps(arr, id, prop){
            const idx = arr.findIndex((el) => el.id === id);
            const oldItem = arr[idx];
            const newItem = {
                ...oldItem,
                [prop]: !oldItem[prop]};

            return [
                ...arr.slice(0, idx),
                newItem,
                ...arr.slice(idx+1)
            ];
        };

        deleteItem = (id) => {
            this.setState(({todoData})=>{
                const idx = todoData.findIndex((el) => el.id === id);
                const newArray = [
                    ...todoData.slice(0, idx),
                    ...todoData.slice(idx+1)
                ];
                return{
                    todoData: newArray
                };
            });
        };

        addItem = (label) =>{
            const newItem = this.creatTodoItem(label);
            this.setState(({todoData})=>{
                const newArray = [
                    ...todoData,
                    newItem
                ];
                return{
                    todoData: newArray
                };
            });
        };

        onToggleDone = (id) =>{
            this.setState(({ todoData })=>{
                return{
                    todoData: this.toggleProps(todoData,id,'done')
                };
            });
        };

        onToggleImportant = (id) =>{
            this.setState(({ todoData })=>{
                return{
                    todoData: this.toggleProps(todoData,id,'important')
                };
            });
        };

        searchResult = (visibleItems) => {
            this.setState({visibleItems});
        };

        render() {
            const {todoData, visibleItems} = this.state;
            const doneCount = todoData
                .filter((el)=>el.done).length;
            const todoCount = todoData.length - doneCount;

            return(
                <div>
                    <AppHeader
                        toDo={todoCount}
                        done={doneCount}/>

                    <Search
                        todoData={todoData}
                        displayData={this.searchResult}/>

                    <TodoList
                        todoItem = {visibleItems}
                        onDeleted={this.deleteItem}
                        onToggleDone={this.onToggleDone}
                        onToggleImportant={this.onToggleImportant}/>

                    <AddItemForm
                        onItemAdd = {this.addItem}/>

                    <Loading/>
                </div>
            );
        };
    };

