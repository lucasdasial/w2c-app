import React from 'react';
// 1. import `NativeBaseProvider` component
import { NativeBaseProvider, Text, Box, StatusBar, Image } from 'native-base';
import { Login } from './src/screens/Login';

export default function App() {
  // 2. Use at the root of your app
  return (
    <NativeBaseProvider>
      <StatusBar  translucent barStyle={'default'}/>
      <Login/>
    </NativeBaseProvider>
  );
}