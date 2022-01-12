import {Input} from 'reactstrap';
import React, {Component} from 'react';
 
export default class SearchIndex extends Component {
  constructor(props){ //setting state
    super(props)
   this.state = {
     searchObjects: [], // gets filled with the results
     searchTerm: '', // gets the value of the search term
     things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards']
   }
 }

 handelChange = (event) => { // assigns the searchTerm variable tha value of the search bar
   this.setState({
     searchTerm: event.target.value
   })
 }

 searchFunction = () => { //filters through the things and checks if it matches the searchTerm
   console.log('search');
   let searchObjects = this.state.things.filter(thing => thing.includes(this.state.searchTerm));
   this.setState({
     searchObjects
   });
 }

 render() {
   return (
     <div className='main'>
       <div className='mainDiv'>
       <Input type='text' value={this.state.searchTerm} onChange={this.handelChange} placeholder='Search Here' />
       <button onClick={this.searchFunction}>search</button>
       <h3>Results:</h3>
       <ul>
         {this.state.searchObjects.map((things, index) => {
           return <li key={index}>{things}</li>
         })}
       </ul>
     </div>
     </div>
     )
 }
}

