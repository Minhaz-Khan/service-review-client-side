import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { AuthContext } from '../../AuthContext/AuthProvider/AuthProvider';
import UseTitle from '../../UseTitle/UseTitle';


const SignUp = () => {
    UseTitle('SignUp')
    const { Register } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        Register(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                swal("SignUP!", "SignUp successFully", " success")
                navigate('/')


            })
            .catch(e => { console.error(e) })
    }
    return (
        <section className="p-6 dark:bg-gray-800 dark:text-gray-100 lg:w-4/12 mx-auto h-screen">
            <form onSubmit={handleSignUp} className="self-stretch space-y-5 ng-untouched ng-pristine ng-valid border p-10 mt-10">
                <div>
                    <label htmlFor="name" className="text-sm sr-only">Your name</label>
                    <input id="name" name='name' type="text" placeholder="Your Name" className="w-full rounded-md focus:ring focus:ring-violet-400 dark:border-gray-700 bg-gray-100 p-2" />
                </div>
                <div>
                    <label htmlFor="name" className="text-sm sr-only">Your Email</label>
                    <input id="email" name='email' type="email" placeholder="Your Email" className="w-full rounded-md focus:ring focus:ring-violet-400 dark:border-gray-700 bg-gray-100 p-2" />
                </div>
                <div>
                    <label htmlFor="lastname" className="text-sm sr-only">Email address</label>
                    <input id="lastname" name='password' type="password" placeholder="Your Password" className="w-full rounded-md focus:ring focus:ring-violet-400 dark:border-gray-700 bg-gray-100 p-2" />
                </div>
                <button type="submit" className="w-full py-2 font-semibold rounded dark:bg-violet-400 dark:text-gray-900 bg-violet-700 text-gray-100">SignUp</button>
                <p>Already Have an Account please <Link to={'/login'} className='hover:text-violet-700 font-semibold'>Log in</Link></p>
            </form>

        </section >
    );
};

export default SignUp;