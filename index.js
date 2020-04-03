const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());

const users = ["Asad", "Bashir", "Abdullah", "Mamun", "Zahid", "Tamim"];

// app.get('/', (req, res) => {
//     res.send('I know how to open node ...YAY');
// });

// app.get('/', (req, res) => {
//     const fruit = {
//         product: "apple",
//         price: 221
//     }
//     res.send(fruit);
// });

// app.get('/fruits/banana', (req, res) => {
//     res.send({ fruit: 'banana', quantity: 1000, price: 10000 });
// });

app.get('/users/:id', (req, res) => {
    console.log(req.params.id);
    console.log(req.query.sort);

    const id = req.params.id;
    const name = users[id];
    res.send({ id, name });
});

app.post('/addUser', (req, res) => {
    // console.log('Data Received: ', req.body);

    // Save to Database
    const user = req.body;
    user.id = 55;
    res.send(user);
})

app.listen(3000, () => console.log('listening to port 3000'));