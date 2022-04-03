import React, { useState } from 'react';
import {
  TabView,
  SceneMap,
  SceneRendererProps,
  NavigationState,
} from 'react-native-tab-view';

import { ListNews } from '../../components/ListNews';
import { Header } from '../../components/Header';

import {
  Container,
  CustomTabBar,
  TitleTabBar,
  AnimatedContainer,
} from './styles';
import { useAnimatedHeader } from '../../hooks/animatedHeader';

const renderScene = SceneMap({
  first: () => <ListNews type="home" />,
  second: () => <ListNews type="world" />,
  third: () => <ListNews type="science" />,
});

export const Home: React.FC = () => {
  const { translateY } = useAnimatedHeader();

  const routes = [
    { key: 'first', title: 'Home' },
    { key: 'second', title: 'World' },
    { key: 'third', title: 'Science' },
  ];

  const [index, setIndex] = useState(0);

  const renderTabBar = (
    props: SceneRendererProps & {
      navigationState: NavigationState<{
        key: string;
        title: string;
      }>;
    },
  ) => (
    <AnimatedContainer style={[{ transform: [{ translateY }] }]}>
      <Header />
      <CustomTabBar
        {...props}
        renderLabel={({ route }) => <TitleTabBar>{route.title}</TitleTabBar>}
      />
    </AnimatedContainer>
  );

  return (
    <Container>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        renderTabBar={renderTabBar}
      />
    </Container>
  );
};
