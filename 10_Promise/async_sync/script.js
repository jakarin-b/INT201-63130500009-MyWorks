// 1. synchronous
console.log(`hello `);
console.log('world, ');
console.log('bye');

//2. asynchronous
// console.log(`hello `);
// setTimeout(() => console.log('world, '), 3000);
// console.log('bye');

//2.1 asynchronous (using promise then() method)

// console.log(`hello `);
// const wait = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve('world');
//   }, 2000);
// });

// wait.then((data) => {
//   console.log(data);
//   console.log('bye');
// });

//2.2 asynchronous (using async/await)

// console.log(`hello `);

// async function delay() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve('world');
//     }, 2000);
//   });
// }

// async function getWord() {
//   const data = await delay();
//   console.log(data);
//   console.log('bye');
// }

// getWord();

//getFriend is a higher order function(sync)
// function getFriend(name, surname, cb) {
//     const fullname = cb(name, surname);
//     console.log(`fullname: ${fullname}`);
//   }

  const friends = [
    { fullname: 'Paul Lee', address: 'Bangkok, Thailand' },
    { fullname: 'Yoko Naree', address: 'Kyoto, Japan' }
  ];
  
  function getFullName(name, surname) {
    return name + ' ' + surname;
  }
  
  //getFriend is a higher order function(async)
  function getFriend(name, surname, cb) {
    return new Promise((resolve, reject) => {
      const fullname = cb(name, surname);
      console.log(`fullname: ${fullname}`);
      if (fullname !== null) resolve(fullname);
      else reject(new Error('cannot get fullname'));
    });
  }
  
  getFriend('Yoko', 'Naree', getFullName).then((friend) => {
    console.log(`my frined name is ${friend}`);
    console.log('Bye Bye');
  });
  
