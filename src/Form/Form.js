import React from "react";

class Form extends React.Component{
    constructor(){
        super()
        this.state = {
            bgcolor: `white`,
            values: {
                inputValue: '',
                secondInputValue: '',
                qwer: '',
            },
        }
    }
    handlerForm(e){
        e.preventDefault()
        this.setState(({values}) => ({ bgcolor: `linear-gradient(${Object.values(values).join(', ')})`}))
    }
    //ДЗ сверстать меню
    //Скопировать данные из json
    //Отрисовать менюшку из json через state.

    handlerValues(e){
        const {name, value} = e.target

        this.setState(({values}) => ({
            values: {...values, [name]: value}
        }))
    }

    reset(){
        
        this.setState(({values}) => ({
            values: Object.fromEntries(Object.keys(values).map((key) => [key, ""]))
        }))
    }

    render(){
        return <div style={{width: '1000px', height: '200px', background: this.state.bgcolor, border: '1px solid black', margin: '0px auto'}}>
            <form onSubmit={this.handlerForm.bind(this)}>
                {Object.entries(this.state.values).map(([name, value]) => {
                    return <input type='text' name={name} onChange={this.handlerValues.bind(this)} value={value}/>
                })}
                <button type="button" onClick={this.reset.bind(this)}>Reset</button>
                <button type="submit">Go!</button>
            </form>            
        </div>
    }
}

export default Form