import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import CourseDetails from "../components/CourseDetails/CourseDetails";
import Courses from "../components/Courses/Courses";
import FAQ from "../components/FAQ/FAQ";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import NoResult from "../components/NoResult/NoResult";
import Register from "../components/Register/Register";
import Checkout from "../components/Checkout/Checkout";
import Main from "../layout/Main";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
           },  
            {
                path: '/faq',
                element: <FAQ></FAQ>
           },  
            {
                path: '/blog',
                element: <Blog></Blog>
            }, 
           
            {
                path: '/courses',
                loader: () => {
                    return fetch('https://b610-lerning-platform-server-side-rahat-ul-anwar.vercel.app/courses'); 
                },
                element: <Courses></Courses>
           },  
            {
                path: '/courses/:id',
                loader: ({params}) => {
                    return fetch(`https://b610-lerning-platform-server-side-rahat-ul-anwar.vercel.app/courses/${params.id}`); 
                },
                element:  <CourseDetails></CourseDetails>
           },  
            {
                path: '/login',
                element: <Login></Login>
           },  
            {
                path: '/register',
                element: <Register></Register>
           },  
            {
                path: '/checkout',
                element: <PrivateRoute><Checkout></Checkout></PrivateRoute>
           },  
            {
                path: '*',
                element: <NoResult></NoResult>
           },  
        ]
    }



])