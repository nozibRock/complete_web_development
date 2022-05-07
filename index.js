const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion } = require("mongodb");
require("dotenv").config();

// middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.ntghj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
// console.log(uri);
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
/* client.connect((err) => {
  const collection = client.db("emaJohn").collection("product");
  // perform actions on the collection object
  console.log('mongo is connected');
  client.close();
});
 */
async function run() {
  try {
    // Connect the client to the server
    await client.connect();
    // Establish and verify connection
    // await client.db("admin").command({ ping: 1 });
    // console.log("Connected successfully to server");
    const productCollection = client.db("emaJohn").collection("product");

    app.get("/product", async (req, res) => {
      console.log("query", req.query);
      const page = parseInt(req.query.page);
      const count = parseInt(req.query.size);
      const query = {};
      const cursor = productCollection.find(query);
      let products;
      if (page || count) {
        products = await cursor.skip(page*count).limit(count).toArray();
      } else {
        products = await cursor.toArray();
      }
      res.send(products);
    });

    app.get("/product-count", async (req, res) => {
      const query = {};
      const cursor = productCollection.find(query);
      const count = await productCollection.estimatedDocumentCount();
      res.send({ count });
    });
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hello World! John is running and waiting for Ema");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
