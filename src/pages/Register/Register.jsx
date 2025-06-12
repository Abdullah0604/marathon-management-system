import { Link, useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import AuthInput from "../sharedComponents/AuthInput";
import GoogleIcon from "../sharedComponents/GoogleIcon";
import registerJson from "../../assets/lotties/register.json";
import Lottie from "lottie-react";
import passwordChecker from "../../utils/passwordChecker";
import { Bounce, toast } from "react-toastify";

function Register() {
  const { setUser, registerUser, setLoading, updateUserProfile } = useAuth();
  const navigate = useNavigate();
  const handleCreateUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    const isPassCorrect = passwordChecker(password);

    if (isPassCorrect) {
      return toast.error(isPassCorrect, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
    // console.log({ name, photo, email, password });
    registerUser(email, password)
      .then((result) => {
        updateUserProfile(name, photo).then(() => {
          setUser({ ...result.user, displayName: name, photoURL: photo });
          setLoading(false);
          if (result.user) {
            Swal.fire({
              title: "Welcome To RunNexus!",
              text: "Your account has been created!",
              icon: "success",
            });
          }
        });
        navigate("/");
      })
      .catch((error) => {
        // console.log(error.message);
        if (error) {
          let errorMessage = "Something went wrong!";

          if (error.code === "auth/email-already-in-use") {
            errorMessage = "This email is already registered.";
          } else if (error.code === "auth/invalid-email") {
            errorMessage = "Please enter a valid email address.";
          } else if (error.code === "auth/weak-password") {
            errorMessage = "Password should be at least 6 characters.";
          }

          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: errorMessage,
          });
        }
        setLoading(false);
      });
  };
  return (
    <section className="bg-gray-50 dark:bg-gray-900 my-16">
      <div className="flex items-center justify-center px-2 md:px-6 py-8  mx-auto md:min-h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 max-w-[1000px] xl:p-0 dark:bg-gray-800 dark:border-gray-700 flex flex-col lg:flex-row items-center gap-10 ">
          <div className=" flex-1  px-10  ">
            <Lottie animationData={registerJson} />
          </div>
          {/* form */}
          <div className="p-6 w-full lg:flex-1 space-y-4 md:space-y-6 sm:p-8 ">
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-xl mb-8 font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Create an account
              </h1>
              <button className="btn w-full rounded-full bg-white text-black border-[#e5e5e5]">
                <GoogleIcon />
                Login with Google
              </button>
            </div>
            <div className="divider text-rose-600">OR</div>
            <form
              onSubmit={handleCreateUser}
              className="space-y-4 md:space-y-6"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your Name
                </label>
                <AuthInput
                  inputType="text"
                  inputName="name"
                  inputExample="abdur rahman"
                />
              </div>
              <div>
                <label
                  htmlFor="photo"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your Photo URL
                </label>
                <AuthInput
                  inputType="text"
                  inputName="photo"
                  inputExample="https://imbb.yourimg.com..."
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <AuthInput
                  inputType="email"
                  inputName="email"
                  inputExample="name@company.com"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full  focus:border-teal-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full text-white bg-rose-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium  text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Create an account
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-medium text-orange-700 hover:underline dark:text-primary-500"
                >
                  Login here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;
