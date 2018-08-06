
# react-native-react-native-signalr-core

## Getting started

`$ npm install react-native-react-native-signalr-core --save`

### Mostly automatic installation

`$ react-native link react-native-react-native-signalr-core`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-react-native-signalr-core` and add `RNReactNativeSignalrCore.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNReactNativeSignalrCore.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.reactlibrary.RNReactNativeSignalrCorePackage;` to the imports at the top of the file
  - Add `new RNReactNativeSignalrCorePackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-react-native-signalr-core'
  	project(':react-native-react-native-signalr-core').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-react-native-signalr-core/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-react-native-signalr-core')
  	```

## Usage
```javascript
import RNReactNativeSignalrCore from 'react-native-react-native-signalr-core';

// TODO: What to do with the module?
RNReactNativeSignalrCore;
```
  