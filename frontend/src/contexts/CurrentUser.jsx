import { createContext, useState, useEffect } from "react";

export const CurrentUser = createContext();

//context
function CurrentUserProvider({ children }) {

    //current user variable 
    const [currentUser, setCurrentUser] = useState(null);
    window.setCurrentUser = setCurrentUser;

    //attempt to get current user using JWT
    useEffect(() => {
        async function getLoggedInUser() {
            const response = await fetch("https://milestone-project-3-backend.azurewebsites.net/authentication/profile", {
                headers: {
                    //testing
                    "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2JmNTNkN2RkZjJkYTE0MzAwMGEwYTYiLCJpYXQiOjE2NzM0OTUxMzF9.17U_2XBt-MJxSCGNARNWbF-SNWaPVsUQs4pSb3CJdA4`
                }
            });

            const user = await response.json();
            setCurrentUser(user);
        }
        getLoggedInUser();
        //only run once
    }, []);

    //return current user value
    return (
        <CurrentUser.Provider value ={{currentUser, setCurrentUser}}>
            {children}
        </CurrentUser.Provider>
    )
}

export default CurrentUserProvider;