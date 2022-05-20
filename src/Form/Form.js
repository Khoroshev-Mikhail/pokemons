import React from "react";


class Form extends React.Component{
    constructor(){
        super()
        this.state = {
            bgcolor: 'blue',
            inputValue: '',
            inputBorderColor: 'black'
        }
    }
    handlerForm(e){
        e.preventDefault()
        const regexp = /^[a-z0-9]{6}$/i
        if(!regexp.test(this.state.inputValue)){
            alert('Ввод должен быть в формате #1F11FF')
        } else {
            this.setState(({bgcolor}) => {
                return {bgcolor: this.state.inputValue}
            })
        }
    }
    handlerInput(e){
        const regexp = /^[a-z0-9]{6}$/i
        if(regexp.test(e.target.value)){
            this.setState(({inputBorderColor})=>{
                return {inputBorderColor: 'green'}
            })
        }else{
            this.setState(({inputBorderColor}) => {
                return {inputBorderColor : 'red'}
            })
        }
        this.setState(({inputValue}) => {
            return {inputValue : e.target.value}
        })
    }

    render(){
        return <div style={{width: '1000px', height: '200px', background: `#${this.state.bgcolor}`, border: '1px solid black', margin: '0px auto'}}>
            <form onSubmit={this.handlerForm.bind(this)}>
                <input type='text' onChange={this.handlerInput.bind(this)} style={{borderColor: this.state.inputBorderColor, borderWidth: '5px', borderStyle: 'solid'}}></input>
                <input type='submit' value="Задать фон" ></input>
            </form>            
        </div>
    }
}

export default Form