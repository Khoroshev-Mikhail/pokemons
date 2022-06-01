import React from "react";
import './menu.css'
import MenuList from "./MenuList/MenuList";
import data from './data.json'
class Menu extends React.Component{
    render(){
        return <div className="menu">
            <MenuList list={data.topLevelIds} data={data}/>
        </div>
        
    }
}

export default Menu