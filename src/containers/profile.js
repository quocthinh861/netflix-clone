import React from 'react';
import Header from '../components/header';
import Profile from '../components/profile';
import logo from '../logo.svg';

export function SelectProfileContainer({user, setProfile}){
    return (
        <>
            <Header bg={false}>
                    <Header.Frame>
                        <Header.Logo to='/' src={logo} />
                    </Header.Frame>
            </Header>
            <Profile>
                <Profile.Title>Ai đang xem?</Profile.Title>
                <Profile.List>
                    <Profile.User onClick={() => setProfile({displayName: user.displayName})}>
                        <Profile.Picture src='images/home/1.png'></Profile.Picture>
                        <Profile.Name>{user.displayName}</Profile.Name>
                    </Profile.User>
                </Profile.List>
            </Profile>
        </>
    )
}