# todo

`todo` is a basic React app I created to familiarise myself with the fundamentals of React and utilising basic React components. It's a productivity app, designed to create your own `todo` list. The user can create, add and delete items on and off the list.

# Duration

1 day 

# To Start

- npm i
- npm start

# Technologies

- React.js
- JSX
- CSS

# UI and Design: 

<img src="https://i.imgur.com/YjlfWpB.png" width="800px">
<img src="https://i.imgur.com/QK3eEgk.png" width="800px">

# JSX

I started with the JSX first as it helped give me some structure and tackle which functions I needed to think about creating first.

I included an input form listing the type, placeholder and value- which then takes the value of the the `newitem` being added by the user.

I then utilised an onChange function which passes an event through.
I added an onClick method within the button element, for the text the user inputs. This calls a function each time the `add` button is clicked. 

```

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
         <br/>
         ...
     </div>
    </div>
  )
   }


```

# Setting States 

The state would include a new item being added by the user. The new item would be an empty string to initially start with, which would then need to be added to an empty array. This is the same array that will contain all of the items, ultimately.  

The below excerpt of code demonstrates this:

```
  this.state={
      newItem:'',
      list: []
    }

```

# Creating the Add Item 

```
addItem(){ 
    //create item with a unique id below
    const newItem=  {
      //math.random is used so I can obtain a random unique id everytime
      id: 1 + Math.random(),
      value: this.state.newItem.slice()
    }
    //taking the current copy of list of items, I can then use the spread operator to take the current copy of the list items 
    const list= [...this.state.list]

    //updating the state with a new list by adding the new item onto the list
    list.push(newItem) 

    //update state with new list and reset newItem input

      this.setState({
        list, 
        newItem:''
      })  

```

# Creating the Delete Item Function

The unordered list takes in the current state of the list and maps through that. The below excerpt reflects this by utilising an onClick function, and passing through the unique item id:

```
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


```


```
deleteItem(id){
    //copy current list of items
   const list= [...this.state.list]
  //filter out item being deleted
   const updatedList = list.filter(item => item.id !== id)
   //updates the state after deletion:
   this.setState({list: updatedList})
  }


```

# Key Learnings

Covering basic concepts of state, props and JSX in React.

# Future Features
Create a backend using python and django to allow users to register, login and and store the list they create.

