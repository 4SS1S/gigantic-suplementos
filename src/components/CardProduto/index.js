import React from 'react';

import {
    CardComponent,
    BuyButton,
    CardBottom
} from './styles';


export default function CardProduto({
    img,
    nota,
    nome,
    descricao,
    href
}){

    return(
        <CardComponent>
            <div style={{position: 'relative'}}>
                <img src={img} alt=""/>
                <h3>
                    {nome}
                </h3>
            </div>
            <CardBottom>
                <span>
                    {descricao}    
                </span> <a href="" className="ler-mais">ler mais</a>
                <BuyButton href={href}>
                    COMPRAR
                </BuyButton>
            </CardBottom>
        </CardComponent>
    )
}