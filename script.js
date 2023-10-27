//Challenge 1: Store the user's first name, last name, age, country, and state in your browser's localStorage using the setItem() method and print the localStorage in the console.

//Challenge 2: Get the users data stored on your browser's localStorage using the getItem() method and print the localStorage in the console.

//Challenge 3: Using removeItem() method, remove the "state" data stored in your browser's localStorage and print the localStorage in the console.

//Challenge 4: Using clear() method to remove all the data stored in your browser's localStorage and print the localStorage in the console.

//Challenge 5: Using JSON.stringify() convert the given object into the string and print the same.
// Challenge1
const user1 = {
    firstName: 'Rajat',
    lastName: 'Joshi',
    age: 25,
    country: 'India',
    state: 'Maharastra',
  };
  localStorage.setItem('user', JSON.stringify(user1));
  console.log(localStorage);
  // Challenge2
  const userData = JSON.parse(localStorage.getItem('user'));
  console.log(userData);
  // Challenge3
  localStorage.removeItem('user');
  console.log(localStorage);
  // Challenge4
  localStorage.clear();
  console.log(localStorage);
  // Challenge5
  const user = {
    firstName: 'Rajat',
    age: 25,
    skills: ['HTML', 'CSS', 'JS', 'React'],
  };
  const jsonString = JSON.stringify(user);
  console.log(jsonString);
  