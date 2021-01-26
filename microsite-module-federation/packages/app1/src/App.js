import LocalButton from "./Button";
import React from "react";
const wasm = import("../hello-wasm/pkg/hello_wasm_bg");
// const RemoteButton = React.lazy(() => import("app2/Button"));

const App = () => {
  wasm.then(({ greet }) => {
    console.log("COOL");
    greet();
  });

  return (
    <div>
      <h2>App 1</h2>
      <LocalButton />
    </div>
  );
};

export default App;
