import { NewsProps } from '../../models/News';

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: void;
      Details: NewsProps;
    }
  }
}
