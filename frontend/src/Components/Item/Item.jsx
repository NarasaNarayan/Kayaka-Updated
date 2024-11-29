import React from "react";
import './Item.css'
import { Link } from "react-router-dom";
const Item = (props) => {
  return <div className="item">
<Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)}  src={props.image} alt=""/></Link>
<p>{props.item}</p>
<p>{props.name}</p>
<div className="item-prices">
    <div className="item-price-new">
    <span>&#8377;</span>{props.new_price}
    </div>
    <div className="item-price-old">
    <span>&#8377;</span>{props.old_price}

    </div>


</div>

  </div>;
};

export default Item;
