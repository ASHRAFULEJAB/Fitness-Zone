import React from 'react';
import './PersonalInfo.css'

const PersonalInfo = () => {
    return (
        <div >
            <div className="card sm:w-5/12 lg:w-11/12 bg-purple-400 shadow-xl grid lg:grid-cols-2">
                  <figure><img  className='w-40 h-40 m-3 rounded-full' src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
             <div className="card-body">
               <h1 className="card-title text-3xl">Ashraful Islam</h1>
               <p className='text-2xl'><b>Age:22</b></p>
               <p className='text-2xl'><b>Height:5.922</b></p>
               <p className='text-2xl'><b>Weight:60Kg</b></p>
             
          </div>
         </div>
        </div>
    );
};

export default PersonalInfo;