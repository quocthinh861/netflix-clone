import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    padding: 70px 56px;
    padding-bottom: 30px;
    margin: auto;
    max-width: 1000px;
    flex-direction: column;
    @media (max-width: 1000px){
        padding: 50px 5%;
    }
`;
export const Link = styled.a`
    color: #757575;
    display: inline-block;
    margin-bottom: 16px;
    text-decoration: none;
    font-size: 13px;
    text-align: left;
    cursor: pointer;
    
    &:hover {
        font-weight: 600;
    }
`;
export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
`;
export const Column = styled.div`
    display: flex;
    flex-direction: column;
`;
export const Title = styled.p`
    color: #757575;
    cursor: pointer;
    font-size: 1em;
    margin-bottom: 40px;
    font-weight: 700;
`;

export const Text = styled.div`
    font-size: 13px;
    margin-top: 24px;
    color: #757575;
`;

export const Break = styled.div`
    flex-basis: 100%;
    height: 500px;
`;