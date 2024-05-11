import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import useAuth from "../../Hooks/useAuth";
import { FaEnvelope, FaEye, FaEyeSlash, FaLock } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import backgroundImg from '../../assets/images/bg_login_signup.jpg';
import logo from '../../assets/images/logo1.png';

const Login = () => {
    const { signInUser } = useAuth();
    const [showLoginPass, setShowLoginPass] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state || '/';

    const onSubmit = (data) => {
        const { email, password } = data;

        signInUser(email, password)
            .then((result) => {
                if (result.user) {
                    toast.success('Logged In successfully!!!')
                    setTimeout(() => {
                        navigate(from);
                    }, 1000);
                }
            })
            .catch((error) => {
                console.error(error);
                toast.error("Invalid Email or Password!!!");
            })
    }

    return (
        <div className="font-roboto min-h-screen flex justify-center items-center" style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.3)), url(${backgroundImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <Helmet>
                <title>Harvest Hub | Login</title>
            </Helmet>
            <div className="w-full max-w-md my-10">
                <form onSubmit={handleSubmit(onSubmit)} className="bg-secondary shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="flex justify-center mb-2">
                        <img className="w-1/5" src={logo} alt="" />
                    </div>
                    <h1 className="text-2xl mb-6 text-center font-bold">Login To Your Account</h1>
                    <div className="mb-4">
                        <label className="block text-black text-sm font-bold mb-2" htmlFor="email">
                            Email Address
                        </label>
                        <div className="relative">
                            <input
                                type="email"
                                placeholder="Enter Your Email"
                                {...register("email", { required: true })}
                                className="input input-bordered pl-10 w-full"
                            />
                            <FaEnvelope className="absolute top-1/2 left-3 transform -translate-y-1/2 h-6 text-primary"></FaEnvelope>
                        </div>
                        {errors.email && <span className="text-red-500">This field is required</span>}
                    </div>
                    <div className="mb-6">
                        <label className="block text-black text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <div className="relative">
                            <input
                                type={showLoginPass ? "text" : "password"}
                                placeholder="Enter Your Password"
                                {...register("password", { required: true })}
                                className="input input-bordered pl-10 w-full"
                            />
                            <span onClick={() => setShowLoginPass(!showLoginPass)} className="absolute top-7 right-3 transform -translate-y-1/2 h-6 text-xl text-primary">
                                {showLoginPass ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                            </span>
                            <FaLock className="absolute top-1/2 left-3 transform -translate-y-1/2 h-6 text-primary"></FaLock>
                        </div>
                        {errors.password && <span className="text-red-500">This field is required</span>}
                    </div>
                    <div className="mb-6">
                        <button className="btn w-full bg-black hover:bg-primary hover:text-black text-accent border-2 border-primary hover:border-2 hover:border-black text-base">Login</button>
                    </div>
                    <div className="text-center">
                        <p className="text-sm text-white">Don’t have an account yet? <Link to="/register" className="font-bold text-black">Sign Up</Link></p>
                    </div>
                </form>
                <SocialLogin />
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;
