import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../layout/Main';
import Blog from '../Blog/Blog';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Register from '../Register/Register';
import TermsAndConditions from '../TermsAndConditions/TermsAndConditions';
import UserProfile from '../UserProfile/UserProfile';


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>, children: [
            {
                path: '/',
                element: <Home></Home>
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
                element: <UserProfile></UserProfile>
            },
            {
                path: '/terms',
                element: <TermsAndConditions></TermsAndConditions>
            },
        ]
    }
])