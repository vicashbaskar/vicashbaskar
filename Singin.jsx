import React from 'react';
import './Singin.css';



export function Singin() {
    return (
        <div>
            <div>
                <h3 id="header">Register your account</h3>
            </div>
            <div id="container">


                <div>
                    <form id="form">
                        <label htmlFor="fname" >Name</label><br />
                        <input type="text" placeholder="Enter Your full Name" id="input" /><br /><br />
                        <label htmlFor="uname" >UserName</label><br />
                        <input type="text" placeholder="Enter Your UserName" id="input" /><br /><br />
                        <label htmlFor="email">Email address</label><br />
                        <input type="email" placeholder="Enter Your email adress" id="input" /><br /><br />
                        <label htmlFor="password">password</label><br />
                        <input type="password" placeholder="Enter Your Password" id="input" /><br /><br />
                        <label htmlFor="confirm password">Confirm Password</label><br />
                        <input type="password" placeholder="Enter Your password Again" id="input" /><br /><br />
                        <input type="submit" value="sign up" id="signup" /><br /><br />
                        <span >Already have an account?<a id="link" href="form.html" >Login</a></span>

                    </form>
                </div>
            </div>
        </div>
    )
}