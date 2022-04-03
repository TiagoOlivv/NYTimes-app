export interface ResultsProps {
  results: ResultNewsProps[];
}

export interface ResultNewsProps {
  abstract: string;
  title: string;
  url: string;
  byline: string;
  published_date: string;
  multimedia: MultimediaProps[];
}

export interface NewsProps {
  abstract: string;
  title: string;
  url: string;
  byline: string;
  published_date: string;
  multimedia?: MultimediaProps;
}

interface MultimediaProps {
  caption: string;
  copyright: string;
  url: string;
}

export interface TypeNewsProps {
  type: 'science' | 'home' | 'world';
}
