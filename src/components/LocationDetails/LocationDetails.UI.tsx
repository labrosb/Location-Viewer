import {Dimensions} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import styled from 'styled-components/native';
import Colors from '../../constants/theme';

const windowWidth = Dimensions.get('window').width;

export const TopContainer = styled.View`
  position: relative;
`;

export const Image = styled.Image`
  height: ${windowWidth}px;
  width: 100%;
`;

export const ButtonsContainer = styled.View`
  height: ${windowWidth}px;
  width: 100%;
  position: absolute;
  top: 0;
`;

export const HeartButtonContainer = styled.View`
  position: absolute;
  top: 54px;
  right: 14px;
`;

export const BackButton = styled.TouchableOpacity`
  height: 64px;
  width: 64px;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.neutral};
  box-shadow: 0px 5px 3px ${Colors.shadow};
  elevation: 16;
  border-radius: 50px;
  position: absolute;
  bottom: -30px;
  right: 26px;
`;

export const BackButtonIcon = styled(FontAwesomeIcon)`
  color: ${Colors.select};
`;

export const TitleContainer = styled.View`
  padding: 28px 20px;
`;

export const DetailsContainer = styled.View`
  padding: 0 20px 40px 20px;
`;

export const Title = styled.Text`
  font-size: 42px;
  font-weight: bold;
  color: ${Colors.dark};
`;

export const DetailsText = styled.Text`
  font-size: 14px;
  color: ${Colors.dark};
`;
