import React from 'react'
import Header from '../../components/Header/Header'
import MainCarousel from '../../components/LandingPageComponents/MainCarousel/MainCarousel'
import FlashSale from '../../components/LandingPageComponents/FlashSale/FlashSale'
import ShopByCategory from '../../components/LandingPageComponents/ShopByCategory/ShopByCategory'
import TrendingSales from '../../components/LandingPageComponents/TrendingSales/TrendingSales'
import FilteredProducts from '../../components/LandingPageComponents/FilteredProducts/FilteredProducts'
import RecommendedProducts from '../../components/LandingPageComponents/RecommendedProducts/RecommendedProducts'

const LandingPage = () => {
  return (
    <div className='mb-5'>
      <Header />
      <MainCarousel />
      <FlashSale />
      <ShopByCategory />
      <TrendingSales />
      <FilteredProducts />
      <RecommendedProducts />
    </div>
  )
}

export default LandingPage;