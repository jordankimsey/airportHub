import React from 'react';


const Clouds = (props) => {
    const cloudArray = props.cloud
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


