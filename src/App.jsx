import React from 'react'
class App extends React.Component{
    state={
      showCouter:true,delta:1,
    }
    handleToggleCounter=()=>this.setState({showCouter:!this.state.showCouter})
    handleDetaChange=nextDelta=>{
      this.setState({delta:nextDelta})
    }
  render(){
    return(
      <div>
       <h1>nam map</h1>
      </div>
    )
  }
} 

export default App;
