import SingleProduct from '@/components/layout/SingleProduct'
import React from 'react'

// Props tipi tanımlama
interface NewAndTopProps {
  title: string;
}

// NewAndTop bileşeninin doğru tanımı
const NewAndTop: React.FC<NewAndTopProps> = ({ title }) => {
  return (
    <section>
      <h1>{title}</h1>
      <SingleProduct />
    </section>
  );
};

export default NewAndTop;