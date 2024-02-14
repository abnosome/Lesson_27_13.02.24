import AddProduct from "./components/AddProduct";


import ProductsItem from "./components/ProductsItem";



function App() {
  return (
    <div>
      <AddProduct />
      
      <ProductsItem title={"book"} price={2} count={1}/>
      
    </div>
  );
}

export default App;
