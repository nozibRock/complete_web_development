const numbers = [5, 13, 7, 41, 30, 5, 2, 19];
const bigNumbers = numbers.filter((number) => number > 20);
// console.log(bigNumbers);

const smallNumbers = numbers.filter((number) => number < 10);
// console.log(smallNumbers);

const products = [
  {
    name: "Simple Modern Classic Insulated Tumbler with Straw and Flip Lid - Stainless Steel Water Bottle Iced Coffee Travel Mug",
    price: 23,
    color: "Midnight Black",
  },
  {
    name: "SAMSUNG Galaxy S21+ Plus 5G Factory Unlocked Android Cell Phone 256GB US Version Smartphone Pro-Grade Camera 8K Video 64MP High Res, Phantom Black",
    price: 1050,
    color: "Phantom Black",
  },
  {
    name: "Fitbit Versa 2 Health and Fitness Smartwatch with Heart Rate, Music, Alexa Built-In, Sleep and Swim Tracking, Black/Carbon, One Size (S and L Bands Included)",
    price: 176,
    color: "black",
  },
  {
    name: "Post-it Mini Notes, 1 3/8 in x 1 7/8 in, 18 Pads, America's #1 Favorite Sticky Notes, Cape Town Collection, Bright Colors (Blue, Orange, Pink, Green), Clean Removal, Recyclable (653-18AU)",
    price: 17,
    color: "pink",
  },
  {
    name: "Luminarc Perfection Stemless Wine Glass (Set of 12), 15 oz, Clear - N0056",
    price: 24,
    color: "white",
  },
];
const expensive = products.filter((product) => product.price > 1000);
// console.log(expensive);

const blacks = products.filter((product) => product.color == "pink");
console.log(blacks);

const whiteItem = products.find((product) => product.color == "black");
console.log(whiteItem);
