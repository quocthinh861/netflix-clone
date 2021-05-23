import React, { useState, useEffect, useContext } from 'react';
import { FirebaseContext } from '../context/firebase';

export default function AuthUser(){
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('User')));
    const { firebase } = useContext(FirebaseContext);

    useEffect(() => {
        const observer = firebase.auth().onAuthStateChanged(authUser => {
            if(authUser)
            {
                localStorage.setItem('User', JSON.stringify(authUser))
                setUser(authUser);
            }
            else
            {
                localStorage.removeItem('User');
                setUser(null);
            }
        });
        
        return () => observer();

    }, [])


    return user;
}