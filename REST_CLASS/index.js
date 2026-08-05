const express = require('express');
const app = express();

const port = 3000;
const path = require('path');
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use (express.static(path.join(__dirname, 'public')));

let posts = [
    {
        id: "1a",
        username: "John Doe",
        title: "My First Post",
        content: "This is the content of my first   post."
    },
    {
        id: "2b",
        username: "Jane Smith",
        title: "Hello World",
        content: "Welcome to my blog!"
    },
    {
        id: "3c",
        username: "Alice Johnson",
        title: "A Day in the Life",
        content: "Today I went to the park and had a great time."   
    
    }
];

app.get('/posts', (req, res) => {
    res.render("index.ejs", { posts: posts });
});

app.get('/posts/new', (req, res) => {
    res.render("new.ejs");
});

app.post('/posts', (req, res) => {
    let {username, content} = req.body;
    posts.push({ username, content });
    res.redirect('/posts');
});

app.get('/posts/:id', (req, res) => {
    let { id } = req.params;
    let post = posts.find(p => p.id === p.id);
    res.render("show.ejs");
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});