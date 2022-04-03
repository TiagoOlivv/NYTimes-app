import { api } from '../../api';

import { NewsProps, ResultNewsProps, ResultsProps } from '../../../models/News';

import { distanceDate } from '../../../utils/date';

export const getNews = async (value: string): Promise<NewsProps[]> => {
  try {
    const response = await api.get(`${value}.json?api-key=${process.env.KEY}`);

    const { results } = response.data as ResultsProps;

    const parseNews = results.map((item: ResultNewsProps) => {
      const result = {
        abstract: item.abstract,
        byline: item.byline,
        published_date: distanceDate(item.published_date),
        title: item.title,
        url: item.url,
      };

      if (item.multimedia) {
        Object.assign(result, {
          multimedia: {
            caption: item.multimedia[item.multimedia.length - 2].caption,
            copyright: item.multimedia[item.multimedia.length - 2].copyright,
            url: item.multimedia[item.multimedia.length - 2].url,
          },
        });
      }

      return result;
    });

    return parseNews;
  } catch (error) {
    throw new Error(String(error));
  }
};
