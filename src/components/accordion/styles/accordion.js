import styled from 'styled-components';


export const Container = styled.div`
    border-bottom: 8px solid #222;
`;

export const Inner = styled.div`
    display: flex;
    flex-direction: column;
    padding: 70px 45px;
    width: 60%;
    margin: auto;
`;

export const Title = styled.div`
    font-size: 3.125rem;
    line-height: 1.1;
    margin-bottom: 2rem;
    margin-top: 0;
    text-align: center;

    @media(max-width: 600px){
        font-size: 2.5rem;
    }
`;

export const Frame = styled.div`
    margin-bottom: 40px;
`;

export const Item = styled.div`
    margin-bottom: 10px;
    background: #303030;
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    margin-bottom: 1px;
    font-size: 20px;
    font-weight: normal;
    padding: 0.8rem 1.2rem;
    align-items: center;

    img {
        width: 24px;

        @media (max-width: 600px){
            width: 16px;
        }
    }


`;

export const Body = styled.div`
    font-size: 18px;
    line-height: 1.3;
    padding: 0.8rem 1.2rem;

    @media (max-width: 600px){
        font-size: 16px;
        line-height: 22px;
    }
`;