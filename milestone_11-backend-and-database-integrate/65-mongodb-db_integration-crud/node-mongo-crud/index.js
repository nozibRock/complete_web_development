const express = require('express');
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");


const app = express();
const port = process.env.PORT || 5000;

// use middleware
app.use(cors())
app.use(express.json())

// user: Arnob
// password: MxkdUfK9LX6D.92


const uri =
  "mongodb+srv://Arnob:MxkdUfK9LX6D.92@cluster0.5jrdm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });



async function run() {
    try {
        await client.connect();
        const userCollection = client.db('foodExpress').collection('user');
        const user = {
            name: 'Maisie Williams',
            email: 'maisie@gmail.com'
        }
        const result = await userCollection.insertOne(user);
        console.log(`User inserted with id ${result.insertedId}`);
    } finally {
        await client.close();
    }
}
run().catch(console.dir)


app.get('/', (req, res) => {
    res.send('Running my node crud server!');
})

app.listen(port, () => {
    console.log('CRUD server is running');
})