import formatDistance from 'date-fns/formatDistance';

export const distanceDate = (value: string): string =>
  formatDistance(new Date(value), Date.now(), {
    includeSeconds: true,
    addSuffix: true,
  });
