function getUser(id){
    console.log(`${id} id fetch user's information`);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({fname: 'Eric', id: id})
        }, 2000);
    });
}

function getCourses(userName) {
    console.log(`Bring ${userName}'s courses`);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('Bring courses error out');
            resolve(['python', 'javascript', 'flutter']);
        }, 2000);
    });
}

function getComment(coursesName){
    console.log(`Bring ${coursesName}'s comments`);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Courses wonderfull');
        }, 2000);
    });
}

getUser(1234)
    .then(user =>getCourses(user.fname))
    .then(coursesArray => getComment(coursesArray[0]))
    .then(comment => console.log(comment))
    .catch(error => console.log("Error: " + error));

// getUser(1234).then(user => {
//     getCourses(user.fname).then(coursesArray => {
//         getComment(coursesArray[0]).then(comment => {
//             console.log(comment);
//         });
//     });
// });

// getCourses('eric').then(coursesArray => {
//     console.log(coursesArray);
// });