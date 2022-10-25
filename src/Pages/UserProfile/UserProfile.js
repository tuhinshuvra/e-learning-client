import React, { useContext } from 'react';
import { AuthContext } from '../Authentication/AuthProvider';
import './UserProfile.css';

const UserProfile = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <h2 className=' text-center fw-bolder text-secondary mt-4'>{user?.displayName} Profile</h2>
            <p>This is rahim shake profile Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem esse similique vel cum numquam quia dolorem molestias fuga quidem laudantium. Ex in quia delectus nisi blanditiis porro laudantium accusantium a aspernatur vel? Odit reprehenderit quo libero, expedita nemo voluptas modi voluptatum. Amet itaque architecto dolor tenetur rem doloremque aperiam velit, unde et pariatur molestiae, modi autem laborum consectetur atque eveniet officia ex, incidunt voluptatem magni necessitatibus. Facere aut rem vel suscipit fugiat distinctio maxime! Culpa assumenda tenetur iste quisquam odio earum quam enim, esse repudiandae officia modi, est ducimus consequuntur, molestias itaque? Harum, illum. Ducimus sint in deserunt aspernatur provident.</p>
        </div>
    );
};

export default UserProfile;