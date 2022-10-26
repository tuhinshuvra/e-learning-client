import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../layout/Main';
import Blog from '../Blog/Blog';
import Home from '../Home/Home';
import ErrorPage from '../ErrorPage/ErrorPage';
import Login from '../Login/Login';
import Register from '../Register/Register';
import TermsAndConditions from '../TermsAndConditions/TermsAndConditions';
import UserProfile from '../UserProfile/UserProfile';
import PrivateRoute from './PrivateRoute';
import CourseSummary from '../Courses/CourseSummary';
import CourseDetails from '../CourseDetails/CourseDetails';
import CheckOut from '../CheckOut/CheckOut';


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>, children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://brain-food-server.vercel.app/courses'),
            },
            {
                path: '/courses/:id',
                element: <CourseDetails></CourseDetails>,
                loader: ({ params }) => fetch(`https://brain-food-server.vercel.app/courses/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>
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
                path: '/profile',
                element: <PrivateRoute> <UserProfile /></PrivateRoute>
            },
            {
                path: '/checkout',
                element: <PrivateRoute> <CheckOut></CheckOut></PrivateRoute>
            },
            {
                path: '/terms',
                element: <TermsAndConditions></TermsAndConditions>
            },
            {
                path: "*", element: <ErrorPage></ErrorPage>
            },
        ]
    }
])