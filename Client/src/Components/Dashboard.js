import Aos from "aos";
import 'aos/dist/aos.css';
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import  Typewriter from "typewriter-effect";
export function Dashboard() {
    useEffect(()=>{
        Aos.init()
    })
    return (
        <>
            <div className="dash-div ">
                <h3 className="fw-bold pt-5 text-center"><Typewriter
                    options={{
                        strings: ['Welcome RANJANA SATHIS...✌️'],
                        autoStart: true,
                        loop: true,

                    }} /></h3>

                <div className="card-name d-flex align-items-center justify-content-center flex-column">
                    <div data-aos="zoom-in-down" data-aos-delay="300" class="card mt-5 p-4 w-50 text-center">
                        <div class="card-body">
                            <h5 class="card-title ">Warehouse</h5>
                            <p class="card-text">Locations of the warehouse.</p>
                            <Link to="/warehousedetails" class="btn btn-primary">VIEW</Link>
                        </div>
                    </div>

                    <div data-aos="zoom-in-up" data-aos-delay="300" class="card w-50 mt-5 p-4 text-center">
                        <div  class="card-body">
                            <h5 class="card-title fw-bold">Product</h5>
                            <p class="card-text">Product are listed here..</p>
                            <Link to="/productdetails" class="btn btn-primary">VIEW</Link>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}