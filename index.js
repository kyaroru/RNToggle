import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
} from 'react-native';

const DEFAULT_WIDTH = 25;
const DEFAULT_HEIGHT = 18;
const DEFAULT_BORDER_RADIUS = 7;
const DEFAULT_FONT_SIZE = 10;
const DEFAULT_ACTIVE_COLOR = '#3498db';
const DEFAULT_INACTIVE_COLOR = '#8d8d8d';
const DEFAULT_KNOB_COLOR = 'white';
const DEFAULT_TEXT_COLOR = 'white';
const DEFAULT_PADDING_HORIZONTAL = 3;

const styles = StyleSheet.create({
  toggleContainer: {
    flexDirection: 'row',
    borderRadius: DEFAULT_BORDER_RADIUS,
    backgroundColor: DEFAULT_ACTIVE_COLOR,
  },
  toggleButton: {
    height: DEFAULT_HEIGHT,
    margin: 2,
    borderRadius: DEFAULT_BORDER_RADIUS,
    width: DEFAULT_WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedColor: {
    backgroundColor: DEFAULT_ACTIVE_COLOR,
  },
  unselectedColor: {
    backgroundColor: DEFAULT_KNOB_COLOR,
  },
  inactiveColor: {
    backgroundColor: DEFAULT_INACTIVE_COLOR,
  },
  buttonText: {
    fontSize: DEFAULT_FONT_SIZE,
    color: DEFAULT_TEXT_COLOR,
  },
  toggleButtonsContainer: {
    flexDirection: 'row',
    borderRadius: DEFAULT_BORDER_RADIUS,
  },
  paddingLeft: {
    paddingLeft: DEFAULT_PADDING_HORIZONTAL,
  },
  paddingRight: {
    paddingRight: DEFAULT_PADDING_HORIZONTAL,
  },
});

function Toggle(props) {
  const { isOn, onTogglePress } = props;

  const buttonsView = [
    <TouchableOpacity
      key="right"
      style={[styles.toggleButton, isOn && styles.paddingLeft,
        isOn ? styles.selectedColor : styles.unselectedColor]}
      onPress={onTogglePress}
    >
      <Text style={styles.buttonText}>{isOn ? 'ON' : ''}</Text>
    </TouchableOpacity>,
    <TouchableOpacity
      key="left"
      style={[styles.toggleButton, !isOn && styles.paddingRight,
        isOn ? styles.unselectedColor : styles.inactiveColor]}
      onPress={onTogglePress}
    >
      <Text style={styles.buttonText}>{isOn ? '' : 'OFF'}</Text>
    </TouchableOpacity>,
  ];

  return (
    <View asRow style={[styles.toggleButtonsContainer, isOn ? styles.selectedColor : styles.inactiveColor]}>
      {buttonsView}
    </View>
  );
}

Toggle.propTypes = {
  isOn: PropTypes.bool,
  onTogglePress: PropTypes.func.isRequired,
};

Toggle.defaultProps = {
  isOn: false,
};

export default Toggle;