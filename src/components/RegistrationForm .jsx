import React, { useState } from 'react';
import style from './registration.module.css'
const RegistrationForm = () => {
    //   const [formData, setFormData] = useState({
    //     firstName: '',
    //     lastName: '',
    //     email: '',
    //     password: '',
    //     confirmPassword: '',
    //   });

    //   const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData({
    //       ...formData,
    //       [name]: value,
    //     });
    //   };

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [cpassword, setCpassword] = useState();
    const [firstNameError, setFirstNameError] = useState(false);
    const [lastNameError, setLastNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [cpasswordError, setCpasswordError] = useState();









    //   const handleSubmit = (e) => {
    //     console.log(e)
    //     e.preventDefault();
    //     // Perform form validation here
    //     console.log('Form submitted:', formData);
    //   };

    const formStyle = {
        maxWidth: '500px',
        margin: '0 auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        backgroundColor: '#f9f9f9',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    };

    const inputStyle = {
        width: '100%',
        padding: '10px',
        margin: '10px 0px',
        borderRadius: '4px',
    };

    const buttonStyle = {
        width: '100%',
        padding: '10px',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    };

    const labelStyle = {
        marginTop: '10px',
    };

    const registerButton = () => {
        setFirstNameError(false)
        setLastNameError(false)
        setEmailError(false)
        setCpasswordError(false)
        setPasswordError(false)
        if (firstName && lastName && email && password && cpassword && password === cpassword) {
            console.log("Register button Clicked")
        } else {
            if (!firstName ) {
                setFirstNameError(true)
            }
            if (!lastName) {
                setLastNameError(true)
            }
            if (!email) {
                setEmailError(true)
            }
            if (!password) {
                setPasswordError(true)
            }
            if (!cpassword) {
                setCpasswordError(true)
            }
        }
    }

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
                <form style={formStyle}>
                    <h2 style={{ textAlign: 'center' }}>Register Form</h2>
                    <div style={{ marginRight: "20px" }}>
                        <label htmlFor="firstName" style={labelStyle}>First Name:</label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            className={firstNameError ? style.redborder : style.blackBorder}
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            // value={formData.firstName}
                            // onChange={handleChange}
                            style={inputStyle}
                        // required
                        />
                         {firstNameError && <p style={{color:"red"}}>Please enter you first name</p>}
                         {(firstName.length>0 && firstName.length<5) && <p>Please enter atleast five charcter</p>}
                    </div>
                    <div style={{ marginRight: "20px" }}>
                        <label htmlFor="lastName" style={labelStyle}>Last Name:</label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            onChange={(e) => setLastName(e.target.value)}
                            value={lastName}
                            className={lastNameError ? style.redborder : style.blackBorder}
                            // value={formData.lastName}
                            // onChange={handleChange}
                            style={inputStyle}
                        // required
                        />
                        {lastNameError && <p style={{color:"red"}}>Please enter you last name</p>}
                    </div>
                    <div style={{ marginRight: "20px" }}>
                        <label htmlFor="email" style={labelStyle}>Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className={emailError ? style.redborder : style.blackBorder}
                            onChange={(e) => setEmail(e.target.value)}
                            // value={formData.email}
                            // onChange={handleChange}
                            style={inputStyle}
                        // required
                        />
                    </div>
                    <div style={{ marginRight: "20px" }}>
                        <label htmlFor="password" style={labelStyle}>Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className={passwordError ? style.redborder : style.blackBorder}
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            // onChange={handleChange}
                            style={inputStyle}
                        // required
                        />
                    </div>
                    <div style={{ marginRight: "20px" }}>
                        <label htmlFor="confirmPassword" style={labelStyle}>Confirm Password:</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={cpassword}
                            className={cpasswordError ? style.redborder : style.blackBorder}
                            onChange={(e) => setCpassword(e.target.value)}
                            // onChange={handleChange}
                            style={inputStyle}
                        // required
                        />
                    </div>
                    <button type='button' style={buttonStyle} onClick={registerButton}>Register</button>
                    {firstNameError && <div>Please fill all the feilds</div>}

                </form>
            </div>

        </>
    );
};

export default RegistrationForm;
