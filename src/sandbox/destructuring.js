console.log('destructuring');
const person = {
  name:'Jason',
  age:34,
  location: {
    city:'London',
    temp:6
  }
};

console.log(`${person.name} is ${person.age}`);

const {name = 'Annonymous', age} = person;

const {city: personCity, temp} = person.location;

console.log(`${name} is ${age}`);

if (personCity && temp) {
  console.log(`It is ${temp} in ${personCity}`);
}

console.log('****CHALLENGE TIME****');


const book = {
  title:"Ego is the enemy",
  author:'Ryan Holiday',
  publisher: {
    name:'Penguin'
  }
}

const {name: publisherName = 'Self-Published'} = book.publisher;

console.log(publisherName);

console.log('+++Array Destructuring+++');

const address = ['11 Calais Hill', 'Canterbury', 'Kent', 'CT29LT'];

console.log(`You are in ${address[1]} in ${address[2]}`);

const [, city, county] = address

console.log(`You are in ${city} in ${county}`);


console.log('****CHALLENGE TIME****');

const items = ['Coffee (hot)', '£2.00', '£2.50', '£2.75'];

const [item, ,mediumPrice] = items;

console.log(`A medium ${item} costs ${mediumPrice}`);



