import React from 'react';

class SignupForm extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleInput(type) {
        return (e) => {
            this.setState({[type]: e.target.value}); 
            // [ ] to make it a key value pair 
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.signUp(this.state)
    }

    render() {
        return (
            <div className="session-form">
                <h2>Sign Up</h2>
                    <form>
                        <label>Username:
                            <input
                            type="text"
                            value={this.state.username}
                            onChange={this.handleInput('username')}
                            />
                        </label>
                        <label>Email:
                            <input
                            type="text"
                            value={this.state.email}
                            onChange={this.handleInput('email')}
                            />
                        </label>
                        <label>Password:
                            <input
                            type="password"
                            value={this.state.password}
                            onChange={this.handleInput('password')}
                            />
                        </label>
                        <button onClick={this.handleSubmit}>Sign Up</button>
                        
                    </form>

            </div>
            
        )
        }
}

export default SignupForm