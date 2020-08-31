import React, { Component } from 'react'

 class Tabbaby extends Component {
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
      <img src="./images/bi1.jpeg" class="card-img-top" alt="..." style={{height:'200px'}}/>
      <div class="card-body">
    <p><s>Rs.900</s>&nbsp; Rs.800 </p>
    <a className="btn btn-primary">-</a><a>&nbsp;0&nbsp;</a> <a className="btn btn-primary">+</a>
    <br/>
  <a className="btn btn-primary mt-1 "><i class="fas fa-shopping-cart"></i>&nbsp;Add to Card</a><br/><br/>
        <a className="btn btn-primary " onClick={this.change}><i class="fas fa-heart"></i>&nbsp; {this.state.watch} </a>  </div>
 </div>
  </div>
   
  <div class="col mb-4">
    <div class="card">
      <img src="./images/bi2.jpeg" class="card-img-top" alt="..." style={{height:'200px'}}/>
      <div class="card-body">
    <p><s>Rs.900</s>&nbsp; Rs.800 </p>
    <a className="btn btn-primary">-</a><a>&nbsp;0&nbsp;</a> <a className="btn btn-primary">+</a>
    <br/>
  <a className="btn btn-primary mt-1 "><i class="fas fa-shopping-cart"></i>&nbsp;Add to Card</a><br/><br/>
        <a className="btn btn-primary " onClick={this.change}><i class="fas fa-heart"></i>&nbsp; {this.state.watch} </a>  </div>
 </div>
  </div>

  <div class="col mb-4">
    <div class="card">
      <img src="./images/bi3.jpeg" class="card-img-top" alt="..." style={{height:'200px'}}/>
      <div class="card-body">
    <p><s>Rs.900</s>&nbsp; Rs.800 </p>
    <a className="btn btn-primary">-</a><a>&nbsp;0&nbsp;</a> <a className="btn btn-primary">+</a>
    <br/>
  <a className="btn btn-primary mt-1 "><i class="fas fa-shopping-cart"></i>&nbsp;Add to Card</a><br/><br/>
        <a className="btn btn-primary " onClick={this.change}><i class="fas fa-heart"></i>&nbsp; {this.state.watch} </a>  </div>
 </div>
  </div>
  
  
  <div class="col mb-4">
    <div class="card">
      <img src="./images/bi4.jpeg" class="card-img-top" alt="..." style={{height:'200px'}}/>
      <div class="card-body">
    <p><s>Rs.900</s>&nbsp; Rs.800 </p>
    <a className="btn btn-primary">-</a><a>&nbsp;0&nbsp;</a> <a className="btn btn-primary">+</a>
    <br/>
  <a className="btn btn-primary mt-1 "><i class="fas fa-shopping-cart"></i>&nbsp;Add to Card</a><br/><br/>
        <a className="btn btn-primary " onClick={this.change}><i class="fas fa-heart"></i>&nbsp; {this.state.watch} </a>  </div>
 </div>
  </div>
  
  <div class="col mb-4">
    <div class="card">
      <img src="./images/bi5.jpeg" class="card-img-top" alt="..." style={{height:'200px'}}/>
      <div class="card-body">
    <p><s>Rs.900</s>&nbsp; Rs.800 </p>
    <a className="btn btn-primary">-</a><a>&nbsp;0&nbsp;</a> <a className="btn btn-primary">+</a>
    <br/>
  <a className="btn btn-primary mt-1 "><i class="fas fa-shopping-cart"></i>&nbsp;Add to Card</a><br/><br/>
        <a className="btn btn-primary " onClick={this.change}><i class="fas fa-heart"></i>&nbsp; {this.state.watch} </a>  </div>
 </div>
  </div>
  
  <div class="col mb-4">
    <div class="card">
      <img src="./images/bi6.jpeg" class="card-img-top" alt="..." style={{height:'200px'}}/>
      <div class="card-body">
    <p><s>Rs.900</s>&nbsp; Rs.800 </p>
    <a className="btn btn-primary">-</a><a>&nbsp;0&nbsp;</a> <a className="btn btn-primary">+</a>
    <br/>
  <a className="btn btn-primary mt-1 "><i class="fas fa-shopping-cart"></i>&nbsp;Add to Card</a><br/><br/>
        <a className="btn btn-primary " onClick={this.change}><i class="fas fa-heart"></i>&nbsp; {this.state.watch} </a>  </div>
 </div>
  </div>
  
  <div class="col mb-4">
    <div class="card">
      <img src="./images/bi7.jpeg" class="card-img-top" alt="..." style={{height:'200px'}}/>
      <div class="card-body">
    <p><s>Rs.900</s>&nbsp; Rs.800 </p>
    <a className="btn btn-primary">-</a><a>&nbsp;0&nbsp;</a> <a className="btn btn-primary">+</a>
    <br/>
  <a className="btn btn-primary mt-1 "><i class="fas fa-shopping-cart"></i>&nbsp;Add to Card</a><br/><br/>
        <a className="btn btn-primary " onClick={this.change}><i class="fas fa-heart"></i>&nbsp; {this.state.watch} </a>  </div>
 </div>
  </div>
  
  <div class="col mb-4">
    <div class="card">
      <img src="./images/bi8.jpeg" class="card-img-top" alt="..." style={{height:'200px'}}/>
      <div class="card-body">
    <p><s>Rs.900</s>&nbsp; Rs.800 </p>
    <a className="btn btn-primary">-</a><a>&nbsp;0&nbsp;</a> <a className="btn btn-primary">+</a>
    <br/>
  <a className="btn btn-primary mt-1 "><i class="fas fa-shopping-cart"></i>&nbsp;Add to Card</a><br/><br/>
        <a className="btn btn-primary " onClick={this.change}><i class="fas fa-heart"></i>&nbsp; {this.state.watch} </a>  </div>
 </div>
  </div>

  <div class="col mb-4">
    <div class="card">
      <img src="./images/bi9.jpeg" class="card-img-top" alt="..." style={{height:'200px'}}/>
      <div class="card-body">
    <p><s>Rs.900</s>&nbsp; Rs.800 </p>
    <a className="btn btn-primary">-</a><a>&nbsp;0&nbsp;</a> <a className="btn btn-primary">+</a>
    <br/>
  <a className="btn btn-primary mt-1 "><i class="fas fa-shopping-cart"></i>&nbsp;Add to Card</a><br/><br/>
        <a className="btn btn-primary " onClick={this.change}><i class="fas fa-heart"></i>&nbsp; {this.state.watch} </a>  </div>
 </div>
  </div>

  <div class="col mb-4">
    <div class="card">
      <img src="./images/bi10.jpeg" class="card-img-top" alt="..." style={{height:'200px'}}/>
      <div class="card-body">
    <p><s>Rs.900</s>&nbsp; Rs.800 </p>
    <a className="btn btn-primary">-</a><a>&nbsp;0&nbsp;</a> <a className="btn btn-primary">+</a>
    <br/>
  <a className="btn btn-primary mt-1 "><i class="fas fa-shopping-cart"></i>&nbsp;Add to Card</a><br/><br/>
        <a className="btn btn-primary " onClick={this.change}><i class="fas fa-heart"></i>&nbsp; {this.state.watch} </a>  </div>
 </div>
  </div>
  
  <div class="col mb-4">
    <div class="card">
      <img src="./images/bi11.jpeg" class="card-img-top" alt="..." style={{height:'200px'}}/>
      <div class="card-body">
    <p><s>Rs.900</s>&nbsp; Rs.800 </p>
    <a className="btn btn-primary">-</a><a>&nbsp;0&nbsp;</a> <a className="btn btn-primary">+</a>
    <br/>
  <a className="btn btn-primary mt-1 "><i class="fas fa-shopping-cart"></i>&nbsp;Add to Card</a><br/><br/>
        <a className="btn btn-primary " onClick={this.change}><i class="fas fa-heart"></i>&nbsp; {this.state.watch} </a>  </div>
 </div>
  </div>

  <div class="col mb-4">
    <div class="card">
      <img src="./images/bi12.jpeg" class="card-img-top" alt="..." style={{height:'200px'}}/>
      <div class="card-body">
    <p><s>Rs.900</s>&nbsp; Rs.800 </p>
    <a className="btn btn-primary">-</a><a>&nbsp;0&nbsp;</a> <a className="btn btn-primary">+</a>
    <br/>
  <a className="btn btn-primary mt-1 "><i class="fas fa-shopping-cart"></i>&nbsp;Add to Card</a><br/><br/>
        <a className="btn btn-primary " onClick={this.change}><i class="fas fa-heart"></i>&nbsp; {this.state.watch} </a>  </div>
 </div>
  </div>
  

  

  

  
</div>              
            </div>
        )
    }
}

export default Tabbaby
