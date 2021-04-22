const btnTextBring = document.getElementById('btn-text-bring');
const btnJSONBring = document.getElementById('btn-json-bring');
btnTextBring.addEventListener('click', getText);
btnJSONBring.addEventListener('click', getJSON);


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