import { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../../providers/ContextProvider";
import { useState } from "react";
import { LuEye } from "react-icons/lu";
import { FiEyeOff } from "react-icons/fi";
import { toast } from 'react-toastify';

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const [isPasswordShow, setIsPasswordShow] = useState(false);

  const handelFormSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    createUser(email, password)
      .then((result) => {
        <Navigate to='/signin'/>
        e.target.reset();
      })
      .catch((error) => {
        console.error(error);
        toast.error('You have already sign up with this email')
      });
  };

  const handelPasswordShow = () => {
    setIsPasswordShow(!isPasswordShow);
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
                <Link to={'/resetpassword'} className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className=" ">
              <button className="btn btn-info w-full">Sign Up</button>
            </div>
          </form>
          <div className="pb-5">
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
