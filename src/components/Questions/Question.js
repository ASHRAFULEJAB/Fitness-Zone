import React from 'react';

const Question = () => {
    return (
        <div>
            <h1 className='text-6xl mt-6 ml-5 text-center '>QA Sections</h1>

            <div className='lg:ml-48 lg:grid grid-cols-3 sm:grid grid-cols-1 sm:mb-10 mt-6 mb-16'>

            <div className="card lg:w-9/12 sm:w-7/12 bg-neutral-400 shadow-xl sm:mb-10 ">
               <div className="card-body">
                 <h2 className="card-title text-3xl font-bold">how does react work</h2>
                 <p>React is a JavaScript library (not a framework) that creates user interfaces (UIs) in a predictable and efficient way using declarative code. You can use it to help build single page applications and mobile apps, or to build complex apps if you utilise it with other libraries.</p>
                
             <div className="card-actions justify-end">
      
            </div>
              </div>
                </div>
                
            <div className="card lg:w-9/12 sm:w-7/12 bg-neutral-400 shadow-xl sm:mt-6">
               <div className="card-body">
                 <h2 className="card-title text-3xl font-bold">difference between props and state</h2>
                 <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this.setState property is used to update the state values in the component.</p>
                
             <div className="card-actions justify-end">
      
            </div>
              </div>
                </div>
            <div className="card lg:w-9/12 bg-neutral-400 shadow-xl sm:mt-10">
               <div className="card-body">
                 <h2 className="card-title text-3xl font-bold">what is the other work of useEffect without loading data from Api</h2>
                 <p>we can use useeffct for doing side effect at react like data fetch,run direct timer and dom manupulation.Running on state change: validating input field.
                 Running on state change: live filtering.
               Running on state change: trigger animation on new array value.</p>
                
             <div className="card-actions justify-end">
      
            </div>
              </div>
                </div>
           
            </div>
            </div>
            

    );
};

export default Question;