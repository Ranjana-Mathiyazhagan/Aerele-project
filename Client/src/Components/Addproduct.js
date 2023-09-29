import axios from "axios";
import React from "react";
export function Addproduct() {

    function handleaddproduct(event) {
        event.preventDefault()
        var product_id = document.getElementById("product_id").value

        var product_name = document.getElementById("product_name").value

        var price = document.getElementById("price").value

        var quantity = document.getElementById("quantity").value

        console.log(product_id)
        console.log(product_name)
        console.log(price)
        console.log(quantity)



        var key = {
            product_id: product_id,
            product_name: product_name,
            price: price,
            quantity: quantity,

        }
        console.log(key)

        if (product_id == '') {
            alert("Enter the Id")
        }

        else if (product_name == '') {
            alert("Enter the Name")
        }
        else if (price == '') {
            alert("Enter the confirm")
        }
        else if (quantity == '') {
            alert("Enter the email")
        }


        else {
            axios.post("http://localhost:3002/addproduct", key)
                .then((res) => {
                    if (res.data.status === "error") {
                        alert("data are not Added")
                        

                    }
                    else if (res.data.status === "success") {
                        alert("Successfully Added")
                        window.location.href = "/productdetails"

                    }
                })
        }
    }


    return (
        <>

            <div className="update-img " >
                <h1 className="text-center text-dark p-5">Add Product</h1>
                <form onSubmit={handleaddproduct} className=" mt-5 vh-90 p-4  d-flex flex-column justify-content-center align-items-center " >
                    <table>
                        <tr>
                            <td className="fw-bold p-3"> <label>Product Id:</label></td>
                            <td> <input type="text" id="product_id"  ></input><br /></td>
                        </tr>


                        <tr>
                            <td className="fw-bold p-3"> <label>Product Name:</label></td>
                            <td> <input type="text" id="product_name"  ></input><br /></td>
                        </tr>

                        <tr>
                            <td className="fw-bold p-3"> <label>Price:</label></td>
                            <td> <input type="text" id="price" ></input><br /></td>
                        </tr>

                        <tr>
                            <td className="fw-bold p-3"> <label>Quantity:</label></td>
                            <td> <input type="text" id="quantity" ></input><br /></td>
                        </tr>

                    </table>
                    <button type="submit" className="text-center  btn btn-primary  mt-4">ADD</button>

                </form>
            </div>
        </>
    );
}