import React, { useState, useEffect } from "react"
import bg3 from "../assets/images/bg3.jpg";
import useStateData from "./stateData";
const Header = () => {
    const [myList, setMylist] = useState([])
    var li = useStateData();
    useEffect(() => {
        setMylist(li)
    });
    return (
        <div className="intro" style={{ backgroundImage: { bg3 } }}>
            <div className="dtable hw100">
                <div className="dtable-cell hw100">
                    <div className="container text-center">
                        <h1 className="intro-title animated fadeInDown"> Farmers Marketplace </h1>
                        <p className="sub animateme fittext3 animated fadeIn">One stop shop to rent Farm Machinery</p>

                        <form action="#" method="GET">

                            <div className="row search-row animated fadeInUp">
                                <div className="col-lg-4 col-sm-4 search-col relative locationicon"><i
                                    className="icon-location-2 icon-append"></i>
                                    <select name="stateid"
                                        className="form-control locinput input-rel searchtag-input has-icon"
                                        placeholder="City/Zipcode...">

                                        <option value=""> -- state --</option>
                                        {myList.map(item => (<option key={item.id} value={item.id + 1}>{item.state}</option>))}
                                        <option value="37">All States</option>


                                    </select>

                                </div>

                                <div className="col-lg-4 col-sm-4 search-col relative"><i className="icon-docs icon-append"></i>
                                    <input type="text" name="query" className="form-control has-icon"
                                        placeholder="I'm looking for a ..." value="" />
                                </div>
                                <div className="col-lg-4 col-sm-4 search-col">
                                    <button className="btn btn-primary btn-search btn-block"><i
                                        className="icon-search"></i><strong>Find</strong></button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );

}
export default Header