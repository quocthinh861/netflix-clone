import React from 'react';
import { Container, Text, Button, Input } from './styles/form';

export default function Form({children, ...resProps}){
    return <Container {...resProps}>{children}</Container>;
}

Form.Input = (props) => {
    return <Input {...props}></Input>
};

Form.Button = ({children, ...resProps}) => {
    return (
        <Button {...resProps}>
            {children}
            <img src='images/home/chevron-right.png'></img>
        </Button>
    )
};

Form.Text = ({children, ...resProps}) => {
    return <Text {...resProps}>{children}</Text>
};  