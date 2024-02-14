import { Products } from "../type/Products";
import ProductsItem from "./ProductsItem";


export default function ProductsList() {

const products:Products[] = [
    {title: "велосипед", price: 2300, count: 12},
    {title: "ролики", price: 700, count: 7},
    {title: "коньки", price: 800, count: 5},
    {title: "лыжи", price: 1200, count: 0},
    {title: "сноуборд", price: 1600, count: 10}
  ]


  return (
    <div>
        {products.map((product)=> <ProductsItem key={product.title}
        {...product}
       />)
    }
    </div>
  )
}