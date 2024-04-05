import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/ContextProvider';

const SignIn = () => {

  const {logInUser, setUser, user} = useContext(AuthContext);

  const handelSingInForm = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    logInUser(email, password)
      .then((result) => {
        console.log(result?.user);
        setUser(result?.user)
        e.target.reset();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="hero min-h-screen container mx-auto px-4">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Login now!</h1>
          <p className="py-6">
           Sing in now to get access more and increase your knowledge 10x
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm border bg-base-100">
          <form onSubmit={handelSingInForm} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name='email'
                placeholder="Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name='password'
                placeholder="Password"
                className="input input-bordered"
                required
              />
              <label className="label">
              <Link to={'/resetpassword'} className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <div className="pb-5">
            <p className="text-center">
             Haven't any account? <br />
              Please <Link to={'/signup'} className="font-semibold underline text-blue-600">Sign Up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
