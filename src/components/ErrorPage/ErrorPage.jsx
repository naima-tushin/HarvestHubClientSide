import { Link } from 'react-router-dom';
import error from '../../assets/Error.json'
import Lottie from "lottie-react";

const ErrorPage = () => {
    return (
        <div className='flex flex-col items-center justify-center h-full'>
    <div className='text-center mt-28 md:mt-20 lg:mt-36 text-slate-400'>
        <h1 className='text-2xl'>UH-Oh</h1>
        <p>The page you are looking for may have been removed, deleted or possibly never existed...</p>
    </div>
    <div className='mt-10'>
        <Lottie animationData={error} className='w-[200px] md:w-[250px] lg:w-[300px] justify-center'></Lottie>
    </div>
    <div className='mt-6 md:mt-8 lg:mt-12'>
        <Link to='/'>
            <button className='border-2 border-accent rounded text-xl p-2 bg-black text-accent hover:bg-accent hover:text-black hover:border-black'>Home</button>
        </Link>
    </div>
</div>

    );
};

export default ErrorPage;