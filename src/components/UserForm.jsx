import React, { useState } from 'react';

// If the First Name or Last Name is less than 2 characters, output an error message saying that field must be at least 2 characters.
// If the email is less than 5 characters, output an error message saying the field must be at least 5 characters.
// The passwords must match and be at least 8 characters.

const UserForm = props => {
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");


    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 1) {
            setFirstNameError("First Name is required!");
        } else if(e.target.value.length < 2) {
            setFirstNameError("First Name must be 2 characters or longer!");
        } else {
            setFirstNameError("");
        }
    }
    const handleLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 1) {
            setLastNameError("Last Name is required!");
        } else if(e.target.value.length < 2) {
            setLastNameError("Last Name must be 2 characters or longer!");
        } else {
            setLastNameError("");
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 1) {
            setEmailError("Email is required!");
        } else if(e.target.value.length < 5) {
            setEmailError("Email must be 5 characters or longer!");
        } else {
            setEmailError("");
        }
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 1) {
            setPasswordError("Password is required!");
        } else if(e.target.value.length < 8) {
            setPasswordError("Password must be 8 characters or longer!");
        } else {
            setPasswordError("");
        }
    }
    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if( e.target.value !== password) {
            setConfirmPasswordError("Password must match!");
        } else {
            setConfirmPasswordError("");
        }
    }

    const createUser = (e) => {
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        e.preventDefault();
        const newUser = { firstName, lastName, email, password, confirmPassword };
        console.log("Welcome", newUser);
    };

    return (
        <form onSubmit={createUser}>
            <div>
                <label>First Name: </label>
                <input type="text" onChange={handleFirstName } value={firstName}  />
                { firstNameError ? 
                <p style={{color:'red'}}>{firstNameError}</p> : ''   }
            </div>
            <div>
                <label>Last name: </label>
                <input type="text" onChange={handleLastName} value={lastName} />
                { lastNameError ? 
                <p style={{color:'red'}}>{lastNameError}</p> : ''   }
            </div>
            <div>
                <label>Email Address: </label>
                <input type="email" onChange={handleEmail} value={email}/>
                { emailError ? 
                <p style={{color:'red'}}>{emailError}</p> : ''   }
            </div>
            <div>
                <label>Password: </label>
                <input type="password" onChange={handlePassword} value={password} />
                { passwordError ? 
                <p style={{color:'red'}}>{passwordError}</p> : ''   }
            </div>
            <div>
                <label> Confirm Password: </label>
                <input type="password" onChange={handleConfirmPassword} value={confirmPassword} />
                { confirmPasswordError ? 
                <p style={{color:'red'}}>{confirmPasswordError}</p> : ''   }
            </div>
            <input type="submit" value="Create User" />



        </form>
    );
};

export default UserForm;