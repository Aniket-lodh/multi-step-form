import React from "react";
import { ChakraProvider,extendTheme } from "@chakra-ui/react";
import * as ReactDOM from "react-dom/client";
import {StepsStyleConfig as Steps } from "chakra-ui-steps";

import App from "./App";

const rootElement = document.getElementById("root");
const theme = extendTheme({
  components: {
    Steps,
  },
});

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
