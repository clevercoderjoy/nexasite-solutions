"use client"

import CarouselContainer from '@/components/carouselContainer';
import { createCategory, fetchCategories, fetchProducts } from '@/lib/data';
import React, { useEffect } from 'react'

const HomePage = () => {

  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await fetchProducts();
        await createCategory("category 1");
        const categories = await fetchCategories();
        console.log("Products:", products);
        console.log("Categories:", categories);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="max-w-6xl mx-auto">
      <CarouselContainer />
    </div>

  )
}

export default HomePage