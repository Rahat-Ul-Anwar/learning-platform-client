import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import Courses from "../components/Courses/Courses";
import FAQ from "../components/FAQ/FAQ";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import NoResult from "../components/NoResult/NoResult";
import Register from "../components/Register/Register";
import Main from "../layout/Main";


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
                element: <Courses></Courses>
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
                path: '*',
                element: <NoResult></NoResult>
           },  
        ]
    }



])