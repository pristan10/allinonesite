import React, { Component } from 'react'
import { Link} from "react-router-dom";


 class Shops extends Component {
    render() {
        return (
             <div className="h-100 row  align-items-center m-auto ml-5">
                <div className="card mb-3 ml-5" style={{width:" 540px"}} >
  <div class="row no-gutters">
    <div class="col-md-4">
      <img src="/images/chinese_res.jpg" class="card-img" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Chinese Restaurents</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small><Link className='ml-5 btn btn-outline-primary' to='/reshops'>Select</Link></p>
      </div>
    </div>
  </div>
</div>
{/*  second */}

<div class="card mb-3 ml-5" style={{width:" 540px"}} >
  <div class="row no-gutters">
    <div class="col-md-4">
      <img src="/images/indian_res.jpeg" class="card-img" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Indian Restaurents</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small><Link className='ml-5 btn btn-outline-primary' to='/reshops'>Select</Link></p>
      </div>
    </div>
  </div>
</div>
{/* third */}
<div class="card mb-3 ml-5" style={{width:" 540px"}} >
  <div class="row no-gutters">
    <div class="col-md-4">
      <img src="/images/italian_res.jpg" class="card-img" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Italian Restaurents</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small><Link className='ml-5 btn btn-outline-primary' to='/reshops'>Select</Link></p>
      </div>
    </div>
  </div>
</div>
{/* fouth */}
<div class="card mb-3 ml-5" style={{width:" 540px"}} >
  <div class="row no-gutters">
    <div class="col-md-4">
      <img src="/images/canadian_res.jpeg" class="card-img" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Canadian Restaurents</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small><Link className='ml-5 btn btn-outline-primary' to='/reshops'>Select</Link></p>
      </div>
    </div>
  </div>
</div>
{/* fifth */}
<div class="card mb-3 ml-5" style={{width:" 540px"}} >
  <div class="row no-gutters">
    <div class="col-md-4">
      <img src="/images/japanese_res.jpg" class="card-img" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Japanese Restaurents</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small><Link className='ml-5 btn btn-outline-primary' to='/reshops'>Select</Link></p>
      </div>
    </div>
  </div>
</div>

<div class="card mb-3 ml-5" style={{width:" 540px"}} >
  <div class="row no-gutters">
    <div class="col-md-4">
      <img src="/images/indian_res.jpeg" class="card-img" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Indian Restaurents</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small><Link className='ml-5 btn btn-outline-primary' to='/reshops'>Select</Link></p>
      </div>
    </div>
  </div>
</div>
            </div>
        )
    }
}

export default Shops;