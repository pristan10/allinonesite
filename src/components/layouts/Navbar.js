import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
  
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav m-auto">
      <li className="nav-item active">
        <Link className="nav-link text-white text-uppercase ml-5 btn btn-secondary " to="/">Home&nbsp;<i class="fas fa-home"></i> <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link text-white text-uppercase ml-5  " to="/">
        <div class="dropdown">
  <a class="btn btn-secondary " href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
   
  Location&nbsp;
        
        <i class="fas fa-search-location"></i> 
  </a>

  <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
   <a className="ml-1 mr-1">      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/></a>
   <a className="btn btn-outline-secondary ml-5 mt-2 mb-1 mr-5"><i class="fas fa-map-marker-alt" ></i> &nbsp;Your Location</a>

    <a class="dropdown-item" href="#">Jaffna</a>
    <a class="dropdown-item" href="#">Kilinochchi</a>
    <a class="dropdown-item" href="#">Vavuniya
</a>
    <a class="dropdown-item" href="#">Mannar
</a>
    <a class="dropdown-item" href="#">MUllaitheevu
</a>
    <a class="dropdown-item" href="#">Trincomali
</a>
    <a class="dropdown-item" href="#">Ballicaloa
</a>
    <a class="dropdown-item" href="#">Kandy
</a>
    <a class="dropdown-item" href="#">Colombo
</a>
    <a class="dropdown-item" href="#">Gampaha
</a>
    <a class="dropdown-item" href="#">Galle
</a>
    <a class="dropdown-item" href="#">Nuvara Eliya
</a>


    
  </div>
</div>
          
          
          
        <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link text-white text-uppercase ml-5  " to='/reshops' >
        <div class="dropdown">
  <Link to='/shops'><a class="btn btn-secondary "  role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" to='/shops'>
   
  Shops&nbsp;<i class="fas fa-store-alt"></i>
  </a></Link>

</div>
          
          
          
        <span className="sr-only">(current)</span></Link>
      </li>


     
      <li className="nav-item active ">
        <Link className="nav-link text-white text-uppercase ml-5" to="/help"> <div class="dropdown">
  <a class="btn btn-secondary " href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  Categories&nbsp; <i class="fas fa-bars"></i>
  </a>

  <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <a class="dropdown-item" href="#">Electronic Devices</a>
    <a class="dropdown-item" href="#">Electronic Accessories</a>
    <a class="dropdown-item" href="#">TV  Home Appliances
</a>
    <a class="dropdown-item" href="#">Health & Beauty
</a>
    <a class="dropdown-item" href="#">Babies & Toys
</a>
    <a class="dropdown-item" href="#">Groceries & Pets
</a>
    <a class="dropdown-item" href="#">Home & Lifestyle
</a>
    <a class="dropdown-item" href="#">Women's Fashion
</a>
    <a class="dropdown-item" href="#">Men's Fashion
</a>
    <a class="dropdown-item" href="#">Watches & Accessories
</a>
    <a class="dropdown-item" href="#">Sports & Outdoor
</a>
    <a class="dropdown-item" href="#">Automotive & Motorbike
</a>


    
  </div>
</div><span className="sr-only">(current)</span></Link>
      </li>
     
      
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Your Wish" aria-label="Search"/>
      <button className="btn btn-outline-secondary my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
       
    )
}

export default Navbar;