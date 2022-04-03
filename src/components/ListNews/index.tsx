import React, { useEffect, useState, useCallback } from 'react';
import { Alert } from 'react-native';

import { Card } from '../Card';

import { NewsProps, TypeNewsProps } from '../../models/News';

import { NewsFlatlist } from './styles';

import { getNews } from '../../services/queries/news';

import { useAnimatedHeader } from '../../hooks/animatedHeader';

export const ListNews: React.FC<TypeNewsProps> = ({ type }) => {
  const { headerHeight, handleScroll, ref, handleSnap } = useAnimatedHeader();

  const [news, setNews] = useState<NewsProps[]>([]);
  const [isLoadingData, setIsLoadingData] = useState(true);

  const loadNews = useCallback(async () => {
    try {
      const response = await getNews(type);
      setNews(response);
    } catch (error) {
      Alert.alert('Fail to get News', String(error));
    } finally {
      setIsLoadingData(false);
    }
  }, [type]);

  useEffect(() => {
    loadNews();
  }, [loadNews]);

  return (
    <NewsFlatlist
      data={news}
      contentContainerStyle={{ paddingTop: headerHeight }}
      onScroll={handleScroll}
      ref={ref}
      onMomentumScrollEnd={handleSnap}
      keyExtractor={(item, index: number) => `item-${index}-${item.title}`}
      renderItem={({ item }) => (
        <Card isLoadingData={isLoadingData} data={item} />
      )}
    />
  );
};
