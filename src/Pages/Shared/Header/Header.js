import React, { useContext, useState } from 'react';
import { BsXLg } from "react-icons/bs";
import { GoListUnordered } from "react-icons/go";
import { Link, NavLink } from 'react-router-dom';
// import logo from '../../256-2562043_vector-logo-design-free-online-education-logo-png.png'
// import { AuthContext } from '../../AuthProvider/AuthProvider';

const Header = () => {
    // const { user, logout } = useContext();
    const logout = '';
    const user = '';
    const [open, setOpen] = useState(false);
    const handleLogOut = () => {
        logout()
            .then(() => { })
            .catch((e) => {
                console.error(e);
            })
    }
    return (
        <div className='grid lg:grid-cols-2 grid-cols-1 justify-between items-center lg:px-20 py-5 relative bg-slate-50 z-10'>
            <div className='flex lg:px-0 px-4 justify-between '>
                <div className='flex items-center'>
                    <img src="" alt="" className='w-[80px]' />
                    <Link to='/'><h1 className='lg:text-5xl text-3xl font-semibold NavTitle text-'>Creative <span className='text-violet-700'>Studio</span></h1></Link>
                </div>
                <button className='lg:hidden text-3xl' onClick={() => setOpen(!open)}>{open ? <BsXLg></BsXLg> : <GoListUnordered></GoListUnordered>}</button>
            </div>
            <div className={`text-2xl  font-medium absolute lg:static duration-1000 ease-in-out ${open ? 'top-[88px]' : 'top-[-300px]'} w-full  bg-slate-100 lg:bg-transparent lg:py-0 py-3 z-[-1]`}>
                <ul className='lg:flex lg:justify-end text-center items-center lg:space-x-10'>
                    <li><NavLink to='/home' className={({ isActive }) => isActive ? 'border-b-2 border-yellow-400 duration-200' : 'text-black hover:text-yellow-400 duration-500'}>Home</NavLink></li>

                    <li><NavLink to='/courses' className={({ isActive }) => isActive ? 'border-b-2 border-yellow-400 duration-200' : 'text-black hover:text-yellow-400 duration-500'}>Courses</NavLink></li>

                    <li><NavLink to='/faq' className={({ isActive }) => isActive ? 'border-b-2 border-yellow-400 duration-200' : 'text-black hover:text-yellow-400 duration-500'}>FAQ</NavLink></li>

                    <li><NavLink to='/blog' className={({ isActive }) => isActive ? 'border-b-2 border-yellow-400 duration-200' : 'text-black hover:text-yellow-400 duration-500'}>Blog</NavLink></li>
                    {
                        user?.uid ?
                            <>
                                <button onClick={handleLogOut} className='border-2 rounded-3xl px-5 py-2 hover:bg-slate-400 hover:text-white'>Log out</button>
                                <img src={user?.photoURL} className='h-[50px] w-[50px] rounded-full cursor-pointer' alt="" title={user?.displayName} />
                            </> :
                            <div className='font-normal'>
                                <Link to={'/login'}>
                                    <button className='mr-3 px-5 py-2 bg-blue-600 rounded-3xl text-white'>Login</button>
                                </Link>
                                <Link to={'/signup'}>
                                    <button className='border-2 rounded-3xl px-5 py-2 hover:bg-slate-400 hover:text-white'>Sign Up</button>
                                </Link>
                            </div>
                    }

                </ul>
            </div>
        </div>
    );
};

export default Header;