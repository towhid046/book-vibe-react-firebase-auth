import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/ContextProvider";
import { useState } from "react";
import { LuEye } from "react-icons/lu";
import { FiEyeOff } from "react-icons/fi";
import { toast } from "react-toastify";
import googleLogo from "../../assets/images/google-logo.png";
import githubLogo from "../../assets/images/github-logo.png";

const SignUp = () => {
  const { createUser, logInWithGoogle, logInWithGithub } =
    useContext(AuthContext);
  const [isPasswordShow, setIsPasswordShow] = useState(false);

  const navigate = useNavigate();

  const handelFormSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    createUser(email, password)
      .then((result) => {
        toast.success("Log in success");
        navigate("/");
        e.target.reset();
      })
      .catch((error) => {
        console.error(error);
        toast.error("You have already sign up with this email");
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
          <h1 className="text-4xl font-bold">Sign Up now!</h1>
          <p className="py-6">
            Sing up now to get access more and increase your knowledge 10x
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm border bg-base-100">
          <form onSubmit={handelFormSubmit} className="card-body">
            <div className=" ">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className=" ">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered w-full"
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
            <div className=" ">
              <button className="btn btn-info w-full">Sign Up</button>
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
          <div className="py-5">
            <p className="text-center">
              Already have an account? <br />
              Please{" "}
              <Link
                to={"/signin"}
                className="font-semibold underline text-blue-600"
              >
                Log In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
