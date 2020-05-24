import React from 'react';
import CardList from '../components/cardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Error from '../components/Error';
import Scroll from '../components/Scroll';

class App extends React.Component{
    constructor(){
        super()
         this.state = {
             robots: [],
             searchfield: ''
      };      
     }
    
    componentDidMount(){
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(response =>response.json())
            .then(users =>this.setState({robots: users}));
    
      
    };
    
    
    
    onSearchChange = (event) =>{
        this.setState({searchfield : event.target.value})
    }
    
    render(){
        const filteredRobots = this.state.robots.filter(robots => {
        return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());                                             });
        
        if(this.state.robots.length === 0){
            return <h1>Loading...</h1>
        }else{
            
     return(
      <div className="tc">
      <h1 className="f1">RoboFriends</h1>
      <SearchBox searchChange={this.onSearchChange} />   
          
        <Scroll>
            <Error>
      <CardList robots={filteredRobots} />
            </Error>
        </Scroll>
   
      </div>
 );
}
    }

};
export default App;