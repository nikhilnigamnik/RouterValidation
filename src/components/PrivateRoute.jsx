import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const PrivateRoute = ({isUserLoggedIn,children}) => {

    if(isUserLoggedIn) {
        return children;
    }else {
        return <Navigate to="/login"/>
    }
};

export default PrivateRoute;
