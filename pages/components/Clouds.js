import React from 'react';

const Clouds = ({cloud}) => {
 
  if (!cloud) {
    return null;
   }
      
    return (
      <div>
        <ul className='cloudArray'>
          {cloud.map((cloud, index) => {
            return <li key={index}>{cloud.repr}</li>;
          })}
        </ul>
      </div>
    );



};



export default Clouds;


