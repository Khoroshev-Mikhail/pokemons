import React from "react";
import './menu.css'
import MenuList from "./MenuList/MenuList";
import data from './data.json'
class Menu extends React.Component{
    constructor(){
        super()
    }
    getTopPages(data){
        let result = []
        for(let topPage of data.topLevelIds){
            result.push(data.entities.pages[topPage])
        }
        return result
    }
    render(){
        return <div className="menu">
            <MenuList list={this.getTopPages(data)} data={data}/>
        </div>
        
    }
}

export default Menu