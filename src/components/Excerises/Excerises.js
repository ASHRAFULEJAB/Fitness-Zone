import React, { useEffect, useState } from 'react';
import SingleExcerise from '../SingleExcercise/SingleExcerise';
import './Excerises.css'

const Excerises = () => {
    const [excerises,setExcerises]=useState([])
    useEffect(()=>{

        fetch('gymDetails.json')
        .then(res => res.json())
        .then(data => setExcerises(data))
    },[])
    return (
        <div>
            <h1 className='mt-6 text-center lg:text-4xl sm:text-2xl text-black font-bold'>Select Your Today's Excerise Please??</h1>
            <div className='excercise-container'>
                <div className='grid lg:grid-cols-3 grid grid-cols-1 md:grid-cols-2 gap-5 mt-6 '>
                  {
                    excerises.map( excerise => <SingleExcerise
                    excerise={excerise}
                    key={excerise._id}
                    >
                    </SingleExcerise>)
                  }
    
                </div>
                <div>
                    <h1>7</h1>
                </div>

            </div>
        </div>
    );
};

export default Excerises;