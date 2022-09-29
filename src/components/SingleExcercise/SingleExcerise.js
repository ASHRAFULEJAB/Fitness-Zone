import React, { useState } from 'react';
import './SingleExcerise.css'

const SingleExcerise = (props) => {

    const {time,picture,age,_id,name,about}=props.excerise
    
    const{addToList}=props
    return (
        <div className='ml-10'>
            <div className="card  bg-base-100 shadow-xl sm:w-96">
             <figure className="px-10 pt-10">
            <img src={picture}  alt="Shoes" className=" w-72 h-72 rounded-xl " />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{name}</h2>
              <h3>Time:{time}S</h3>
              <p>Age:{age}</p>
               <p>{about.slice(0,90)}</p>
                   <div className="card-actions">
                 <button onClick={()=>addToList(props.excerise)} className="btn btn-primary">Add To List</button>
                  </div>
                       </div>
                </div>
        </div>
    );
};

export default SingleExcerise;