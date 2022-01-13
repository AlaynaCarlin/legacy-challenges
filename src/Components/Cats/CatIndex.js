import React, { Component } from 'react'; // Importing react & component
import CatList from './CatList';// importing catlist component
 
export default class CatIndex extends Component { //declaring a class component
 constructor(props){ // a method that stores the default values of state variables
   super(props)//In JavaScript, super refers to the parent class constructor. (In our example, it points to the React.Component implementation.) allows variables to be used anywhere. global not local
   this.state = { // initializes setting state for vars
     breeds: ['persian', 'siamese', 'maine coon', 'ragdoll', 'scottish fold', 'sphynx', 'british shorthair', 'bengal', 'american shorthair'] // it's a state variable
   }
 }
render () { //renders things to the dom
   return ( // returns
     <div className='main'>
       <div className='mainDv'>
         {/* calling catlist component and sending props */}
      <CatList cats={this.state.breeds} /> 
     </div>
     </div>
   );
   }
}


