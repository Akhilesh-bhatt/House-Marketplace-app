import { useState } from "react"
import {getAuth, sendPasswordResetEmail} from 'firebase/auth';
import {Link} from "react-router-dom"
import {toast} from "react-toastify"
import {ReactComponent as ArrowRightIcon} from '../assets/svg/keyboardArrowRightIcon.svg';


function ForgotPassword() {
  const [email, setEmail] = useState('')
  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      const auth = getAuth()
      await sendPasswordResetEmail(auth, email)
      toast.success("Email is sent!")
    } catch (error) {
      toast.error("Could not send email!")
    }
  }

  const onChange = (e) => {
    setEmail(e.target.value)
  }
  return (
    <div className="pageContainer">
      <header>
        <p className="pageHeader">Forgot Password</p>
      </header>

      <main>
        <form onSubmit={onSubmit}>
          <input type="text" id="email" className="emailInput" onChange={onChange} value={email} placeholder="Email"/>

          <Link className="forgotPasswordLink" to="/signin">Sign in</Link>

          <div className="signInBar">
            <div className="signInText">Send Reset Link</div>
            <button className="signInButton">
              <ArrowRightIcon fill="#fff" width="34px" height="34px" />
            </button>
          </div>
        </form>
      </main>
    </div>
  )
}

export default ForgotPassword