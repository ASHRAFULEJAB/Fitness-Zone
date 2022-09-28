import React from 'react';
import './SingleExcerise.css'

const SingleExcerise = ({excerise}) => {
    console.log(excerise)
    const {time,picture,age,_id,name,about}=excerise
    return (
        <div className='ml-10'>
            <div className="card  bg-base-100 shadow-xl sm:w-96">
             <figure className="px-10 pt-10">
            <img src={picture}  alt="Shoes" className=" w-72 h-72 rounded-xl " />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{name}</h2>
               <p>If a dog chews shoes whose shoes does he choose?</p>
                   <div className="card-actions">
                 <button className="btn btn-primary">Buy Now</button>
                  </div>
                       </div>
                </div>
        </div>
    );
};

export default SingleExcerise;