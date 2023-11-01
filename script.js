const users = {
  firstName: 'Pranjal',
  lastName: 'Gosavi',
  age: 18,
  country: 'India',
};
localStorage.setItem('user', JSON.stringify(users));
console.log(localStorage);
//Challenge 2: Get the users data stored on your browser's localStorage using the getItem() method and print the localStorage in the console.
const userData= JSON.parse(localStorage.getItem('user'));
console.log(userData);
//Challenge 3: Using removeItem() method, remove the "state" data stored in your browser's localStorage and print the localStorage in the console.
localStorage.removeItem('user');
console.log(localStorage);
//Challenge 4: Using clear() method to remove all the data stored in your browser's localStorage and print the localStorage in the console.
localStorage.clear();
console.log('localStorage');
//Challenge 5: Using JSON.stringify() convert the given object into the string and print the same.
const user = {
  firstName: 'Rajat',
  age: 25,
  skills: ['HTML', 'CSS', 'JS', 'React'],
};
const jsonString= JSON.stringify(user);
console.log(jsonString);