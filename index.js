/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
// import IntroScreen from './src/screens/Intro/IntroScreen';
import Navigator from './src/navigation/navigator';
import { NavigationContainer } from '@react-navigation/native';
import {store} from './src/app/store'
import { Provider } from 'react-redux'
const ProvideNavigator = () => {
    return (
        <Provider store={store}>
        <Navigator />
        </Provider>
    )
}
AppRegistry.registerComponent(appName, () => ProvideNavigator);