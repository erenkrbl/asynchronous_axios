console.log("Start");

studentBring(studentWrite);

// studentBring(function(studentArray){
//     console.log(studentArray);
// });

console.log("End");

function studentBring(callback) {
    setTimeout(function(){
        const array = [];

        for (let i = 0; i < 20; i++){
            array.push({sName : 'stusent ' + (i+1), id : i+1})
        }

        callback(array);
    },3000);
}

function studentWrite(studentArray) {
    console.log(studentArray);
}