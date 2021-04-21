// asynchronous operation logic
console.log('Started');

setTimeout(function () {
    console.log('5 milliseconds operation end')
}, 5000);

setTimeout(function () {
    console.log('0 milliseconds operation end')
}, 0);

console.log('End');
