import React from "react";
import Footer from "./Footer";
import Navbar from "./navbar";
const PostAd = () => {

    return (
        <>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-md-9 page-content">
                        <div className="inner-box category-content">
                            <h2 className="title-2 uppercase">
                                <strong>
                                    <i className="icon-docs">
                                    </i>
                                    Post a Free Listing
                                </strong>
                            </h2>
                            <div className="row">
                                <div className="col-sm-12">
                                    <form className="form-horizontal">
                                        <fieldset>

                                            <div className="form-group">
                                                <label className="col-md-3 control-label">
                                                    Category
                                                </label>
                                                <div className="col-md-8">
                                                    <select className="form-control" name="subcatid" id="subcatid" required>
                                                        <option selected="" value="">Select Category</option>

                                                        <option value="Vehicles" style={{ backgroundColor: "#E9E9E9", fontWeight: "bold" }}>
                                                            Tractor and Machinery
                                                        </option>

                                                        <option value="Vehicles" style={{ backgroundColor: "#E9E9E9", fontWeight: "bold" }}>
                                                            Soil Prepration
                                                        </option>

                                                        <option value="Vehicles" style={{ backgroundColor: "#E9E9E9", fontWeight: "bold" }}>
                                                            Seeders and Planters
                                                        </option>

                                                        <option value="Vehicles" style={{ backgroundColor: "#E9E9E9", fontWeight: "bold" }}>
                                                            Fertilizing and Sprayers
                                                        </option>

                                                        <option value="Vehicles" style={{ backgroundColor: "#E9E9E9", fontWeight: "bold" }}>
                                                            Harvesting and Threshing
                                                        </option>

                                                        <option value="Vehicles" style={{ backgroundColor: "#E9E9E9", fontWeight: "bold" }}>
                                                            Shredders and Cutters
                                                        </option>

                                                        <option value="Vehicles" style={{ backgroundColor: "#E9E9E9", fontWeight: "bold" }}>
                                                            Energy and Power
                                                        </option>

                                                        <option value="Vehicles" style={{ backgroundColor: "#E9E9E9", fontWeight: "bold" }}>
                                                            Other Equipments
                                                        </option>

                                                    </select>
                                                </div>
                                            </div>


                                            <div className="form-group">
                                                <label className="col-md-3 control-label" for="Adtitle">
                                                    Title
                                                </label>
                                                <div className="col-md-8">
                                                    <input id="title" name="title" placeholder="Ad title" className="form-control input-md" required type="text" />
                                                    <span className="help-block">
                                                        A great title needs at least 60 characters.
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <label className="col-md-3 control-label" for="description">
                                                    Description
                                                </label>
                                                <div className="col-md-8">
                                                    <textarea className="form-control text-left" id="description" name="description" rows="5" required></textarea>
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <label className="col-md-3 control-label" for="Price">
                                                    Price
                                                </label>
                                                <div className="col-md-3">
                                                    <div className="input-group">
                                                        <span className="input-group-addon">
                                                            <i className="fa fa-fw fa-rupee"></i>
                                                        </span>
                                                        <input id="Price" name="Price" className="form-control" placeholder="price" type="text" required />
                                                    </div>
                                                </div>
                                                <div className="col-md-5">
                                                    <div className="checkbox">
                                                        <label>
                                                            <input type="radio" name="priceType" value="Per hour" />
                                                            Per hour
                                                        </label>
                                                        <label>
                                                            <input type="radio" name="priceType" value="Per day" />
                                                            Per day
                                                        </label>
                                                        <label>
                                                            <input type="radio" name="priceType" value="Per job" />
                                                            Per job
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <label className="col-md-3 control-label" for="textarea">
                                                    Picture
                                                </label>
                                                <div className="col-md-8">
                                                    <div className="mb10">
                                                        <input id="image1" type="file" className="file" data-preview-file-type="text"  required/>
                                                    </div>


                                                </div>
                                            </div>


                                            <div className="well">
                                                <h3>
                                                    <i className=" icon-certificate icon-color-1">
                                                    </i>
                                                    Make your Listing Premium
                                                </h3>
                                                <p>
                                                    Premium ads help sellers promote their product or service by getting
                                                    their ads more visibility ans sell faster.
                                                </p>
                                                <div className="form-group">
                                                    <table className="table table-hover checkboxtable">
                                                        <tbody><tr>
                                                            <td>
                                                                <div className="radio">
                                                                    <label>
                                                                        <input type="radio" name="premium" id="premium" value="0" checked="" />
                                                                        <strong>
                                                                            Regular List
                                                                        </strong>
                                                                    </label>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <p>
                                                                    <i className="fa fa-fw fa-rupee"></i>00.00
                                                                </p>
                                                            </td>
                                                        </tr>

                                                            <tr>
                                                                <td>
                                                                    <div className="radio">
                                                                        <label>
                                                                            <input type="radio" name="premium" id="premium" value="1" />
                                                                            <strong>
                                                                                Featured List
                                                                            </strong>
                                                                        </label>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <p>
                                                                        <i className="fa fa-fw fa-rupee"></i>200.00
                                                                    </p>
                                                                </td>
                                                            </tr>


                                                        </tbody></table>
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <label className="col-md-2 control-label">

                                                </label>
                                                <div className="col-md-6  control-label">
                                                    <label className="checkbox-inline" for="checkboxes-0">
                                                        <input name="terms" id="terms" required="" type="checkbox" />
                                                        I have read and accept the <a href="/terms" target="_blank">terms.</a>
                                                    </label>
                                                </div>
                                                <label className="col-md-3 control-label">
                                                    <input type="submit" value="Submit" name="submit" className="btn btn-primary btn-lg" />
                                                </label>
                                            </div>


                                        </fieldset>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 reg-sidebar">
                        <div className="reg-sidebar-inner text-center">
                            <div className="promo-text-box">
                                <i className=" icon-picture fa fa-4x icon-color-1">
                                </i>
                                <h3>
                                    <strong>
                                        Post a Free Listing
                                    </strong>
                                </h3>
                                <p>
                                    Post your free online listing with us and wait for the customers to contact you.
                                </p>
                            </div>
                            <div className="panel sidebar-panel">
                                <div className="panel-heading uppercase">
                                    <small>
                                        <strong>
                                            How to list?
                                        </strong>
                                    </small>
                                </div>
                                <div className="panel-content">
                                    <div className="panel-body text-left">
                                        <ul className="list-check">
                                            <li>
                                                Use a brief title and description of the item
                                            </li>
                                            <li>
                                                Make sure you post in the correct category
                                            </li>
                                            <li>
                                                Add nice photos to your ad
                                            </li>
                                            <li>
                                                Put a reasonable price
                                            </li>
                                            <li>
                                                Check the item before publish
                                            </li>
                                        </ul>
                                    </div>
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
export default PostAd;