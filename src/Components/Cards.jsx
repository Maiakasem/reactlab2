import React from 'react';
import { products } from './Products';
import Card from './Card';

export default function Cards() {
    return (
        <div className='container'>
            <h1>Cards</h1>
            <div className="row gap-3 justify-content-evenly">
            {
                products.map((product)=> {
                    return (
                        <Card {...product}/>
                    )
                })
            }
            </div>
        </div>
    )
}
