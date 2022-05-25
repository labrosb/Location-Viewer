import MapView from 'react-native-maps';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import styled from 'styled-components/native';
import Colors from '../../constants/theme';

type LocationIcon = {
  $isSelected: boolean;
  testID?: string;
};

type HeartIcon = {
  testID?: string;
};

export const Map = styled(MapView)`
  height: 100%;
`;

export const PinContainer = styled.View`
  width: 60px;
  align-items: center;
`;

export const HeartIcon = styled(FontAwesomeIcon)<HeartIcon>`
  color: ${Colors.favorite};
  top: 22px;
  right: 16px;
  z-index: 10;
`;

export const LocationIcon = styled(FontAwesomeIcon)<LocationIcon>`
  color: ${({$isSelected}) => ($isSelected ? Colors.select : Colors.pin)};
`;
