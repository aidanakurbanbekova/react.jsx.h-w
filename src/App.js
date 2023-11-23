import React from "react";
import './App.css';
import ProductsCard from "./components/products/products";

const products = [
    {
        id: 1,
        name: 'cheese',
        price: '10 $'
    },
    {
        id: 2,
        name: 'milk',
        price: '20 $'
    },
    {
        id: 3,
        name: 'bread',
        price: '30 $'
    },
    {
        id: 4,
        name: 'cracker',
        price: '23 $'
    },
];

function App() {
    return (
        <div className='productItem'>
            {products.map((item,id)=>{
                return(
                    <ProductsCard
                        key={item.id}
                        name={item.name}
                        price={item.price}
                    />
                )
            })}

        </div>
    );
}

export default App;
