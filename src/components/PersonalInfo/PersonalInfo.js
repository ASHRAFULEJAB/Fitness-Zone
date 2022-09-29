import React from 'react';
import './PersonalInfo.css'

const PersonalInfo = () => {
    return (
        <div >
            <div className=" overflow-hidden card sm:w-5/12 2xl:w-96 lg:w-96 bg-purple-400 shadow-xl 2xl:grid grid-cols-2  lg: grid grid-cols-2">
                  <figure><img  className='w-40 h-40 m-3 rounded-full' src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
             <div className="card-body">
               <h1 className="card-title 2xl:text-3xl lg:text-2xl">Ashraful Islam</h1>
               <p className='2xl:text-3xl lg:text-2xl'><b>Age:22</b></p>
               <p className='2xl:text-3xl lg:text-2xl'><b>Height:5.922</b></p>
               <p className='2xl:text-3xl lg:text-2xl'><b>Weight:60Kg</b></p>
             
          </div>
         </div>
        </div>
    );
};

export default PersonalInfo;