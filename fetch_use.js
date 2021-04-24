const btnTextBring = document.getElementById('btn-text-bring');
const btnJSONBring = document.getElementById('btn-json-bring');
const btnApiFromJSONBring = document.getElementById('btn-json-api-bring');

btnTextBring.addEventListener('click', getText);
btnJSONBring.addEventListener('click', getJSON);
btnApiFromJSONBring.addEventListener('click', getJSONfromApi);


const resultDiv = document.getElementById('result');

function getJSON(e){
    e.preventDefault();
    fetch('students.json')
        .then(response => response.json())
        .then(result => {
            let output = '';
            result.forEach(student => {
            output += `Student name ${student.name} id ${student.id} \n`
        })
        resultDiv.innerText = output;
    })
}
//console.log(this);

function getText(e){
    e.preventDefault();
    // const fetchResult = fetch('deneme.txt');
    // fetchResult.then((response) => {
    //     const responseText = response.text();
    //     responseText.then(result => {
    //         console.log(result);
    //     });
    // });

    fetch('deneme.txt')
        .then(response => response.text())
        .then(result => resultDiv.innerText = result)
        .catch(err => console.log(err));
}

function getJSONfromApi(e){
    e.preventDefault();
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(result => screenPrint(result))
}

function screenPrint(data) {
    let output = '';
    data.forEach(user => {
        output +=`<li> ${user.name} </li>`
    });
    resultDiv.innerHTML = output;
}
