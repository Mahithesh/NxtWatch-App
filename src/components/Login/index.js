import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import {LoginBtn} from '../VidItem/styledComponents'

import './index.css'

class Login extends Component {
  state = {
    username: '',
    password: '',
    isShowpass: false,
    errorMsg: '',
  }

  submitMe = async eve => {
    eve.preventDefault()
    const {username, password} = this.state
    const userDetails = {
      username,
      password,
    }
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const reps = await fetch('https://apis.ccbp.in/login', options)
    const jsonData = await reps.json()
    if (reps.ok) {
      Cookies.set('jwt_token', jsonData.jwt_token, {expires: 5})
      console.log(jsonData.jwt_token)
      this.setState({errorMsg: ''})
      const {history} = this.props
      history.replace('/')
    } else {
      this.setState({errorMsg: jsonData.error_msg})
    }
  }

  render() {
    const {username, password, errorMsg, isShowpass} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="login-home">
        <div className="login-con">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
            className="web-site-logo"
          />
          <form onSubmit={this.submitMe} className="login-form">
            <div className="form-input">
              <label htmlFor="username">USERNAME</label>
              <input
                type="text"
                id="username"
                placeholder="Username"
                className="input-field"
                value={username}
                onChange={eve => this.setState({username: eve.target.value})}
              />
            </div>
            <div className="form-input">
              <label htmlFor="password">PASSWORD</label>
              <input
                type={isShowpass ? 'text' : 'password'}
                id="password"
                placeholder="Password"
                className="input-field"
                value={password}
                onChange={eve => this.setState({password: eve.target.value})}
              />
            </div>
            <div className="input-field-pwsd">
              <input
                type="checkbox"
                id="showpwd"
                placeholder="Password"
                value={isShowpass}
                onChange={eve =>
                  this.setState({isShowpass: eve.target.checked})
                }
              />
              <label htmlFor="showpwd">Show Password</label>
            </div>
            <LoginBtn type="submit" className="login-btn">
              Login
            </LoginBtn>
          </form>
          {errorMsg !== '' ? <p className="error-msg">*{errorMsg}</p> : null}
        </div>
      </div>
    )
  }
}

export default Login
