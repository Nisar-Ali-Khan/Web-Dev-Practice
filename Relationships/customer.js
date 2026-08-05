const mongoose = require('mongoose');
const { Schema } = mongoose;


main()
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://localhost:27017/realtionDemo');
}

const orderSchema = new Schema({
    item: String,
    price: Number
});

const customerSchema = new Schema({
    name: String,
    orders: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Order'
        }
    ]
});

const Order = mongoose.model('Order', orderSchema);
const Customer = mongoose.model('Customer', customerSchema);

const addCustomer = async () => {
    let cust1 = new Customer({
        name : "Ali",
    });

    let order1 = await Order.findOne({ item: "Item 1" });
    let order2 = await Order.findOne({ item: "Item 2" });

    cust1.orders.push(order1);
    cust1.orders.push(order2);

    await cust1.save();
    console.log("Customer added:", cust1);
};
addCustomer();

const addCust = async () => {
    let newCust = new Customer({
        name : "Ahmed",
    });
    let newOrder = new Order({
        item: "Pizza",
        price: 400
    });

    newCust.orders.push(newOrder);
    await newOrder.save();
    await newCust.save();
    console.log("Order added:", newOrder); q
};
addCust();


//         {item: "Item 1", price: 100},
//         {item: "Item 2", price: 200},
//         {item: "Item 3", price: 300}
//     ]);
//     console.log("Orders added");
// }
// addOrder();