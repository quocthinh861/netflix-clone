import React from 'react';
import {Container, Row, Link, Column, Title,  Text, Break} from './styles/footer';
export const Footer = (props) => {
    const {children, ...resProps} = props;
    return (
        <Container {...resProps}>{children}</Container>
    )
}


Footer.Row = (props) => {
    const {children, ...resProps} = props;
    return <Row {...resProps}>{children}</Row>
}

Footer.Column = (props) => {
    const {children, ...resProps} = props;
    return <Column {...resProps}>{children}</Column>
}

Footer.Link = (props) => {
    const {children, ...resProps} = props;
    return <Link {...resProps}>{children}</Link>
}

Footer.Title = (props) => {
    const {children, ...resProps} = props;
    return <Title {...resProps}>{children}</Title>
}

Footer.Text = (props) => {
    const {children, ...resProps} = props;
    return <Text {...resProps}>{children}</Text>
}

Footer.Break = (props) => {
    const {children, ...resProps} = props;
    return <Break {...resProps}>{children}</Break>
}