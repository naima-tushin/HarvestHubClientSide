import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import SocialLogin from "../SocialLogin/SocialLogin";
import useAuth from "../../Hooks/useAuth";
import { FaEnvelope, FaEye, FaEyeSlash, FaLink, FaLock, FaUser } from "react-icons/fa";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import backgroundImg from '../../assets/images/bg_login_signup.jpg';
import logo from '../../assets/images/logo1.png';

const SignUp = () => {
    const { createUser, updateUserProfile, user } = useAuth();
    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPass, setShowPass] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate();
    const from = '/';

    const onSubmit = (data) => {
        const { email, password, fullname, imageURL } = data;

        setRegisterError('');
        setSuccess('');

        if (password.length < 6 || !/[A-Z]/.test(password) || !/[a-z]/.test(password)) {
            setRegisterError('Password should be at least 6 characters and contain at least one uppercase letter and one lowercase letter');
            return;
        }

        createUser(email, password)
            .then(() => {
                updateUserProfile(fullname, imageURL)
                    .then(() => {
                        toast.success("Signed Up Successfully!");
                        setTimeout(() => {
                            navigate(from);
                        }, 1000);
                    });
            })
            .catch((error) => {
                console.error(error);
                setRegisterError('Email already exists');
            });
    };

    return (
        <div className="font-roboto min-h-screen flex justify-center items-center" style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.3)), url(${backgroundImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <Helmet>
                <title>Harvest Hub | Register</title>
            </Helmet>
            <div className="lg:w-[40%] my-10">
                <form onSubmit={handleSubmit(onSubmit)} className="bg-secondary shadow-md rounded px-4 lg:px-8 pt-6 pb-8 mb-4">
                <div className="flex justify-center mb-2">
                        <img className="w-1/5" src={logo} alt="" />
                    </div>
                    <h1 className="text-2xl mb-6 text-center font-bold">Sign Up</h1>
                    {registerError && <p className="text-red-500 mb-4 text-center">{registerError}</p>}
                    {success && <p className="text-green-500 mb-4 text-center">{success}</p>}
                    <div className="lg:flex md:flex justify-between">
                    <div>
                    <div className="mb-4">
                        <label className="block text-black text-sm font-bold mb-2" htmlFor="fullname">
                            Full Name
                        </label>
                        <div className="relative">
                            <input type="text" placeholder="Enter Your Full Name" {...register("fullname", { required: true })} className="input input-bordered pl-10 w-full" />
                            <FaUser className="absolute top-1/2 left-3 transform -translate-y-1/2 h-6 text-primary"></FaUser>
                        </div>
                        {errors.fullname && <span className="text-red-500">This field is required</span>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-black text-sm font-bold mb-2" htmlFor="email">
                            Email Address
                        </label>
                        <div className="relative">
                            <input type="email" placeholder="Enter Your Email" {...register("email", { required: true })} className="input input-bordered pl-10 w-full" />
                            <FaEnvelope className="absolute top-1/2 left-3 transform -translate-y-1/2 h-6 text-primary"></FaEnvelope>
                        </div>
                        {errors.email && <span className="text-red-500">This field is required</span>}
                    </div>
                    </div>
                    <div>
                    <div className="mb-4">
                        <label className="block text-black text-sm font-bold mb-2" htmlFor="imageURL">
                            Photo URL
                        </label>
                        <div className="relative">
                            <input type="text" placeholder="Enter Photo URL" {...register("imageURL", { required: true })} className="input input-bordered pl-10 w-full" />
                            <FaLink className="absolute top-1/2 left-3 transform -translate-y-1/2 h-6 text-primary"></FaLink>
                        </div>
                        {errors.imageURL && <span className="text-red-500">This field is required</span>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-black text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <div className="relative">
                            <input type={showPass ? "text" : "password"} placeholder="Enter Your Password" {...register("password", { required: true })} className="input input-bordered pl-10 w-full" />
                            <span onClick={() => setShowPass(!showPass)} className="absolute top-7 right-3 transform -translate-y-1/2 h-6 text-xl text-primary">
                                {showPass ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                            </span>
                            <FaLock className="absolute top-1/2 left-3 transform -translate-y-1/2 h-6 text-primary"></FaLock>
                        </div>
                        {errors.password && <span className="text-red-500">This field is required</span>}
                    </div>
                    </div>
                    </div>
                    <div className="mb-6">
                        <button className="btn w-full bg-black hover:bg-primary hover:text-black text-accent border-2 border-primary hover:border-2 hover:border-black text-base">Sign Up</button>
                    </div>
                    <div className="text-center">
                        <p className="text-sm text-white">Already have an account? <Link to="/login" className="font-bold text-black">Please Login</Link></p>
                    </div>
                </form>
                <SocialLogin />
            </div>
            <ToastContainer />
        </div>
    );
};

export default SignUp;
