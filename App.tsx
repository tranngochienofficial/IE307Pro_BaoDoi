import React from 'react';
import AuthStack from './src/Navigations/AuthStack';
import { AuthProvider } from './AuthContext';


const App = () => {
  return (
      <AuthProvider>
        <AuthStack />
      </AuthProvider>
  );
};
export default App;
