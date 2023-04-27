import React from 'react'
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import "./ProductDeatiles.css"
const ProductDeatiles = () => {
    const { id } = useParams();

    const [product, setProduct] = useState({
        id: 0,
        title: "",
        description: "",
        image: "",
        price: 0,

    });
    console.log(product);
    useEffect(_ => {

        fetch(`https://fakestoreapi.com/products/${id}`).then((res) => {
            res.json().then((data) => {
                setProduct(data);
            })

        })

    }, [])

    return (
        <>

            <div className="main">
                <div className="productList">
                    <img src={product.image} alt="img" style={{ width: "30%", height: "30%" }} />
                    <h2>Title:{product.title}</h2>
                    <h2>Price:{product.price}</h2>
                    <h3>Decription:{product.description}</h3>
                </div>

            </div>

        </>
    )
}

export default ProductDeatiles