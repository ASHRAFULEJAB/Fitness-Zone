

const Break = ({addToBreak}) => {
    // const [breakTime,setBreakTime] = useState([])
    // console.log(breakTime)
    // const addtoBreak = (event)=>{
    // const addTime=parseInt(event.target.value);
    // setBreakTime( addTime);
    // }
    
    return (
        <div className='mt-6'>
            <div className="card sm:w-5/12 lg:w-11/12 bg-purple-400 shadow-xl grid lg:grid-cols-2">
             <div className="card-body">
               <h1 className="card-title text-3xl text">Add A break</h1>
               <div className='flex '>
                <button value='10' onClick={addToBreak} className=' place-content-center border border-sky-500 rounded-full bg-white text-3xl text-center mr-5' >10S</button>
                <button value='20' onClick={addToBreak} className='border border-sky-500 rounded-full bg-white text-3xl text-center mr-5'>20s</button>
                <button value='30' onClick={addToBreak} className='border border-sky-500 rounded-full bg-white text-3xl text-center mr-5'>30s</button>
                <button value='40' onClick={addToBreak} className='border border-sky-500 rounded-full bg-white text-3xl text-center mr-5'>40s</button>
                <button value='50' onClick={addToBreak} className='border border-sky-500 rounded-full bg-white text-3xl text-center'>50s</button>
               </div>
             
          </div>
         </div>
        </div>
    );
};

export default Break;