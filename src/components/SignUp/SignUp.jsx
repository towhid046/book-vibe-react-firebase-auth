import { Link } from "react-router-dom";
const SignUp = () => {
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
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
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
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control">
              <button className="btn btn-info">Sign Up</button>
            </div>
          </form>
          <div className="pb-5">
            <p className="text-center">
              Already have an account? <br />
              Please <Link to={'/signin'} className="font-semibold underline text-blue-600">Log In</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
