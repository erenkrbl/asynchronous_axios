const myPromise = new Promise((resolve, rejeck) =>{
    // long time operation
    setTimeout(()=>{
        //console.log("After 3 seconds, the transactions are finished.");
        // in case the process is running
        //resolve("After 3 seconds, the transactions are finished.");
        resolve({sName : 'Eric', id : 234});
    },3000);
});

myPromise.then(result =>{
    console.log(result);
})