import { FacebookAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthContext/AuthProvider/AuthProvider';

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

const Login = () => {
    const { LogIn, facebookSignIn, googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.name.value;
        const password = form.password.value;
        LogIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                alert('login succesfully');
                navigate(from, { replace: true })

            })
            .catch(e => { console.error(e) })
    }
    const handleFacebookSignIn = () => {
        facebookSignIn(facebookProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .then(e => console.log(e))
    }
    const handleGoogleSignIn = () => {
        googleSignIn(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(e => console.log(e))
    }
    return (
        <section className="p-6 dark:bg-gray-800 dark:text-gray-100 w-4/12 mx-auto">
            <form onSubmit={handleLogin} className="self-stretch space-y-3 ng-untouched ng-pristine ng-valid">
                <div>
                    <label htmlFor="name" className="text-sm sr-only">Your Email</label>
                    <input name='email' type="email" placeholder="Your Email" className="w-full rounded-md focus:ring focus:ring-violet-400 dark:border-gray-700" />
                </div>
                <div>
                    <label htmlFor="lastname" className="text-sm sr-only">Email address</label>
                    <input name='password' type="password" placeholder="Your Password" className="w-full rounded-md focus:ring focus:ring-violet-400 dark:border-gray-700" />
                </div>
                <button type="submit" className="w-full py-2 font-semibold rounded bg-violet-500 dark:text-gray-900 hover:bg-violet-700 text-gray-100">Login</button>
                <p>New To Creative Studio <Link to={'/signup'} className='hover:text-violet-700 font-semibold'>SignUp</Link> </p>
            </form>
            <div className='flex mt-5 space-x-2 justify-center'>
                <span className='hover:bg-gray-200 rounded p-1' onClick={handleGoogleSignIn}><FaGoogle></FaGoogle></span>
                <span className='hover:bg-gray-200 rounded p-1' onClick={handleFacebookSignIn}><FaFacebook></FaFacebook></span>

            </div>
        </section >
    );
};

export default Login;