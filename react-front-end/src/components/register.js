export default function Register() {
  return (
    <form className="row g-3">
      <h1>Register today!</h1>
      <div className="mb-3 mt-3 row">
        <label for="registerFirstName" className="col-sm-2 col-form-label">
          Firstname:
        </label>
        <div className="col-sm-4">
          <input type="first_name" className="form-control" id="registerFirstName" />
        </div>
      </div>

      <div className="mb-3 row">
        <label for="registerLastName" className="col-sm-2 col-form-label">
          Lastname:
        </label>
        <div className="col-sm-4">
          <input type="last_name" className="form-control" id="registerLastName" />
        </div>
      </div>

      <div className="mb-3 row">
        <label for="registerUsername" className="col-sm-2 col-form-label">
          Username:
        </label>
        <div className="col-sm-4">
          <input type="username" className="form-control" id="registerUsername" />
        </div>
      </div>

      <div className="mb-3 row">
        <label for="registerEmail" className="col-sm-2 col-form-label">
          Email:
        </label>
        <div className="col-sm-4">
          <input type="email" className="form-control" id="registerEmail" placeholder="name@example.com" />
        </div>
      </div>
      <div className="mb-3 row">
        <label for="inputPassword" className="col-sm-2 col-form-label">Password</label>
        <div className="col-sm-4">
          <input type="password" className="form-control" id="inputPassword" />
        </div>
      </div>
      <div className="mb-3 row">
        <div className="col-sm-1 offset-sm-5">
          <button type="submit" className="btn btn-primary mb-3">Register!</button>
        </div>
      </div>
    </form>
  );
};