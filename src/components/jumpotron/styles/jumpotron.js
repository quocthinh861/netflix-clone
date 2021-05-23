import styled from 'styled-components';

export const Item = styled.div`
    border-bottom: 8px solid #222;
    padding: 50px 5%;
    overflow: hidden;

`;

export const Inner = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1100px;
    flex-direction: ${props => props.direction};
    width: 100%;
    margin: auto;
    
    @media(max-width: 1000px){
        flex-direction: column;
    }
`; 

export const Container = styled.div`
    
`;
export const Pane = styled.div`
    width: 50%;

    @media (max-width: 900px){
        width: 100%;
        text-align: center;
        padding: 0 1.5rem;
    }
`;
export const Content = styled.h2`
    font-size: 1.625rem;
    font-weight: 400;
    line-height: normal;

    @media(max-width: 900px){
        font-size: 1.25rem;
    }
`;
export const Title = styled.h1`
    font-size: 3.125rem;
    line-height: 1.1;

    @media(max-width: 900px){
        font-size: 2.5rem;
    }
`;
export const Image = styled.img`
    max-width: 100%;
    height: auto;
`;