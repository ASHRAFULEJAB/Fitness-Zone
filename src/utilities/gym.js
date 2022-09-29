// use local storage to manage cart data
const addToDb = id =>{
   
    localStorage.setItem('added-time', JSON.stringify(id));
}

const getSavedTime=()=>{
    let breakTime ;

    //get the shopping cart from local storage
    const savedTime = localStorage.getItem('added-time');
    if(savedTime){
        breakTime = JSON.parse(savedTime);
        console.log(breakTime)
    }
    return breakTime;
}

export {
    addToDb, 
    getSavedTime,
    
}