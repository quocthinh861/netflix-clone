import React from 'react';
import { Title, SubTitle, Container } from './styles/feature';

export default function Feature({children, ...resProps}){
    return (
        <Container {...resProps}>{children}</Container>
    )
}

Feature.Title = ({children, ...resProps}) => {
    return <Title {...resProps}>{children}</Title>
};

Feature.SubTitle = ({children, ...resProps}) => {
    return <SubTitle {...resProps}>{children}</SubTitle>
};