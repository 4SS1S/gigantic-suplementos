import React from 'react';

import CardProduto from '../CardProduto';
import {
    CarouselComponent
} from './styles';

export default function CarouselProdutos({list}){

    return(
        <CarouselComponent>
            {list.map(i => (
                <CardProduto 
                    nome={i.nome}
                    descricao={i.descricao}
                    img={i.image} />
            ))}
        </CarouselComponent>
    )
}