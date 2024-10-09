import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.footerBackground};
  color: ${({ theme }) => theme.colors.textLight};
  text-align: center;
  padding: 20px;
`;

const FooterLink = styled.a`
  margin: 0 10px;
  color: ${({ theme }) => theme.colors.primary};
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2024 GourmetOn. Todos os direitos reservados.</p>
      <p>
        <FooterLink href="#">Termos de Uso</FooterLink> | 
        <FooterLink href="#">Política de Privacidade</FooterLink>
      </p>
      <p>
        Siga-nos: 
        <FooterLink href="#">Instagram</FooterLink> | 
        <FooterLink href="#">Facebook</FooterLink> | 
        <FooterLink href="#">Twitter</FooterLink>
      </p>
    </FooterContainer>
  );
};

export default Footer;
