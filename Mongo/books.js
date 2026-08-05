const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: { type: String },
    price: { type: Number }
});

const Book = mongoose.model('Book', bookSchema);

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/books');
    console.log('Connected to MongoDB');

    const book1 = new Book({
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        price: 10.99
    });

    await book1.save();
    console.log('Book saved to the database');
}

main().catch(err => {
    console.error(err);
});