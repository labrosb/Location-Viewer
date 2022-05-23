import {ElementType} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import styled from 'styled-components/native';

export const ItemMargin = 4;
export const ItemWidth = 250;

export const Container = styled.TouchableOpacity`
  margin: 0 ${ItemMargin}px;
  border-radius: 22px;
`;

export const Content = styled.ImageBackground.attrs({
  imageStyle: {borderRadius: 22},
})`
  height: 165px;
  width: ${ItemWidth}px;
` as ElementType;

export const HeartContainer = styled.TouchableOpacity`
  position: absolute;
  top: 0;
  right: 0;
  padding: 8px;
  margin: 8px 12px;
  border-radius: 50px;
  background-color: #ffff;
  z-index: 10;
`;

export const HeartIcon = styled(FontAwesomeIcon)`
  color: #cb2e30;
`;

export const TitleContainer = styled.View`
  position: absolute;
  bottom: 0;
  margin: 8px 15px;
`;

export const Title = styled.Text`
  font-size: 32px;
  font-weight: bold;
  color: #ffff;
`;
