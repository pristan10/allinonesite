import React, { Component } from 'react'
import { Link} from 'react-router-dom';
import tabcomponents from '../Tabcomponets'

class Reshops extends Component {
    render() {
        return (
            <div>
              
                <div class="card-group px-5 py-5">
                    {/* 1 */}
                   
  <div class="card px-5">
  <Link to='/tabcomponents'> <img src="/images/ch1.jpg" class="card-img-top" alt="..."/>  </Link>
    <div class="card-body">
      <h5 class="card-title">Kung Fu Kung Poa</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted"><i class="far fa-clock"></i>&nbsp;9:30AM–7PM · 0114 389 679</small>
    </div>
  </div>

   {/*2 */}
  <div class="card px-5">
  <Link to='/tabcomponents'><img src="/images/ch2.jpg" class="card-img-top" alt="..."/> </Link>
    <div class="card-body">
      <h5 class="card-title">Dumped by a Dumpling</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted"><i class="far fa-clock"></i>&nbsp;8:30AM–7PM · 0114 389 679</small>
    </div>
  </div>
   {/* 3*/}
  <div class="card px-5">
  <Link to='/tabcomponents'><img src="/images/ch3.jpg" class="card-img-top" alt="..."/> </Link>
    <div class="card-body">
      <h5 class="card-title">Sweet and Sour Dork</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted"><i class="far fa-clock"></i>&nbsp;7:30AM–7PM · 0114 389 679</small>
    </div>
  </div>
</div>



<div class="card-group px-5 py-5">
                    {/* 4*/}
  <div class="card px-5">
  <Link to='/tabcomponents'> <img src="/images/ch4.jpg" class="card-img-top" alt="..."/> </Link>
    <div class="card-body">
      <h5 class="card-title">Be Nice with Fried Rice</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted"><i class="far fa-clock"></i>&nbsp;9:00AM–8PM · 0114 389 679</small>
    </div>
  </div>
   {/* 5*/}
  <div class="card px-5">
  <Link to='/tabcomponents'><img src="/images/ch5.jpg" class="card-img-top" alt="..."/> </Link>
    <div class="card-body">
      <h5 class="card-title">Asian Crabs</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted"><i class="far fa-clock"></i>&nbsp;8:30AM–7.30PM · 0114 389 679</small>
    </div>
  </div>
   {/* 6*/}
  <div class="card px-5">
  <Link to='/tabcomponents'><img src="/images/ch6.jpg"class="card-img-top" alt="..."/> </Link>
    <div class="card-body">
      <h5 class="card-title">We Eat Duck Meat</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted"><i class="far fa-clock"></i>&nbsp;9:30AM–7PM · 0114 389 679</small>
    </div>
  </div>
</div>

<div class="card-group px-5 py-5">
                    {/* 7*/}
  <div class="card px-5">
  <Link to='/tabcomponents'><img src="/images/ch7.jpg" class="card-img-top" alt="..."/> </Link>
    <div class="card-body">
      <h5 class="card-title">Wax on, Wax off Buffet.</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted"><i class="far fa-clock"></i>&nbsp;9:30AM–7PM · 0114 389 679</small>
    </div>
  </div>
   {/* 8*/}
  <div class="card px-5">
  <Link to='/tabcomponents'> <img src="/images/ch6.jpg" class="card-img-top" alt="..."/> </Link>
    <div class="card-body">
      <h5 class="card-title"> China Burger</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted"><i class="far fa-clock"></i>&nbsp;9:30AM–7PM · 0114 389 679</small>
    </div>
  </div>
   {/* 9*/}
  <div class="card px-5">
  <Link to='/tabcomponents'><img src="/images/ch4.jpg" class="card-img-top" alt="..."/> </Link>
    <div class="card-body">
      <h5 class="card-title">Cluck Cluck Duck Duck</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted"><i class="far fa-clock"></i>&nbsp;9:30AM–7PM · 0114 389 679</small>
    </div>
  </div>
</div>
            </div>
        )
    }
}

export default Reshops;