import styled from 'styled-components/native';
import { TabBar } from 'react-native-tab-view';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

import { Animated } from 'react-native';
import globalTheme from '../../constants/styles/theme';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.primary};
  flex: 1;
  padding: 0 8px;
`;

export const CustomTabBar = styled(TabBar).attrs({
  indicatorStyle: { backgroundColor: globalTheme.colors.text.primary },
})`
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const TitleTabBar = styled.Text`
  color: ${({ theme }) => theme.colors.text.primary};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${wp(4.2)}px;
`;

export const AnimatedContainer = styled(Animated.View)`
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 1;
`;
