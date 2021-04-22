const btnTextBring = document.getElementById('btn-text-bring');
btnTextBring.addEventListener('click', getText);

//console.log(this);

function getText(e){
    e.preventDefault();
    const fetchResult = fetch('deneme.txt');
    fetchResult.then((response) => {
        const responseText = response.text();
        responseText.then(result => {
            console.log(result);
        });
    });
    console.log(fetchResult);
}