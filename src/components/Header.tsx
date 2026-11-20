//dev-mks/src/components/Header.tsx
import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

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

const Header: React.FC = () => {
    return (
        <HeaderWrapper>
            <LogoMKS>MKS <LogoSist>Sistemas</LogoSist></LogoMKS>
            <CartButton>
                <Image src="/assets/cart.jpg" alt="Carrinho de Compras" width={50} height={50} />
                <CartItemCount>0</CartItemCount>
            </CartButton>
        </HeaderWrapper>
    );
};

export default Header;
