import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import '../../styles/userRegister.css'
import '../../styles/landing.css'
const UserRegister = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    password: '',
    confirmPassword: ''
  })
  const [errorText, setErrorText] = useState('');
  const [loder, setLoder] = useState(false);

  function doValidate() {
    const { name, email, contact, password, confirmPassword } = formData
    if (!name) {
      toast.error('name can not be blank')
    }
    else if (!email) {
      toast.error('email can not be blank')
    }
    else if (!contact) {
      toast.error('contact can not be blank')
    }
    else if (/\d+/.test(name)) {
      toast.error('Name should contain small case and upper case alphabets')
    }
    else if (!email.includes('@')) {
      toast.error('email should contain @')
    }
    else if (!password) {
      toast.error('password can not be blank')
    }
    else if (!confirmPassword) {
      toast.error('confirmPassword can not be blank')
    }
    else if (password !== confirmPassword || confirmPassword !== password) {
      toast.error('password and confirm password must be same')
    }
    else if (password) {
      const uppercaseRegExp = /(?=.*?[A-Z])/;
      const lowercaseRegExp = /(?=.*?[a-z])/;
      const digitsRegExp = /(?=.*?[0-9])/;
      const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/;
      const minLengthRegExp = /.{8,}/;
      const passwordLength = password.length;
      const uppercasepassword = uppercaseRegExp.test(password);
      const lowercasepassword = lowercaseRegExp.test(password);
      const digitspassword = digitsRegExp.test(password);
      const specialCharpassword = specialCharRegExp.test(password);
      const minLengthpassword = minLengthRegExp.test(password);

      if (passwordLength === 0) {
        toast.error("password is empty");
      } else if (!uppercasepassword) {
        toast.error("At least one Uppercase");
      } else if (!lowercasepassword) {
        toast.error("At least one Lowercase");
      } else if (!digitspassword) {
        toast.error("At least one digit");
      } else if (!specialCharpassword) {
        toast.error("At least one Special Characters");
      } else if (!minLengthpassword) {
        toast.error("At least minumum 8 characters");
      }

      return ''
    }
  }

  let name, value
  function handleInputs(e) {
    name = e.target.name;
    value = e.target.value;
    setFormData({ ...formData, [name]: value })
  }

  const PostData = async (e) => {
    e.preventDefault();
    // const { name, email, contact, password, confirmPassword } = formData;
    const errorMessage = doValidate()
    if (errorMessage) {
      setErrorText(errorMessage)
      console.log('Validation failed! can not submit form.')
    }

  }

  return (
    <>
      <div className='Landing-container'>
        <div className='left-section'>
          <h1>Write Your Story: Craft Compelling Blogs with Our User-Friendly App!</h1>
          <Link to={'/login'}>
            <button className='userRegister'>User Login</button>
          </Link>
        </div>
        <div className='right-section'>
          <div className="register-login-form" id="form">
            <form method="POST" className="form-container">
              <h6 className="register-heading">Register Your User Account</h6>
              {errorText && <div className="error">{errorText}</div>}
              <input onChange={handleInputs}
                value={formData.name}
                type="text"
                name="name"
                className="register-login-admin"
                placeholder="Name"
              />
              <input onChange={handleInputs}
                value={formData.email}
                type="email"
                name="email"
                className="register-login-admin"
                placeholder="email"
              />
              <input onChange={handleInputs}
                value={formData.contact}
                type="number"
                name="contact"
                className="register-login-admin"
                placeholder="contact"
              />
              <input onChange={handleInputs}
                value={formData.password}
                type="text"
                name="password"
                className="register-login-admin"
                placeholder="password"
              />
              <input onChange={handleInputs}
                value={formData.confirmPassword}
                type="text"
                name="confirmPassword"
                className="register-login-admin"
                placeholder="confirm password"

              />
              <div className="register-button">
                <Link to={'/login'}>
                  <div type="submit" className="signin">Signin</div></Link>
                <button type="submit" className="register-btn2" onClick={PostData}>
                  Register
                </button>
              </div>
            </form>
          </div>
          <ToastContainer
            position="top-center"
            autoClose={2500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            theme="dark"
          />
        </div>
      </div>
    </>
  )
}

export default UserRegister
