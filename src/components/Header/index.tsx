import React from 'react';

import { Container } from './styles';

import LogoSvg from '../../assets/svg/logo.svg';

import { useAnimatedHeader } from '../../hooks/animatedHeader';

export const Header: React.FC = () => {
  const { headerHeight } = useAnimatedHeader();

  return (
    <Container height={headerHeight / 2}>
      <LogoSvg />
    </Container>
  );
};
