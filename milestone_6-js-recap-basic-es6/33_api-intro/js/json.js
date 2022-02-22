console.log("API");
// javascript Object Notation
// JSON
const user = { id: 11, userName: "Aamir Khan", job: "actor" };
const stringified = JSON.stringify(user);
console.log(stringified);
console.log(user);

const shop = {
  name: "Alia Store",
  address: "Ranbir road",
  products: ["laptop", "mobile", "pepsi"],
  owner: {
    ownerName: "Alia Bhatt",
    profession: "actor",
  },
  profit: 150000,
  isExpensive: false,
};

const shopStringified = JSON.stringify(shop);
console.log(shop);
console.log(shopStringified);

const converted = JSON.parse(shopStringified)
console.log(converted);
console.log(converted.owner);

const student = {
    id: 1001, 
    name: "Alex",
    email: 'alex@gmail.com',
    password: "alex@123"
}

const studentStr1 = JSON.stringify(student, function (key, value) {
    if (key == 'password') {
        return undefined;
    } else {
        return value;
    }
});
console.log(studentStr1);
const studentStr2 = JSON.stringify(student, ['id', 'name', 'email']);
console.log(studentStr2);

