import React from "react";
import { Link } from "react-router-dom";

const Item = (props) => {
    // console.log(props.title, props.img);
    return (
        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-4 f-category">
            <Link to={"/categories"}><img src={props.img}
                className="img-responsive" alt="img" />
                <h6 className="tittle"> {props.title}</h6>
            </Link>
        </div>
    );
}
export default Item;