import React, { Component } from 'react';
import { InfoConsumer} from './context';
import { Link} from "react-router-dom";

 class Info extends Component {
    render() {

        const {
            id,
            headerTitle,
            headerSubTitle,
            headerText,
            img
        } =this.props.item;
        return (
            <InfoConsumer>
                {value=> (

<div className="col-10 col-lg-4 mx-auto mb-5 pt-2">
<div className="card" style={{ width:'22rem' }}>
<img src={img}  style={{ height:'15rem' }} alt={headerTitle} className="card-img-top"/>
<div className="card-body">
<h3 className="card-tite">{ headerTitle}</h3>
<Link to='/reshops'><h5 className="card-title btn btn-outline-primary"><i class="fas fa-map-marker-alt"></i> &nbsp;Near Your Location</h5></Link>
<p className="card-text"> { headerText}</p>
<Link className="btn btn-outline-primary text-uppercase" to="/shops"> See All
</Link>
</div>

</div>
</div>
                )

                   

                }
            </InfoConsumer>
        ) 
    }
}

export default Info;