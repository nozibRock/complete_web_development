const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
// const ObjectId  = require("mongodb").ObjectID;
require("dotenv").config();

// middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.ntghj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run() {
  try {
    // Connect the client to the server
    await client.connect();
    // Establish and verify connection
    const productCollection = client.db("emaJohn").collection("product");

    app.get("/product", async (req, res) => {
      console.log("query", req.query);
      const page = parseInt(req.query.page);
      const count = parseInt(req.query.size);
      const query = {};
      const cursor = productCollection.find(query);
      let products;
      if (page || count) {
        products = await cursor
          .skip(page * count)
          .limit(count)
          .toArray();
      } else {
        products = await cursor.toArray();
      }
      res.send(products);
    });

    app.get("/productCount", async (req, res) => {
      const count = await productCollection.estimatedDocumentCount();
      res.send({ count });
    });

    // use post to get products by id
    app.post("/productByKeys", async (req, res) => {
      const keys = req.body;
      const ids = keys.map((id) => ObjectId(id));
      const query = { _id: { $in: ids } };
      const cursor = productCollection.find(query);
      const products = await cursor.toArray();
      console.log(keys);
      res.send(products);
    });
  } finally {}
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hello World! John is running and waiting for Ema");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
