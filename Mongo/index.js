const mongoose = require('mongoose');

main().then(() => {
    console.log("Connected to MongoDB");
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/practice'); 
}

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  age: Number
});

const User = mongoose.model('User', userSchema);

User.find({ age: { $gte: 35 } }).then(users => {
    console.log('Users retrieved from the database:', users);
}).catch(err => {
    console.error('Error retrieving users:', err);
});


// User.insertMany([
//     { username: 'Alice', email: 'alice@example.com', age: 28 },
//     { username: 'Bob', email: 'bob@example.com', age: 35 },
//     { username: 'Charlie', email: 'charlie@example.com', age: 42 },
//     { username: 'David', email: 'david@example.com', age: 29 },
//     { username: 'Eve', email: 'eve@example.com', age: 31 },
//     { username: 'Frank', email: 'frank@example.com', age: 38 }
// ]).then(() => {
//     console.log('Users inserted into the database');
// }).catch(err => {
//     console.error('Error inserting users:', err);
// });


// user2.save().then(() => {
//   console.log('User saved to the database');
// }).catch(err => {
//   console.error('Error saving user:', err);
// });