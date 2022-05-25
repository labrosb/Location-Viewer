import {useRef} from 'react';
import {Animated} from 'react-native';

type Input = {startFlipped?: boolean};
type Output = {
  animationStyles: {
    transform: [{rotateY: any}];
  };
  play: () => void;
};

/**
 * Hook applies flip animation to components.
 * The animationStyles
 *  must be applied to an Animated component (ex. Animated.View)
 * */
const useFlipAnimation = ({startFlipped = false}: Input): Output => {
  const flipValue = useRef(new Animated.Value(startFlipped ? 180 : 0));
  const hasFlipped = useRef(startFlipped);
  // TODO: make it a useCallback if play used with memoization
  const flip = (): void => {
    if (hasFlipped.current) {
      hasFlipped.current = false;
      Animated.spring(flipValue.current, {
        toValue: 0,
        tension: 8,
        friction: 8,
        useNativeDriver: false,
      }).start();
    } else {
      hasFlipped.current = true;
      Animated.spring(flipValue.current, {
        toValue: 180,
        tension: 8,
        friction: 1,
        useNativeDriver: false,
      }).start();
    }
  };
  // TODO: make animationStyles a useMemo (with flipInterpolation) if used with memoization
  const flipInterpolation = flipValue.current.interpolate({
    inputRange: [0, 180],
    outputRange: ['0deg', '180deg'],
  });

  return {
    animationStyles: {transform: [{rotateY: flipInterpolation}]},
    play: flip,
  };
};

export default useFlipAnimation;
