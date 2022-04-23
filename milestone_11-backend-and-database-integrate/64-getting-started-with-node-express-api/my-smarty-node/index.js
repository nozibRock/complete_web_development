const express = require("express");
var cors = require("cors");
var app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, from my over own personal smarty World!!");
});

const users = [
  {
    id: 1,
    name: "Shabana",
    email: "shabana@gmail.com",
    phone: "017699999999",
  },
  {
    id: 2,
    name: "Shabnoor",
    email: "shabnoor@gmail.com",
    phone: "017699999999",
  },
  {
    id: 3,
    name: "Jaya",
    email: "jaya@gmail.com",
    phone: "017699999999",
  },
  { id: 4, name: "babana", email: "babana@gmail.com", phone: "017699999999" },
  { id: 5, name: "aabana", email: "aabana@gmail.com", phone: "017699999999" },
  { id: 6, name: "labana", email: "labana@gmail.com", phone: "017699999999" },
  { id: 7, name: "vabana", email: "vabana@gmail.com", phone: "017699999999" },
];

app.get("/user/:id", (req, res) => {
  console.log(req.params);
  const id = parseInt(req.params.id);
  //   const id = req.params.id;
  const user = users.find((u) => u.id === id);
  //   const user = users[id];
  res.send(user);
});

/* app.get("/users", (req, res) => {
  res.send({ id: 1, name: "Abdul Alim", job: "Khai sudhu halim" });
}); */

app.get("/users", (req, res) => {
  console.log('query', req.query);
  res.send(users);
});

app.post("/user", (req, res) => {
  console.log("request", req.body);
  const user = req.body;
  user.id = users.length + 1;
  users.push(user);
  res.send(user, "post method success");
});

app.get("/fruits", (req, res) => {
  res.send(["mango", "apple", "oranges"]);
});

app.get("/fruits/mango/fazli", (req, res) => {
  res.send();
});

app.listen(port, () => {
  console.log("Listening to port", port);
});
