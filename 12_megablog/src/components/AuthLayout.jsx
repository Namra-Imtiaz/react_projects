import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function Protected({ children, authentication = true }) {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  const authStatus = useSelector((state) => state.auth.status);

  useEffect(() => {
    if (authentication) {
      // For protected routes, handle redirection based on auth status
      if (authStatus === true) {
        setLoader(false);
      } else if (authStatus === false) {
        navigate('/login');
      }
    } else {
      // If route doesn't require authentication (e.g., signup), don't redirect
      if (authStatus === true) {
        navigate('/');
      } else {
        setLoader(false);
      }
    }
  }, [authStatus, navigate, authentication]);

  return loader ? <h1>Loading...</h1> : <>{children}</>;
}
