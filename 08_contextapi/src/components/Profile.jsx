import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

function Profile() {
    const { user } = useContext(UserContext);

    // If user is not logged in, show a message
    if (!user) return <div>Please login</div>;

    // If user is logged in, show the welcome message
    return <div>Welcome {user.username}</div>;
}

export default Profile;
