
# RNToggle (react-native-toggle-button)
- A customizable react native toggle/switch component :p

## Installation
```bash
$ npm i react-native-toggle-button --save
```

## Example
```jsx
import ReactNativeToggleButton from 'react-native-toggle-button';

render() {
  return (
    <View style={styles.container}>
      <ReactNativeToggleButton
        isOn={this.props.isOn}
        onTogglePress={() => this.toggleOnOff()}
      />
    </View>
  );
}
```
