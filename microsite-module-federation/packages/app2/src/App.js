import LocalButton from "./Button";
import React from "react";

const RemoteButton = React.lazy(() => import("app1/Button"));

const App = () => (
  <div>
    <h2>App 2</h2>
    {/* <LocalButton /> */}
    <React.Suspense fallback={<div>Loading app 1 button</div>}>
      <RemoteButton />
    </React.Suspense>
  </div>
);

export default App;
