import {ElementType} from 'react';
import {Dimensions} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import styled from 'styled-components/native';
import BaseHeartButton from '../Common/HeartButton';

const windowWidth = Dimensions.get('window').width;

export const ImageContent = styled.ImageBackground`
  height: ${windowWidth}px;
  width: 100%;
` as ElementType;

export const HeartButton = styled(BaseHeartButton)`
  position: absolute;
  top: 54px;
  right: 14px;
`;

export const BackButton = styled.TouchableOpacity`
  height: 64px;
  width: 64px;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  box-shadow: 0px 5px 5px #b5b5b5;
  border-radius: 50px;
  position: absolute;
  bottom: -30px;
  right: 26px;
`;

export const BackButtonIcon = styled(FontAwesomeIcon)`
  color: #2a7dfb;
`;

export const TitleContainer = styled.View`
  padding: 28px 20px;
`;

export const DetailsContainer = styled.View`
  padding: 0 20px;
`;

export const Title = styled.Text`
  font-size: 42px;
  font-weight: bold;
  color: #000000;
`;

export const DetailsText = styled.Text`
  font-size: 14px;
  color: #000000;
`;
