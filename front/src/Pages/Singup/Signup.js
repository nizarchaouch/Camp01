import "./signup.css"
import { useState } from 'react';
import axios from 'axios';

const SignUpForm = () => {
 
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [numero, setNumero] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNomChange = (event) => {
    setNom(event.target.value);
  };
  const handlePrenomChange = (event) => {
    setPrenom(event.target.value);
  };
  const handleNumeroChange = (event) => {
    setNumero(event.target.value);
  };
 
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
 
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3000/Admin/addAdmin', {
      nom: nom,
      prenom: prenom,
      numero: numero,
      mail: email,
      password: password,
     // confirmPassword: this.state.confirmPassword
    })
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
      
    });
     console.log(nom)
     console.log(email)
  }

  return (
    <>
    <div className="p py-5">
    <form className="sign-up-form" onSubmit={handleSubmit}>
      <h2>S'inscrire</h2>
      <div className="form-control">
        <label htmlFor="nom">Nom</label>
        <input
          type="text"
          id="nom"
          name="username"
          value={nom}
          onChange={handleNomChange}
          required
        />
      </div>
      <div className="form-control">
        <label htmlFor="prenom">Prenom</label>
        <input
          type="text"
          id="prenom"
          name="prenom"
          value={prenom}
          onChange={handlePrenomChange}
          required
        />
      </div>
      <div className="form-control">
        <label htmlFor="numero">Numero</label>
        <input
          type="text"
          id="numero"
          name="numero"
          value={numero}
          onChange={handleNumeroChange}
          required
        />
      </div>
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
      
      <button type="submit">s'inscrire</button>

    </form>
    </div>
    </>
  );
 
};

export default SignUpForm;
