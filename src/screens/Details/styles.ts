import styled from 'styled-components/native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { Feather } from '@expo/vector-icons';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  color: ${({ theme }) => theme.colors.primary};
  flex: 1;
`;

export const Image = styled.ImageBackground.attrs({
  resizeMode: 'stretch',
})`
  height: ${hp(36)}px;
  width: 100%;
`;

export const BackButton = styled(BorderlessButton)`
  height: ${hp(7)}px;
  width: ${hp(7)}px;
`;

export const BackButtonContainer = styled.View`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${hp(5)}px;
  flex: 1;
  justify-content: center;
  margin: ${hp(2)}px 0 0 ${hp(2)}px;
`;

export const InfoContainer = styled.View`
  align-items: center;
  justify-content: space-between;
  padding: 0 8px;
`;

export const Caption = styled.Text`
  color: ${({ theme }) => theme.colors.text.primary};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${wp(4)}px;
  text-align: justify;
`;

export const Copyright = styled.Text`
  align-self: flex-end;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${wp(3.8)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const WrapperInfo = styled.View`
  margin-bottom: ${hp(3.5)}px;
  width: 100%;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text.primary};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${wp(4.4)}px;
  text-align: justify;
`;

export const Abstract = styled.Text`
  color: ${({ theme }) => theme.colors.text.primary};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${wp(4)}px;
  text-align: justify;
`;

export const Button = styled(RectButton)`
  align-items: center;
  align-self: flex-end;
  flex-direction: row;
  height: ${hp(6)}px;
  justify-content: center;
  width: ${wp(34)}px;
`;

export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 18px;
`;

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.text.primary};
  margin-right: ${wp(3)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${wp(4.4)}px;
`;
