import { useContext } from "react";
import { AuthContext } from "../../providers/ContextProvider";
import { toast } from "react-toastify";

const ResetPassword = () => {
  const { resetUserPassword, user } = useContext(AuthContext);

  const handelResetPassword = (e) => {
    e.preventDefault();
    const email = e.target?.email?.value;
    if (user?.email !== email) {
      toast.error(`Something went wrong please provide a valid email`);
      return;
    }
    resetUserPassword(email)
      .then((result) => {
        toast.info("Please Check your email");
        e.target.reset()
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="hero min-h-screen container mx-auto px-4">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-3">Forget Password?</h1>
          <p>Don't worry! Provide your email and set your new password.</p>
        </div>
        <div className="card shrink-0 w-full max-w-sm border bg-base-100">
          <form onSubmit={handelResetPassword} className="card-body">
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
            <div className="form-control mt-6">
              <input
                className="btn btn-info"
                type="submit"
                value="Reset Password"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
