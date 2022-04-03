import styled from 'styled-components/native';
import {
  Fade,
  Placeholder,
  PlaceholderMedia,
  PlaceholderLine,
} from 'rn-placeholder';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { Feather } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled(RectButton)`
  flex-direction: row;
  align-items: center;
  padding: 8px;
  margin-bottom: ${getBottomSpace()}px;
`;

export const Image = styled.Image.attrs({
  resizeMode: 'stretch',
})`
  width: ${hp(12)}px;
  height: ${hp(12)}px;
  border-radius: 4px;
`;

export const InfoContainer = styled.View`
  flex: 1;
  padding: 0px 14px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text.primary};
  font-family: ${({ theme }) => theme.fonts.bold};
  flex: 1;
  font-size: ${wp(4)}px;
  text-align: justify;
`;

export const WrapperInfo = styled.View`
  flex-direction: row;
  flex: 1;
  margin-top: 4px;
`;

export const Info = styled.Text`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${wp(3.6)}px;
  padding: 0 4px;
  text-align: justify;
`;

export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${wp(4)}px;
`;

export const LoadingContainer = styled(Placeholder).attrs({
  Animation: Fade,
})`
  width: 100%;
  padding: 8px;
  margin-bottom: ${getBottomSpace()}px;
`;

export const ImageLoading = styled(PlaceholderMedia)`
  width: ${hp(12)}px;
  height: ${hp(12)}px;
  border-radius: 4px;
`;

export const LineLoading = styled(PlaceholderLine)`
  width: 100%;
`;

export const MultilineLoading = styled(PlaceholderLine)`
  width: 100%;
  height: ${hp(4)}px;
`;
