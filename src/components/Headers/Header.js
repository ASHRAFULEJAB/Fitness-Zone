import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWalking } from '@fortawesome/free-solid-svg-icons'
import './Header.css'

const Header = () => {
    return (
        <div >
            <div className="navbar bg-slate-900 p-6">
         <div className="text-center ml-0">
           <FontAwesomeIcon className='text-5xl text-white' icon={faWalking}></FontAwesomeIcon><h1 className="btn btn-ghost normal-case lg:text-5xl sm:text-3xl text-white">Fitness Zone</h1>
        </div>
         </div>

        </div>
    );
};

export default Header;