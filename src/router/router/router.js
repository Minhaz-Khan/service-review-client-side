import { createBrowserRouter } from 'react-router-dom'
import Main from '../../LayOut/Main'
import AddService from '../../Pages/AddService/AddService'
import Blog from '../../Pages/Blog/Blog'
import Home from '../../Pages/Home/Home/Home'
import Login from '../../Pages/Login/Login'
import EditReview from '../../Pages/MyReview/EditReview'
import MyReview from '../../Pages/MyReview/MyReview'
import ServiceDetails from '../../Pages/ServiceDetails/ServiceDetails'
import Services from '../../Pages/Services/Services'
import SignUp from '../../Pages/SignUp/SignUp'
import PrivetRoute from '../../PrivetRoute/PrivetRoute'



export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/services',
                element: <Services></Services>,
                loader: () => fetch('https://service-review-assignment-server-minhaz-khan.vercel.app/services')
            },
            {
                path: '/service/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`https://service-review-assignment-server-minhaz-khan.vercel.app/services/${params.id}`)
            },
            {
                path: '/myreview',
                element: <PrivetRoute><MyReview></MyReview></PrivetRoute>,
            },
            {
                path: '/editreview/:id',
                element: <EditReview></EditReview>,
                loader: ({ params }) => fetch(`https://service-review-assignment-server-minhaz-khan.vercel.app/myreviewDetails/${params.id}`)
            },
            {
                path: '/addservice',
                element: <PrivetRoute><AddService></AddService></PrivetRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    }
])