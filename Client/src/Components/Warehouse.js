import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import 'aos/dist/aos.css';
import Aos from "aos";
export function Warehouse() {
    useEffect(()=>{
        Aos.init()
    },[])
    const[ware,setWare]=useState([]);
    useEffect(() => {
        fetch("http://localhost:3002/getdataloc")
            .then(fetch => fetch.json())
            .then(fetchdetails => setWare(fetchdetails))
            
    },[])
    return (
        <>
            <div className="ware-div text-center">
                <h1 className="p-4"> Hey here is the Warehhouse details..!</h1>
                <div className="card-name  d-flex align-items-center justify-content-center flex-column">

                    <div class="row">
                        {
                            ware.map((value,index)=>(

                            <div data-aos="fade-left" class="col-md-6 mt-3  col-sm-6 col-lg-6 mt-4">
                                    <div class="card-one">
                                        <div class="card-body py-4">
                                            <h3 class="card-title fw-bold">{value.warehouse_name}</h3>
                                            <h6 class="card-text"> {value.branch} </h6>
                                            {/* <p class="card-text"> {value.location_id} </p> */}
                                            <p>Address: {value.location_id} /A ramar street,{value.warehouse_name}  </p>
                                            
                                        </div>
                                    </div>
                                </div>
                            )) 
                        }
                        

                        {/* <div class="col-md-6 mt-5 col-md-6 col-lg-6 mt-4">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title fw-bold">Peelamedu</h5>
                                    <p class="card-text"> Sub Branch  of Warehouse listed here..</p>
                                    <Link to="/branches/2" class="btn btn-primary">VIEW</Link>
                                </div>
                            </div>
                        </div>
                        
                        <div class="col-sm-6 mt-5 col-md-6 col-lg-6 mt-4">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title fw-bold">Racecourse</h5>
                                    <p class="card-text"> Branch 2 of Warehouse listed here..</p>
                                    <Link to="/branches/3" class="btn btn-primary">VIEW</Link>
                                </div>
                            </div>
                        </div>

                        <div class="col-sm-6 mt-5  col-md-6 col-lg-6 mt-4">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title fw-bold">Gandhipuram</h5>
                                    <p class="card-text">  Branch 3 of Warehouse listed here..</p>
                                    <Link to="/branches/4" class="btn btn-primary">VIEW</Link>
                                </div>
                            </div>
                        </div>

                        <div class="col-sm-6 mt-5  col-md-6 col-lg-6 mt-4">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title fw-bold">Singanallur</h5>
                                    <p class="card-text"> Branch 4 of Warehouse listed here..</p>
                                    <Link to="/branches/5" class="btn btn-primary">VIEW</Link>
                                </div>
                            </div>
                        </div>

                        <div class="col-sm-6 mt-5  col-md-6 col-lg-6 mt-4">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title fw-bold">SaravanamPatti</h5>
                                    <p class="card-text"> Branch 5 of Warehouse listed here..</p>
                                    <Link to="/branches/6" class="btn btn-primary">VIEW</Link>
                                </div>
                            </div>
                        </div>

                         */}
                    </div>           
               
                </div>
            </div>
        </>
    );
}