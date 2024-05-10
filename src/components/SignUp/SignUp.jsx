import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import SocialLogin from "../SocialLogin/SocialLogin";
import useAuth from "../../Hooks/useAuth";
import { FaEnvelope, FaEye, FaEyeSlash, FaLink, FaLock, FaUser } from "react-icons/fa";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import backgroundImg from '../../assets/images/bg_login_signup.png';

const SignUp = () => {
    const { createUser, updateUserProfile } = useAuth();
    const [signUpError, setSignUpError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPass, setShowPass] = useState(false);

    const {
        signUp,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate();
    const from = '/';

    const onSubmit = (data) => {
        const { email, password, fullname, imageURL } = data;

        setSignUpError('');
        setSuccess('');

        if (password.length < 6 || !/[A-Z]/.test(password) || !/[a-z]/.test(password)) {
            setRegisterError('Password should be at least 6 characters and contain at least one uppercase letter and one lowercase letter');
            return;
        }

        createUser(email, password)
            .then(() => {
                updateUserProfile(fullname, imageURL)
                    .then(() => {
                        setSuccess('User created successfully');
                        setTimeout(() => {
                            navigate(from);
                        }, 1000);
                    });
            })
            .catch((error) => {
                console.error(error);
                setSignUpError('Email already exists');
            });
    };

    return (
        <div className="font-roboto">
            <Helmet>
                <title>Harvest Hub | Register</title>
            </Helmet>

            <div className="hero" style={{ backgroundImage: `url(${backgroundImg})` }}>
                <div className="hero-content mt-6">
                    <div className="card shrink-0 mb-6 md:w-[500px] lg:w-[500px] border-2 bg-gray-500 border-none">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                            <h1 className="flex justify-center font-bold text-xl lg:text-4xl text-[#322760]">Sign Up</h1>

                            {signUpError && (
                                <p className="text-red-500 flex justify-center text-base font-sedan p-1">{signUpError}</p>
                            )}

                            {success && (
                                <p className="text-green-500 flex justify-center text-xl p-6">{success}</p>
                            )}

                            <div className="form-control">
                                <label className="label text-[#322760]">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <div className="relative">
                                    <input type="text" placeholder="Enter Your Full Name" {...signUp("fullname", { required: true })} className="input input-bordered pl-10 w-full" />
                                    <FaUser className="absolute top-1/2 left-3 transform -translate-y-1/2 h-6 text-[#c54899]"></FaUser>
                                </div>
                                {errors.fullname && <span className="text-red-500 mt-2">This field is required</span>}
                            </div>

                            <div className="form-control">
                                <label className="label text-[#322760]">
                                    <span className="label-text">Email Address</span>
                                </label>
                                <div className="relative">
                                    <input type="email" placeholder="Enter Your Email" {...signUp("email", { required: true })} className="input input-bordered pl-10 w-full" />
                                    <FaEnvelope className="absolute top-1/2 left-3 transform -translate-y-1/2 h-6 text-[#c54899]"></FaEnvelope>
                                </div>
                                {errors.email && <span className="text-red-500 mt-2">This field is required</span>}
                            </div>

                            <div className="form-control">
                                <label className="label text-[#322760]">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <div className="relative">
                                    <input type="text" placeholder="Enter Photo URL" {...signUp("imageURL", { required: true })} className="input input-bordered pl-10 w-full" />
                                    <FaLink className="absolute top-1/2 left-3 transform -translate-y-1/2 h-6 text-[#c54899]"></FaLink>
                                </div>
                                {errors.imageURL && <span className="text-red-500 mt-2">This field is required</span>}
                            </div>

                            <div className="form-control">
                                <label className="label text-[#322760]">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className="relative">
                                    <input type={showPass ? "text" : "password"} placeholder="Enter Your Password" {...signUp("password", { required: true })} className="input input-bordered pl-10 w-full" />
                                    <span onClick={() => setShowPass(!showPass)} className="absolute top-7 right-3 transform -translate-y-1/2 h-6 text-xl text-[#c54899]">
                                        {showPass ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                                    </span>
                                    <FaLock className="absolute top-1/2 left-3 transform -translate-y-1/2 h-6 text-[#c54899]"></FaLock>
                                </div>
                                {errors.password && <span className="text-red-500 mt-2">This field is required</span>}
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn bg-[#322760] hover:bg-[#c54899] border-none text-white text-xl ">Register</button>
                            </div>

                            <div className="text-center mt-2">
                                <p className="text-sm text-white">Already have an account? <Link to="/login" className="font-medium text-[#322760]">Please Login</Link></p>
                            </div>
                            <SocialLogin></SocialLogin>
                        </form>
                        <ToastContainer position="bottom-center" autoClose={3000} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
