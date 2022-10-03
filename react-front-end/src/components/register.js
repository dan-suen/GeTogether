export default function Register() {
  return (
    <form class="row g-3">
      <h1>Register today!</h1>
      <div class="mb-3 mt-3 row">
        <label for="registerFirstName" class="col-sm-2 col-form-label">
          Firstname:
        </label>
        <div class="col-sm-4">
          <input type="first_name" class="form-control" id="registerFirstName" />
        </div>
      </div>

      <div class="mb-3 row">
        <label for="registerLastName" class="col-sm-2 col-form-label">
          Lastname:
        </label>
        <div class="col-sm-4">
          <input type="last_name" class="form-control" id="registerLastName" />
        </div>
      </div>

      <div class="mb-3 row">
        <label for="registerUsername" class="col-sm-2 col-form-label">
          Username:
        </label>
        <div class="col-sm-4">
          <input type="username" class="form-control" id="registerUsername" />
        </div>
      </div>

      <div class="mb-3 row">
        <label for="registerEmail" class="col-sm-2 col-form-label">
          Email:
        </label>
        <div class="col-sm-4">
          <input type="email" class="form-control" id="registerEmail" placeholder="name@example.com" />
        </div>
      </div>
      <div class="mb-3 row">
        <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
        <div class="col-sm-4">
          <input type="password" class="form-control" id="inputPassword" />
        </div>
      </div>
      <div class="mb-3 row">
        <div class="col-sm-1 offset-sm-5">
          <button type="submit" class="btn btn-primary mb-3">Register!</button>
        </div>
      </div>
    </form>
  );
};