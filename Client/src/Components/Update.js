import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function Update() {
    var { product_id } = useParams()
    const [product_name, setProduct_name] = useState('')
    const [price, setPrice] = useState('')
    const [quantity, setQuantity] = useState('')

    useEffect(() => {
        fetch("http://localhost:3002/singledata/" + product_id)
            .then(res => res.json())
            .then((output) => {
                setProduct_name(output[0].product_name)
                setPrice(output[0].price)
                setQuantity(output[0].quantity)
            })
    }, [])

    // update function
    function handleupdate(event) {
        event.preventDefault()
        var product_name = document.getElementById("product_name").value
        var price = document.getElementById("price").value
        var quantity = document.getElementById("quantity").value

        var key = {
            product_name: product_name,
            price: price,
            quantity:quantity
        }
        console.log(key);
        if (product_name == '') {
            alert("Enter the food name")
        }

        else if (price == '') {
            alert("Enter the price")
        }

        else {
            axios.put("http://localhost:3002/update/" + product_id, key)
                .then((res) => {
                    if (res.data.status === "error") {
                        alert("data are not updated")
                        window.location.reload()
                    }
                    else if (res.data.status === "success") {
                        alert("data are updated")
                        window.location.href = `/productdetails/${product_id}`
                    }
                })
        }
    }



    return (
        <>


            <div className="update-img " >
                <h1 className="text-center text-dark p-5">Update Product</h1>
                <form onSubmit={handleupdate} className=" mt-5 vh-90 p-4  d-flex flex-column justify-content-center align-items-center " >
                    <table>
                        <tr>
                            <td className="fw-bold fs-4 p-3"> <label>Product Name:</label></td>
                            <td> <input type="text" id="product_name" onChange={(a) => setProduct_name(a.target.value)} value={product_name} ></input><br /></td>
                        </tr>

                        <tr>
                            <td className="fw-bold fs-4 p-3"> <label>Price:</label></td>
                            <td> <input type="text" id="price" onChange={(a) => setPrice(a.target.value)} value={price}></input><br /></td>
                        </tr>

                        <tr>
                            <td className="fw-bold fs-4 p-3"> <label>Quantity:</label></td>
                            <td> <input type="text" id="quantity" onChange={(a) => setQuantity(a.target.value)} value={quantity}></input><br /></td>
                        </tr>

                    </table>
                    <button className="text-center  btn btn-primary  mt-4">Update</button>

                </form>
            </div>
        </>
    );
}