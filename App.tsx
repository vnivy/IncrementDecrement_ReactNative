// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */

// import React from 'react';
// import type {PropsWithChildren} from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';
// import {Provider} from 'react-redux';
// import createStore from 'redux';

// import counterReducer from './src/Redux/Reducer/reducer';
// import IncrementDecrement from './src/screens/IncrementDecrement/index';
// import UIWork from './src/screens/UIWork';
// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// function App(): JSX.Element {
//   return (
//     <>
//       <IncrementDecrement />
//       {/* <UIWork /> */}
//     </>
//   );
// }

// export default App;
import React from 'react';
import {Provider} from 'react-redux';
import store from './src/Redux/Store/store';
import IncrementDecrement from './src/screens/IncrementDecrement';
import UIWork from './src/screens/UIWork';

const App = () => {
  return (
    <Provider store={store}>
      {/* <IncrementDecrement /> */}
      <UIWork />
    </Provider>
  );
};

export default App;
