// import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import useAuth from "../../Hooks/useAuth";
import { FaEnvelope, FaEye, FaEyeSlash, FaLock } from "react-icons/fa";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
import { Helmet } from "react-helmet-async";
// import backgroundImg from '../../assets/images/bg-login.png';

const Login = () => {

    const { signInUser } = useAuth();

    const [showLoginPass, setShowLoginPass] = useState(false);


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state || '/';


    const onSubmit = (data) => {
        const { email, password } = data;


        signInUser(email, password)
            .then((result) => {
                if (result.user) {
                    toast.success('Login successfully!!!')
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
        <div className="font-roboto">
            
            <Helmet>
                <title>Artycraftyness | Login</title>
            </Helmet>

            <div className="hero" style={{ backgroundImage: `url(${backgroundImg})` }}>
                <div className="hero-content mt-8">
                    <div className="card shrink-0 mb-8 md:w-[500px] lg:w-[500px] border-2 bg-gray-500 border-none">

                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                            <h1 className="flex justify-center font-bold text-xl lg:text-4xl text-[#322760]">Login</h1>

                            <div className="form-control">

                                <label className="label text-[#322760]">
                                    <span className="label-text">Email</span>
                                </label>

                                <div className="relative">
                                    <input type="email" placeholder="Email" {...register("email", { required: true })} className="input input-bordered pl-10 w-full" />
                                    <FaEnvelope className="absolute top-1/2 left-3 transform -translate-y-1/2 h-6 text-[#c54899]"></FaEnvelope>
                                </div>

                                {errors.email && <span className="text-red-500">This field is required</span>}

                            </div>

                            <div className="form-control">

                                <label className="label text-[#322760]">
                                    <span className="label-text">Password</span>
                                </label>

                                <div className="relative">
                                    <input type={showLoginPass ? "text" : "password"}
                                        placeholder="Password"
                                        {...register("password", { required: true })}
                                        className="input input-bordered pl-10 w-full" />
                                    <span onClick={() => setShowLoginPass(!showLoginPass)} className="absolute top-7 right-3 transform -translate-y-1/2 h-6 text-xl text-[#c54899]">
                                        {
                                            showLoginPass ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                        }
                                    </span>
                                    <FaLock className="absolute top-1/2 left-3 transform -translate-y-1/2 h-6 text-[#c54899]"></FaLock>
                                </div>

                                {errors.password && <span className="text-red-500">This field is required</span>}

                            </div>


                            <div className="form-control mt-6">
                                <button className="btn bg-[#322760] text-white border-none text-base hover:bg-[#c54899]">Login</button>
                            </div>


                            <div className="text-center mt-2">
                            <p className="text-sm text-white">Don’t have an account yet? <Link to="/register" className="font-bold text-[#322760]">Sign Up</Link></p>
                        </div>

                            <SocialLogin></SocialLogin>

                        </form>

                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;