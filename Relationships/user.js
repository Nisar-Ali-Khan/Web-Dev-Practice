const mongoose = require('mongoose');
const { Schema } = mongoose;


main()
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://localhost:27017/realtionDemo');
}

const userSchema = new Schema({
    name: String,
    addresses : [
        {
            _id: false,
            location: String,
            city: String
        }
    ]
});

const User = mongoose.model('User', userSchema);
const addUser = async () => {
    let user1 = new User({
        name : "Nisar ALi",
        addresses: [{
            location: "Street 1",
            city: "Karachi"
        }]
    })
    user1.addresses.push({ location: "Street 2", city: "Lahore" });
    await user1.save();
    console.log("User added:", user1);
}
addUser();
