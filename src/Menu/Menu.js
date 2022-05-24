import React from "react";
import './menu.css'
import MenuEl from "./MenuEl/MenuEl";


const arr =[1,2,3,4]


class Menu extends React.Component{
    constructor(){
        super()

    }
    getPage(){

    }
    render(){
        return <div className="menu">
            <MenuEl id={2}/>
        </div>
    }
}

export default Menu