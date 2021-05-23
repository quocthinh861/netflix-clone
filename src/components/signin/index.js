import React from 'react';
import { Container, Error, Base, Title, Text, TextSmall, Linkk, Input, Submit } from './styles/form';

export function signInForm({ children, ...resProps }) {
    return {children}
}

signInForm.Error = ({children, ...resProps}) => {
    return <Error {...resProps}>{children}</Error>;
};

signInForm.Container = ({children, ...resProps}) => {
    return <Container {...resProps}>{children}</Container>;
};

signInForm.Submit = ({children, ...resProps}) => {
    return <Submit {...resProps}>{children}</Submit>;
};

signInForm.Input = ({children, ...resProps}) => {
    return <Input {...resProps}>{children}</Input>;
};

signInForm.Base = ({children, ...resProps}) => {
    return <Base {...resProps}>{children}</Base>;
};

signInForm.Title = ({children, ...resProps}) => {
    return <Title {...resProps}>{children}</Title>;
};

signInForm.Text = ({children, ...resProps}) => {
    return <Text {...resProps}>{children}</Text>;
};

signInForm.TextSmall = ({children, ...resProps}) => {
    return <TextSmall {...resProps}>{children}</TextSmall>;
};

signInForm.Link = ({children, ...resProps}) => {
    return <Linkk {...resProps}>{children}</Linkk>;
};
