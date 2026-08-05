const path = require('path');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Chat = require('./models/chat');


app.set("views", __dirname + "/views");
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, "public")));

main()
.then(() => {
    console.log('Connected to MongoDB');
});

async function main() {
    await mongoose.connect('mongodb://localhost:27017/whatsapp');
}

app.get('/chats', async (req, res) => {
    let chats = await Chat.find({});
    console.log(chats);
    res.render('index.ejs', { chats });
});

let chat1 = new Chat({
    from: 'Alice',
    to: 'Bob',
    msg: 'Hello, Bob!',
    createdAt: new Date(),
});

chat1.save()
    .then(() => console.log('Chat message saved'))
    .catch(err => console.error(err));


app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});