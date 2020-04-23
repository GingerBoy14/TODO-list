import React, {Component} from "react";
import "./SearchPanel.css"
export default class SearchPanel extends Component{
    state ={
        search:''
    };

    onSearchChange = (e) =>{
        const search = e.target.value;
        this.setState({search});
        this.props.onSearchChange(search);
    };
    render(){
        return(
            <input className="search-input form-control"
                   placeholder="Type to search" type="text"
            value={this.state.search}
            onChange={this.onSearchChange}/>
                   );
    }

}
