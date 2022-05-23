import {ElementType} from 'react';
import styled from 'styled-components/native';

export const ListMargin = 12;

export const List = styled.FlatList`
  min-width: 100%;
  padding: 36px ${ListMargin}px 50px ${ListMargin}px;
  border-top-left-radius: 22px;
  border-top-right-radius: 22px;
  background-color: #ffff;
  position: absolute;
  bottom: 0;
` as ElementType;
