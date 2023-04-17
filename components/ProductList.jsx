import React from 'react'
import ProductCard from './ProductCard'
import Wrapper from './Wrapper'

const ProductList = () => {
  return (
    <Wrapper className="py-16">
        <div className="py-16 m-auto text-center items-center max-w-[800px]">
            <h1 className='text-4xl font-bold  mb-5'>Cushioning for Your Miles</h1>
            <p className='text-xl '>A lightweight Nike ZoomX midsole is combined with increased stack heights to help provide cushioning during extended stretches of running.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </div>
    </Wrapper>
  )
}

export default ProductList