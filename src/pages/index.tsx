import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import { Product } from '../types';
import { getProducts } from '../services/productService';
import ProductComponent from '../components/Product';

const HeaderWrapper = styled.header`
  background-color: #0F52BA;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
`;

const LogoMKS = styled.div`
  font-size: 40px;
  margin: 28px 0 29px 65px;
`;

const LogoSist = styled.span`
  font-size: 20px;
`;

const CartButton = styled.button`
  width: 90px;
  height: 45px;
  border-radius: 8px;
  background-color: #FFFFFF;
  font-size: 18px;
  font-weight: 700;
  line-height: 21.94px;
  color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 29px 88px 27px 0;
`;

const CartItemCount = styled.span`
  font-size: 0.8rem;
  background-color: #fff;
  color: #007bff;
  padding: 5px 10px;
  border-radius: 50%;
`;

const Main = styled.main`
  /* Estilos do conteúdo principal */
`;

const Footer = styled.footer`
  /* Estilos do rodapé */
`;

const ProductGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-top: 20px;
`;

const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsData = await getProducts();
        if (productsData && productsData.products) {
          setProducts(productsData.products);
        }
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <HeaderWrapper>
        <LogoMKS>MKS <LogoSist>Sistemas</LogoSist></LogoMKS>
        <CartButton>
          <Image src="/assets/cart.jpg" alt="Carrinho de Compras" width={30} height={30} />
          <CartItemCount>0</CartItemCount>
        </CartButton>
      </HeaderWrapper>

      <Main>
        <ProductGrid>
          {products.map(product => (
            <ProductComponent
              key={product.id}
              product={product}
            />
          ))}
        </ProductGrid>
      </Main>

      <Footer>
        <p>MKS sistemas ©️ Todos os direitos reservados</p>
      </Footer>
    </>
  );
};

export default Home;
