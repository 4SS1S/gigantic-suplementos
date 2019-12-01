import React from 'react';

import produtos from '../../assets/produtos';
import CarouselProdutos from '../CarouselProdutos';

export default function Novidades(){

    return(
        <>
            <h1>NOVIDADES</h1>
        
            <CarouselProdutos
                list={produtos} />
        </>
    )
}