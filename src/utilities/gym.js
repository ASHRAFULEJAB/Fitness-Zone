// use local storage to manage cart data
const addToDb = id =>{
    let breakTime = {};

    //get the shopping cart from local storage
    const savedTime = localStorage.getItem('added-time');
    if(savedTime){
        breakTime = JSON.parse(savedTime);
    }

    // add quantity
    const quantity = breakTime[id];
    if(quantity){
        const newQuantity = quantity + 1;
        breakTime[id] = newQuantity;
    }
    else{
        breakTime[id] = 1;
    }
    localStorage.setItem('added-time', JSON.stringify(breakTime));
}

const getSavedTime=()=>{
    let breakTime = {};

    //get the shopping cart from local storage
    const savedTime = localStorage.getItem('added-time');
    if(savedTime){
        breakTime = JSON.parse(savedTime);
    }
    return breakTime;
}

export {
    addToDb, 
    getSavedTime,
    
}