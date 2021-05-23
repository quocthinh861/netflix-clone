import React, {useState, useContext, createContext} from 'react';
import {Container, Group, Title, SubTitle, Text, FeatureTitle, FeatureText, FeatureClose, Maturity
, Content, Meta, Entities, Item, Image, Feature} from './styles/card'
export const FeatureContext = createContext();

export default function Card({children, ...resProps}){
    const [showFeature, setShowFeature] = useState(false);
    const [itemFeature, setItemFeature] = useState({});

    return (
        <FeatureContext.Provider value={{showFeature, setShowFeature, itemFeature, setItemFeature}}>
            <Container {...resProps}>{children}</Container>
        </FeatureContext.Provider>
    )
}

Card.Group = ({children, ...resProps}) => {
    return <Group {...resProps}>{children}</Group>
}

Card.Title = ({children, ...resProps}) => {
    return <Title {...resProps}>{children}</Title>
}

Card.SubTitle = ({children, ...resProps}) => {
    return <SubTitle {...resProps}>{children}</SubTitle>
}

Card.Text = ({children, ...resProps}) => {
    return <Text {...resProps}>{children}</Text>
}

Card.Meta = ({children, ...resProps}) => {
    return <Meta {...resProps}>{children}</Meta>
}

Card.Entities = ({children, ...resProps}) => {
    return <Entities {...resProps}>{children}</Entities>
}

Card.Item = function CardItem({item, children, ...resProps}){
    const { setShowFeature, setItemFeature } = useContext(FeatureContext);

    return  <Item onClick={() => {
        setItemFeature(item);
        setShowFeature(true);
    }}
            {...resProps} >
                {children}
            </Item>
}

Card.Image = ({children, ...resProps}) => {
    return <Image {...resProps}>{children}</Image>
}

Card.Feature = function CardFeature({category, children, ... resProps}){
    const {showFeature, itemFeature, setShowFeature} = useContext(FeatureContext);

    return showFeature ? (
        <Feature src={`images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`}>
            <Content>
                <FeatureTitle>{itemFeature.title}</FeatureTitle>
                <FeatureText>{itemFeature.description}</FeatureText>
                <FeatureClose onClick={()=>setShowFeature(false)}>
                    <img src='images/home/close.png'></img>
                </FeatureClose>
            
                <Group margin='30px 0' flexDirection='row' alignItems='center'>
                    <Maturity rating={itemFeature.maturity}>{itemFeature.maturity < 12 ? 'PG' : itemFeature.maturity}</Maturity>
                    <FeatureText fontWeight='bold'>
                    {
                        itemFeature.genre[0].toUpperCase() + itemFeature.genre.slice(1)
                    }
                    </FeatureText>
                </Group>
                {
                    children
                }
            </Content>
        </Feature>
    ) : null
}