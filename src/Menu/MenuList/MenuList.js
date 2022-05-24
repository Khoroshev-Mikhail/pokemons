import React from "react";


class MenuList extends React.Component{
    constructor(props){
        super(props)
    }
    checkUnderEl(el, data){
        let result = []
        for(let underEl in data.entities.pages){
            if(data.entities.pages[underEl].parentId === el.id){
                result.push(data.entities.pages[underEl])
            }
        }
        return result
    }
    render(){
        return <ul className="menu__list">
            {this.props.list.map(el => {
                const underElements = this.checkUnderEl(el, this.props.data)
                console.log(underElements)
                if(underElements.length > 0){
                    return <li> 
                        {el.title}
                        <MenuList list={underElements} data={this.props.data}/>
                    </li>
                } else{
                    return <li>{el.title}</li>
                }
            })}
        </ul>
    }
}

export default MenuList