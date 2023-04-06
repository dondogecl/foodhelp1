import React, { useState } from "react";

function Login() {
    const [email, setName] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = (e) => {
        setName(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };


    // handler for the submit
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email)
        console.log(password)
    };


    return (
        <>
            <div className="container my-5">
                <div className="text-center">
                    <form className="form-signin" onSubmit={handleSubmit}>
                        <img className="mb-4" src="public/images/logo.png" alt="Food" width="72" height="72" />
                        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                        <label htmlFor="inputEmail" className="sr-only">Email address</label>
                        <input type="email" id="inputEmail" className="form-control" placeholder="Email address"
                            value={email} onChange={handleEmailChange} required />
                        <label htmlFor="inputPassword" className="sr-only">Password</label>
                        <input type="password" id="inputPassword" className="form-control" placeholder="Password"
                            value={password} onChange={handlePasswordChange} required />
                        <div className="checkbox mb-3">
                            <label>
                                <input type="checkbox" value="remember-me" /> Remember me
                            </label>
                        </div>
                        <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Login;