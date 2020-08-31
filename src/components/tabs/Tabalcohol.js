import React, { Component } from 'react'
import {Link } from 'react-router-dom'

class Tabalcohol extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             watch:'watch'
        }
    }
    change=()=>{
        this.setState({
            watch:'watch'
        })
    }
    
    render() {
        return (
            <div>
          <div class="row row-cols-1 row-cols-md-6">
  <div class="col mb-4">
    <div class="card">
      <img src="./images/bb1.jpeg" class="card-img-top" alt="..." style={{height:'200px'}}/>
      <div class="card-body">
    <p><s>Rs.900</s>&nbsp; Rs.800 </p>
    <a className="btn btn-primary">-</a><a>&nbsp;0&nbsp;</a> <a className="btn btn-primary">+</a>
    <br/>
  <a className="btn btn-primary mt-1 "><i class="fas fa-shopping-cart"></i>&nbsp;<Link to ='/payment'> Add  To Card</Link></a><br/><br/>
        <a className="btn btn-primary " onClick={this.change}><i class="fas fa-heart"></i>&nbsp; {this.state.watch} </a>  </div>
 </div>
  </div>
   
  <div class="col mb-4">
    <div class="card">
      <img src="./images/bb2.jpeg" class="card-img-top" alt="..." style={{height:'200px'}}/>
      <div class="card-body">
    <p><s>Rs.900</s>&nbsp; Rs.800 </p>
    <a className="btn btn-primary">-</a><a>&nbsp;0&nbsp;</a> <a className="btn btn-primary">+</a>
    <br/>
  <a className="btn btn-primary mt-1 "><i class="fas fa-shopping-cart"></i>&nbsp;<Link to ='/payment'> Add  To Card</Link></a><br/><br/>
        <a className="btn btn-primary " onClick={this.change}><i class="fas fa-heart"></i>&nbsp; {this.state.watch} </a>  </div>
 </div>
  </div>

  <div class="col mb-4">
    <div class="card">
      <img src="./images/bb3.jpeg" class="card-img-top" alt="..." style={{height:'200px'}}/>
      <div class="card-body">
    <p><s>Rs.900</s>&nbsp; Rs.800 </p>
    <a className="btn btn-primary">-</a><a>&nbsp;0&nbsp;</a> <a className="btn btn-primary">+</a>
    <br/>
  <a className="btn btn-primary mt-1 "><i class="fas fa-shopping-cart"></i>&nbsp;<Link to ='/payment'> Add  To Card</Link></a><br/><br/>
        <a className="btn btn-primary " onClick={this.change}><i class="fas fa-heart"></i>&nbsp; {this.state.watch} </a>  </div>
 </div>
  </div>
  
  
  <div class="col mb-4">
    <div class="card">
      <img src="./images/bb4.jpeg" class="card-img-top" alt="..." style={{height:'200px'}}/>
      <div class="card-body">
    <p><s>Rs.900</s>&nbsp; Rs.800 </p>
    <a className="btn btn-primary">-</a><a>&nbsp;0&nbsp;</a> <a className="btn btn-primary">+</a>
    <br/>
  <a className="btn btn-primary mt-1 "><i class="fas fa-shopping-cart"></i>&nbsp;<Link to ='/payment'> Add  To Card</Link></a><br/><br/>
        <a className="btn btn-primary " onClick={this.change}><i class="fas fa-heart"></i>&nbsp; {this.state.watch} </a>  </div>
 </div>
  </div>
  
  <div class="col mb-4">
    <div class="card">
      <img src="./images/bb5.jpeg" class="card-img-top" alt="..." style={{height:'200px'}}/>
      <div class="card-body">
    <p><s>Rs.900</s>&nbsp; Rs.800 </p>
    <a className="btn btn-primary">-</a><a>&nbsp;0&nbsp;</a> <a className="btn btn-primary">+</a>
    <br/>
  <a className="btn btn-primary mt-1 "><i class="fas fa-shopping-cart"></i>&nbsp;<Link to ='/payment'> Add  To Card</Link></a><br/><br/>
        <a className="btn btn-primary " onClick={this.change}><i class="fas fa-heart"></i>&nbsp; {this.state.watch} </a>  </div>
 </div>
  </div>
  
  <div class="col mb-4">
    <div class="card">
      <img src="./images/bb6.jpeg" class="card-img-top" alt="..." style={{height:'200px'}}/>
      <div class="card-body">
    <p><s>Rs.900</s>&nbsp; Rs.800 </p>
    <a className="btn btn-primary">-</a><a>&nbsp;0&nbsp;</a> <a className="btn btn-primary">+</a>
    <br/>
  <a className="btn btn-primary mt-1 "><i class="fas fa-shopping-cart"></i>&nbsp;<Link to ='/payment'> Add  To Card</Link></a><br/><br/>
        <a className="btn btn-primary " onClick={this.change}><i class="fas fa-heart"></i>&nbsp; {this.state.watch} </a>  </div>
 </div>
  </div>
  
  <div class="col mb-4">
    <div class="card">
      <img src="./images/bb7.jpeg" class="card-img-top" alt="..." style={{height:'200px'}}/>
      <div class="card-body">
    <p><s>Rs.900</s>&nbsp; Rs.800 </p>
    <a className="btn btn-primary">-</a><a>&nbsp;0&nbsp;</a> <a className="btn btn-primary">+</a>
    <br/>
  <a className="btn btn-primary mt-1 "><i class="fas fa-shopping-cart"></i>&nbsp;<Link to ='/payment'> Add  To Card</Link></a><br/><br/>
        <a className="btn btn-primary " onClick={this.change}><i class="fas fa-heart"></i>&nbsp; {this.state.watch} </a>  </div>
 </div>
  </div>
  
  <div class="col mb-4">
    <div class="card">
      <img src="./images/bb8.jpeg" class="card-img-top" alt="..." style={{height:'200px'}}/>
      <div class="card-body">
    <p><s>Rs.900</s>&nbsp; Rs.800 </p>
    <a className="btn btn-primary">-</a><a>&nbsp;0&nbsp;</a> <a className="btn btn-primary">+</a>
    <br/>
  <a className="btn btn-primary mt-1 "><i class="fas fa-shopping-cart"></i>&nbsp;<Link to ='/payment'> Add  To Card</Link></a><br/><br/>
        <a className="btn btn-primary " onClick={this.change}><i class="fas fa-heart"></i>&nbsp; {this.state.watch} </a>  </div>
 </div>
  </div>

  <div class="col mb-4">
    <div class="card">
      <img src="./images/bb9.jpeg" class="card-img-top" alt="..." style={{height:'200px'}}/>
      <div class="card-body">
    <p><s>Rs.900</s>&nbsp; Rs.800 </p>
    <a className="btn btn-primary">-</a><a>&nbsp;0&nbsp;</a> <a className="btn btn-primary">+</a>
    <br/>
  <a className="btn btn-primary mt-1 "><i class="fas fa-shopping-cart"></i>&nbsp;<Link to ='/payment'> Add  To Card</Link></a><br/><br/>
        <a className="btn btn-primary " onClick={this.change}><i class="fas fa-heart"></i>&nbsp; {this.state.watch} </a>  </div>
 </div>
  </div>

  <div class="col mb-4">
    <div class="card">
      <img src="./images/bb10.jpeg" class="card-img-top" alt="..." style={{height:'200px'}}/>
      <div class="card-body">
    <p><s>Rs.900</s>&nbsp; Rs.800 </p>
    <a className="btn btn-primary">-</a><a>&nbsp;0&nbsp;</a> <a className="btn btn-primary">+</a>
    <br/>
  <a className="btn btn-primary mt-1 "><i class="fas fa-shopping-cart"></i>&nbsp;<Link to ='/payment'> Add  To Card</Link></a><br/><br/>
        <a className="btn btn-primary " onClick={this.change}><i class="fas fa-heart"></i>&nbsp; {this.state.watch} </a>  </div>
 </div>
  </div>
  
  <div class="col mb-4">
    <div class="card">
      <img src="./images/bb11.jpeg" class="card-img-top" alt="..." style={{height:'200px'}}/>
      <div class="card-body">
    <p><s>Rs.900</s>&nbsp; Rs.800 </p>
    <a className="btn btn-primary">-</a><a>&nbsp;0&nbsp;</a> <a className="btn btn-primary">+</a>
    <br/>
  <a className="btn btn-primary mt-1 "><i class="fas fa-shopping-cart"></i>&nbsp;<Link to ='/payment'> Add  To Card</Link></a><br/><br/>
        <a className="btn btn-primary " onClick={this.change}><i class="fas fa-heart"></i>&nbsp; {this.state.watch} </a>  </div>
 </div>
  </div>

  <div class="col mb-4">
    <div class="card">
      <img src="./images/bb12.jpeg" class="card-img-top" alt="..." style={{height:'200px'}}/>
      <div class="card-body">
    <p><s>Rs.900</s>&nbsp; Rs.800 </p>
    <a className="btn btn-primary">-</a><a>&nbsp;0&nbsp;</a> <a className="btn btn-primary">+</a>
    <br/>
  <a className="btn btn-primary mt-1 "><i class="fas fa-shopping-cart"></i>&nbsp;<Link to ='/payment'> Add  To Card</Link></a><br/><br/>
        <a className="btn btn-primary " onClick={this.change}><i class="fas fa-heart"></i>&nbsp; {this.state.watch} </a>  </div>
 </div>
  </div>
  

  

  

  
</div>              
            </div>
        )
    }
}

export default Tabalcohol
