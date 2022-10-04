import React,{useState} from "react";
import Footer from "./Footer";
import Navbar from "./navbar";
import Error from "./error";
const SignUp = () => {
    const [stcode, setStCode]=useState(100);
    async function RegisterUser(e) {
        // console.log(e);
        e.preventDefault();
        let name = document.getElementById("name").value;
        let phone = document.getElementById("phone").value;
        let email = document.getElementById("email").value;
        let type = document.getElementById("usertype").value;
        let password = document.getElementById("password").value;
        console.log(name, phone, email, type, password);
        let url = "https://x8ki-letl-twmt.n7.xano.io/api:HHq4b1yw/user?name=" + name + "&email=" + email + "&phone=" + phone + "&usertype=" + type + "&password=" + password;
        console.log(url);
        const res= await fetch(url, { method: "post" })
        if(res.status===500){
            setStCode(500);
        }else if(res.status===200){
            setStCode(200);
        }
    }
    if(stcode===200){
        window.setTimeout(alert("You Are Registered SuccessFully!!You will be Redirect to Home page"), 2000);
        window.close();
        window.location.replace("http://localhost:3000/");
        
    }else if(stcode===500){
        return(<Error/>)
    }
    return (
        <>
            <Navbar />
            <div className="main-container">
                <div className="container">

                    <div className="row">
                        <div className="col-md-8 page-content">
                            <div className="inner-box category-content">
                                <h2 className="title-2">
                                    <i className="icon-user-add">
                                    </i>
                                    Create your account, Its free
                                </h2>



                                <div className="row">
                                    <div className="col-sm-12">
                                        <form className="form-horizontal form-validate" action="http://localhost:3000/" method="post" onSubmit={e=>RegisterUser(e)}>
                                            <fieldset>

                                                <div className="form-group required">
                                                    <label className="col-md-4 control-label">
                                                        You are a
                                                        <sup>
                                                            *
                                                        </sup>
                                                    </label>
                                                    <div className="col-md-6">
                                                        <select name="usertype" id="usertype" className="form-control" required="">
                                                            <option value="0">-- select -- </option>
                                                            <option value="Farmer">Farmer</option>
                                                            <option value="Trader">Trader</option>
                                                            <option value="Wholesaler">Wholesaler</option>
                                                            <option value="Dealer">Dealer</option>
                                                            <option value="Exporter">Exporter</option>
                                                            <option value="Service Provider">Service Provider</option>

                                                        </select>
                                                    </div>
                                                </div>

                                                <div className="form-group required">
                                                    <label className="col-md-4 control-label">
                                                        Name
                                                        <sup>
                                                            *
                                                        </sup>
                                                    </label>
                                                    <div className="col-md-6">
                                                        <input name="name" placeholder="Name" id="name" className="form-control input-md" required="" type="text" data-rule-minlength="2" maxLength="20" />
                                                    </div>
                                                </div>

                                                <div className="form-group required">
                                                    <label className="col-md-4 control-label">
                                                        Phone Number
                                                        <sup>
                                                            *
                                                        </sup>
                                                    </label>
                                                    <div className="col-md-6">
                                                        <input name="phone" placeholder="Phone Number" id="phone" className="form-control input-md" required="" type="text" />
                                                        <div className="checkbox">
                                                            <label>
                                                                <input type="checkbox" name="displayphone" id="displayphone" />
                                                                <small>
                                                                    Hide the phone number on the published ads.
                                                                </small>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="form-group required">
                                                    <label htmlFor="inputEmail3" className="col-md-4 control-label">
                                                        Email
                                                        <sup>
                                                            *
                                                        </sup>
                                                    </label>
                                                    <div className="col-md-6">
                                                        <input type="email" className="form-control" name="email" id="email" placeholder="Email" required maxLength={50} />
                                                    </div>
                                                </div>
                                                <div className="form-group required">
                                                    <label htmlFor="inputpassword" className="col-md-4 control-label">
                                                        Password
                                                        <sup>
                                                            *
                                                        </sup>
                                                    </label>
                                                    <div className="col-md-6">
                                                        <input type="password" className="form-control" name="password" id="password" placeholder="Password" autoComplete="" required minLength={8} maxLength={50} />
                                                    </div>
                                                </div>

                                                <div className="form-group">
                                                    <label className="col-md-4 control-label">
                                                    </label>
                                                    <div className="col-md-8">
                                                        <div className="termbox mb10">
                                                            <label className="checkbox-inline" htmlFor="terms">
                                                                <input id="terms" name="terms" type="checkbox" required />
                                                                I have read and agree to the
                                                                <a href="/terms" target="_blank">
                                                                    Terms &amp; Conditions
                                                                </a>
                                                            </label>
                                                        </div>
                                                        <div style={{ clear: "both" }}></div>
                                                        <input type="submit" className="btn btn-primary" name="submit" value="Register" />
                                                    </div>
                                                </div>
                                            </fieldset>

                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 reg-sidebar">
                            <div className="reg-sidebar-inner text-center">
                                <div className="promo-text-box">
                                    <i className=" icon-picture fa fa-4x icon-color-1">
                                    </i>
                                    <h3>
                                        <strong>
                                            Post a Free classNameified
                                        </strong>
                                    </h3>
                                    <p>
                                        Post your free online classNameified ads with us. You can sell anything and earn money.
                                    </p>
                                </div>
                                <div className="promo-text-box">
                                    <i className=" icon-pencil-circled fa fa-4x icon-color-2">
                                    </i>
                                    <h3>
                                        <strong>
                                            Create and Manage Items
                                        </strong>
                                    </h3>
                                    <p>
                                        You can easily manage items under your account, cave and re-publish them again.
                                    </p>
                                </div>
                                <div className="promo-text-box">
                                    <i className="  icon-heart-2 fa fa-4x icon-color-3">
                                    </i>
                                    <h3>
                                        <strong>
                                            Create your Favorite ads list.
                                        </strong>
                                    </h3>
                                    <p>
                                        You can like the products that you might want to buy and it will be saved under your account.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>


            <Footer />
        </>
    );
    
}

export default SignUp;