const getBtn = document.getElementById('get');
const postBtn = document.getElementById('post');
const putPatchBtn = document.getElementById('put-patch');
const sameTimeRequestBtn = document.getElementById('same-time-request');
const deleteBtn = document.getElementById('delete')
const headersBtn = document.getElementById('headers');
const errorBtn = document.getElementById('error');

getBtn.addEventListener('click', getData);
postBtn.addEventListener('click', postData);
putPatchBtn.addEventListener('click', putPatchData);
deleteBtn.addEventListener('click', deleteData)
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
    // axios.post('https://jsonplaceholder.typicode.com/posts', {
    //     title: 'New Title',
    //     body: 'Here is body',
    //     userId: 54
    // }).then(response =>resultPrintScreen(response))
    // .catch(err => console.log(err))
    // .then(() => console.log("post data"))

    // axios({
    //     method: 'POST',
    //     url: 'https://jsonplaceholder.typicode.com/users',
    //     data :{
    //         name: 'Eric Oliver',
    //         username: 'Erico',
    //         email: 'e@o.com'
    //     }
       
    // })
    // .then(response => resultPrintScreen(response))
    // .catch(err => console.log(err));
    
    axios.post('https://jsonplaceholder.typicode.com/users', {
        name: 'Tom Clark',
        username: 'Tclark',
        email:'tclark@tcl.com'
    })
    .then(response => resultPrintScreen(response))
    .catch(err => console.log(err));
}

function putPatchData() {
    // axios.put('https://jsonplaceholder.typicode.com/users/1', {
    //     name: 'Elvin Khan',
    //     username: 'Elvin',
    //     email: 'ekhan@ek.com',
    // })
    // .then(response => resultPrintScreen(response))
    // .catch(err => console.log(err));
    axios.patch('https://jsonplaceholder.typicode.com/users/2', {
        name: 'Oliver Thomas',
        username: 'Oliver'
    })
    .then(response => resultPrintScreen(response))
    .catch(err => console.log(err));

}

function deleteData(){
    axios.delete('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => resultPrintScreen(response))
    .catch(err => console.log(err));   
}

function sameTimeRequestData() {
    // axios.all([
    //     axios.get('https://jsonplaceholder.typicode.com/users'),
    //     axios.get('https://jsonplaceholder.typicode.com/posts'),   
    // ])
    // .then(response => {
    //     console.log(response[0].data);
    //     console.log(response[1].data);
    //     resultPrintScreen(response[0])
    // })
    // .catch(err => console.log(err))
    axios.all([
        axios.get('https://jsonplaceholder.typicode.com/users?_limit=1'),
        axios.get('https://jsonplaceholder.typicode.com/posts?_limit=1'),   
    ])
    .then(axios.spread((users, posts) => {
        console.log(users.data);
        console.log(posts.data);
        resultPrintScreen(users);
    }))
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

function errorPrint (error){
    console.log(error);
    document.querySelector('.result').innerHTML = `
    <div class="notification is-info">
    <div class="columns is-mobile is-vcentered">
        <div class="column"><h1 class="title">${error}</div>
        <div class="column"><h1 class="subtitle">result</div>
    </div> 
</div>`;
}