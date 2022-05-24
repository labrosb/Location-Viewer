import {ElementType} from 'react';
import styled from 'styled-components/native';
import BaseHeartButton from '../Common/HeartButton';

export const ItemMargin = 8;
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

export const HeartButton = styled(BaseHeartButton)`
  position: absolute;
  top: 8px;
  right: 12px;
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
