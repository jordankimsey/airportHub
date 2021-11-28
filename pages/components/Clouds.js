import React from 'react';

const Clouds = ({cloud}) => {
  // if (props.cloud) {
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
  // }
  // else {
  //   let cloudArray = [];
  // }

  // console.log(cloudArray[0].repr)


};



//orginal version
// const Clouds = (props) => {
//     if (props.cloud) {
//     const cloudArray = props.cloud;    
//     } else {
//         let cloudArray = [];
//     }
    
//     // console.log(cloudArray[0].repr)
     
//     return (
//         <div>
//             <ul className='cloudArray'>
//                 {cloudArray.map((cloud, index) => {
//                     return <li key={index}>{cloud.repr}</li>
//                 })}
//            </ul>
//         </div>
//     )
// }

export default Clouds;


