// import { INewArrival } from '@/.next/types/products'
import NewAndTop from '@/components/home/newAndTop'
// import { title } from 'process'
import React from 'react'

// interface IProps{
  interface HomeContainerProps {
    title: string;
  }
  
  const HomeContainer: React.FC<HomeContainerProps> = ({ title }) => {
    return (
      <main>
        <NewAndTop title={"New Arrivals"} />
      </main>
    );
  };
  
  export default HomeContainer;