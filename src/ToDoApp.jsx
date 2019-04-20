import React from 'react'
import Taskinput from './component/Taskinput'
import Taskitem from './component/Taskitem'
export default class ToDoApp extends React.Component{
    state={
        tasks:[]
    }
    handoTaskSubmit=Task=> {
        const currentTasks=this.state.tasks
        const nextTasks =currentTasks.concat(Task)
        this.setState({tasks:nextTasks})
    }
    render(){
        return(
        <div>
            <h2 style={{marginBottom:24}}>ToDo App</h2>
            <Taskinput onTaskSubmit={this.handoTaskSubmit}></Taskinput>
           <div>
               {
                   this.state.tasks.map((Task,idx)=>(
                       <Taskitem kun={Task} key={idx}/>
                   ))
               }
           </div>
        </div>
        )
    }
}