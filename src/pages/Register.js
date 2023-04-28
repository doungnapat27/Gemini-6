import React, { Component } from 'react';
import styles from './styles/register.module.css';

class Register extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            lastname: "",
            email: "",
            password: "",
            role:"",
        };
        this.insert = this.register.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    register(e) {
        const link = "http://localhost:8080/register";
        console.log(link);
        fetch(link, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
                name: this.state.name,
                lastname: this.state.lastname,
                email: this.state.email,
                password: this.state.password,
                role: this.state.role,
            }),
        })
        .then(response => response.text())
        .then(data => {
                console.log(data);
                if (data === 'successfully registered!') {
                    alert(data);
                    window.location = '/login';
                }
                else {
                    alert(data);
                }
            })

            .catch((err) => {
                console.log(err);
                alert(err);
            });
    }


    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    handleSubmit(e) {
        e.preventDefault();
    }

    render() {
        return (
            <div className={styles.box}>
              <div className={styles.container}>
                <div className={styles.top}>
                  <h1>SIGN UP</h1>
                  <span>To be a part of Gemini System</span>
                  <span>Create a new account</span>
                </div>
                <form id="register">
                  {/* Name */}
                  <div className={styles.field}>
                    <input type="text" required className="form-control" placeholder="Name" id="name" name="name" value={this.state.name} onChange={this.handleChange}/>
                  </div>
                  {/* Lastname */}
                  <div className={styles.field}>
                    <input type="text" required className="form-control" placeholder="Lastname" id="lastname" name="lastname" value={this.state.lastname} onChange={this.handleChange}/>
                  </div>
                  {/* Email */}
                  <div className={styles.field}>
                    <input type="text" required className="form-control" placeholder="E-mail" id="email" name="email" value={this.state.email} onChange={this.handleChange} />
                  </div>
                  {/* Password */}
                  <div className={styles.field}>
                    <input type="password" required className="form-control" placeholder="Password" id="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                  </div>
                  {/* Role */}
                  <div className={styles.field}>
                    <div className="dropdown">
                      <select className="form-control" id="role" name="role" required onChange={this.handleChange} value={this.state.role}>
                        <option value="Astronomer" id="role" data-role="Astronomer" className="dropdown-item">Astronomer</option>
                        <option value="Science Observer" id="role" data-role="Science Observer" className="dropdown-item">Science Observer</option>
                      </select>
                    </div>
                  </div>
                  {/* Submit */}
                  <div className="submit">
                    <button type="submit" className={styles.submit} value="REGISTER" id="register-button"  onClick={(e) => this.register(e)}>
                      Sign Up
                    </button>
                  </div>
                </form>
                {/* sign in */}
                <div className={styles.sign_in}>
                  Already have an account? <a href="/login">Sign in</a>
                </div>
              </div>
            </div>
          );
    }
}

export default Register;
