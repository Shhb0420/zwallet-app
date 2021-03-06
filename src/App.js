import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
// import {PersistGate} from 'redux-persist/integration/react';

import {store} from './utils/redux/store';
import MainRouter from './router';

const App = () => {
  return (
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <NavigationContainer>
        <MainRouter />
      </NavigationContainer>
      {/* </PersistGate> */}
    </Provider>
  );
};

export default App;
