import React, { Component } from 'react'

 class Sign extends Component {
    render() {
        return (
            <div class="h-100 row align-items-center  mb-5" style={{margin:'0 auto', marginLeft:'400px',marginTop:'-10px'}}>
               <div class="span3 px-5  ml-5  column align-items-center">
    <h2>Sign Up</h2>
    <form>
    <label>First Name</label>
    <br/>
    <input type="text" name="firstname" class="span3 my-1"/>
    <br/>
    
    <label>Last Name</label>
    <br/>
    <input type="text" name="lastname" class="span3 my-1"/>
    <br/>
    <label>Email Address</label>
    <br/>
    <input type="email" name="email" class="span3 my-1"/>
    <br/>
    <label>Username</label>
    <br/>
    <input type="text" name="username" class="span3 my-1"/>
    <br/>
    <label>Password</label>
    <br/>
    <input type="password" name="password" class="span3 my-1"/>
    <br/>
    <label><input type="checkbox" name="terms"/> I agree with the <a href="#">Terms and Conditions</a>.</label>
    <br/>
    <input type="submit" value="Sign up" class="btn btn-primary pull-right my-5 float-left"/>
    <div class="clearfix"></div>
    </form>
</div>                
            </div>
        )
    }
}

export default Sign
