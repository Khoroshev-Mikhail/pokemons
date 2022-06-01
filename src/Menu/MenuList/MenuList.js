import React, { useCallback, useContext } from "react";
import Li from "./Li";


class MenuList extends React.Component{
    checkUnderEl(list, data){
        let result = []
        for(let child of list){
            result.push(data.entities.pages[child])
        }
        
        return result
    }
    render(){
        return <ul className="menu__list">
            {this.checkUnderEl(this.props.list, this.props.data).map(el => {
                    return (
                        <Li key={el.id} el={el} data={this.props.data}/>
                    )
            })}
        </ul>
    }
}

export default MenuList