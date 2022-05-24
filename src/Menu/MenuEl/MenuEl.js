import React from "react";


class MenuEl extends React.Component{
    constructor(props){
        super(props)
    }
    checkUnderEl(el, data){
        let result = []
        for(let page in data.entities.pages){
            if(data.entities.pages[page].level == 0){
                result.push(data.entities.pages[page])
            }
        }
        return result
    }
    render(){
        return <ul className="menu__list">
            {this.props.list.map(el => {
                return <li>{el.title}</li>
            })}
        </ul>
    }
}

export default MenuEl