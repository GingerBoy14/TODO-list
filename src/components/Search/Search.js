import SearchPanel from "./SearchPanel";
import ItemStatusFilter from "../ItemStatusFilter";
import React, {Component} from "react";
import "./Search.css"

export default class Search extends Component{

    state = {
        filter:'all',
        search:''
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

    componentDidUpdate(prevProps, prevState) {
        const { search, filter } = this.state;
        const { todoData, displayData } = this.props;
        if (todoData!==prevProps.todoData || search!==prevState.search || filter!==prevState.filter){
            const visibleItems = this.filter(this.search(todoData, search), filter);
            displayData(visibleItems);
        }

    }
    render() {
        const { filter } = this.state;
        return(
            <div className="search-panel">
                <SearchPanel
                    onSearchChange={this.onSearchChange}/>
                <ItemStatusFilter
                    filter={filter}
                    onFilterChange={this.onFilterChange}/>
            </div>
        );
    }
}
