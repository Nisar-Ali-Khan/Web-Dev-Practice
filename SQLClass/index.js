const mysql = require('mysql2');
const { faker } = require('@faker-js/faker');
const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); 

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '112233',
  database: 'delta_app'
});

const getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password()
  ];
};

//const q = 'INSERT INTO `user` (id, username, email, password) VALUES ?';

// const data = [];
// for (let i = 0; i < 100; i++) {
//   data.push(getRandomUser());
// }

// connection.connect((error) => {
//   if (error) {
//     console.error('Error connecting to the database:', error);
//     return;
//   }

//   console.log('Connected to the database!');

//   connection.query(q, [data], (queryError, results) => {
//     if (queryError) {
//       console.error('Error querying the database:', queryError);
//     } else {
//       console.log('Users inserted:', results.affectedRows);
//     }

//     connection.end();
//   });
// });

// Home Route
app.get('/', (req, res) => {
  let q = 'SELECT count (*) FROM `user`';
  try {
    connection.query(q, (error, results) => {
      if (error) throw error;
      let count = results[0]['count (*)'];

      res.render("home.ejs", { count: count });
    });
  } catch (error) {
    console.log(error);
    res.send('Something went wrong ');
  }
});

// Show Users Route
app.get('/user', (req, res) => {
  let q = `SELECT * FROM user`;

  try {
    connection.query(q, (error, user) => {
      if (error) throw error;
      res.render("user.ejs", { users: user });
    });
  } catch (error) {
    console.log(error);
    res.send('Something went wrong ');
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
}); 



