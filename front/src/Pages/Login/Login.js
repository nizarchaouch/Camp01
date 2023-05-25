import "./Login.css";
import { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

const Login = () => {
 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
   
    const handleSubmit = (event) => {
      event.preventDefault();
      axios.post('http://localhost:3000/User/login', {
        mail: email,
        password: password,
       // confirmPassword: this.state.confirmPassword
      })
      .then(response => {
        console.log(response);
        console.log("connect");
      })
      .catch(error => {
        console.log(error);
        
      });
       console.log(password)
       console.log(email)
    }
  
    return (
      <>
      <div className="p py-5">
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <h2>Se Connecter</h2>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        
        <button type="submit">Connexion</button>
        <Link to="../SignUp" className="lead text-secondary ">S'inscrire</Link>
      </form>
      </div>
      </>
    );
   
  };

export default Login;
