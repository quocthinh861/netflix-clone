import React, { useState, useContext, createContext } from 'react';
import { Container, Title, Frame, Item, Header,  Body, Inner} from './styles/accordion';

const ToggleContext = createContext();

export function Accordion({children, ...resProps}){
    return (
        <Container {...resProps}>
            <Inner>{children}</Inner>
        </Container>
    )
}

Accordion.Title = ({children, ...resProps}) => {
    return <Title {...resProps}>{children}</Title>
};

Accordion.Frame = ({children, ...resProps}) => {
    return <Frame {...resProps}>{children}  </Frame>
};

Accordion.Item = function AccordionItem({children, ...resProps}){
    const [toggleShow, setToggleShow] = useState(false);
    return  <ToggleContext.Provider value={[toggleShow, setToggleShow]}>
                <Item {...resProps}>{children}</Item>
            </ToggleContext.Provider>;
};

Accordion.Header = function AccordionHeader({children, ...resProps}){
    const [toggleShow, setToggleShow] = useContext(ToggleContext);
    return  <Header {...resProps} onClick={() => setToggleShow(!toggleShow)}>
                {children}
                {toggleShow ? <img src='images/home/close-slim.png'></img> : <img src='images/home/add.png'></img>}
            </Header>;
};

Accordion.Body = function AccordionBody(props){
    const {children, ...resProps} = props;    
    const [toggleShow] = useContext(ToggleContext);
    return toggleShow ? <Body {...resProps}>{children}</Body> : null;
};