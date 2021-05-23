import styled from 'styled-components';

export const Title = styled.p `
    font-size: 24px;
    color: #e5e5e5;
    font-weight: bold;
    margin-left: 56px;
    margin-right: 56px;
    margin-top: 0;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;
    box-sizing: border-box;

     > ${Title}{
        @media (max-width: 1000px)
        {
            margin-left: 30px;
        }
    }

    &:last-of-type {
        margin-bottom: 0;
    }
`;

export const FeatureText = styled.div`
    margin-left: 0;
`;

export const Group = styled.div`
    display: flex;
    flex-direction: ${({ flexDirection }) => (flexDirection === 'row' ? 'row' : 'column')};
    ${props => props.alignItems && `align-items: ${props.alignItems}`};
    ${props => props.margin && `margin: ${props.margin}`};

    & > ${Container}:first-of-type{
        @media (min-width: 1100px){
            margin-top: -150px;
        }
    }
`;

export const SubTitle = styled.p`
    font-size: 12px;
    color: #fff;
    font-weight: bold;
    margin-top: 0;
    margin-bottom: 0;

`;

export const Text = styled.p`
    margin-top: 5px;
    font-size: 10px;
    color: #fff;
    margin-bottom: 0;
    display: none;
`;

export const Feature = styled.div`
    display: flex;
    flex-direction: row;
    position: relative;
    background: url(${props => props.src});
    height: 360px;
    background-position-x: right;
    background-repeat: no-repeat;

    @media (max-width: 1000px) {
        height: auto;
        background-size: auto;

        ${Title} {
            font-size: 20px;
            line-height: 20px;
            margin-bottom: 10px;
        }

        ${FeatureText} {
            font-size: 14px;
        }
    }
`;

export const FeatureTitle = styled(Title)`
    font-size: 25px;
    color: white;
    margin-left: 0;
`;


export const FeatureClose = styled.button`
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

export const Maturity = styled.div`
    background-color: ${props => (props.rating >= 15) ? 'red' : 'green' };
    width: 20px;
    border-radius: 15%;
    padding: 5px;
    text-align: center;
    color: white;
    font-weight: bold;
    margin-right: 10px;
    font-size: 12px;
`;

export const Content = styled.div`
    margin: 56px;
    max-width: 500px;
    @media (max-width: 1000px){
        margin: 30px;
        max-width: none;
    }
`;


export const Entities = styled.div`
    display: flex;
    direction: row;
`;

export const Meta = styled.div`
   position: absolute;
   bottom: 0;
   padding: 10px;
   background: #0000008f;
`;

export const Item = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    margin-right: 5px;
    cursor: pointer;
    background: black;
    &:hover {
        transform: scale(1.1);
        z-index: 1000;
    }

    @media (min-width: 1200px){
        &:hover ${Meta}, &:hover ${Text}, &:hover ${SubTitle} {
            display: block;
            z-index: 100;
        }
    }

    &:first-of-type {
        margin-left: 56px;

        @media (max-width: 1000px) {
          margin-left: 30px;
        }
    }

    &:last-of-type {
        margin-right: 56px;

        @media (max-width: 1000px) {
            margin-right: 30px;
        }
    }
`;


export const Image = styled.img`
    border: none;
    width: 100%;
    max-width: 350px;
    cursor: pointer;
    height: auto;
    padding: 0;
    margin: 0;
`;

