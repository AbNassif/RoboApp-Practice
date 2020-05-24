import React from 'react';

class Error extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            hasError:false
          }
    }
    componentDidCatch(error,info){
        this.setState({hasError: true});
        
    }
  render(){
        //this.state.hasError===this.state.hasError(true)
       if(this.state.hasError){
        return <h1>Dammit YOU jinxed it, Just get out of here</h1>
        }
         return this.props.children;  
      }
}

export default Error;