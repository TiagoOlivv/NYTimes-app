import React, { createContext, RefObject, useContext, useRef } from 'react';
import {
  Animated,
  NativeScrollEvent,
  NativeSyntheticEvent,
  FlatList,
} from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { NewsProps } from '../models/News';

type NativeEvent = NativeSyntheticEvent<NativeScrollEvent>;

interface AnimatedHeaderContextData {
  translateY: Animated.AnimatedInterpolation;
  headerHeight: number;
  handleScroll: (event: NativeEvent) => void;
  ref: RefObject<FlatList<NewsProps>>;
  handleSnap: (event: NativeEvent) => void;
}

const AnimatedHeaderContext = createContext<AnimatedHeaderContextData>(
  {} as AnimatedHeaderContextData,
);

export const AnimatedHeaderProvider: React.FC = ({ children }) => {
  const headerHeight = hp(23);
  const ref = useRef<FlatList<NewsProps>>(null);

  const scrollY = useRef(new Animated.Value(0));
  const scrollYClamped = Animated.diffClamp(scrollY.current, 0, headerHeight);

  const translateY = scrollYClamped.interpolate({
    inputRange: [0, headerHeight],
    outputRange: [0, -(headerHeight / 2)],
  });

  const translateYNumber = useRef(0);

  const handleScroll = Animated.event(
    [
      {
        nativeEvent: {
          contentOffset: { y: scrollY.current },
        },
      },
    ],
    {
      useNativeDriver: true,
    },
  );

  const getCloser = (value: number, checkOne: number, checkTwo: number) =>
    Math.abs(value - checkOne) < Math.abs(value - checkTwo)
      ? checkOne
      : checkTwo;

  const handleSnap = ({ nativeEvent }: NativeEvent) => {
    const offsetY = nativeEvent.contentOffset.y;
    if (
      !(
        translateYNumber.current === 0 ||
        translateYNumber.current === -headerHeight / 2
      )
    ) {
      if (ref.current) {
        ref.current?.scrollToOffset({
          offset:
            getCloser(translateYNumber.current, -headerHeight / 2, 0) ===
            -headerHeight / 2
              ? offsetY + headerHeight / 2
              : offsetY - headerHeight / 2,
        });
      }
    }
  };
  return (
    <AnimatedHeaderContext.Provider
      value={{
        translateY,
        headerHeight,
        handleScroll,
        ref,
        handleSnap,
      }}
    >
      {children}
    </AnimatedHeaderContext.Provider>
  );
};

export function useAnimatedHeader(): AnimatedHeaderContextData {
  const context = useContext(AnimatedHeaderContext);
  return context;
}
