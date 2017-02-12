import React, { PropTypes as T } from 'react'
import ReactDOM from 'react-dom'
import {Form, FormGroup, Checkbox, FormControl, ControlLabel, Button, ButtonToolbar, Grid, Row, Col, Well } from 'react-bootstrap'
import AuthService from 'utils/AuthService'
import styles from './styles.module.css'

export class Login extends React.Component {
  static contextTypes = {
    router: T.object,
    // showAccountWidget: false,
  }

  static propTypes = {
    location: T.object,
    auth: T.instanceOf(AuthService)
  }

  state ={
    showAccountWidget: false,
  }

  getAuthParams() {
    return {
      email: ReactDOM.findDOMNode(this.refs.email).value,
      password: ReactDOM.findDOMNode(this.refs.password).value
    }
  }

  login(e) {
    e.preventDefault()
    const { email, password } = this.getAuthParams()
    this.props.auth.login(email, password)
  }

  signup() {
    const { email, password } = this.getAuthParams()
    this.props.auth.signup(email, password)
  }

  loginWithGoogle() {
    this.props.auth.loginWithGoogle();
  }

  toggleAccountWidget(){
    this.setState({showAccountWidget: !this.state.showAccountWidget})
  }

  render() {
    return (
      <div className={styles.root}>
        <div className={styles.nav}>
          <img className={styles.loginIcon} src={require('../rosLogo_Fotor.png')}/>
          <Button onClick={this.toggleAccountWidget.bind(this)}> Log In</Button>
        </div>
        {this.state.showAccountWidget &&<div className={styles.mask}></div>}
        {this.state.showAccountWidget && <div className={styles.accountWidget}>
          <div className={styles.header} onClick={this.toggleAccountWidget.bind(this)}><Button>Close<span className="glyphicon glyphicon-remove"></span></Button></div>
          <p className={styles.title}>Log in</p>
          <div className={styles.iconList}>
            <div className={styles.iconAndName}>
              <img className={styles.loginIcon} src="https://www.shareicon.net/download/2016/11/14/852038_amazon.svg"/>
              <p>Amazon</p>
            </div>
            <div className={styles.iconAndName} onClick={this.loginWithGoogle.bind(this)}>
              <img className={styles.loginIcon} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1024px-Google_%22G%22_Logo.svg.png"/>
              <p>Google</p>
            </div>
            <div className={styles.iconAndName}>
              <img className={styles.loginIcon} src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/F_icon_reversed.svg/1024px-F_icon_reversed.svg.png"/>
              <p>Facebook</p>
            </div>
          </div>
          <Form onSubmit={this.login.bind(this)}>
            <FormGroup controlId="email">
              <ControlLabel>Email</ControlLabel>
              <FormControl type="email" ref="email" placeholder="yours@example.com" required />
            </FormGroup>

            <FormGroup controlId="password">
              <ControlLabel>Password</ControlLabel>
              <FormControl type="password" ref="password" placeholder="Password" required />
            </FormGroup>

            <FormGroup controlId="password">
              <Checkbox ref="term">
                Accept Terms And Privacy Policy
              </Checkbox>
            </FormGroup>

            <ButtonToolbar>
              <Button type="submit" bsStyle="primary">Log In</Button>
              <Button onClick={this.signup.bind(this)}>Sign Up</Button>
              {/* <Button bsStyle="link" onClick={this.loginWithGoogle.bind(this)}>Login with Google</Button> */}
            </ButtonToolbar>
          </Form>
        </div>}
      <div className={styles.well}>
        <section className={styles.main}>
        </section>
        <div className={styles.words}>
          <h1>Take your business to the next level</h1>
          <p>Sell, service, market, and connect to grow your business every day.</p>
          <Button className={styles.signUpButton}>Join For One month Free</Button>
        </div>
      </div>
      </div>
    )
  }
}

export default Login;
