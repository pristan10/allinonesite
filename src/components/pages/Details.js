import React, { Component } from 'react';
import { InfoConsumer} from '../context';
import styled from 'styled-components';
import  './detail.css';
import Review from '../Review';


 class Details extends Component {
    render() {
        return (
          <InfoConsumer>
              {data=> {
                  const {
                      id,
                      headerTitle,
                      headerSubTitle,
                      headerText,
                      img,
                      title,
                      maps,
                      description
                  }=data.detailInfo;

                  return(

                    <React.Fragment>
                        <div className="container-fluid align-items-center thander ">
                            <h1 className='display-1 font-weight-bold'>{headerTitle}</h1>
                            <h4 className="display-5">{headerSubTitle}</h4>
                            <p>{headerText}</p>
                            <div className="container mt-5  logose">
                                <div className="row justify-content-center">
                                    <div className="col-2">
                                        <i className="fab fa-facebook-f"/>
                                    </div>
                                    <div className="col-2">
                                        <i className="fab fa-twitter"/>
                                    </div>
                                    <div className="col-2">
                                        <i className="fab fa-google-plus-g"/>
                                    </div>
                                    <div className="col-2">
                                        <i className="fab fa-reddit"/>
                                    </div>
                                    <div className="col-2">
                                        <i className="fab fa-whatsapp"/>
                                    </div>
                                    <div className="col-2">
                                        <i className="fab fa-facebook-messenger"/>
                                    </div>
                                </div>
                            </div>
                            </div>
                        {/*  nav link*/}

                        <div className="container" >
                            <ul className="nav nav-tabs">
                                   {/*  about place  link*/}
                              <li className="nav-item">
                                  <a href="#aboutPlace" className="nav-link active " role="tab" data-toggle="tab">
                                      About Place
                                  </a>
                                   </li>
                                      {/* review  link*/}
                              <li className="nav-item">
                                  <a href="#reviews" className="nav-link " role="tab" data-toggle="tab">
                                      Reviews
                                  </a>
                                   </li>
                                      {/* map link*/}
                              <li className="nav-item">
                                  <a href="#map" className="nav-link " role="tab" data-toggle="tab">
                                      Map
                                  </a>
                                   </li>

                            </ul>
                            {/* tap pane */}
                            <div className="tab-content mb-5">
                            <div  id="aboutPlace"   className="tap-pane  active text-center mt-5" role="tabpanel" >
                                <h3 className="mb- 3">{title}</h3>
                                <p>{description}</p>
                                <img src={img} alt={title} className="img-thambnail img-fluid"/>
                            </div>
                        

                            {/* reviews */}
                            <div className="tab-pane " id="reviews" role="tabpanel"> <Review /> </div>
                               {/* map */}
                               <div className="tab-pane mt-5" id="map" role="tabpanel">
                               <iframe src={maps} style={{border:'0', height:'28rem', width:'100%', frameborder:'0'}}></iframe>
                             </div>
                             </div>
                             </div>
                    </React.Fragment>
                  );
              }}
          </InfoConsumer>
        );  
    }
}
export default Details;

