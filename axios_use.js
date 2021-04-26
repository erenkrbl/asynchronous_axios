const getBtn = document.getElementById('get');
const postBtn = document.getElementById('post');
const putPatchBtn = document.getElementById('put-patch');
const sameTimeRequestBtn = document.getElementById('same-time-request');
const headersBtn = document.getElementById('headers');
const errorBtn = document.getElementById('error');

getBtn.addEventListener('click', getData);
postBtn.addEventListener('click', postData);
putPatchBtn.addEventListener('click', putPatchData);
sameTimeRequestBtn.addEventListener('click', sameTimeRequestData);
headersBtn.addEventListener('click', customHeader);
errorBtn.addEventListener('click', errorOperation)


function getData() {
    // axios({
    //     method: 'GET',
    //     url: 'https://jsonplaceholder.typicode.com/users',
    //     params: {
    //         _limit:2
    //     }

    // })
    // .then(response => resultPrintScreen(response))
    // .catch(err => console.log(err))
    // .then(() => console.log('completed get request'));
    // axios
    //     .get('https://jsonplaceholder.typicode.com/users', {
    //         params: {
    //             _limit: 1,
    //         }
    //     })
    //     .then(response => resultPrintScreen(response))
    //     .catch(err => console.log(err))
    //     .then(() => console.log('completed get request'));
    axios
        .get('https://jsonplaceholder.typicode.com/users?_limit=3')
        .then(response => resultPrintScreen(response))
        .catch(err => console.log(err))
        .then(() => console.log('completed get request'));
    
}

function postData() {
    console.log("post data");
}

function putPatchData() {
    console.log("put patch data");
}

function sameTimeRequestData() {
    console.log("same time request");
}

function customHeader () {
    console.log('create custom header');
}

function errorOperation() {
    console.log('error operations')
}

function resultPrintScreen (response) {
    document.querySelector('.result').innerHTML = `
    <div class="notification is-info">
        <div class="columns is-mobile is-vcentered">
            <div class="column"><h1 class="title">${response.status}</div>
            <div class="column"><h1 class="subtitle">result</div>
        </div> 
    </div>

    <div class="section">
        
        <article class="message is-success">
            <div class="message-header">
                <p>Header</p>
            </div>
            <div class="message-body has-background-white has-text-dark">
            <pre>${JSON.stringify(response.headers, null, 4)}</pre>
            </div>
        </article>
        
    </div>
    <div class="section">
        <div class="container">
            <article class="message is-success">
                <div class="message-header">
                  <p>Data</p>
                </div>
                <div class="message-body has-background-white has-text-dark">
                <pre>${JSON.stringify(response.data, null, 4)}</pre>
                </div>
              </article>
        </div>
    </div>
    <div class="section">
        <div class="container">
            <article class="message is-success">
                <div class="message-header">
                  <p>Config</p>
                </div>
                <div class="message-body has-background-white has-text-dark">
                <pre>${JSON.stringify(response.config, null, 4)}</pre>
                </div>
              </article>
        </div>
    `
    
}