import React from 'react'

type Props = {
    title: string,
    price:number,
    count: number
}

export default function ProductsItem({ title,price,count}: Props) {
  return (
   <div>
    <p>title:{title}</p>
    <p>price:{price}</p>
    <p>count:{count}</p>
   </div>
  )
}