const btnTextBring = document.getElementById('btn-text-bring');
btnTextBring.addEventListener('click', getText);

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
        .then(result => console.log(result));
}