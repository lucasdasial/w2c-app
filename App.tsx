import React from "react";
// 1. import `NativeBaseProvider` component
import { NativeBaseProvider, Text, Box, StatusBar, Image } from "native-base";
import { Routes } from "./src/routes";

export default function App() {
  // 2. Use at the root of your app
  return (
    <NativeBaseProvider>
      <StatusBar
        backgroundColor={"transparent"}
        translucent
        barStyle={"light-content"}
      />
      <Routes />
    </NativeBaseProvider>
  );
}
