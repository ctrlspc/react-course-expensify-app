import * as firebase from 'firebase';
import expenses from '../tests/fixtures/expenses';

var config = {
  apiKey: "AIzaSyDM7qgOwkMBzWrLcwbGcm3vTLMM93tu6Eg",
  authDomain: "expensify-ec56c.firebaseapp.com",
  databaseURL: "https://expensify-ec56c.firebaseio.com",
  projectId: "expensify-ec56c",
  storageBucket: "expensify-ec56c.appspot.com",
  messagingSenderId: "239487668924"
};
firebase.initializeApp(config);

const database = firebase.database();

// const firebaseNotes = expenses.map(
//   (expense) => database.ref('expenses').push(expense)
// );

// console.log(firebaseNotes);


// database.ref('expenses').on('value',(snapshot) => {
//     const expensesArray = []

//     snapshot.forEach((childSnapshot) => {
//       expensesArray.push({
//         id:childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     })

//     console.log(expensesArray);
    
// });

database.ref('expenses').on('child_removed', (snapshot) => {
  console.log('Snapshot removed', snapshot.key, snapshot.val());
})

database.ref('expenses').on('child_changed', (snapshot) => {
  console.log('Snapshot changed', snapshot.key, snapshot.val());
})




// database.ref().set({
//   name:'Jason',
//   age:34,
//   stressLevel:7,
//   job:{
//     title:'Manager',
//     company:'UoK'
//   },
//   location:{
//     city:'Canterbury',
//     country:'United Kingdom'
//   }
// }).then(() => {
//   console.log('Data is saved');
  
// }).catch((e) => {
//   console.log('This failed', e);
// });

// const onValueChange = database.ref().on('value', (snapshot) => {
//   const value = snapshot.val()
//   console.log(`${value.name} is a ${value.job.title} at ${value.job.company}`);
// }, (errorMessage) => {
//   console.log('Doh, something went wrong', errorMessage);
// });

// // //database.ref().set('this is my data');

// // // database.ref('age').set(35);
// // // database.ref('location/city').set('London');
// // database.ref('attributes').set({
// //   hieght:'5foot 12 inches',
// //   weight:'80kg'
// // }).then(() => {
// //   console.log('Attirbutes saved');
// // }).catch((error) => {
// //   console.log('There was an error', error);
// // });

// // database.ref('isMarried').remove().then(() => {
// //   console.log('Remove completed');
// // }).catch((error) => {
// //   console.log('doh something went wrong', error);
// // });
// setTimeout(() => {
//   database.ref()
//     .update({
//     stressLevel:5,
//     'job/company':'UoK',
//     'location/city':'Canterbury'})
//     .then(() => {
//     console.log('Updated root');}
//   ).catch((error) => {
//     console.log('There was an error', error);});
// }, 3000);


