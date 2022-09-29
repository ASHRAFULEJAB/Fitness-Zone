import React from 'react';

const Break = () => {
    return (
        <div className='mt-6'>
            <div className="card sm:w-5/12 lg:w-11/12 bg-purple-400 shadow-xl grid lg:grid-cols-2">
             <div className="card-body">
               <h1 className="card-title text-3xl text">Add A break</h1>
               <div className='flex '>
                <button className=' place-content-center border border-sky-500 rounded-full bg-white text-3xl text-center mr-5'>10S</button>
                <button className='border border-sky-500 rounded-full bg-white text-3xl text-center mr-5'>20s</button>
                <button className='border border-sky-500 rounded-full bg-white text-3xl text-center mr-5'>30s</button>
                <button className='border border-sky-500 rounded-full bg-white text-3xl text-center mr-5'>40s</button>
                <button className='border border-sky-500 rounded-full bg-white text-3xl text-center'>50s</button>
               </div>
             
          </div>
         </div>
        </div>
    );
};

export default Break;