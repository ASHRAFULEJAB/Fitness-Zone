import React from 'react';
import './Details.css'
import Swal from 'sweetalert2'

const Details = ({times,breakTime}) => {
   
    let totalTime = 0;
    for(const excerise of times){
        totalTime = totalTime+ excerise.time

    }
    const btnClicked=()=>{
        Swal.fire(
            'Good job!',
            'YES HERO! You Have Finhed Your Break Time!!YAY!!',
            'success'
          )
    }
    return (
        <div className='mt-6'>
            <h1  className='text-5xl mb-5'>Excerise Details</h1>
            <div>
                <h2 className='overflow-hidden border border-sky-500 rounded-lg bg-white text-3xl p-5 sm:w-5/12 lg:w-96'>Excerise Time:{totalTime}Seconds</h2>
                <h2 className=' overflow-hidden border border-sky-500 rounded-lg bg-white text-3xl p-5 mt-5 mb-5 sm:w-5/12 lg:w-96'>Break Time:{breakTime}Seconds</h2>
            </div>
            <button  onClick={btnClicked} className=" place-content-center btn btn-secondary p-3 text-2xl text-white">Activity Completed </button>
            
        </div>
    );
};

export default Details;