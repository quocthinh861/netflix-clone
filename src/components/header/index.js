import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Background, Container, Logo, Button, Feature,
        Text, FeatureCallOut, TextLink, Group, Profile, Picture, Dropdown,
        Search, SearchIcon, SearchInput, PlayButton } from './styles/header';

export default function Header({bg = true, src, children, ...resProps}){
    return bg ? <Background {...resProps} src={src}>{children}</Background> : children;
}

Header.Feature = ({children, ...resProps}) => {
    return <Feature {...resProps}>{children}</Feature>;
};

Header.Text = ({children, ...resProps}) => {
    return <Text {...resProps}>{children}</Text>;
}

Header.Frame = ({children, ...resProps}) => {
    return <Container {...resProps}>{children}</Container>;
}

Header.Logo = ({to, ...resProps}) => {
    return (
        <Link to={to}>
            <Logo {...resProps}></Logo>
        </Link>
    )
}

Header.Button = ({children, ...resProps}) => {
    return <Button {...resProps}>{children}</Button>;
};

Header.FeatureCallOut = ({children, ...resProps}) => {
    return <FeatureCallOut {...resProps}>{children}</FeatureCallOut>
}

Header.TextLink = ({children, ...resProps}) => {
    return <TextLink {...resProps}>{children}</TextLink>
}

Header.Group = ({children, ...resProps}) => {
    return <Group {...resProps}>{children}</Group>
}

Header.Profile = ({children, ...resProps}) => {
    return <Profile {...resProps}>{children}</Profile>
}

Header.Dropdown = ({children, ...resProps}) => {
    return <Dropdown {...resProps}>{children}</Dropdown>
}

Header.Picture = ({children, ...resProps}) => {
    return <Picture {...resProps}>{children}</Picture>
}

Header.Search = function HeaderSearch({search, setSearch, ...resProps}){
    const [searchActive, setSearchActive ] = useState(false);
    return (
        <Search {...resProps}>
            <SearchIcon onClick={() => setSearchActive(!searchActive)}>
                <img src='images/home/search.png' />
            </SearchIcon>
            <SearchInput
                    active={searchActive}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Tìm series và films"></SearchInput>
        </Search>
    )
}


Header.PlayButton = ({children, ...resProps}) => {
    return <PlayButton {...resProps}>{children}</PlayButton>
}