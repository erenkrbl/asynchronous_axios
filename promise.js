/*
const myPromise = new Promise((resolve, reject) =>{
    // long time operation
    setTimeout(()=>{
        //console.log("After 3 seconds, the transactions are finished.");
        // in case the process is running
        //resolve("After 3 seconds, the transactions are finished.");
        //resolve({sName : 'Eric', id : 234});
        // in case of error
        reject('I could not go to internet');
    },3000);
});

myPromise
    .then(result =>{console.log(result)})
    .catch(error =>{console.log(error)});
*/


function studentBring(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const array = [];

        for (let i = 0; i < 20; i++){
            array.push({sName : 'stusent ' + (i+1), id : i+1})
        }

        resolve(array);
        }, 2000);
    });
}

function studentWrite(array) {
    console.log(array);
}

studentBring()
    .then(studentArray =>studentWrite(studentArray));

