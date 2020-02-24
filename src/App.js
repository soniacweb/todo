import React, { Component } from 'react';
import './style.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state={
      newItem:'',
      list: []
    }
  }

  //if I plan to implement localstorage in my project
updateInput(key, value) {
  //update react state 
  this.setState({ 
    [key]: value
  })
}

  addItem(){ 
    //create item with unique id
    const newItem=  {
      //math.random used so we get a random unique id everytime
      id: 1 + Math.random(),
      value: this.state.newItem.slice()
    }
    //taking the current copy of list of items, i'll use the spread operator to to take the current copy of the list items 
    const list= [...this.state.list]

    //add the new item onto the list
    list.push(newItem) 

    //update state with new list and reset newItem input

this.setState({
  list, 
  newItem:''
    })      
  }

  deleteItem(id){
    console.log('test123')
    //copy current list of items
   const list= [...this.state.list]
  //filter out item being deleted
   const updatedList = list.filter(item => item.id !== id)

   this.setState({list: updatedList})
  }

  render () {
   return (
    <div className="App">

     <div className="floating">
        <div className="tossing"> 
      <h1 className="app-title"> todo </h1>
      </div>
      </div>
      
     <div className="container">
       <h1 className="app-subtitle">  Add An Item..
         </h1> 
       <br/>
       <div className="main-feature">
       <input className="input"
       type="text"
       placeholder="Type your item in here.."
       value={this.state.newItem}
       onChange={e => this.updateInput("newItem", e.target.value)}
       />
       <button  className="add-btn"
       //onclick will call a function everytime the add button is clicked
       onClick={e => this.addItem()}
       >
         Add
         </button>
         </div>
         <br/>
         <ul>
           {this.state.list.map(item => {
             return(
               <li key={item.id}>
                  {item.value}
                  <button className="btn"
                  onClick={() => this.deleteItem(item.id)}
                  >
                    Delete
                  </button>
               </li>
             )
           })}
         </ul>
     </div>
    </div>
  )
   }
}

export default App;
