import React from 'react';
import './Details.css'

const Details = ({times,breakTime}) => {
//     handleInput = e => {
//         const buttonValue = e.target.value;
//         console.log(buttonValue);
//         //some logic
//   }
   
    let totalTime = 0;
    for(const excerise of times){
        totalTime = totalTime+ excerise.time
    }
    return (
        <div className='mt-6'>
            <h1  className='text-5xl mb-5'>Excerise Details</h1>
            <div>
                <h2 className='border border-sky-500 rounded-lg bg-white text-3xl p-5 sm:w-5/12 lg:w-11/12'>Excerise Time:{totalTime}S</h2>
                <h2 className='border border-sky-500 rounded-lg bg-white text-3xl p-5 mt-5 mb-5 sm:w-5/12 lg:w-11/12'>Break Time:{breakTime}</h2>
            </div>
            <button  className=" place-content-center btn btn-secondary p-3 text-2xl text-white">Activity Completed</button>
        </div>
    );
};

export default Details;