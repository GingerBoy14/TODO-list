import React, {Component} from "react";

import AppHeader from "../AppHeader";
import SearchPanel from "../Search";
import ItemStatusFilter from "../ItemStatusFilter";
import TodoList from "../TodoList";
import AddItemForm from "../AddItemForm";

import "./App.css"

export default class App extends Component{

    lastId = 0;

    state={
        todoData:[],
        search:'',
        filter:'all'
    };

    filter (items,filter){
        switch (filter) {
            case 'all':
                return items;
            case 'active':
                return items.filter((item)=>!item.done);
            case 'done':
                return items.filter((item)=>item.done);
            default:
                return items;
        }
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

    onFilterChange = (id) =>{
        this.setState({
            filter: id
        });
    };

    search(items, search){
        if (search.length===0){
            return items;
        }
        return items.filter((item)=>{
            return item
                .text
                .toLowerCase()
                .indexOf(search.toLowerCase())> -1
        });
    };

    onSearchChange = (search) =>{
      this.setState({search})
    };

    render() {
        const {todoData, filter, search} = this.state;
        const doneCount = todoData
            .filter((el)=>el.done).length;
        const todoCount = todoData.length - doneCount;
        const visibleItems = this.filter(this.search(todoData, search),filter   );

        return(
            <div className="todo-app">

                <AppHeader toDo={todoCount} done={doneCount}/>
                <div className="top-panel d-flex">
                    <SearchPanel
                    onSearchChange={this.onSearchChange}/>
                    <ItemStatusFilter
                        filter={filter}
                        onFilterChange={this.onFilterChange}/>
                </div>

                <TodoList
                    todoIt = {visibleItems}
                    onDeleted={this.deleteItem}
                    onToggleDone={this.onToggleDone}
                    onToggleImportant={this.onToggleImportant}/>
                <AddItemForm
                    onItemAdd = {this.addItem}/>
            </div>
        );
    };
}

