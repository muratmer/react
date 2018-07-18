import React, { Component } from 'react';

import './App.css';
import Output from "./Output/Output"


class App extends Component {
  state = {
    persons:[
      {id:1,name:"Mike",age:29},
      {id:2,name:"Heidi",age:56},
      {id:3,name:"Ted",age:42}],
      showPersons: false
  }
showPersonsHandler = () =>{
  const showing = this.state.showPersons;
  this.setState({showPersons : !showing})
}

deletePersonHandler = (index) =>{
const list = this.state.persons.slice();
list.splice(index,1);
this.setState({persons:list});
}



  render() {
   
   
    const buttonStyle = {
backgroundColor:"green",
color:"white",
padding:"10px",
border:"1px solid blue",
cursor:"pointer",

}




  let friends = null;
      if(this.state.showPersons){
        buttonStyle.backgroundColor= "red";
      

        friends = (
        <div>
          {this.state.persons.map(
            (person,index)=>{
              return <Output
              name = {person.name}
              age = {person.age}
              key = {person.id}
              click = {this.deletePersonHandler} />
            })}
          
          </div>);}
    
const classes = [];
if(this.state.persons.length <= 2){
classes.push("red");
}
if(this.state.persons.length <= 1){
  classes.push("bold");}

  


    return (
      
      <div className="App">
        <header className="App-header">
          
          <h1 className="App-title">Hi React</h1>
        </header>
        <p className={classes.join(" ")}>
          This is my second react app
        </p>
        <button 
        style = {buttonStyle}
        onClick = {this.showPersonsHandler}>Show Persons</button>
        {friends}
      </div>
      
    );
  }
}

export default App;
