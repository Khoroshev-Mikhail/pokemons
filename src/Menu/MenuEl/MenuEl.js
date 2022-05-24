import React from "react";




class MenuEl extends React.Component{
    constructor(){
        super()
    }
    getPage(){

    }
    render(){
        return <ul className="menu__list">
            <li>1</li>
            <li>2</li>
            <li className="menu__list__listWithArrow"> 3
                <ul className="menu__list">
                    <li>3-1</li>
                    <li>3-2</li>
                    <li>{this.props.id === 2 ? <MenuEl /> : 4}</li>
                </ul>
            </li>
        </ul>
    }
}

export default MenuEl