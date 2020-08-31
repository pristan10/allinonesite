import React from 'react'

 function Footer() {
    return (
       <div className="main-footer mt-5" style={{ backgroundColor:"#343a40", color:'white'}}>
           <div className="container">
               <div className="row">
                   <div className="col-md-3">
                       <ul className="list-unstyled">
                           <h4>the heading</h4>
                           <a><li>name</li></a>
                           <a><li>name</li></a>
                           <a><li>name</li></a>
                           <a><li>name</li></a>
                       </ul>
                   </div>

                   <div className="col-md-3">
                   <ul className="list-unstyled">
                           <h4>the heading</h4>
                           <a><li>name</li></a>
                           <a><li>name</li></a>
                           <a><li>name</li></a>
                           <a><li>name</li></a>
                       </ul>
                   </div>

                   <div className="col-md-3">
                   <ul className="list-unstyled">
                           <h4>the heading</h4>
                           <a><li>name</li></a>
                           <a><li>name</li></a>
                           <a><li>name</li></a>
                           <a><li>name</li></a>
                       </ul>
                   </div>

                   <div className="col-md-3">
                   <ul className="list-unstyled">
                           <h4>the heading</h4>
                           <a><li>name</li></a>
                           <a><li>name</li></a>
                           <a><li>name</li></a>
                           <a><li>name</li></a>
                       </ul>
                   </div>
               </div>
               <div className="footer-bottom" style={{padding:'50px'}}>
                   <p className="text-as-center">
                       &copy;{new Date().getFullYear()} All In oNe -All Rights Reserved
                   </p>
               </div>
           </div>
       </div>
    )
}

export default Footer