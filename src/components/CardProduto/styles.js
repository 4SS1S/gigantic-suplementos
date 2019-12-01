import styled from 'styled-components';

export const CardComponent = styled.div`
    width: 230px;
    display: -ms-flexbox;
    display: flex;
    flex-direction: column;
    background-color: rgba(245,134,52,.02);
    color: #ccc;
    border-radius: 10px;
    padding: 0.76em 1.05em;
    text-align: center;
    justify-content: space-around;
    margin: 8px;
    transition: .6s;

    :hover{
        border: 1px solid #f58634;
        box-shadow: 0 0 10px #f58634;

        a {
            display: block;
        }
    }

    * {
        transition: .6s;
    }

    h3 {
        color: #fff;
    }

    img {
        width: 50%;
    }

    .ler-mais {
        color: #f58634;
    }

    span {
        font-size: 12px;
    }
`;

export const CardBottom = styled.div`
    margin-top: auto;
`;

export const BuyButton = styled.a`
    display: block;
    padding: 1.06em 1.16em;
    background-color: #2AB523;
    color: #fff;
    font-weight: bold;
    border-radius: 10px;
    text-decoration: none;
    margin-top: 15px;
    cursor: pointer;
`;