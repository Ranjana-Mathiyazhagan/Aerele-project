import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Warehouse } from "./Warehouse";

export function Dispatch() {
    var { product_id } = useParams()
    const [product_name, setProduct_name] = useState('')
    const [quantity, setQuantity] = useState('')
    const [product_from, setProduct_from] = useState('')
    const [product_to, setProduct_to] = useState('')
   

    useEffect(() => {
        fetch("http://localhost:3002/singledata/" + product_id)
            .then(res => res.json())
            .then((output) => {
                setProduct_name(output[0].product_name)
                setQuantity(output[0].quantity)
                setProduct_from(output[0].product_from)
                setProduct_to(output[0].product_to)
                
            })
    }, [])

    // const[ware,setWare]=useState([]);
    // useEffect(() => {
    //     fetch("http://localhost:3002/getdataloc")
    //         .then(fetch => fetch.json())
    //         .then(fetchdetails => setWare(fetchdetails))
            
    //     },[])
    //     console.log(ware)

    // update function
    function handleupdate(event) {
        event.preventDefault()
        var product_name = document.getElementById("product_name").value
        var quantity = document.getElementById("quantity").value
        var product_from = document.getElementById("product_from").value
        var product_to = document.getElementById("product_to").value



        var to_quantity = document.getElementById("to_quantity").value

        var dispatch_in=document.getElementById("Dispatch_in").value
        var dispatch_out=document.getElementById("Dispatch_out").value
        var r_quatity=quantity-to_quantity;
        alert(r_quatity)

        var key = {
            product_name: product_name,
            quantity: quantity,
            product_from: product_from,
            product_to: product_to,
            to_quantity:to_quantity,
            r_quatity:r_quatity,
            dispatch_in:dispatch_in,
            dispatch_out:dispatch_out

        }
        console.log(key);
        if (product_name == '') {
            alert("Enter the Product name")
        }

        else if (quantity == '') {
            alert("Enter the quantity")
        }
        else if (product_from == '') {
            alert("Enter the product from ")
        }
        else if (product_to == '') {
            alert("Enter the product to ")
        }
        else if ( to_quantity== '') {
            alert("Enter the to_quantity ")
        }

        else {
            axios.post("http://localhost:3002/dispatch/"+product_id, key)
                .then((res) => {
                    if (res.data.status === "error") {
                        alert("data are not Dispatched")
                        

                    }
                    else if (res.data.status === "success") {
                        alert("Successfully Dispatched")
                        window.location.href = "/productdetails"

                    }
                })
        }

    }




    return (
        <>
        <div className="dispatch-img " >
                <h1 className="text-center  text-light p-5">Dispatch Product</h1>
                <form onSubmit={handleupdate} className=" mt-5 vh-90 p-4  d-flex flex-column justify-content-center align-items-center " >
                    <table>
                        <tr>
                            <td className="fw-bold fs-5 text-light p-3"> <label>Product Name:</label></td>
                            <td> <input type="text" id="product_name" onChange={(a) => setProduct_name(a.target.value)} value={product_name} ></input><br /></td>
                        </tr>



                        <tr>
                            <td className="fw-bold fs-5 text-light p-3"> <label>Quantity:</label></td>
                            <td> <input type="text" id="quantity" onChange={(a) => setQuantity(a.target.value)} value={quantity}></input><br /></td>
                        </tr>

                        
                        
                        <tr>
                            <td className="fw-bold text-light fs-5 p-3"> <label>Product From:</label></td>
                            <td> <input type="text" id="product_from" onChange={(a) => setProduct_from(a.target.value)} value={product_from}></input><br /></td>
                            
                        </tr>
                        <tr>
                            <td className="fw-bold fs-5 text-light p-3"> <label>Product To:</label></td>
                            <td> <input type="text" id="product_to" onChange={(a) => setProduct_to(a.target.value)} value={product_to}></input><br /></td>
                        </tr>

                        <tr>
                            <td className="fw-bold fs-5 text-light p-3"> <label>From Quantity:</label></td>
                            <td> <input type="text" id="quantity" onChange={(a) => setQuantity(a.target.value)} value={quantity}></input><br /></td>
                        </tr>

                       
                         <tr>
                            <td className="fw-bold fs-5 text-light p-3"> <label>To Quantity:</label></td>
                            <td> <input type="text" id="to_quantity" ></input><br /></td>
                        </tr>



                         

                        <tr>
                            <td className="fw-bold fs-5 text-light p-3"> <label>Dispatch in:</label></td>
                            <td> <input type="datetime-local" id="Dispatch_in"  ></input><br /></td>
                        </tr>

                        <tr>
                            <td className="fw-bold fs-5 text-light p-3"> <label>Dispatch Out:</label></td>
                            <td> <input type="datetime-local" id="Dispatch_out" ></input><br /></td>
                        </tr>



                       


                    </table>
                    <button className="text-center  btn btn-primary  mt-4">Dispatch</button>

                </form>
            </div>
                        
        </>
    );
}