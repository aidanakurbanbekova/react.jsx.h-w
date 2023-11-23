import React from "react";
import  './style.module.css'

const ProductsCard = (props) => {
    console.log(ProductsCard)
    return (
    <div className='productBlock'>
        <p className='key'>{props.key}</p>
        <p>{props.name}</p>
        <p>{props.price}</p>
    </div>
)
}
export default ProductsCard;