import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <div className="mb-3">
          <label htmlFor="email">
            <strong>Email</strong>
          </label>
          <input
            type="email"
            className="form-control rounded-0"
            placeholder="Enter your email"
            name="email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password">
            <strong>Password</strong>
          </label>
          <input
            type="password"
            className="form-control rounded-0"
            placeholder="Enter your password"
            name="password"
          />
        </div>
        <button type="submit" className="btn btn-success w-100 rounded-0">
          Log in
        </button>
        <Link
          to="/register"
          type="button"
          className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
        >
          Create account
        </Link>
      </div>
    </div>
  );
}

export default Login;
