import React, { useState, useEffect } from "react";
import useCatdata from "./categorydata";
import useStateData from "./stateData";
const Search = () => {
    const [myList,setMylist]=useState([]);
    var li=useCatdata()
    // console.log(li);
    useEffect(() => {
        setMylist(li)
    });
    const [location, setLocation]=useState([])
    var list = useStateData();
    useEffect(() => {
        setLocation(list)
    });
    // console.log(location);
    // console.log(myList);
    return (
        <div className="search-row-wrapper">
            <div className="container ">
                <form action="#" method="GET">

                    <div className="col-sm-3">
                        <input className="form-control keyword" type="text" name="searchtext" placeholder="e.g. Tractor, Tiller, Trolley" />
                    </div>

                    <div className="col-sm-3">
                        <select className="form-control" name="subcatid" id="subcatid">
                            <option selected="" value="">All Categories</option>
                            {myList.map(item=>(<option value="vehicle" key={item[2]}>{item[0]}</option>))}

                        </select>
                    </div>

                    <div className="col-sm-3">
                        <select className="form-control" name="stateid" id="stateid">
                            <option selected="" value="">All Locations</option>
                            {location.map(item=>(<option value={item.id+1} key={item.id}>{item.state}</option>))}
                            <option value="37">All States</option>


                        </select>
                    </div>

                    <div className="col-sm-3">
                        <button className="btn btn-block btn-primary  "><i className="fa fa-search"></i></button>
                    </div>

                </form>
            </div>
        </div>
    );
}
export default Search;