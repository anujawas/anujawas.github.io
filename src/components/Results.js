import Image00015 from "../assets/images/category/tractor.png"
import seedr from "../assets/images/category/seeder.jpg"
import React, { Component, useState, useEffect } from "react";
import useStateData from "./stateData";
const Results = () => {
    const [showstyle, setShowStyle] =useState({display:"block"})
    const [hidestyle,setHideStyle]=useState({display:"none"})
    function handleclickreveal(e) {
        setShowStyle({display:"none"});
        setHideStyle({display:"block"});

    }
    // console.log(showstyle, hidestyle);
    function handleclickhide(e) {
        setShowStyle({display:"block"});
        setHideStyle({display:"none"});

    }

    const [location, setLocation]=useState({hidden:[], public:[]});
    var list = useStateData();
    useEffect(() => {
        setLocation({hidden:list.slice(8,list.length), public:list.slice(0,8)})
    },[list]);
    // console.log(location);

    return (
        <div className="main-container">
            <div className="container">
                <div className="row">
                    <div className="col-sm-3 page-sidebar mobile-filter-sidebar">
                        <aside>
                            <div className="inner-box">
                                <div className="categories-list  list-filter">
                                    <h5 className="list-title"><strong><a href="/">
                                        <i className="fa fa-angle-left"></i> All Categories</a></strong>
                                    </h5>

                                    <ul className=" list-unstyled">
                                        <li><a href="/category/tractor and machinery"><span className="title"><strong>Tractor and Machinery</strong></span></a>

                                        </li>
                                    </ul>
                                </div>

                                <div className="locations-list  list-filter">
                                    <h5 className="list-title"><strong><a href="#">Location</a></strong></h5>
                                    <ul className="browse-list list-unstyled long-list">
                                        {location.public.map(item=>(<li key={item.id}><a href={"/state/"+item.state} title="Albany">{item.state}</a></li>))}
                                        {location.hidden.map(item=>(<li key={item.id} style={hidestyle} className="maxlist-hidden"><a href={"/state/"+item.state} title="Albany">{item.state}</a></li>))}

                                    </ul>
                                    <p className="maxlist-more" style={showstyle} onClick={(e) => handleclickreveal(e)}><a >View More (29)</a></p>
                                    <p className="maxlist-hidden" style={hidestyle} onClick={(e) => handleclickhide(e)}><a >Hide States</a></p>
                                </div>

                                <div style={{ clear: "both" }}></div>


                                <div style={{ clear: "both" }}></div>
                            </div>

                        </aside>
                    </div>

                    <div className="col-sm-9 page-content col-thin-left">
                        <div className="category-list">

                            <div className="tab-box ">
                                <ul className="nav nav-tabs add-tabs" id="ajaxTabs" role="tablist">
                                    <li className="active">
                                        <a href="/ajax/1.html?1" data-url="/ajax/1.html" role="tab" data-toggle="tab">Promotional Ads <span className="badge"> 2</span></a>
                                    </li>
                                    <li>
                                        <a href="/ajax/2.html?1111" data-url="/ajax/2.html" role="tab" data-toggle="tab">All Ads <span className="badge"> 3</span></a>
                                    </li>

                                </ul>

                            </div>

                            <div className="listing-filter">
                                <div className="pull-left col-xs-6">
                                    <div className="breadcrumb-list"><a href="#" className="current"> <span>All ads</span></a> in<span className="cityName"> Punjab </span>
                                        <a href="#selectRegion" id="dropdownMenu1" data-toggle="modal"> <span className="caret"></span> </a>
                                    </div>
                                </div>

                                <div className="pull-right col-xs-6 text-right listing-view-action">
                                    <span className="list-view active"><i className="  icon-th"></i></span>
                                    <span className="compact-view"><i className=" icon-th-list  "></i></span>
                                    <span className="grid-view "><i className=" icon-th-large "></i></span>
                                </div>

                                <div style={{ clear: "both" }}></div>
                            </div>


                            <div className="menu-overly-mask"></div>

                            <div className="adds-wrapper">
                                <div className="tab-content">
                                    <div className="tab-pane active" id="allAds"><div className="item-list">
                                        <div className="cornerRibbons topAds">
                                            <a href="#"> Top Ad</a>
                                        </div>
                                        <div className="col-sm-2 no-padding photobox">
                                            <div className="add-image"><span className="photo-count"><i className="fa fa-camera"></i> 2 </span> <a href="#"><img className="thumbnail no-margin" src={Image00015} alt="img" /></a>
                                            </div>
                                        </div>

                                        <div className="col-sm-7 add-desc-box">
                                            <div className="add-details">
                                                <h5 className="add-title"><a href="ads-details.html">
                                                    Tractor and Trolley </a></h5>
                                                <span className="info-row"> <span className="add-type business-ads tooltipHere" data-toggle="tooltip" data-placement="right" title="Promotional Ad">P </span> <span className="date"><i className=" icon-clock"> </i> Today 1:21 pm </span> - <span className="category">Tractor and Machinery </span>- <span className="item-location"><i className="fa fa-map-marker"></i> Batala </span> </span></div>
                                        </div>

                                        <div className="col-sm-3 text-right  price-box">
                                            <h2 className="item-price"> Rs 1500/Day </h2>
                                            <a className="btn btn-danger  btn-sm make-favorite"> <i className="fa fa-certificate"></i> <span>Top Ads</span> </a> <a className="btn btn-default  btn-sm make-favorite"> <i className="fa fa-heart"></i> <span>Save</span> </a></div>

                                    </div>

                                        <div className="item-list">
                                            <div className="cornerRibbons featuredAds">
                                                <a href="#"> Featured Ad</a>
                                            </div>
                                            <div className="col-sm-2 no-padding photobox">
                                                <div className="add-image"><span className="photo-count"><i className="fa fa-camera"></i> 2 </span> <a href="#"><img className="thumbnail no-margin" src={seedr} alt="img" /></a>
                                                </div>
                                            </div>

                                            <div className="col-sm-7 add-desc-box">
                                                <div className="add-details">
                                                    <h5 className="add-title"><a href="ads-details.html">
                                                        Happy seeder - this weekend only </a></h5>
                                                    <span className="info-row"> <span className="add-type business-ads tooltipHere" data-toggle="tooltip" data-placement="right" title="Promotional Ad">P </span> <span className="date"><i className=" icon-clock"> </i> 3 days ago 1:21 pm </span> - <span className="category">Seeders and Planters </span>- <span className="item-location"><i className="fa fa-map-marker"></i> Jalandhar </span> </span></div>
                                            </div>

                                            <div className="col-sm-3 text-right  price-box">
                                                <h2 className="item-price"> Rs 2500/acre </h2>
                                                <a className="btn btn-danger  btn-sm make-favorite"> <i className="fa fa-certificate"></i> <span>Featured Ads</span>
                                                </a> <a className="btn btn-default  btn-sm make-favorite"> <i className="fa fa-heart"></i> <span>Save</span> </a></div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="pagination-bar text-center">
                            <ul className="pagination">
                                <li className="active"><a href="#">1</a></li>
                                <li><a href="#">2</a></li>
                                <li><a href="#">3</a></li>
                                <li><a href="#">4</a></li>
                                <li><a href="#">5</a></li>
                                <li><a href="#"> ...</a></li>
                                <li><a className="pagination-btn" href="#">Next »</a></li>
                            </ul>
                        </div>

                        <div className="post-promo text-center">
                            <h2> Do you have anything for rent out ? </h2>
                            <h5>Advertise your products online FOR FREE. It's easier than you think !</h5>
                            <a href="/post-ad" className="btn btn-lg btn-border btn-post btn-danger">Post a Free Ad </a>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );

}
export default Results;