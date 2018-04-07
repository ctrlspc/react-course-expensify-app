const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve({
    //   name:'Jason',
    //   age:34
    // });
    reject('it all went wrong!');
  }, 5000);
});

console.log('before');

promise.then((data) => {
  console.log('1 ', data);
}).catch((error) => {
  console.log('Error', error);
});



console.log('after');