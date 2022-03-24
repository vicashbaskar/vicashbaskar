import React from 'react';
 

export function Login() {
    return (
        <div>
            <h3 id="header">Login Page</h3>

            <form >
                User Name  <input type="text" required id="space" /> <br /><br />
                Password   <input type="password" required minlength="6" id="password" /><br /><br />
                <input type="submit" value="submit" id="submit" />

            </form>
        </div>
    )
}