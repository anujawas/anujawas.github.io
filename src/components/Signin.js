import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Navbar from "./navbar";
import Footer from "./Footer";
const Login = () => {
    async function LoginUser(e){
        console.log(e);
        e.preventDefault();
        let usename=document.getElementById("email").value;
        let password=document.getElementById("password").value;
        let url="https://x8ki-letl-twmt.n7.xano.io/api:HHq4b1yw/auth/login?email="+usename+"&password="+password;
        console.log(url);
        let res=await fetch(url,{method:"post"})
        console.log(res);
    }
    return (
        <>
            <Navbar />
            <div className="main-container">
                <div className="container">

                    <div className="row">
                        <div className="col-sm-5 login-box">
                            <div className="panel panel-default">
                                <div className="panel-body">



                                    <form action="http://localhost:3000/" accept-charset="utf-8" method="post" onSubmit={LoginUser()}>
                                        <div className="form-group">
                                            <label for="sender-email" className="control-label">
                                                Username:
                                            </label>
                                            <div className="input-icon">
                                                <i className="icon-user fa">
                                                </i>
                                                <input id="email" name="email" type="text" placeholder="Username" className="form-control email" required />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label for="user-pass" className="control-label">
                                                Password:
                                            </label>
                                            <div className="input-icon">
                                                <i className="icon-lock fa">
                                                </i>
                                                <input type="password" className="form-control" placeholder="Password" autoComplete='' id="password" name="password" required />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <input type="submit" name="Submit" value="Submit" className="btn btn-primary  btn-block" />
                                        </div>

                                    </form></div>
                                <div className="panel-footer">
                                    <div className="checkbox pull-left">
                                        <label>
                                            <input type="checkbox" name="remeberme" id="remeberme" />
                                            Keep me logged in
                                        </label>
                                    </div>
                                    <p className="text-center pull-right">
                                        <a href="/forgot-password">
                                            Lost your password?
                                        </a>
                                    </p>
                                    <div style={{ clear: "both" }}>
                                    </div>
                                </div>

                                <input type="hidden" name="from" value="" />


                            </div>
                            <div className="login-box-btm text-center">
                                <p>
                                    Don't have an account?
                                    <br />
                                    <a href="/signup">
                                        <strong>
                                            Sign Up !
                                        </strong>
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
            <Footer />
        </>
    );
}
Login.propTypes = {
    setToken: PropTypes.func.isRequired
};
export default Login;