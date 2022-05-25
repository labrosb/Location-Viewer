import React from 'react';
import {GestureResponderEvent, ViewStyle} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHeart as faHeartSolid} from '@fortawesome/free-solid-svg-icons';
import {faHeart} from '@fortawesome/free-regular-svg-icons';
import styled from 'styled-components/native';
import Colors from '../../constants/theme';

type Props = {
  buttonSize?: number;
  iconSize: number;
  isActive: boolean;
  onPress: (ev: GestureResponderEvent) => void;
  style?: ViewStyle;
};

type HeartIconProps = {testID: string};

export const Container = styled.TouchableOpacity<{$size?: number}>`
  border-radius: 50px;
  background-color: ${Colors.neutral};
  z-index: 10;
  ${({$size}) =>
    !!$size &&
    `
      height: ${$size}px;
      width: ${$size}px;
      justify-content: center;
      align-items: center;
  `}
`;

export const HeartIcon = styled(FontAwesomeIcon)<HeartIconProps>`
  color: ${Colors.favorite};
`;

const LocationDetails: React.FC<Props> = ({
  buttonSize,
  iconSize,
  isActive,
  onPress,
  style,
}) => {
  return (
    <Container
      onPress={(ev: GestureResponderEvent) => onPress(ev)}
      $size={buttonSize}
      style={style}>
      <HeartIcon
        testID="heart-button-icon"
        size={iconSize}
        icon={isActive ? faHeartSolid : faHeart}
      />
    </Container>
  );
};

export default LocationDetails;
