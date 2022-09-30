import React from 'react';
import './PersonalInfo.css'
import image from '../image/picc-1.png'

const PersonalInfo = () => {
    return (
        <div >
            <div className=" overflow-hidden card sm:w-5/12 2xl:w-96 lg:w-96 bg-gray-400 shadow-xl 2xl:grid grid-cols-2  lg: grid grid-cols-2">
                  <figure><img  className='m-3 rounded-full' src={image} alt="" /></figure>
             <div className="card-body">
               <h1 className="card-title 2xl:text-3xl lg:text-2xl">Ashraful Islam</h1>
               <p className='2xl:text-3xl lg:text-2xl'><b>Age:22</b></p>
               <p className='2xl:text-3xl lg:text-2xl'><b>Height:5.9</b></p>
               <p className='2xl:text-3xl lg:text-2xl'><b>Weight:60Kg</b></p>
             
          </div>
         </div>
        </div>
    );
};

export default PersonalInfo;