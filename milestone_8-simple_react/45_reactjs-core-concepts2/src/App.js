import "./App.css";

function App() {
  const products = [
    { name: "MSI Raider GE66", price: 489900 },
    { name: "Apple iPhone SE", price: 66603 },
    { name: "Fossil Gen 5", price: 77504 },
    { name: "ZENOTTIC Polarized Sunglasses", price: 17309 },
  ];
  return (
    <div className="App">
      {/* <Product name="MSI Raider GE66" price="489900"></Product>
      <Product name="Apple iPhone SE" price="58900"></Product>
      <Product name="Fossil Gen 5" price="77504"></Product> */}
      {products.map((product) => (
        <Product name={product.name} price={product.price}></Product>
      ))}
    </div>
  );
}

function Product(props) {
  return (
    <div className="product">
      <h3>Name: {props.name} </h3>
      <p>Price: {props.price} </p>
    </div>
  );
}
export default App;
