import React from 'react';
import {Container, Title, List, Name, User, Picture} from './styles/profile'
export default function Profile({children, ...resProps}){
    return <Container {...resProps}>{children}</Container>
}


Profile.Title = ({children, ...resProps}) => {
    return <Title {...resProps}>{children}</Title>;
}

Profile.List = ({children, ...resProps}) => {
    return <List {...resProps}>{children}</List>;
}

Profile.User = ({children, ...resProps}) => {
    return <User {...resProps}>{children}</User>;
}

Profile.Picture = ({children, ...resProps}) => {
    return <Picture {...resProps}>{children}</Picture>;
}

Profile.Name = ({children, ...resProps}) => {
    return <Name {...resProps}>{children}</Name>;
}
