import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
    margin-top: 20px;
    flex-wrap: wrap;
    
    @media (max-width: 600px){
        flex-direction: column;
        align-items: center;
    }
`;

export const Input = styled.input`
    width: 100%;
    max-width: 450px;
    border: 0;
    outline: none;
    padding: 16px;
    box-sizing: border-box;
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background: #e50914;
    color: #fff;
    border: none;
    font-size: 20px;
    cursor: pointer;

    img {
        margin-left: 10px;
        width: 24px;

        @media (max-width: 900px){
            padding: 12px;
            padding-top: 17px;
            width: 10px;
        }
    }

    @media (max-width: 650px){
        margin-top: 10px;
    }
`;

export const Text = styled.p`
    font-size: 1.2rem;
    text-align: center;
    padding-bottom: 20px;
`;

