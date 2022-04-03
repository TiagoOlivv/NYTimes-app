import React, { useState, useCallback, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';

import { NewsProps } from '../../models/News';

import {
  Container,
  Image,
  InfoContainer,
  Title,
  WrapperInfo,
  Info,
  Icon,
  LoadingContainer,
  ImageLoading,
  MultilineLoading,
  LineLoading,
} from './styles';

import { notFound } from '../../constants/error/image';

interface ImageProps {
  isLoadingData: boolean;
  data: NewsProps;
}

export const Card: React.FC<ImageProps> = ({ isLoadingData, data }) => {
  const imageNotFound = notFound;
  const { navigate } = useNavigation();

  const [isLoading, setIsLoading] = useState(true);

  const prefetchImage = useCallback(async (url: string) => {
    try {
      await Image.prefetch(url);
      setIsLoading(false);
    } catch {
      Alert.alert('Error', 'Error loading image');
    }
  }, []);

  useEffect(() => {
    !isLoadingData && prefetchImage(data.multimedia?.url || imageNotFound);
  }, [isLoadingData, prefetchImage, data.multimedia?.url, imageNotFound]);

  if (isLoading)
    <LoadingContainer Left={ImageLoading}>
      <MultilineLoading />
      <LineLoading />
      <LineLoading />
    </LoadingContainer>;

  return (
    <Container onPress={() => navigate('Details', data)}>
      <Image
        source={{
          uri: data.multimedia?.url || imageNotFound,
        }}
      />
      <InfoContainer>
        <Title numberOfLines={2}>{data.title}</Title>
        <WrapperInfo>
          <Icon name="clock" />
          <Info>{data.published_date}</Info>
        </WrapperInfo>
        {data?.byline ? (
          <WrapperInfo>
            <Icon name="user" />
            <Info numberOfLines={1}>{data.byline}</Info>
          </WrapperInfo>
        ) : (
          <WrapperInfo />
        )}
      </InfoContainer>
    </Container>
  );
};
