import { useState } from "react";

export default function Login() {

  const [formValues, setFormValues] = useState({
    'email': '',
    'password': ''
  })
  function handleSubmit(event) {
    event.preventDefault();

    console.log("Form Submitted!!", formValues)
  }

  function handleInputChange(fieldName, event) {
    setFormValues((prevValues) => ({
      ...prevValues,
      [fieldName]: event.target.value
    }))
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" onChange={(event) => handleInputChange('email', event)} />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" onChange={(event) => handleInputChange('password', event)} />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
