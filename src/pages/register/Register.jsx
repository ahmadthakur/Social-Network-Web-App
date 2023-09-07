import "./register.scss";
import { Link } from "react-router-dom";

const Register = () => (
  <>
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username"></input>
            <input type="email" placeholder="Email"></input>
            <input type="password" placeholder="Password"></input>
            <input type="" placeholder="Confirm Password"></input>
            <button>Register</button>
          </form>
        </div>
        <div className="right">
          <h1>Social Network</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <span>Already have an account?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
      </div>
    </div>
  </>
);

export default Register;
