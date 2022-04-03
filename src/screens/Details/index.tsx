import React, { useCallback } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Alert, Linking } from 'react-native';

import {
  Container,
  Image,
  BackButton,
  BackButtonContainer,
  Icon,
  InfoContainer,
  WrapperInfo,
  Caption,
  Copyright,
  Title,
  Abstract,
  Button,
  ButtonText,
} from './styles';

import { NewsProps } from '../../models/News';

export const Details: React.FC = () => {
  const imageNotFound = 'https://adjditec.com/web/skin/img/noimage.jpg';

  const { goBack } = useNavigation();
  const { params } = useRoute();

  const item = params as NewsProps;

  const handleOpenURL = useCallback(async (url: string) => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, []);

  return (
    <Container>
      <Image source={{ uri: item.multimedia?.url || imageNotFound }}>
        <BackButton onPress={goBack}>
          <BackButtonContainer>
            <Icon name="arrow-left" />
          </BackButtonContainer>
        </BackButton>
      </Image>
      <InfoContainer>
        <WrapperInfo>
          {!!item.multimedia?.caption && (
            <Caption>{item.multimedia?.caption}</Caption>
          )}
          {!!item.multimedia?.copyright && (
            <Copyright>{item.multimedia?.copyright}</Copyright>
          )}
        </WrapperInfo>
        <WrapperInfo>
          <Title>{item.title}</Title>
          <Abstract>{item.abstract}</Abstract>
          <Copyright>{item.byline}</Copyright>
        </WrapperInfo>
        <Button onPress={() => handleOpenURL(item.url)}>
          <ButtonText>See full news</ButtonText>
          <Icon name="arrow-right" />
        </Button>
      </InfoContainer>
    </Container>
  );
};
