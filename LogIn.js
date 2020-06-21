import React, {Component} from 'react';

class LogIn extends Component {
        constructor(){
            super();
            this.state ={
                email: "",
                password: ""
            };

        }
        handleLogin = e =>{
          e.preventDefault();  
         // const { email, password } = this.state;
       }
      
        onChange = e =>{
          const { name, value } = e.target;
          this.setState({
            [name] : value
          })
        }
    render() {
        return(
            <form>
                <div>
                    <h1>LogIn</h1>
                    <div className="form-group">
                        <label className="control-label">Email</label>
                        <input
                            value={this.state.email}
                            onChange={this.onChange}
                            type="email"
                            name="email"
                            id="email"
                            placeholder="EMAIL"
                            className="form-control"
                            required
                            />
                    </div>

                    <div className="form-group">
                        <label className="control-label">Password</label>
                        <input
                            value={this.state.password}
                            onChange={this.onChange}
                            type="password"
                            name="password"
                            id="password"
                            placeholder="PASSWORD"
                            className="form-control"
                            />
                    </div>

                    <div className="form-group">
                        
                        <button className="vtn btn-primary btn-lg">
                            Log In
                        </button>
                        
                    </div>
                </div>
            </form>
        )
    }
}

export default LogIn;