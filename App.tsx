import React, { createContext, useState } from "react";
import { NativeBaseProvider, StatusBar, Image } from "native-base";
import { Routes } from "./src/routes";
import { IWinner } from "./src/entities/winner";

export default function App() {
  const [winners, setWinners] = useState<IWinner[]>([]);

  //creating context
  // const WinnersContext = createContext<IWinner[]>([]);
  // const { Provider } = WinnersContext;

  return (
    <NativeBaseProvider>
      <StatusBar
        backgroundColor={"transparent"}
        translucent
        barStyle={"light-content"}
      />
      <Routes />
      {/* <Provider value={winners}> */}
      {/* </Provider> */}
    </NativeBaseProvider>
  );
}
