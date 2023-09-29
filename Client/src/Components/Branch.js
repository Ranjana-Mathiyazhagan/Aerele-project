import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export function Branches() {


    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3002/getdata")
            .then(fetch => fetch.json())
            .then(fetchdetails => setProduct(fetchdetails))
            console.log(product)
    },[])

        return (
        <>
            <div className="branch-div text-center">
                <h1 className="p-4">This is the product Details..!</h1>
                <div className="d-flex align-items-center justify-content-start flex-column">

                    <table className="table mt-5">
                        <thead>
                            <tr>
                                <th>Location_id</th>
                                <th>warehouse_name</th>
                                <th>Branch</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                product.map((value, index) => (

                                    <tr>
                                        <td>{value.location_id}</td>
                                        <td>{value.warehouse_name}</td>
                                        <td>{value.branch}</td>
                                       
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