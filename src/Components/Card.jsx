import React from 'react'

export default function Card(props) {
    let {id, title, description, images, stock} = props;
    return (
            <div className='col-3 text-center border border-1 d-flex align-items-center flex-wrap justify-content-center' key={id} >
                <div className='w-100 mb-3 border border-1'>
                    <img src={images[0]} alt="" className='w-100'/>
                </div>
                <div className=''>
                    <h1>{title}</h1>
                    <p className='mb-4'>{description}</p>
                    <p>Stock: {stock}</p>
                    <input type="text" name="quantity" id="quantity" className='w-25 d-block' placeholder='quantity'/>
                </div>
                <button className='btn btn-dark w-75 mt-3 mb-3'>buy</button>
            </div>
    )
}
