import styled from 'styled-components/native';
import { Animated } from 'react-native';

import { NewsProps } from '../../models/News';

export const NewsFlatlist = styled(
  Animated.FlatList as new () => Animated.FlatList<NewsProps>,
).attrs({
  showsVerticalScrollIndicator: false,
  maxToRenderPerBatch: 10,
  initialNumToRender: 10,
  scrollEventThrottle: 16,
})``;
