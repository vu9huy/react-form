import react, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState(true)

  function handleBlurName(e) {
    if (e.target.value.length != 0) {
      setName(true);
    } else {
      setName(false);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    // GET INPUT DATA:
    // const data = new FormData(e.target);
    // console.log(Object.fromEntries(data.entries()));

  }


  return (
    <div className="App">
      <form method="POST" className="form" id="form-1" onSubmit={(e) => handleSubmit(e)}>
        <h3 className="heading">Register</h3>

        {/* NAME */}
        <div className="form-group">
          <label for="fullname" className="form-label">Name</label>
          <input
            onBlur={(e) => { handleBlurName(e) }}
            id="fullname" name="fullname"
            type="text"
            placeholder="Ex: Vu Hong Quan"
            className="form-control" />
          {!name && <span className="form-message">*Please enter name</span>}
        </div>
        {/* NAME */}

        {/* EMAIL */}
        <div className="form-group">
          <label for="email" className="form-label">Email</label>
          <input
            id="email" name="email"
            type="text"
            placeholder="Ex: email@domain.com"
            className="form-control" />
          <span className="form-message">*Please enter email</span>
        </div>
        {/* EMAIL */}

        {/* PASSWORD */}
        <div className="form-group">
          <label for="password" className="form-label">Password</label>
          <input id="password" name="password" type="password" placeholder="Enter password" className="form-control" />
          <span className="form-message">*Please enter email</span>
        </div>
        {/* PASSWORD */}

        {/* CONFIRM PASSWORD */}
        <div className="form-group">
          <label for="password_confirmation" className="form-label">Confirm password</label>
          <input id="password_confirmation" name="password_confirmation" placeholder="Confirm password" type="password" className="form-control" />
          <span className="form-message"></span>
        </div>
        {/* CONFIRM PASSWORD */}

        {/* GENDER */}
        <div className="form-group gender">
          <p className='form-label'>Gender</p>
          <div className='gender-wrapper'>
            <div className='gender-item'>
              <input type="radio" id="male" name="gender" value="male" className='male' />
              <label for="male">Male</label>
              <span className="checkmark"></span>
            </div>
            <div className='gender-item'>
              <input type="radio" id="female" name="gender" value="female" className='female' />
              <label for="female">Female</label>
              <span className="checkmark"></span>
            </div>
          </div>
        </div>
        {/* GENDER */}

        {/* BIRTHDAY */}
        <div className="form-group">
          <label for="birthday" className="form-label">Birthday</label>
          <input id="birthday" name="birthday" placeholder="" type="date" className="birthday form-control" />
          <span className="form-message"></span>
        </div>
        {/* BIRTHDAY */}

        <button className="form-submit">Register</button>

      </form>
    </div>
  );
}

export default App;
