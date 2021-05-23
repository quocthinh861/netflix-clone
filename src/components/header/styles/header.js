import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Background = styled.div`
    display: flex;
    flex-direction: column;
    
    background: url(${props => props.src});
    background-position: top left;
    background-repeat: no-repeat;
    background-size: cover;

    
`;

export const Container = styled.div`
    display: flex;
    padding: 18px 0;
    margin: 0 56px;
    
    a {
        display : flex;
    }

    justify-content: space-between;
    align-items: center;

    @media (max-width: 1000px){
        margin: 0 30px;
    }
`;

export const Logo = styled.img`
    height: 32px;
    width: 108px;
    margin-right: 40px;

    @media (min-width: 1450px)
    {
        height: 45px;
        width: 167px;

    }
`;

export const Button = styled(Link)`
    display: block;
    background-color: #e50914;
    width: 84px;
    height: fit-content;
    color: white;
    font-size: 15px;
    border-box: 3px;
    padding: 8px 17px;
    text-decoration: none;
    cursor: pointer;

    &:hover {
        background-color: #f40612;
    }
`;

export const Feature = styled(Container)`
    padding: 150px 0 500px 0;
    flex-direction: column;
    align-items: normal;
    width: 50%;

    @media (max-width: 1100px) {
        display: none;
    }
`;

export const Text = styled.p`
    color: white;
    font-size: 22px;
    line-height: 1.2;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
    margin: 0;
`;

export const FeatureCallOut = styled.h2`
    color: white;
    font-size: 50px;
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
    margin: 0;
`;

export const TextLink = styled.a`
    color: white;
    text-decoration: none;
    margin-right: 30px;
    font-size: 15px;
    font-weight: ${props => props.active === 'true' ? '900' : 'normal'};
    cursor: pointer;
    box-sizing: border-box;

    &:hover {
        color: #e50914;
    }

    &: last-of-type {
        margin-right: 0;
    }
`;

export const Picture = styled.button`
    background: url(${props => props.src});
    background-size: contain;
    width: 32px;
    height: 32px;
    cursor: pointer;
    border: none;
`;


export const Group = styled.div`
    display: flex;
    align-items: center;
`;

export const Search = styled.div`
    display: flex;
    align-items: center;

    @media (max-width: 700px){
        display: none;
    }
`;

export const SearchIcon = styled.button`
    curson: pointer;
    background-color: transparent;
    border: none;
    transition: width 0.5s;

    img {
        filter: brightness(0) invert(1);
        width: 16px;
    }
`;

export const SearchInput = styled.input`
    background-color: #44444459;
    border: none;
    outline: none;
    color: white;
    height: 30px;
    font-size: 14px;
    transition: all 0.5s ease;
    margin-left: ${props => props.active === true ? '10px' : '0'};
    padding:  ${props => props.active === true ? '0 10px' : '0'};
    opacity:  ${props => props.active === true ? '1' : '0'};
    width:  ${props => props.active === true ? '200px' : '0'};
`;

export const Dropdown = styled.div`
    display: none;
    position: absolute;
    padding: 10px;
    width: 100px;
    top: 32px;
    left: -10px;

    ${Group} {
        margin-bottom: 10px;

        &:last-of-type {
            margin-bottom: 0;
        }

        ${TextLink} {
            cursor: pointer;
        }

        ${Picture} {
            cursor: default;
        }

        button {
            margin-right: 10px;
        }
    }
`;


export const Profile = styled.div`
    display: flex;
    align-items: center;
    margin-left: 20px;
    margin-right: 20px;
    position: relative;
    button {
        cursor: pointer;
    }

    &:hover > ${Dropdown} {
        display: flex;
        flex-direction: column;
    }
`;


export const PlayButton = styled.button`
    background-color: #e6e6e6;
    color: #000;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    max-width: 130px;
    font-size: 20px;
    margin-top: 10px;
    cursor: pointer;
    transition: all 0.5 ease;
    &: hover {
        background: #ff1e1e;
        color: white;
    }
    
`;