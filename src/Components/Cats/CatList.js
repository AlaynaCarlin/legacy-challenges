import React from 'react';
 
const CatList = (props) => { //maps over the array and returns it

 return (
   <div className='main'>
     <div className='mainDiv'>
       {/* maps over props and displays it */}
     {props.cats.map(cat => <li>{cat}</li> )} 
   </div>
   </div>
 )
}

export default CatList;

