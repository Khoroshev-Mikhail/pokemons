import React from "react";
import MenuList from "./MenuList";
import { motion } from "framer-motion"
const anim = {
    hidden: { opacity: 0 },
    show: { 
        opacity: 1,
        transition: {
            duration: 1
        }
    }
  }
export default class Li extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            visible: false
        }

        this.toggleVisible = this.toggleVisible.bind(this)

        console.log(this)

    }
    toggleVisible(){
        this.setState(({visible}) => {
            return {visible : !visible}
        })
    }
    render(){
        return (
            <li>  
                {this.props.el.pages !== undefined && (
                    <button onClick={this.toggleVisible}>
                        {this.state.visible ?  "↑" : "↓"}
                    </button>
                )}
                <a href={`/${this.props.el.url}`}>
                    {this.props.el.title}  
                </a>

                {this.state.visible 
                    ? <motion.div variants={anim} initial='hidden' animate='show'>
                        <MenuList list={this.props.el.pages} data={this.props.data}/>
                    </motion.div> 
                    : ''}
            </li>
        )
    }
}