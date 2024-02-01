import React from 'react'
import { Filtering } from '../../Components/Filtering/Filtering'
import { ProductsList } from '../../Components/ProductsList/ProductsList'

export const MainLayout = () => {
  return (
    <div className="main-layout">
        <div className="container">
            <div className="main-layout-content">
                 <Filtering />
                 <ProductsList />
            </div>
            
        </div>
       
    </div>
  )
}
