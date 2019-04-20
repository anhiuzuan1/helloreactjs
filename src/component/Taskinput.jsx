import React from 'react'
export default class TaskInput extends React.Component{
    state={
        value:"value",
    }
    handleChane=event=>{
        const nextValue =event.target.value
        this.setState({value:nextValue})
    }
    hanlekeyPress=event=>{
        const value=this.state.value

        if(event.key=='Enter')
        {
            this.props.onTaskSubmit(value)
            this.setState({value:''})
        }
    }
    render(){
        return (
            <div>
                <input placeholder="Add task" value={this.state.value } onChange={this.handleChane} onKeyPress={this.hanlekeyPress}/>
            </div>
        )
    }
}