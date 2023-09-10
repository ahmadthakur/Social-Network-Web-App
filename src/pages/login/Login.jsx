import "./login.scss";
import { Link } from "react-router-dom";

const Login = () => (
  <>
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Welcome</h1>
          <p>
            Welcome to our social network! Connect with friends, share your
            thoughts and experiences, and discover new communities. Join us
            today and start exploring a world of possibilities.
          </p>
          <span>Don&rsquo;t have an account?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username"></input>
            <input type="password" placeholder="Password"></input>
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  </>
);

export default Login;
