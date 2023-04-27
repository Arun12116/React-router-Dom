import { useState, useEffect } from "react"
import {Link} from "react-router-dom"
import "./Product.css"
const Product = () => {
    const [product, setProduct] = useState([]);
    // console.log(product);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products").then((res) => {
            res.json().then((data) => {
                setProduct(data)
            })
        })
    }, [])
    return (
        <>
            <div className="Container">
                <div className="box-container">
                    {product.length > 0 ? null : <h1>no Data Found</h1>}
                    {

                        product.map((items) => {

                            return <div className="card">
                                <img src={items.image} alt="img" style={{ width: "50%", height: "40%" }} />
                                <h2>category:{items.category}</h2>
                                <h1>price:{items.price}</h1>
                              <Link to={`/ProductDeatiles/${items.id}`}>
                              <button>Deatiles More</button>
                              
                              </Link>


                            </div>


                        })
                    }

                </div>


            </div>



        </>
    )
}

export default Product