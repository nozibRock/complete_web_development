const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");
const ObjectId = require('mongodb').ObjectId;

const app = express();
const port = process.env.PORT || 5000;

// use middleware
app.use(cors());
app.use(express.json());

// user: Arnob
// password: MxkdUfK9LX6D.92

const uri =
  "mongodb+srv://Arnob:MxkdUfK9LX6D.92@cluster0.5jrdm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run() {
  try {
    await client.connect();
    const userCollection = client.db("foodExpress").collection("user");

    app.get("/user", async(req, res) => {
      // query for movies that have a runtime less than 15 minutes
      const query = {};
      const cursor = userCollection.find(query);
      const users = await cursor.toArray();
      res.send(users);
    });

    // POST User : add a new user
    app.post("/user", async (req, res) => {
      const newUser = req.body;
      console.log("adding new user", newUser);
      const result = await userCollection.insertOne(newUser);
      res.send(result);
    });

    // delete user
    app.delete('/user/:id', async (req, res) => {
      const id = req.params.id;
      // Query for a movie that has title "Annie Hall"
      const query = { _id: ObjectId(id) };

      
    })
  } finally {
    await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Running my node crud server!");
});

app.listen(port, () => {
  console.log("CRUD server is running");
});
