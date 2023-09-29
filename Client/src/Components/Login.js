import React from "react";
import { Link } from "react-router-dom";
export function Loginpage() {
    function handlelogin() {
        var username = document.getElementById("username").value
        var password = document.getElementById("password").value

        if (username == '') {
            alert("Please enter your Username");
        }
        else if (password == '') {
            alert("please enter your pasword");
        }
        else if (username == 'Ranjana S' && password == 'sara@123') {
            alert("Successfully Logged in")
            window.location.href = `/dashboard`
        }
        else {
            alert("Please enter correct username and password.")
        }
    }


    return (
        <>
            <div className="login-div ">
                <h1 className="text-center fw- bold ms-4 p-5 ">Login Page</h1>
                <div className="d-flex align-items-center  justify-content-center flex-column ">
                    <form className=" w-50 py-5 mt-5  text-center" >

                        <label className="fw-bold fs-4 ms-5 text-dark">Username: </label>
                        <input type="text" id="username" placeholder="Enter the username" name="username" required /><br /><br />

                        <label className="fw-bold fs-4 ms-5 text-dark">Password:</label>
                        <input type="password" id="password" placeholder="Enter the password" name="password" required /><br /><br />

                       <input type="button" value="Login" onClick={handlelogin} /><br></br>
                        {/* <Link className="text-primary ms-3 mt-5" to={'/'}>  Forget password </Link> */}
                    </form>

                </div>
            </div>


        </>
    );

}