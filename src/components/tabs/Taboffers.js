import React, { Component } from 'react'
import {Link } from 'react-router-dom'


class Taboffers extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             watch:'watch',
             watche:'watch',
             count:0
        }
    }
    changes=()=>{
        this.setState({
            watche:'watched'
        })
    }
    decrease=()=>{
      if(this.state.count>0){
        this.setState({
          count:this.state.count-1
        })

      }
     
    }
    increase=()=>{
      this.setState({
        count:this.state.count+1
      })
    }
    
    render() {
        return (
            <div>
          <div class="row row-cols-1 row-cols-md-6">
  <div class="col mb-4">
    <div class="card">
      <img src="./images/bb13.jpeg" class="card-img-top" alt="..." style={{height:'200px'}}/>
      <div class="card-body">
    <p><s>Rs.900</s>&nbsp; Rs.800 </p>
    <a className="btn btn-primary" onClick={this.decrease}>-</a><a>&nbsp;{this.state.count}&nbsp;</a> <a className="btn btn-primary" onClick={this.increase}>+</a>
    <br/>
  <Link to='/payment' className="btn btn-primary mt-1 "><i class="fas fa-shopping-cart"></i>&nbsp;Add to Card</Link><br/><br/>
        <a className="btn btn-primary " onClick={this.changes}><i class="fas fa-heart"></i>&nbsp; {this.state.watche} </a>  </div>
 </div>
  </div>
   
  <div class="col mb-4">
    <div class="card">
      <img src="./images/bi13.jpeg" class="card-img-top" alt="..." style={{height:'200px'}}/>
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
      <img src="./images/da13.jpeg" class="card-img-top" alt="..." style={{height:'200px'}}/>
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
      <img src="./images/hi13.jpeg" class="card-img-top" alt="..." style={{height:'200px'}}/>
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
      <img src="./images/hi14.jpeg" class="card-img-top" alt="..." style={{height:'200px'}}/>
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
      <img src="./images/hi15.jpeg" class="card-img-top" alt="..." style={{height:'200px'}}/>
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
      <img src="./images/th2.jpeg" class="card-img-top" alt="..." style={{height:'200px'}}/>
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
      <img src="./images/th3.jpeg" class="card-img-top" alt="..." style={{height:'200px'}}/>
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
      <img src="./images/th8.jpeg" class="card-img-top" alt="..." style={{height:'200px'}}/>
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
      <img src="./images/th9.jpeg" class="card-img-top" alt="..." style={{height:'200px'}}/>
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
      <img src="./images/th3.jpeg" class="card-img-top" alt="..." style={{height:'200px'}}/>
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

export default Taboffers
