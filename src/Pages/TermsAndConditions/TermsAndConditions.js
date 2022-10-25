import React from 'react';
import { Link } from 'react-router-dom';
import './TermsAndConditions.css';

const TermsAndConditions = () => {
    return (
        <div>
            <h3>This is our Terms and condition</h3>
            <p><Link to="/register" > Go to Register</Link></p>
        </div>
    );
};

export default TermsAndConditions;