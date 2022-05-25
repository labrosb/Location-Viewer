import styled from 'styled-components/native';
import Colors from '../../constants/theme';
import BaseHeartButton from '../Common/HeartButton';

// Exporting variables to be used in FlatList getItemLayout
export const ItemMargin = 8;
export const ItemWidth = 250;

export const Container = styled.TouchableOpacity`
  margin: 0 ${ItemMargin}px;
  border-radius: 22px;
`;

export const Image = styled.Image`
  height: 165px;
  width: ${ItemWidth}px;
  border-radius: 22px;
`;

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
  color: ${Colors.neutral};
`;
