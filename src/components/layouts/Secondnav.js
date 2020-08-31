import React from 'react'
import {Link} from 'react-router-dom'

function Secondnav() {
    return (
      <>
        <div style={{alignContent:"center"}} className="sticky-top" >
            
            <nav class="navbar navbar-expand-lg navbar-secondary bg-light ">
       <Link to='/'><img  src="./images/aiologo.png"  style={{width:'80px',hight:'80px'}} /></Link>
 
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav m-auto">
     
      <li class="nav-item  mx-2">
        <a class="nav-link" href="#"><div class="dropdown">
  <button class="btn text-info" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
   <h4>SuperMarket</h4> 
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
  <button class="dropdown-item" type="button">All</button>
    <button class="dropdown-item" type="button"><Link to='/reshops'>Chines supermarket</Link></button>
    <button class="dropdown-item" type="button"><Link to='/shops'>Indian supermarket</Link></button>
    <button class="dropdown-item" type="button">Gargills</button>

    <button class="dropdown-item" type="button">Sathosa</button>
    <button class="dropdown-item" type="button">unity plazza</button>
  </div>
</div></a>
      </li>
      <li class="nav-item">
         
        <a class="nav-link" href="#"><div class="dropdown">
  <button class="btn text-info" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
   <h4>Takeaway & restaurant</h4> 
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
  <button class="dropdown-item" type="button">All</button>

    <button class="dropdown-item" type="button">Chines </button>
    <button class="dropdown-item" type="button">Indian </button>
    <button class="dropdown-item" type="button">Gargills</button>

    <button class="dropdown-item" type="button">Sathosa</button>
    <button class="dropdown-item" type="button">unity plazza</button>
  </div>
</div></a>

      </li>
       
      <li class="nav-item">
         <a class="nav-link" href="#"><div class="dropdown">
  <button class="btn text-info" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
   <h4>Taxi</h4> 
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
  <button class="dropdown-item" type="button">All</button>

    {/* <button class="dropdown-item" type="button">Chines supermarket</button>
    <button class="dropdown-item" type="button">Indian supermarket</button>
    <button class="dropdown-item" type="button">Gargills</button>

    <button class="dropdown-item" type="button">Sathosa</button>
    <button class="dropdown-item" type="button">unity plazza</button> */}
  </div>
</div></a>
        
      </li>
       
      <li class="nav-item">
         <a class="nav-link" href="#"><div class="dropdown">
  <button class="btn text-info" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
   <h4>Texltiles</h4> 
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
  <button class="dropdown-item" type="button">All</button>

    {/* <button class="dropdown-item" type="button">Chines supermarket</button>
    <button class="dropdown-item" type="button">Indian supermarket</button>
    <button class="dropdown-item" type="button">Gargills</button>

    <button class="dropdown-item" type="button">Sathosa</button>
    <button class="dropdown-item" type="button">unity plazza</button> */}
  </div>
</div></a>
      </li>
       
      <li class="nav-item">
         <a class="nav-link" href="#"><div class="dropdown">
  <button class="btn text-info" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
   <h4>More Categories</h4> 
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
  <button class="dropdown-item" type="button">All</button>

    {/* <button class="dropdown-item" type="button">Chines supermarket</button>
    <button class="dropdown-item" type="button">Indian supermarket</button>
    <button class="dropdown-item" type="button">Gargills</button>

    <button class="dropdown-item" type="button">Sathosa</button>
    <button class="dropdown-item" type="button">unity plazza</button> */}
  </div>
</div></a>
      </li>
     
     
    </ul>
    
  </div>
</nav>
</div>

<div class="h-100 row align-items-center mt-5 mb-5">
<form style={{alignContent:'center !important'}} class="my-auto form-inline my-2 my-lg-0 mt-5  mb-5 pb-5 m-auto" >
      <input class="form-control mr-sm-2" type="search" placeholder="Postalcode" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
</div>
 </>
    )
}

export default Secondnav


