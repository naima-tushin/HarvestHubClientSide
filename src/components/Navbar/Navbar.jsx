import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/images/logo1.png';
import useAuth from "../../Hooks/useAuth";

const Navbar = () => {

    const { logout, user } = useAuth();

    const links = <>
        <li><NavLink to="/" className={({ isActive }) =>
            isActive ? 'bg-black text-accent hover:bg-secondary hover:text-black border-2 border-secondary hover:border-2 hover:border-black' : 'text-black hover:bg-secondary hover:text-white'}>Home</NavLink></li>
        <li><NavLink to="/allartcraft" className={({ isActive }) =>
            isActive ? 'bg-black text-accent hover:bg-secondary hover:text-black border-2 border-secondary hover:border-2 hover:border-black' : 'text-black hover:bg-secondary hover:text-black'}>Available Foods</NavLink></li>
        <li><NavLink to="/addcraft" className={({ isActive }) =>
            isActive ? 'bg-black text-accent hover:bg-secondary hover:text-black border-2 border-secondary hover:border-2 hover:border-black' : 'text-black hover:bg-secondary hover:text-black'}>Add Food</NavLink></li>
        <li><NavLink to={`/myartcraft/${user?.email}`} className={({ isActive }) =>
            isActive ? 'bg-black text-accent hover:bg-secondary hover:text-black border-2 border-secondary hover:border-2 hover:border-black' : 'text-black hover:bg-secondary hover:text-black'}>Manage My Foods</NavLink></li>
        <li><NavLink to={`/myartcraft/${user?.email}`} className={({ isActive }) =>
            isActive ? 'bg-black text-accent hover:bg-secondary hover:text-black border-2 border-secondary hover:border-2 hover:border-black' : 'text-black hover:bg-secondary hover:text-black'}>My Food Request</NavLink></li>
    </>

    return (
        <div className="mx-auto">
            <div className="navbar bg-primary shadow-lg">
                <div className="w-1/3">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>

                    <div className="flex-1">
                        <Link to='/'>
                            <img src={logo} alt="" className="lg:ml-6 ml-12 md:ml-60 w-[500px] lg:w-[130px] md:w-[180px] lg:h-24 md:h-28 h-14" /></Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-10 lg:gap-4 lg:mr-24  lg:text-xl">
                        {links}
                    </ul>
                </div>
                <div className="flex-none gap-2">
                    {user?.email ? (
                        <div className="dropdown dropdown-end lg:ml-28 md:ml-[450px]">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar border-2 border-[#322760] hover:border-[#c54899] ml-[100px] lg:ml-[0px] md:ml-[0px]">
                                <div className="w-10 rounded-full">
                                    <img
                                        alt=""
                                        src={user?.photoURL || "https://i.ibb.co/BV0NHW2/pics.jpg"}
                                        title={user?.displayName || 'Not found'}
                                    />
                                </div>
                            </div>

                            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 text-start">
                                <li>
                                    <button className="btn btn-sm btn-ghost">{user?.displayName || 'Not found'}</button>
                                </li>
                                <li>
                                    <button onClick={logout} className="btn btn-sm btn-ghost">Logout</button>
                                </li>
                            </ul>
                        </div>
                    )
                        :
                        <div className="flex gap-2 mr-8">
                            <Link to="/login" className="form-control">
                                <button className="btn bg-black hover:bg-secondary hover:text-black text-accent border-2 border-secondary hover:border-2 hover:border-black ml-24 lg:ml-[10px] md:ml-80 px-2">LOGIN</button>
                            </Link>
                            <Link to="/register" className="form-control">
                                <button className="btn bg-black hover:bg-secondary hover:text-black text-accent border-2 border-secondary hover:border-2 hover:border-black lg:ml-[10px] md:ml-[0px] px-2">SIGN UP</button>
                            </Link>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar; 