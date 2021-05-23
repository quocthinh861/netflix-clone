import React from 'react';
import { Inner, Container, Pane, Title, Content, Image, Item } from './styles/jumpotron'

export default function Jumbotron(props) {
    const { children, ...restProps} = props;
    return (
            <Item {...restProps}>
                <Inner direction={props.direction}>
                {
                    props.children
                }
                </Inner>
            </Item>
    )
}   

Jumbotron.defaultProps = {
    direction: 'row'
}

Jumbotron.Container = (props) => {
    const {children, ...resProps} = props;
    return <Container {...resProps}>{children}</Container>
}

Jumbotron.Pane = (props) => {
    const {children, ...resProps} = props;
    return <Pane {...resProps}>{children}</Pane>
}

Jumbotron.Title = (props) => {
    const {children, ...resProps} = props;
    return <Title {...resProps}>{children}</Title>
}

Jumbotron.Content = (props) => {
    const {children, ...resProps} = props;
    return <Content {...resProps}>{children}</Content>
}

Jumbotron.Img = (props) => {
    const {children, ...resProps} = props;
    return <Image {...resProps}>{children}</Image>
}