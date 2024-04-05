import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/ContextProvider";
import { toast } from "react-toastify";
import googleLogo from "../../assets/images/google-logo.png";
import githubLogo from "../../assets/images/github-logo.png";
import { LuEye } from "react-icons/lu";
import { FiEyeOff } from "react-icons/fi";

const SignIn = () => {
  const { logInUser, logInWithGoogle, logInWithGithub } = useContext(AuthContext);
  const [isPasswordShow, setIsPasswordShow] = useState(false);


  const navigate = useNavigate();

  const handelSingInForm = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    logInUser(email, password)
      .then((result) => {
        toast.success("Log in Success");
        navigate("/");
        e.target.reset();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handelPasswordShow = () => {
    setIsPasswordShow(!isPasswordShow);
  };

  const handelLogInWithGoogle = () => {
    logInWithGoogle()
      .then((result) => {
        navigate("/");
      })
      .catch((error) => console.error(error));
  };

  const handelLogInWithGithub = () => {
    logInWithGithub()
      .then((result) => {
        navigate("/");
      })
      .catch((error) => console.error(error));
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
                name="email"
                placeholder="Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="">
              <div className="relative">
                <label className="label">
                  <span className="label-text">Create Password</span>
                </label>
                <input
                  type={isPasswordShow ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  className="input input-bordered w-full"
                  required
                />
                <div
                  onClick={handelPasswordShow}
                  className="absolute right-3 bottom-4 cursor-pointer"
                >
                  {isPasswordShow ? <LuEye /> : <FiEyeOff />}
                </div>
              </div>

              <label className="label">
                <Link
                  to={"/resetpassword"}
                  className="label-text-alt link link-hover"
                >
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <div>
            <div className="text-center mb-4">
              <h2 className="text-2xl">Or</h2>
              <p>Sign Up with</p>
            </div>
            <div className="flex justify-center gap-5">
              <button
                onClick={handelLogInWithGoogle}
                className="btn mb-2 flex items-center gap-2"
              >
                <img className="w-8" src={googleLogo} alt="" />
                <span> Google</span>
              </button>
              <button
                onClick={handelLogInWithGithub}
                className="btn flex items-center gap-2"
              >
                <img className="w-8" src={githubLogo} alt="" />
                <span>GitHub</span>
              </button>
            </div>
          </div>
          <div className="pb-5">
            <p className="text-center">
              Haven't any account? <br />
              Please{" "}
              <Link
                to={"/signup"}
                className="font-semibold underline text-blue-600"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
