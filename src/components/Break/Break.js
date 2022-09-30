

const Break = ({addToBreak}) => {

    return (
        <div className='mt-6'>
            <div className="overflow-hidden card sm:w-96 2xl:w-96 bg-gray-400 shadow-xl  2xl: grid grid-cols-2 lg: grid grid-cols-2">
             <div className="card-body">
               <h1 className="card-title text-3xl text">Add A break</h1>
               <div className='flex ml-0'>
                <button value='10' onClick={()=>addToBreak(10)} className=' place-content-center border border-sky-500 rounded-full bg-white text-2xl text-center mr-1  p-3' >10S</button>
                <button value='20' onClick={()=>addToBreak(20)} className='border border-sky-500 rounded-full bg-white text-2xl text-center mr-1 p-3'>20s</button>
                <button value='30' onClick={()=>addToBreak(30)} className='border border-sky-500 rounded-full bg-white text-2xl text-center mr-1 p-3'>30s</button>
                <button value='40' onClick={()=>addToBreak(40)} className='border border-sky-500 rounded-full bg-white text-2xl text-center mr-1 p-3'>40s</button>
                <button value='50' onClick={()=>addToBreak(50)} className='border border-sky-500 rounded-full bg-white text-2xl text-center p-3'>50s</button>
               </div>
             
          </div>
         </div>
        </div>
    );
};

export default Break;