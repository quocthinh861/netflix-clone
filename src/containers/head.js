import React from 'react';
import Header from '../components/header';
import logo from '../logo.svg';

export default function HeaderContainer(props){
    return (
        <Header src='images/home/home-bg.jpg'>
            <Header.Frame>
                <Header.Logo to='/' src={logo}></Header.Logo>
                <Header.Button to='/signin'>Đăng nhập</Header.Button>
            </Header.Frame>
            {
                props.children
            }
        </Header>
        
    )
}   