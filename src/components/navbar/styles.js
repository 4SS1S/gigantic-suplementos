import styled from 'styled-components';

export const Nav = styled.nav`
    position: fixed;
    display: flex;
    flex-direction: column;
    width: 100%;
    top: 0;
    z-index: 2;
    box-shadow: 0 0 20px 5px #000;
    svg {
        font-size: 18px;
    }
`;

export const Top = styled.div`
    height: ${props => props.scroll <= 50 ? 40 : 20}px;
    display: ${props => props.top <= 40 ? 'none' : 'block'};
    background-color: #3D3D3D;
    color: #fff;
    display: flex;
    flex-wrap: wrap;
    flex-grow: 1;
    justify-content: space-between;
    z-index: 2;
    transition: .3s;

    margin-bottom: auto;

    * {
        margin-top: ${props => props.scroll <= 50 ? 8 : 0}px;
        transition: .3s;
        color: #fff;
    }

    span {
        margin-left: 25px;
        font-size: ${props => props.scroll <= 50 ? 15 : 10}px;
    }

    div {
        float: right;
        margin-right: 25px;
        margin-top: 5px;
        background-color: #C4C4C450;
        cursor: pointer;
        position: relative;

        button {
            background-color: transparent;
            outline: none;
            border: none;
            width: 100%;
            height: 10%;
            display: flex;
            padding: ${props => props.scroll <= 50 ? 5 : 3}px 25px;
            cursor: pointer;
            font-size: ${props => props.scroll <= 50 ? 15 : 10}px;
            margin-top: ${props => props.scroll <= 50 ? 3 : -3}px;
        }
    }

    ul {
        background-color: #3D3D3D;
        width: 200%;
        margin: 0;
        padding: 0;
        position: absolute;
        left: 50%;
        top: 100%;
        transform: translate(-50%,0);
        z-index: 3;
        list-style: none;

        li {
            padding: 10px  12px;

            :hover {
                background-color: #F58634;
            }

            a {
                text-decoration: none;
                color: #fff;
            }
        }
    }
`;

export const Bar = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-grow: 1;
    align-items: center;
    justify-content: space-between;
    margin: 0;
    background-color: #F58634;
    

    img {
        width: 40%;
        padding: 10px;
    }
`;

export const Search = styled.div`
    background-color: #fff;
    border-radius: 50px;
    height: 40px;
    width: 30%;
    display: flex;
    flex-flow: row;
    flex-grow: 5;
    flex-direction: row;
    overflow: hidden;

    @media (max-width: 700px) {
        display: none;
    }

    
    button {
        width: 9%;
        outline: none;
        border: none;
        background-color: transparent;
    }

    input {
        width: 100%;
        outline: none;
        border: none;
        padding: 15px;
    }
`;

export const Group = styled.ul`

    list-style: none;
    height: 100%;
    margin: 0;
    z-index: 1;

    @media (min-width: 700px) {
        display: flex;

        button {
            background-color: transparent;
            align-items: center;
            justify-items: center;

            span {
                display: none;
            }
        }
    }

    @media (max-width: 700px) {
        display: ${props => props.visibility ? 'row' : 'none'};
        position: absolute;
        top: 100%;
        width: 110%;
        height: 200px;
        left: 46%;
        transform: translate(-50%,0);

        button {
            background-color: #F58634;
            width: 100%;
            
            z-index: 100;
        }
    }

    button {
        outline: none;
        border: none;
        cursor: pointer;
        display: block;
        padding: 25px 16px;
        transition: .3s;

        :hover {
            background-color: #eb2437;
            color: #fff;
        }

        svg {
            font-size: 18px;
        }
    }

    li {
        position: relative;

        ul {
            @media (max-width: 700px) {
                position: relative;
                width: 100%;
                text-align: center;
                background-color: #F58634;
            }
            
            @media (min-width: 700px) {
                position: absolute;
                width: 500%;
                left: -50%;
                transform: translate(-50%,0);
                background-color: #fff; 

                ::before {
                    content: '';
                    position: absolute;
                    width: 20px;
                    height: 20px;
                    right: 50px;
                    top: 0;
                    transform: translate(-50%,-50%) rotate(45deg);
                    background-color: #fff;
                    z-index: -1;
                }
            }
            border-radius: 5px;
            z-index: 3;


            li {
                padding: 5px 12px;
                list-style: none;
                border-radius: 5px;
                background-color: none;
            }
        }
    }
`;

export const HamburgerButton = styled.button`
    outline: none;
    border: none;
    cursor: pointer;
    background-color: transparent;
    margin-right: 15px; 
    padding: 25px 16px;

    @media (min-width: 700px) {
        display: none;
    }
`;
