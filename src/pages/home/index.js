import React from 'react';
import {
    FaBars
} from 'react-icons/fa';

import Carousel from './carousel';
import Novidades from '../../components/novidades';
import {
    HomeComponent,
    CategoriasComponent
} from './styles';

export default function Home(){

    return(
        <HomeComponent>
            <Carousel />
            
            <CategoriasComponent>
                <li>
                    <button>
                        <FaBars /> Todas categorias
                    </button>
                </li>
                <li>
                    <button className="small">
                        Definição / Emagrecimento
                    </button>
                </li>
                <li>
                    <button className="small">
                        Produtos Naturais
                    </button>
                </li>
                <li>
                    <button className="small">
                        Whey Protein
                    </button>
                </li>
                <li>
                    <button className="hidden">
                        Acessórios
                    </button>
                </li>
                <li>
                    <button className="hidden">
                        Suplementos
                    </button>
                </li>
            </CategoriasComponent>

            <div className="container">
                <Novidades />
            </div>
            
        </HomeComponent>
    );
}