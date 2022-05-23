import MapView from 'react-native-maps';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import styled from 'styled-components/native';

type LocationIcon = {
  $isSelected: boolean;
};

export const Map = styled(MapView)`
  height: 100%;
`;

export const PinContainer = styled.View`
  width: 60px;
  align-items: center;
`;

export const HeartIcon = styled(FontAwesomeIcon)`
  color: #cb2e30;
  top: 22px;
  right: 16px;
  z-index: 10;
`;

export const LocationIcon = styled(FontAwesomeIcon)<LocationIcon>`
  color: ${({$isSelected}) => ($isSelected ? '#2a7dfb' : '#4c4e5a')};
`;
