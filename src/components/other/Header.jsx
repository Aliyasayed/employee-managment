import React, { useState, useEffect } from 'react';

const Header = (props) => {
  const [username, setUsername] = useState('');

  useEffect(() => {
    // Check if there's a logged-in user in localStorage
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      try {
        const userData = JSON.parse(loggedInUser);
        // If user is an employee, set the firstName
        if (userData.role === 'employee' && userData.data) {
          setUsername(userData.data.firstName);
        } else if (userData.role === 'admin') {
          setUsername('Admin');
        }
      } catch (error) {
        console.error('Error parsing loggedInUser:', error);
      }
    }
  }, []);

  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '');
    props.changeUser('');
    // Optional: Reload the page after logout
    // window.location.reload();
  };

  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium">
        Hello <br />{' '}
        <span className="text-3xl font-semibold">{username || 'Guest'} 👋</span>
      </h1>
      <button
        onClick={logOutUser}
        className="bg-red-600 text-base font-medium text-white px-5 py-2 rounded-sm"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
