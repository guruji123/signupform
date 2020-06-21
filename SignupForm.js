import React, {Component} from 'react';



class SignupForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            number: "",
            dob: "",
            address: "",
            degree: "",
            skills: "",
            exp: "",
            password: "",
            passwordConfirmation: ""


        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.userSignupRequest(this.state);

    }

    render() {
        return(
            <form onSubmit={this.onSubmit}>
                <h1>Sign up</h1>
                <div className="form-group">
                    <label className="control-label">Name</label>
                    <input
                        value={this.state.username}
                        onChange={this.onChange}
                        type="text"
                        name="username"
                        className="form-control"
                        />
                </div>

                <div className="form-group">
                    <label className="control-label">Email</label>
                    <input
                        value={this.state.email}
                        onChange={this.onChange}
                        type="email"
                        name="email"
                        className="form-control"
                        />
                </div>

                <div className="form-group">
                    <label className="control-label">Phone Number</label>
                    <input
                        value={this.state.number}
                        onChange={this.onChange}
                        type="number"
                        name="number"
                        className="form-control"
                        />
                </div>

                <div className="form-group">
                    <label className="control-label">DOB</label>
                    <input
                        value={this.state.dob}
                        onChange={this.onChange}
                        type="date"
                        name="date"
                        className="form-control"
                        />
                </div>

                <div className="form-group">
                    <label className="control-label">Address</label>
                    <input
                        value={this.state.address}
                        onChange={this.onChange}
                        type="text symbol"
                        name="address"
                        className="form-control"
                        />
                </div>

                <div className="form-group">
                    <label className="control-label">Degree of Graduation</label>
                    <input
                        value={this.state.degree}
                        onChange={this.onChange}
                        type="text upperCase"
                        name="username"
                        className="form-control"
                        />
                </div>

                <div className="form-group">
                    <label className="control-label">Skills</label>
                    <input
                        value={this.state.skills}
                        onChange={this.onChange}
                        type="text"
                        name="skills"
                        className="form-control"
                        />
                </div>

                <div className="form-group">
                    <label className="control-label">Year Of Experience</label>
                    <input
                        value={this.state.exp}
                        onChange={this.onChange}
                        type="number"
                        name="exp"
                        className="form-control"
                        />
                </div>

                <div className="form-group">
                    <label className="control-label">Password</label>
                    <input
                        value={this.state.password}
                        onChange={this.onChange}
                        type="password"
                        name="password"
                        className="form-control"
                        />
                </div>

                <div className="form-group">
                    <label className="control-label">Confirm Password</label>
                    <input
                        value={this.state.passwordConfirmation}
                        onChange={this.onChange}
                        type="password"
                        name="passwordConfirmation"
                        className="form-control"
                        />
                </div>
                

                <div className="form-group">
                    <button className="vtn btn-primary btn-lg">
                        Sign up
                    </button>
                </div>
            </form>
        )
    }
}

SignupForm.propTypes = {
    userSignupRequest: React.PropTypes.func.isRequired
}

export default SignupForm;