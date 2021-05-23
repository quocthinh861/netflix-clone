import styled from 'styled-components';

export const Container = styled.div`

`;

export const Overlay = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    margin: 0 20px;
`;

export const Inner = styled.div`
    position: relative;
    width: 100%;
    max-width: 900px;
    margin: auto;

    video {
        height: 100%;
        width: 100%;
    }

`;


export const Close = styled.button`
    color: white;
    position: absolute;
    right: 20px;
    top: 20px;
    cursor: pointer;
    background-color: transparent;
    border: none;

    img {
        filter: brightness(0) invert(1);
        width: 24px;
    }
`;

export const Button = styled.button`
    background-color: #e50914;
    border-color: #ff0a16;
    width: 115px;
    height: 45px;
    text-transform: uppercase;
    font-weight: bold;
    color: white;
    font-size: 18px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        transform: scale(1.05);
        background-color: #ff0a16;
    }
`;

