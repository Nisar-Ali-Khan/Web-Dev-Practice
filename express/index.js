const express = require('express');
const app = express();

let port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// app.use((req, res) => {
//     console.log('Request received');
//     // res.send('request received');
//     let code = "<h1>Fruits</h1><ul><li>Apple</li><li>Banana</li><li>Orange</li></ul>";
//     res.send(code);
// });

app.get('/:username/:id', (req, res) => {
    let {username, id} = req.params;
    res.send(`Welcome to the page of @${username} with ID ${id}`);
});
