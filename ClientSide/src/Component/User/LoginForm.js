import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../styles/userlogin.css'


const UserLogin = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState('');
  const [error, setError] = useState("");
  const [loder, setLoder] = useState(false);

  const PostData = async (e) => {
    e.preventDefault();
    if (!email) {
      toast.error('Email can not be blank')
    }
    else if (!email.includes("@")) {
      toast.error("Enter Valid Email !")
    }
    else if (password === "") {
      toast.error("Password is required")
    }
    else if (password.length < 8) {
      toast.error("password is too short atleast 8 charecter")
    }
    else if (password) {
      console.log("waseem")
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
        return toast.error("password is empty");
      } else if (!uppercasepassword) {
        return toast.error("At least one Uppercase");
      } else if (!lowercasepassword) {
        return toast.error("At least one Lowercase");
      } else if (!digitspassword) {
        return toast.error("At least one digit");
      } else if (!specialCharpassword) {
        return toast.error("At least one Special Characters");
      } else if (!minLengthpassword) {
        return toast.error("At least minumum 8 characters");
      }

    }

  }
  return (
    <div className='login-container'>
      <form method='POST' onSubmit={PostData}>
        <h6 className="user-login-heading">Sign in Your User Acount</h6>
        <input onChange={(e) => setEmail(e.target.value)}
          value={email}
          name="email"
          type="email"
          className="user-login-admin"
          placeholder='please enter your email'
        />
        <input onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          name="password"
          className="user-login-admin"
          placeholder="password"
        />
        <div className="admin-login-page">
          <div className="user-forget-password"><a href=".">Forget password?</a></div>
          <button type="submit" className="user-login-page-btn">
            Sign in
          </button>
        </div>
        <Link to={'/register'}>
          <div class="user-link-create-account">Create Account</div>
        </Link>
      </form>
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
  )
}

export default UserLogin
