import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedAdminRoute(props){
    // Check if user is logged in and if the role is admin
    const userToken = localStorage.getItem('userToken');
    const isAdmin = localStorage.getItem('isAdmin'); // Assuming you set isAdmin when the user logs in

    if(userToken !== null && isAdmin === 'true'){
        return props.children;
    } else {
        // Redirect to login if not logged in or not an admin
        return <Navigate to={'/login'}/>
    }
}