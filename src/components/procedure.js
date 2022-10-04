import React from "react";
import bg from "../assets/images/bg.jpg"
const Procedure = () => {

    return (
        <div className="page-info hasOverly" style={{background: `url(${bg})`, backgroundSize:"cover"}}>
            <div className="bg-overly">
                <div className="container text-center section-promo">
                    <div className="row">
                        <div className="col-sm-4 col-xs-6 col-xxs-12">
                            <div className="iconbox-wrap">
                                <div className="iconbox">
                                    <div className="iconbox-wrap-icon"><i className="icon  icon-search"></i>
                                    </div>
                                    <div className="iconbox-wrap-content">
                                        <h5><span> Step 1:</span></h5>
                                        <div className="iconbox-wrap-text"> Search Equipment You Need
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 col-xs-6 col-xxs-12">
                            <div className="iconbox-wrap">
                                <div className="iconbox">
                                    <div className="iconbox-wrap-icon"><i className="icon icon-comment"></i>
                                    </div>
                                    <div className="iconbox-wrap-content">
                                        <h5><span> Step 2:</span></h5>
                                        <div className="iconbox-wrap-text"> Contact the Supplier
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 col-xs-6  col-xxs-12">
                            <div className="iconbox-wrap">
                                <div className="iconbox">
                                    <div className="iconbox-wrap-icon"><i className="icon icon-flag"></i>
                                    </div>
                                    <div className="iconbox-wrap-content">
                                        <h5><span> Step 3:</span></h5>
                                        <div className="iconbox-wrap-text"> Book Time & Location
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Procedure;