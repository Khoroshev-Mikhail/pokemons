import React, { useCallback, useContext } from "react";

class MenuList extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            visibleLists : {},
            isLoaded: {},
        }
    }
    checkUnderEl(el, data){
        let result = []
        if('pages' in el){
            for(let child of el.pages){
                result.push(data.entities.pages[child])
            }
        }
        
        return result
    }
    toggleVisible(e){
        const id = e.target.id
        if(!this.state.visibleLists[id]){
            this.setState(({isLoaded}) => ({
                isLoaded: { ...isLoaded, [id] : true}
            }))
        }
        function ara(){
            this.setState(({visibleLists, isLoaded}) => ({
                visibleLists: { ...visibleLists, [id] : visibleLists[id] === undefined ? true : !visibleLists[id]},
                isLoaded : { ...isLoaded, [id] : false} //Выполняется каждый раз, даже если isLoaded[id] === false
            }))
        }
        setTimeout(ara.bind(this), 300)

    }
    render(){
        return <ul className="menu__list">
            {this.props.list.map(el => {
                const underElements = this.checkUnderEl(el, this.props.data)
                if(underElements.length > 0){
                    return <li className={this.state.visibleLists[el.id]  ? 'menu__list__liWithArrowUp' : 'menu__list__liWithArrowDown'}> 
                        <span id={el.id} onClick={this.toggleVisible.bind(this)}>
                            {el.title}
                        </span>
                        {this.state.isLoaded[el.id] ?
                            <div>
                                <h3>LOADING!PLEASE WAIT!</h3>
                            </div> : ''
                        }
                        {this.state.visibleLists[el.id] ? <MenuList list={underElements} data={this.props.data}/> : ''}
                    </li>
                } else{
                    return <li>{el.title}</li>
                }
            })}
        </ul>
    }
}

export default MenuList