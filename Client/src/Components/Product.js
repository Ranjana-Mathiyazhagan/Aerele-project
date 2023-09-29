import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export function Product() {


    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3002/getdata")
            .then(fetch => fetch.json())
            .then(fetchdetails => setProduct(fetchdetails))
            console.log(product)
    },[])

    const delt=(product_id)=>{
        var key={product_id:product_id}
        axios.post('http://localhost:3002/delete',key)
        .then((res)=>{
          if(res.data.status==="error"){
            alert("data are not delete")
          }
          else if(res.data.status==="success"){
         alert("data are deleted")
         window.location.reload()
          }
        })
     }

        return (
        <>
            <div className="branch-div text-center">
                <h1 className="p-4 text-dark">This is the  Product Details..!</h1>
                <div className=" d-flex justify-content-end w-75">
               <Link to="/addproduct"> <button className="btn  btn-dark">Add</button></Link>
                </div>
                
                <div className="d-flex align-items-center justify-content-start flex-column">

                    <table className="table mt-5 ">
                        <thead>
                            <tr>
                                <th>product_id</th>
                                <th>product_name</th>
                                <th>price</th>
                                <th>Quantity</th>
                                <th>Update</th>
                                <th>Delete</th>
                                <th>Dispatch</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                product.map((value, index) => (

                                    <tr>
                                        <td>{value.product_id}</td>
                                        <td>{value.product_name}</td>
                                        <td>{value.price}</td>
                                        <td>{value.quantity}</td>
                                        <td><Link to={`/update/${value.product_id}`} className="btn   btn-primary btn-sm mb-2" >Update</Link></td>
                                        <td><button onClick={()=>{delt(value.product_id)}} className="btn btn-danger mb-2 ">Delete</button></td>
                                        <td><Link to={`/dispatch/${value.product_id}`}><button className="btn btn-success mb-2 ">Dispatch</button></Link></td>
                                        {/* <td><button onClick={()=>{delt(product_id)}} className="btn btn-danger mb-2 ">Delete</button></td>  */}
                                    </tr>

                                ))
                            }

                        </tbody>
                    </table>
                </div>

            </div>
        </>
    );
}