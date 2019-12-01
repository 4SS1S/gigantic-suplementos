import styled from 'styled-components';

export const HomeComponent = styled.div`
    margin-top: 110px;
`;

export const CarouselComponent = styled.div`

    padding: 0;

    img {
        width: 100%;
    }
`;

export const CategoriasComponent = styled.ul`
    display: flex;
    display: -ms-flexbox;
    justify-content: space-around;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;

    list-style: none;
    background-color: #F58634;
    margin: 0;
    padding: 0;
    margin-top: -5px;
    position: relative;
    z-index: 0;

    .hidden {
        @media (max-width: 719px) {
            display: none;
        }
    }

    .small {
        @media (max-width: 545px) {
            display: none;
        }
    }
    
    button {
        background-color: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        position: relative;
        overflow: hidden;
        padding: 15px 8px;
        z-index: 0;
        width: 100%;

        ::before {
            content: '';
            background-color: #eb2437;
            width: 150%;
            height: 150%;
            left: 50%;
            top: -150%;
            transform: translate(-50%,-50%);
            position: absolute;
            transition: .6s;
        }

        :hover {
            ::before {
                top: 160%;
            }
        }

    }
`;