import React,{Component} from "react";
import "./ItemStatusFilter.css"


export default class ItemStatusFilter extends Component{

    buttons = [
        {name: 'all', title: "All"},
        {name: 'active', title: "Active"},
        {name: 'done', title: "Done"}

    ];

    render() {
        const {filter, onFilterChange} = this.props;
        const buttons = this.buttons.map(({name, title})=>{
            const btnType = filter===name ? "btn-info" : "btn-outline-secondary";
            return(
                <button type="button"
                        className={`btn ${btnType}`}
                        key={name}
                        onClick={()=>onFilterChange(name)}>{title}</button>
            );
        });
        return (
            <div className="btn-group">
                {buttons}
            </div>
        );
    };
}

