import React from 'react';
import {render} from '@testing-library/react-native';
import HeartButton from '../HeartButton';

type MockedHeartButton = {isActive: boolean};

const MockedHeartButton = ({isActive}: MockedHeartButton) => (
  <HeartButton
    isActive={isActive}
    buttonSize={30}
    iconSize={30}
    onPress={jest.fn()}
  />
);

afterEach(() => jest.resetAllMocks());

describe('<Heart Button>', () => {
  it('should switch between regular and solid heart icons', () => {
    const layout = render(<MockedHeartButton isActive={false} />);

    const heartButtonIcon = layout.getByTestId('heart-button-icon');

    const {prefix, iconName} = heartButtonIcon.props.icon;
    const icon = `${prefix}-${iconName}`;

    layout.rerender(<MockedHeartButton isActive={true} />);

    const {prefix: newPrefix, iconName: newIconName} =
      heartButtonIcon.props.icon;
    const newIcon = `${newPrefix}-${newIconName}`;

    expect(icon).not.toEqual(newIcon);
  });
});
