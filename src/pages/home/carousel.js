import React from 'react';

import i1 from '../../assets/images/carousel/carousel-1.png';
import {
    CarouselComponent
} from './styles';

export default function Carousel(){
    return (
        <CarouselComponent>
            <img src={i1} alt="" />
        </CarouselComponent>
    )
}