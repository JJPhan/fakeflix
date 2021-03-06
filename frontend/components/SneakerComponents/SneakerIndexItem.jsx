const { Link } = require("react-router-dom")

import React from 'react';
// import { Link, withRouter } from 'react-router-dom';


const SneakerIndexItem = (props) => {
    return (
    
        <Link to={`/sneakers/${props.sneaker.id}`} className="snkr-idx-itm"> 
                <li className="snkr-idx-item-list"> 
                    <img className="snkr-img" src={`${props.sneaker.photoUrls[0]}`} />
                    <div className="snkr-idx-prop">
                        <div className="snkr-idx-item-brand">{props.sneaker.brand}</div>
                        <div className="snkr-idx-item-name">{props.sneaker.name}</div>
                    </div>
                    
                </li>
        </Link>
    )
}


export default SneakerIndexItem 