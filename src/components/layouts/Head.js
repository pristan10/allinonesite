import React from 'react'
import {Link } from 'react-router-dom';



 function Head() {
    return (
        
    
        <nav class="navbar navbar-expand-md navbar-light">
        
       {/* <Link to='/details'> <button type="button" class="btn btn-primary btn-lg">ALL IN ONE ROOF</button></Link>  */}
        <Link  to='/details'> <img src="/images/aio.jpeg" style={{width:'180px',height:'80px', borderRadius:'5px'}}/></Link>

         
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav1"
            aria-controls="basicExampleNav1" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        
          
          
          
        
        
          <div class="collapse navbar-collapse" id="basicExampleNav1">
        
        
            <ul class="navbar-nav ml-auto">
              
              <li class="nav-item">
                <a href="#!" class="nav-link navbar-link-2 waves-effect btn btn-outline-secondary">
                 My Account
                </a>
              </li>
              <li class="nav-item">
                <a href="#!" class="nav-link navbar-link-2 waves-effect btn btn-outline-secondary">

                  SignIn with Delivery Drivers
                </a>
              </li>
              <li class="nav-item">
                <a href="#!" class="nav-link navbar-link-2 waves-effect btn btn-outline-secondary">
                  Menu
                </a>
              </li>
              <li class="nav-item">
                <a href="#!" class="nav-link navbar-link-2 waves-effect btn btn-outline-secondary">
                  Help
                </a>
              </li>
              
              {/* <li class="nav-item">
                <a href="#!" class="nav-link navbar-link-2 waves-effect btn btn-outline-secondary">
                  <span class="badge badge-pill red">1</span>
                  <i class="fas fa-shopping-cart pl-0"></i>
                </a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle waves-effect" id="navbarDropdownMenuLink3" data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="true">
                  <i class="united kingdom flag m-0"></i>
                </a>
                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                  <a class="dropdown-item" href="#!">Action</a>
                  <a class="dropdown-item" href="#!">Another action</a>
                  <a class="dropdown-item" href="#!">Something else here</a>
                </div>
              </li>
              <li class="nav-item">
                <a href="#!" class="nav-link waves-effect">
                  Shop
                </a>
              </li>
              <li class="nav-item">
                <a href="#!" class="nav-link waves-effect">
                  Contact
                </a>
              </li> */}
              {/* <li class="nav-item">
                <a href="#!" class="nav-link waves-effect">
                  Sign in
                </a>
              </li> */}
              <li class="nav-item pl-2 mb-2 mb-md-0">
                <a href="#!" type="button"
                  class="btn btn-outline-info btn-md btn-rounded btn-navbar waves-effect waves-light" ><Link to='/sign'>Sign up</Link></a>
              </li>
            </ul>
        
          </div>
        
        
        </nav>
    
    )
}

export default Head;