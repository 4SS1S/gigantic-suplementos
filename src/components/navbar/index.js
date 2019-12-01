import React, { useState, useEffect } from 'react';
import {
    FaSearch,
    FaUser,
    FaHeart,
    FaShoppingCart,
    FaBars,
    FaPhone,
    FaWhatsapp
} from 'react-icons/fa';

import {
    Nav,
    Top,
    Bar,
    Search,
    Group,
    HamburgerButton
} from './styles';

import Logo from '../../assets/images/logo-transparent.png';


export default function Navbar(){

    const [showMenu, setShowMenu] = useState(false);
    const [showNums, setShowNums] = useState(false);
    const [scroll, setScroll] = useState(0);
    const [click, setClick] = useState(null);
    const [userVisible, setUserVisible] = useState(false);
    const [wishlistVisible, setWishlistVisible] = useState(false);
    const [shopVisible, setShopVisible] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll',e => setScroll(window.scrollY));
        window.addEventListener('click',e => setClick(e.target))
    }, []);

    useEffect(() => {
        if(click !== null){
            const elem = click.toString();
            elem.startsWith('<div')
        }
        
    }, [click])

    useEffect(() => {
        console.log(scroll)
    },[scroll]);

    return (
        <Nav>
            <Top scroll={scroll}>
                <span>
                    GIGANTIC SUPLEMENTOS
                </span>
                <div
                    onClick={() => setShowNums(!showNums)}>
                    <button>
                        CONTATO
                    </button>
                    {showNums && (
                        <ul>
                            <li>
                                <a href="tel:+55513072-7309">
                                    <FaPhone /> (51) 3072-7309
                                </a>
                            </li>
                            <li>
                                <a href="http://">
                                    <FaWhatsapp /> (51) 99400-3819
                                </a>
                            </li>
                        </ul>
                    )}
                </div>
            </Top>
            <Bar>
                <a href="/">
                    <img
                        src={Logo}
                        alt="gigantic-suplementos" />
                </a>
                <Search>
                    <input type="text"/>
                    <button>
                        <FaSearch />
                    </button>
                </Search>

                <HamburgerButton
                    onClick={() => setShowMenu(!showMenu)}>
                    <FaBars />
                </HamburgerButton>

                <Group visibility={showMenu}>
                    <li>
                        <button
                            onClick={() => {
                                setUserVisible(!userVisible);
                                setWishlistVisible(false);
                                setShopVisible(false);
                            }}>
                            <FaUser /> <span>
                                Fazer Login
                            </span>
                        </button>
                        {userVisible && (
                            <ul>
                                <li>
                                    Entrar
                                </li>
                                <li>
                                    Perguntas
                                </li>
                                <li>
                                    SAC
                                </li>
                                <li>
                                    Ajuda
                                </li>
                            </ul>
                        )}
                    </li>
                    <li>
                        <button onClick={() => {
                                setWishlistVisible(!wishlistVisible);
                                setUserVisible(false);
                                setShopVisible(false);
                            }}>
                            <FaHeart /> <span>
                                Lista de desejos
                            </span>
                        </button>
                        {wishlistVisible && (
                            <ul>
                                <li>
                                    Sua lista de desejos está vazia
                                </li>
                            </ul>
                        )}
                    </li>
                    <li>
                        <button
                            onClick={() => {
                                setShopVisible(!shopVisible);
                                setUserVisible(false);
                                setWishlistVisible(false);
                            }}>
                            <FaShoppingCart /> <span>
                                Meu carrinho
                            </span>
                        </button>
                        {shopVisible && (
                            <ul>
                                <li>
                                    Seu carrinho está vazio
                                </li>
                            </ul>
                        )}
                    </li>
                </Group>
            </Bar>
        </Nav>
    )
}