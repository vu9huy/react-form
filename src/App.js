import react, { useEffect, useState } from 'react';
import './App.css';
import GoogleLoginBtn from './component/GoogleLoginLogout/GoogleLogin/GoogleLogin';
import GoogleLogoutBtn from './component/GoogleLoginLogout/GoogleLogout/GoogleLogout';

import FormInput from './inputs/FormInput';

function App() {
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const inputs = [
    {
      id: 1,
      name: 'username',
      type: 'text',
      label: 'User Name',
      placeholder: "Ex: Vu Hong Quan",
      errorMessage: "Username should be 3-16 characters and shouldn't include any special characters.",
      regex: /^[A-Za-z0-9]{3,16}$/.test(values.username)
    },
    {
      id: 2,
      name: 'email',
      type: 'text',
      label: 'Email',
      placeholder: "Ex: email@domain.com",
      errorMessage: 'It should be a valid email address.',
      regex: /\S+@\S+\.\S+/.test(values.email)
    },
    {
      id: 3,
      name: 'password',
      type: 'text',
      label: 'Password',
      placeholder: "Enter password",
      errorMessage: 'Password should be 8-30 characters and include at least 1 letter and 1 number.',
      regex: /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/.test(values.password)
    },
    {
      id: 4,
      name: 'confirmPassword',
      type: 'text',
      label: 'Confirm Password',
      placeholder: "Confirm Password",
      errorMessage: "Password don't match",
      regex: values.confirmPassword === values.password,
    }
  ];

  function onChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log(values);
  }
  const [childData, setChildData] = useState("");
  console.log(childData);
  return (
    <div className="App">
      <form method="POST" className="form" id="form-1">
        {inputs.map((input, index) => {
          return (<FormInput
            key={input.id}
            {...input}
            regex={input.regex}
            value={values[input.name]}
            onChange={onChange}
          />)
        })}
        <button className="form-submit" onClick={(e) => handleSubmit(e)} >Register</button>
      </form>
      <div>
        <GoogleLoginBtn
          passChildData={setChildData}
        />
        <div>
          <p>{childData.email}</p>
          <p>{childData.name}</p>
          <p>{childData.googleId}</p>
        </div>
        <GoogleLogoutBtn />
      </div>
    </div>
  );
}

export default App;
