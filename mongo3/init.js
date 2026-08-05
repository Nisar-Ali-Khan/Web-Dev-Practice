const mongoose = require('mongoose');
const Chat = require('./models/chat');

main()
  .then(() => {
    console.log('Done seeding MongoDB');
  })
  .catch((err) => {
    console.error('Seed error:', err);
    process.exit(1);
  });

async function main() {
  await mongoose.connect('mongodb://localhost:27017/whatsapp');
  console.log('Connected to MongoDB');

  await Chat.deleteMany({});

  const chats = [
    {
      from: 'Alice',
      to: 'Bob',
      msg: 'Hello, Bob!',
      createdAt: new Date(),
    },
    {
      from: 'Bob',
      to: 'Alice',
      msg: 'Hi, Alice!',
      createdAt: new Date(),
    },
    {
      from: 'Alice',
      to: 'Bob',
      msg: 'How are you?',
      createdAt: new Date(),
    },
    {
      from: 'Bob',
      to: 'Alice',
      msg: 'I am good, thanks!',
      createdAt: new Date(),
    },
  ];

  const inserted = await Chat.insertMany(chats);
  console.log(`Inserted ${inserted.length} chat documents.`);

  await mongoose.connection.close();
}