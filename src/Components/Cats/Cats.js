import React from 'react';
import CatIndex from './CatIndex' // imports the component
import { Container } from 'reactstrap'; // imports the react component
 
const Cats = () => {
   return (
     <Container className="App">
       <br/>
       {/* <h1 className="App-intro">
         To complete this challenge, complete and fix the existing code to have it do the following:
       </h1> */}

       {/* <hr />
         
        <ul>
         <li>Render the list of cat breeds to the screen</li>
         <li>Use props correctly</li>
         <li>Use .map() correctly</li>
         <li>Ensure there are no errors</li>
        </ul>
        <hr /> */}
        {/* DISPLAYS THE COMPONENT */}
       <CatIndex /> 
     </Container>
   );

}
 
export default Cats;
