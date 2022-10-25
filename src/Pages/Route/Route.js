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


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>, children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/courses'),
            },
            {
                path: '/courses/:id',
                element: <CourseSummary></CourseSummary>,
                loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`)
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
                path: '/terms',
                element: <TermsAndConditions></TermsAndConditions>
            },
            {
                path: "*", element: <ErrorPage></ErrorPage>
            },
        ]
    }
])