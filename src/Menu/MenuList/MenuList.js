import React from "react";

class MenuList extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            childrenVisible: false
        }
    }
    checkUnderEl(el, data){
        let result = []
        
        for(let underEl in data.entities.pages){
            if(data.entities.pages[underEl].parentId === el.id){
                result.push(data.entities.pages[underEl])
            }
        }
        /*
        if(data.entities.pages[el].hasOwnProperty('pages')){
            for(let child in data.entities.pages[el].pages){
                result.push(data.entities.pages[el].pages[child])
            }
        }
        */
        /*for(let child in data.entities.pages[el].pages){
            result.push(data.entities.pages[el].pages[child])
        }*/
        
        return result
    }
    toggleVisible(e){
        const id = e.target.id
        this.setState((state)=>{
            return {[id] : state[id] === undefined ? true : !state[id]}
        })
        console.log(this.state)
    }
    render(){
        return <ul className="menu__list">
            {this.props.list.map(el => {
                const underElements = this.checkUnderEl(el, this.props.data)
                if(underElements.length > 0){
                    return <li className={this.state[el.id] ? 'menu__list__liWithArrowUp' : 'menu__list__liWithArrowDown'}> 
                        <span id={el.id} onClick={this.toggleVisible.bind(this)}>{el.title}</span>
                        {this.state[el.id] ? <MenuList list={underElements} data={this.props.data}/> : ''}
                    </li>
                } else{
                    return <li>{el.title}</li>
                }
            })}
        </ul>
    }
}

export default MenuList