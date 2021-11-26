import React from 'react';


const Clouds = (props) => {
    if (props.cloud) {
    const cloudArray = props.cloud;    
    } else {
        return null;
    }
    
    // console.log(cloudArray[0].repr)
     
    return (
        <div>
            <ul className='cloudArray'>
                {cloudArray.map((cloud, index) => {
                    return <li key={index}>{cloud.repr}</li>
                })}
           </ul>
        </div>
    )
}

export default Clouds;


