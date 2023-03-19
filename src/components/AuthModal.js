import { useState } from "react";

const AuthModal = ({setShowModal}) => {

    const handleClick = () =>{
        setShowModal(false)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
    }


    const isSignUp = true

    return(
        <div className="auth-modal">
            <div className="close-icon" onClick={handleClick}>ⓧ</div>
            <h2>{isSignUp ? 'CREATE ACCOUNT' : 'LOG IN'}</h2>
            <p>By clicking Log In, you agree to our terms. Learn how we process your data in our Privacy Policy and Cookie Policy.</p>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="email"
                    required={true}
                    omChange{(e) => setEmail(e.target.value)}
                />
            </form>

            AUTH MOAL
        </div>
    )
}

export default AuthModal