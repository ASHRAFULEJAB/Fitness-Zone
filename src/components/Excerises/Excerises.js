import React, { useEffect, useState } from 'react';
import Break from '../Break/Break';
import Details from '../Details/Details';
import PersonalInfo from '../PersonalInfo/PersonalInfo';
import SingleExcerise from '../SingleExcercise/SingleExcerise';
import './Excerises.css'

const Excerises = () => {
    const [excerises,setExcerises]=useState([])
    const [times,setTimes]= useState([])
    const [breakTime,setBreakTime] = useState([])
    useEffect(()=>{

        fetch('gymDetails.json')
        .then(res => res.json())
        .then(data => setExcerises(data))
    },[])

    const addToList=(excercise)=>{
      const newTimes = [...times,excercise]
      setTimes(newTimes)
    }
    
  
    const addToBreak = (event)=>{
    const addTime=parseInt(event.target.value);
    setBreakTime( addTime);
    }
    return (
        <div>
            <h1 className='mt-6 text-center lg:text-4xl sm:text-2xl text-black font-bold'>Select Your Today's Excerise Please??</h1>
            <div className='excercise-container'>
                <div className='grid lg:grid-cols-3 grid grid-cols-1 md:grid-cols-2 gap-5 mt-6 '>
                  {
                    excerises.map( excerise => <SingleExcerise
                    excerise={excerise}
                    key={excerise._id}
                    addToList={addToList}
                    >
                    </SingleExcerise>)
                  }
    
                </div>
                <div className=' sm:ml-3 lg:ml-24  mt-6 '>
                    <PersonalInfo></PersonalInfo>
                    <Break
                    addToBreak={addToBreak}
                    ></Break>
                    <Details 
                    times={times}
                    breakTime={breakTime}
                    
                    ></Details>
                </div>

            </div>
        </div>
    );
};

export default Excerises;