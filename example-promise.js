// function getTempCallback (location, callback) {
//     callback(undefined, 78);
//     callback('City not found');
// }
//
// getTempCallback('London', function(err, temp) {
//     if (err) {
//         console.log('error', err);
//     } else {
//         console.log('success', temp);
//     }
// });
//
// function getTempPromise (location) {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             resolve(79);
//             reject('City not found!');
//         }, 1000);
//     });
// }
//
// getTempPromise('London').then(function (temp) {
//     console.log('Promise success', temp);
// }, function (err) {
//     console.log('Promise error', err);
// });

// Challenge
function addPromise(a, b) {
    return new Promise(function (resolve, reject) {
        if (typeof a !== 'number' || typeof b !== 'number') {
            reject('Both arguments have to be numbers.');
        } else {
            resolve(a+b);
        }
    });
}


addPromise(2, '6').then(function (result) {
    console.log('Caluculating Success!', result);
}, function (err) {
    console.log('Calculating Error!', err);
})
