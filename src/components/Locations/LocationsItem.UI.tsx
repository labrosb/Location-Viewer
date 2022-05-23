import {ElementType} from 'react';
import styled from 'styled-components/native';

export const ItemMargin = 4;
export const ItemWidth = 250;

export const Container = styled.View`
  margin: 0 ${ItemMargin}px;
  border-radius: 22px;
`;

export const Content = styled.ImageBackground.attrs({
  imageStyle: {borderRadius: 22},
})`
  height: 165px;
  width: ${ItemWidth}px;
` as ElementType;

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
