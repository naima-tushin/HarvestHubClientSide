import { FaGoogle, FaGithub } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const { googleLogin, githubLogin } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state || "/";

    const handleSocialLogin = socialProvider => {
        socialProvider().then((result) => {
            if (result.user) {
                navigate(from);
            }
        });
    };

    return (
        <div className="font-roboto">

            <div className="flex items-center justify-center gap-4 mt-3">
                <button
                    onClick={() => handleSocialLogin(googleLogin)}
                    className="bg-transparent hover:bg-primary text-black hover:text-black border-black border-2 px-4 py-2 rounded-lg flex items-center justify-center gap-2"
                >
                    <FaGoogle />
                    <span>Sign in with Google</span>
                </button>

                <button
                    onClick={() => handleSocialLogin(githubLogin)}
                    className="bg-black hover:bg-primary hover:text-black hover:border-black text-accent border-2 border-accent px-4 py-2 rounded-lg flex items-center justify-center gap-2"
                >
                    <FaGithub />
                    <span>Sign in with GitHub</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;
