const btnTextBring = document.getElementById('btn-text-bring');
btnTextBring.addEventListener('click', getText);

const resultDiv = document.getElementById('result');

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
        .then(response =>response.text())
        .then(result => resultDiv.innerText = result)
        .catch(err => console.log(err));
}