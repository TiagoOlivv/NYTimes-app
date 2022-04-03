import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

type ContainerProps = { height: number };

export const Container = styled.View<ContainerProps>`
  align-items: center;
  justify-content: center;
  margin-top: ${getStatusBarHeight()}px;
  background-color: ${({ theme }) => theme.colors.primary};
  height: ${({ height }) => height}px;
`;
