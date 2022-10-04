import React,{useState, useEffect} from "react";
import machinery from "../assets/images/category/machinery.jpg";
import soilprep from "../assets/images/category/soilprep.jpg";
import seeder from "../assets/images/category/seeder.jpg"
import pest from "../assets/images/category/pest.jpg"
import services from "../assets/images/category/services.png"
import shredder from "../assets/images/category/shredder.jpg"
import generator from "../assets/images/category/generator.jpg"
import baler from "../assets/images/category/baler.jpg"
import advert from "../assets/images/app.jpg"
import Item from "./Item";
import useCatdata from "./categorydata"
const Categories = () => {
    const [myList,setMylist]=useState([]);
    var li=useCatdata()
    useEffect(() => {
        setMylist(li)
    });
    return (
        <div className="col-md-12 content-box" >
            <div className="row row-featured row-featured-category" style={{ width: "69%", marginLeft: "15.5%" }}>

                <div className="col-md-12  box-title no-border">
                    <div className="inner">
                        <h2><span>Browse by</span> Category <a href="/categories" className="sell-your-item"> View
                            more <i className="  icon-th-list"></i> </a></h2>
                    </div>
                </div>
                {myList.map(item=>(<Item key={item[2]} title={item[0]} img={item[1]}/>))}
                {/* <Item  img={machinery}
                    title="Tractor and Machinery">
                   
                </Item>

                <Item
                    img={soilprep}
                    title="Soil Prepration"
                />
                <Item
                    img={seeder}
                    title="Seeders and Planters"
                />
                <Item
                    img={pest}
                    title="Fertilizing and Sprayers"
                />
                <Item
                    img={services}
                    title="Harvesting and Threshing"
                />
                <Item
                    img={shredder}
                    title="Shredders and Cutters"
                />
                <Item
                    img={generator}
                    title="Energy and Power"
                />
                <Item
                    img={baler}
                    title="Other Equipments"
                /> */}
                <div style={{ clear: "both" }}></div>
                <div className="row">
                    <div className="col-sm-3 page-content col-thin-right">
                        <div className="inner-box has-aff">
                            <a href="#">
                                <img className="img-responsive" src={advert} alt="tv" />
                            </a>
                        </div>
                    </div>

                    <div className="col-sm-3 page-content col-thin-right">
                        <div className="inner-box has-aff">
                            <a href="#">
                                <img className="img-responsive" src={advert} alt="tv" />
                            </a>
                        </div>
                    </div>

                    <div className="col-sm-3 page-content col-thin-right">
                        <div className="inner-box has-aff">
                            <a href="#">
                                <img className="img-responsive" src={advert} alt="tv" />
                            </a>
                        </div>
                    </div>

                    <div className="col-sm-3 page-content col-thin-right">
                        <div className="inner-box has-aff">
                            <a href="#">
                                <img className="img-responsive" src={advert} alt="tv" />
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );

}
export default Categories;