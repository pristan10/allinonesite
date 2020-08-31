import React, { Component } from 'react'
import {Link } from 'react-router-dom';

class Chinesefoods extends Component {
    render() {
        return (
            <div>
              <div style={{height:'100px', width:'100%'}}>
                <h1 className="pt-5 mb-5" style={{ color:'darkblue', textAlign:'center'}}>Kung Fu Kung Poa</h1>

              </div>
              <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">&nbsp;Visit</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-link active" href="#">Offer <span class="sr-only">(current)</span></a>
      <a class="nav-link" href="#" >Today Special</a>
      <a class="nav-link" href="#">Price</a>
      <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true"><i class="far fa-clock"></i>&nbsp;9:30AM–7PM </a>
    </div>
  </div>
</nav>




              <div class="list-group mb-5" >
  <a href="#" class="list-group-item list-group-item-action  btn btn-secondary disable " style={{backgroundColor:'lightgreen'}}>
    Categories
  </a>
  <a href="#" class="list-group-item list-group-item-action">Dapibus ac facilisis in</a>
  <a href="#" class="list-group-item list-group-item-action">Morbi leo risus</a>
  <a href="#" class="list-group-item list-group-item-action">Porta ac consectetur ac</a>
  <a href="#" class="list-group-item list-group-item-action disabled" tabindex="-1" aria-disabled="true">Vestibulum at eros</a>
</div>
                <div class="card-deck">


                <div className="offerimage">

<div class="card pt-5 pb-5 ml-5" style={{width:'18rem' , borderRadius:'15px', padding:'5px', borderColor:'blue'}}>
  <h4 className="pd-5"  style={{color:'red'}}>Special Offer</h4>
  <img src="/images/fd4.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <p><s>Rs.900</s>&nbsp; Rs.800 </p>
    <a className="btn btn-primary">-</a><a>&nbsp;0&nbsp;</a> <a className="btn btn-primary">+</a>
    <br/>
  <a className="btn btn-primary mt-2 "><i class="fas fa-shopping-cart"></i>&nbsp;Add to Card</a><br/><br/>
        <a className="btn btn-primary"><i class="fas fa-heart"></i>&nbsp; Watch</a>  </div>
</div>

</div>
                    {/* 1*/}
  <div class="card">
    <img src="/images/fd1.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Rich variety of breakfasts</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <a className=" btn-danger  "> Rs.800.00</a><br/>
    <Link to='/payment'>  <a className="btn btn-primary"><i class="fas fa-shopping-cart"></i>&nbsp;&nbsp;Buy</a></Link>
    </div>
    <div class="card-footer">
      <small class="text-muted">Breakfast - 3–20 yuan (0.5–3 USD)</small>
    </div>
  </div>
             {/*2 */}
  <div class="card">
    <img src="/images/fd2.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Rice and noodles</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <a className=" btn-danger  "> Rs.700.00</a><br/>
      <Link to='/payment'>  <a className="btn btn-primary"><i class="fas fa-shopping-cart"></i>&nbsp;&nbsp;Buy</a></Link>
 
 </div>
    <div class="card-footer">
      <small class="text-muted">Lunch/Dinner/Supper - 20–80 yuan (3–12.5 USD)</small>
    </div>
  </div>
             {/* 3*/}
  <div class="card">
    <img src="/images/fd3.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Snacks</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <a className=" btn-danger  "> Rs.650.00</a><br/>
      <Link to='/payment'>  <a className="btn btn-primary"><i class="fas fa-shopping-cart"></i>&nbsp;&nbsp;Buy</a></Link>
    
    </div>
    <div class="card-footer">
      <small class="text-muted">Snacks - 2–10 yuan (0.3–1.5 USD)</small>
    </div>
  </div>
</div>
                
<div class="card-deck">
                    {/* 4*/}
  <div class="card">
    <img src="/images/fd4.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Rich variety of breakfasts</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <a className=" btn-danger  "> Rs.900.00</a><br/>
      <Link to='/payment'>  <a className="btn btn-primary"><i class="fas fa-shopping-cart"></i>&nbsp;&nbsp;Buy</a></Link>
    
    </div>
    <div class="card-footer">
      <small class="text-muted">Breakfast - 3–20 yuan (0.5–3 USD)</small>
    </div>
  </div>
             {/*5 */}
  <div class="card">
    <img src="/images/fd5.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Rice and noodles</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <a className=" btn-danger  "> Rs.600.00</a><br/>
      <Link to='/payment'>  <a className="btn btn-primary"><i class="fas fa-shopping-cart"></i>&nbsp;&nbsp;Buy</a></Link>
    
    </div>
    <div class="card-footer">
      <small class="text-muted">Lunch/Dinner/Supper - 20–80 yuan (3–12.5 USD)</small>
    </div>
  </div>
             {/*6 */}
  <div class="card">
    <img src="/images/fd6.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Snacks</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <a className=" btn-danger  "> Rs.500.00</a><br/>
      <Link to='/payment'>  <a className="btn btn-primary"><i class="fas fa-shopping-cart"></i>&nbsp;&nbsp;Buy</a></Link>
   
    </div>
    <div class="card-footer">
      <small class="text-muted">Snacks - 2–10 yuan (0.3–1.5 USD)</small>
    </div>
  </div>
</div>

<div class="card-deck">
                    {/* 7*/}
  <div class="card">
    <img src="/images/fd7.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Rich variety of breakfasts</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <a className=" btn-danger  "> Rs.450.00</a><br/>
      <Link to='/payment'>  <a className="btn btn-primary"><i class="fas fa-shopping-cart"></i>&nbsp;&nbsp;Buy</a></Link>
   
    </div>
    <div class="card-footer">
      <small class="text-muted">Breakfast - 3–20 yuan (0.5–3 USD)</small>
    </div>
  </div>
             {/* 8*/}
  <div class="card">
    <img src="/images/fd8.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Rice and noodles</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <a className=" btn-danger  "> Rs.400.00</a><br/>
      <Link to='/payment'>  <a className="btn btn-primary"><i class="fas fa-shopping-cart"></i>&nbsp;&nbsp;Buy</a></Link>
   
    </div>
    <div class="card-footer">
      <small class="text-muted">Lunch/Dinner/Supper - 20–80 yuan (3–12.5 USD)</small>
    </div>
  </div>
             {/* 9*/}
  <div class="card">
    <img src="/images/fd9.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Snacks</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <a className=" btn-danger  "> Rs.740.00</a><br/>
      <Link to='/payment'>  <a className="btn btn-primary"><i class="fas fa-shopping-cart"></i>&nbsp;&nbsp;Buy</a></Link>
    
    </div>
    <div class="card-footer">
      <small class="text-muted">Snacks - 2–10 yuan (0.3–1.5 USD)</small>
    </div>
  </div>
</div>
            </div>
        )
    }
}

export default Chinesefoods;