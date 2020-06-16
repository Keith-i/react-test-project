import React from 'react'
import { withRouter } from 'react-router-dom'

class SignupForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      errors: {},
      isLoading: false
    }
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
    this.props.signupActions.userSignupRequest(this.state).then(
      (res) => {
        this.setState({
          errors: {},
          isLoading: false
        })
        // 添加数据到redux
        this.props.flashActions.addFlashMessage({
          type: 'success',
          text: '注册成功，欢迎你的加入！'
        })
        this.props.history.push('/')
      },
      ({response}) => {
        console.log(response, 'response')
        this.setState({
          errors: response.data,
          isLoading: false
        })
      }
    )
  }

  render() {
    const { errors, isLoading } = this.state
    return (
      <form onSubmit={ this.onSubmit }>
        <h1>Join our community</h1>
        <div className="form-group">
          <label className="control-label">UserName</label>
          <input
           type="text"
           name="username"
           value={ this.state.username }
           onChange={ this.onChange }
           className="form-control"
          />
          {
            errors.username && <span className="form-text text-muted">{ errors.username }</span>
          }
        </div>

        <div className="form-group">
          <label className="control-label">Email</label>
          <input
           type="email"
           name="email"
           value={ this.state.email }
           onChange={ this.onChange }
           className="form-control"
          />
          {
            errors.email && <span className="form-text text-muted">{ errors.email }</span>
          }
        </div>

        <div className="form-group">
          <label className="control-label">Password</label>
          <input
           type="password"
           name="password"
           value={ this.state.password }
           onChange={ this.onChange }
           className="form-control"
          />
          {
            errors.password && <span className="form-text text-muted">{ errors.password }</span>
          }
        </div>

        <div className="form-group">
          <label className="control-label">PasswordConfirmation</label>
          <input
           type="password"
           name="passwordConfirmation"
           value={ this.state.passwordConfirmation }
           onChange={ this.onChange }
           className="form-control"
          />
          {
            errors.passwordConfirmation && <span className="form-text text-muted">{ errors.passwordConfirmation }</span>
          }
        </div>

        <div className="form-group">
          <button className="btn btn-primary btn-lg">注册</button>
        </div>
      </form>
    )
  }
}

export default withRouter(SignupForm)