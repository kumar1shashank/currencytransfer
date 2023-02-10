import React from 'react'
import { useEffect } from 'react'
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle
} from '@mui/material'
import { useState }  from 'react'
import { useNavigate } from 'react-router-dom'

export default function ExpireTime() {
    const[ Open,setOpen]=useState(false);

    const navigate = useNavigate();

                        // signout function
    const signOut = () => {
        sessionStorage.setItem('token', '')
        localStorage.clear();
        navigate('/IntroPage')
    }


    // functions check for inactivity and log ot
    const checkForInactivity = () => {
        // Get Expire time from local storage
        const expireTime = localStorage.getItem("expireTime");

        // if Expire time is earlier then now, log out 
        if (expireTime < Date.now()) {
            console.log("expireTime <Date.now");
            setOpen(true);           
        }

    }
    //console.log(Date.now());
    //  function to update expire time
    const updateExpireTime = () => {

        // set expire time to (no of seconds*1000) from now 
        const expireTime = Date.now() + (10* 1000);

        // set Expire time in local storage 
        localStorage.setItem("expireTime", expireTime);

        setOpen(false)
    }

    //use Effect to set intervqal to check for inactivity
    useEffect(() => {

        // Check for inactivity every 5 seconds 
        const interval = setInterval(() => {
            checkForInactivity();
        }, 5000);

        // clear interval on unmount
        return () => clearInterval(interval);

    }, []);

    // update ExpireTime on users activity
    useEffect(() => {

        // set initial Expire Time
        updateExpireTime();

        // set EventListener
        window.addEventListener("click", updateExpireTime);
        window.addEventListener("keypress", updateExpireTime);
        window.addEventListener("scroll", updateExpireTime);
       // window.addEventListener("mousemove", updateExpireTime);

        // cleanup
        return () => {
            window.removeEventListener("click", updateExpireTime);
            window.removeEventListener("keypress", updateExpireTime);
            window.removeEventListener("scroll", updateExpireTime);
         //   window.removeEventListener("mousemove", updateExpireTime);
        }

    }, []);

    if (localStorage.getItem("expireTime") < Date.now()) {
    return (
        <div>
            <div>
                {/* console.log("dialogbox should appear") */}

                <Dialog
                    open={Open}
                    onClose={() => setOpen(false)}
                    aria-labelledby='dialog-title'
                    aria-describedby='dialog-description'>
                    <DialogTitle id='dialog-title'>Are you there?</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Do you want to log out?

                        </DialogContentText>

                    </DialogContent>
                    <DialogActions>
                        <Button autoFocus onClick={updateExpireTime}>cont..</Button>
                        <Button autoFocus onClick={signOut}>signout</Button>
                    </DialogActions>

                </Dialog>



            </div>
        </div>
    )
    }
}
