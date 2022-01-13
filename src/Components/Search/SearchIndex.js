import {Input} from 'reactstrap';
import React, {Component} from 'react';
 
export default class SearchIndex extends Component { // class component, we export
  constructor(props){ //setting state, stores default values
    super(props)// a method that stores the default values of state variables
   this.state = {//In JavaScript, super refers to the parent class constructor. (In our example, it points to the React.Component implementation.) allows variables to be used anywhere. global not local
     searchObjects: [], // gets filled with the results
     searchTerm: '', // gets the value of the search term
     things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards']
   }
 }

 handleChange = (event) => { // assigns the searchTerm variable tha value of the search bar
   this.setState({ //sets the value of the input to the searchTerm variable
     searchTerm: event.target.value
   })
 }

 searchFunction = () => { //filters through the things and checks if it matches the searchTerm
   console.log('search');
   /*filters through the state var things, checks for matches to the search term, sets the matches to 
   the value fo the searchObject*/
   let searchObjects = this.state.things.filter(thing => thing.includes(this.state.searchTerm));
   this.setState({ // reset state so it contains the matches
     searchObjects
   });
 }

 render() { //renders to the dom
   return (
     <div className='main'>
       <div className='mainDiv'>
         {/* set searchTerm to the value on the input, call handleChange */}
       <Input type='text' value={this.state.searchTerm} onChange={this.handleChange} placeholder='Search Here' />
       {/* call the search function when clicked */}
       <button onClick={this.searchFunction}>search</button>
       <h3>Results:</h3>
       <ul>
         {/* maps over searchObjects Array and displays it */}
         {this.state.searchObjects.map((things, index) => {
           return <li key={index}>{things}</li>
         })}
       </ul>
     </div>
     </div>
     )
 }
}

